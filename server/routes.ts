import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { db, pool } from "./db";
import { 
  contactFormSchema, contentItemSchema, 
  navigationItemSchema, heroSectionSchema,
  galleryItemSchema
} from "@shared/schema";
import { z } from "zod";
import { generateAgentResponse } from "./services/openai";
import { sql } from "drizzle-orm";
import { requireAuth, loginUser, createUser, initializeAdminUser } from "./auth";
import session from "express-session";

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure session middleware
  app.use(session({
    secret: process.env.SESSION_SECRET || 'bharat-technologies-cms-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  }));
  
  // Initialize an admin user if none exists
  await initializeAdminUser();
  
  // Authentication endpoints
  app.post('/api/auth/login', async (req, res) => {
    try {
      const { username, password } = z.object({
        username: z.string().min(1),
        password: z.string().min(1)
      }).parse(req.body);
      
      const result = await loginUser(username, password);
      
      if (!result.success) {
        return res.status(401).json({
          success: false,
          message: result.message
        });
      }
      
      // Set user ID in session
      req.session.userId = result.userId;
      
      res.json({
        success: true,
        message: 'Login successful'
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: 'Invalid username or password format'
        });
      }
      
      console.error('Login error:', error);
      res.status(500).json({
        success: false,
        message: 'An error occurred during login'
      });
    }
  });
  
  app.post('/api/auth/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('Logout error:', err);
        return res.status(500).json({
          success: false,
          message: 'Error during logout'
        });
      }
      
      res.json({
        success: true,
        message: 'Logged out successfully'
      });
    });
  });
  
  app.get('/api/auth/check', (req, res) => {
    const isAuthenticated = !!req.session.userId;
    res.json({
      success: true,
      authenticated: isAuthenticated
    });
  });
  
  // API routes with /api prefix
  
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the form data
      const formData = contactFormSchema.parse(req.body);
      
      // Store the contact form submission
      const submission = await storage.createContactSubmission(formData);
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: 'Your message has been received. We will get back to you shortly.',
        id: submission.id
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid form data', 
          errors: error.errors 
        });
      }
      
      // Handle other errors
      console.error('Contact form submission error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'An error occurred while processing your request. Please try again later.'
      });
    }
  });

  // Newsletter subscription endpoint
  app.post('/api/newsletter/subscribe', async (req, res) => {
    try {
      // Validate email
      const { email } = z.object({
        email: z.string().email()
      }).parse(req.body);
      
      // Store newsletter subscription
      await storage.createNewsletterSubscription(email);
      
      res.status(200).json({ 
        success: true, 
        message: 'Thank you for subscribing to our newsletter!'
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please provide a valid email address.'
        });
      }
      
      console.error('Newsletter subscription error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'An error occurred during subscription. Please try again later.'
      });
    }
  });
  
  // Admin routes to view data
  
  // Get all contact submissions
  app.get('/api/admin/contacts', async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.status(200).json({ 
        success: true,
        data: submissions
      });
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      res.status(500).json({ 
        success: false, 
        message: 'An error occurred while fetching contact submissions.' 
      });
    }
  });
  
  // Get all newsletter subscriptions
  app.get('/api/admin/subscriptions', async (req, res) => {
    try {
      const subscriptions = await storage.getNewsletterSubscriptions();
      res.status(200).json({ 
        success: true,
        data: subscriptions
      });
    } catch (error) {
      console.error('Error fetching newsletter subscriptions:', error);
      res.status(500).json({ 
        success: false, 
        message: 'An error occurred while fetching newsletter subscriptions.' 
      });
    }
  });

  // Agent AI message endpoint
  app.post('/api/agent-ai', async (req, res) => {
    try {
      // Validate request
      const agentRequest = z.object({
        message: z.string().min(1),
        conversationHistory: z.array(
          z.object({
            text: z.string(),
            sender: z.enum(['user', 'ai']),
            timestamp: z.string().optional() // Optional as we don't need it for OpenAI
          })
        ).optional().default([])
      }).parse(req.body);

      // Generate AI response
      const response = await generateAgentResponse({
        message: agentRequest.message,
        conversationHistory: agentRequest.conversationHistory
      });

      // Check if we're using fallback responses due to API quota issues
      if (process.env.OPENAI_API_QUOTA_EXCEEDED === 'true') {
        res.status(200).json({
          success: true,
          message: response,
          usingFallback: true,
          fallbackInfo: "I'm a basic agent currently due to technical issues at our end. Please come back later to connect with our super agent if I'm unable to answer your queries over the chat."
        });
      } else {
        res.status(200).json({
          success: true,
          message: response
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: 'Invalid request format',
          errors: error.errors
        });
      }

      console.error('Agent AI error:', error);
      res.status(500).json({
        success: false,
        message: 'An error occurred while processing your request.'
      });
    }
  });

  // Content Management API
  
  // Auth middleware for admin routes
  const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session || !req.session.userId) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }
    next();
  };

  // Content Sections
  app.get('/api/cms/content-sections', async (req, res) => {
    try {
      const sections = await storage.getContentSections();
      res.json({ success: true, data: sections });
    } catch (error) {
      console.error('Error fetching content sections:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch content sections' });
    }
  });
  
  app.get('/api/cms/content-sections/:id', async (req, res) => {
    try {
      const section = await storage.getContentSection(Number(req.params.id));
      if (!section) {
        return res.status(404).json({ success: false, message: 'Content section not found' });
      }
      res.json({ success: true, data: section });
    } catch (error) {
      console.error('Error fetching content section:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch content section' });
    }
  });
  
  app.post('/api/cms/content-sections', requireAuth, async (req, res) => {
    try {
      const ContentSectionSchema = z.object({
        name: z.string().min(1),
        description: z.string().optional()
      });
      
      const data = ContentSectionSchema.parse(req.body);
      const section = await storage.createContentSection(data);
      res.status(201).json({ success: true, data: section });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: 'Validation error', errors: error.errors });
      }
      console.error('Error creating content section:', error);
      res.status(500).json({ success: false, message: 'Failed to create content section' });
    }
  });
  
  app.put('/api/cms/content-sections/:id', requireAuth, async (req, res) => {
    try {
      const ContentSectionUpdateSchema = z.object({
        name: z.string().min(1).optional(),
        description: z.string().optional()
      });
      
      const data = ContentSectionUpdateSchema.parse(req.body);
      const section = await storage.updateContentSection(Number(req.params.id), data);
      
      if (!section) {
        return res.status(404).json({ success: false, message: 'Content section not found' });
      }
      
      res.json({ success: true, data: section });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: 'Validation error', errors: error.errors });
      }
      console.error('Error updating content section:', error);
      res.status(500).json({ success: false, message: 'Failed to update content section' });
    }
  });
  
  app.delete('/api/cms/content-sections/:id', requireAuth, async (req, res) => {
    try {
      const success = await storage.deleteContentSection(Number(req.params.id));
      if (!success) {
        return res.status(404).json({ success: false, message: 'Content section not found' });
      }
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting content section:', error);
      res.status(500).json({ success: false, message: 'Failed to delete content section' });
    }
  });
  
  // Content Items
  app.get('/api/cms/content-items', async (req, res) => {
    try {
      const sectionId = req.query.sectionId ? Number(req.query.sectionId) : undefined;
      const items = await storage.getContentItems(sectionId);
      res.json({ success: true, data: items });
    } catch (error) {
      console.error('Error fetching content items:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch content items' });
    }
  });
  
  app.get('/api/cms/content-items/:id', async (req, res) => {
    try {
      const item = await storage.getContentItem(Number(req.params.id));
      if (!item) {
        return res.status(404).json({ success: false, message: 'Content item not found' });
      }
      res.json({ success: true, data: item });
    } catch (error) {
      console.error('Error fetching content item:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch content item' });
    }
  });
  
  app.post('/api/cms/content-items', requireAuth, async (req, res) => {
    try {
      const data = contentItemSchema.parse(req.body);
      const item = await storage.createContentItem(data);
      res.status(201).json({ success: true, data: item });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: 'Validation error', errors: error.errors });
      }
      console.error('Error creating content item:', error);
      res.status(500).json({ success: false, message: 'Failed to create content item' });
    }
  });
  
  app.put('/api/cms/content-items/:id', requireAuth, async (req, res) => {
    try {
      const updateSchema = contentItemSchema.partial();
      const data = updateSchema.parse(req.body);
      const item = await storage.updateContentItem(Number(req.params.id), data);
      
      if (!item) {
        return res.status(404).json({ success: false, message: 'Content item not found' });
      }
      
      res.json({ success: true, data: item });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: 'Validation error', errors: error.errors });
      }
      console.error('Error updating content item:', error);
      res.status(500).json({ success: false, message: 'Failed to update content item' });
    }
  });
  
  app.delete('/api/cms/content-items/:id', requireAuth, async (req, res) => {
    try {
      const success = await storage.deleteContentItem(Number(req.params.id));
      if (!success) {
        return res.status(404).json({ success: false, message: 'Content item not found' });
      }
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting content item:', error);
      res.status(500).json({ success: false, message: 'Failed to delete content item' });
    }
  });
  
  // Website Content API
  // This is a specialized endpoint that adapts content items to a website-content friendly format
  app.get('/api/cms/website-content', async (req, res) => {
    try {
      // Reuse the content items API but transform the data for website content usage
      const contentItems = await storage.getContentItems();
      
      const websiteContent = contentItems.map(item => ({
        id: item.id,
        uniqueId: item.uniqueId || '', // Include the uniqueId in the response
        type: item.type || item.category || 'general',
        pageLocation: item.pageLocation || (item.sectionId ? item.sectionId.toString() : 'home'),
        name: item.name || item.title,
        title: item.title,
        subtitle: item.subtitle || '',
        content: item.content || '',
        ctaText: item.ctaText || item.linkText || '',
        ctaUrl: item.ctaUrl || item.linkUrl || '',
        imageUrl: item.imageUrl || '',
        order: item.order || 0,
        isActive: item.isActive
      }));
      
      res.json({ success: true, data: websiteContent });
    } catch (error: any) {
      console.error('Error fetching website content:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  });

  app.get('/api/cms/website-content/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const contentItem = await storage.getContentItem(id);
      
      if (!contentItem) {
        return res.status(404).json({ success: false, message: 'Content not found' });
      }
      
      const websiteContent = {
        id: contentItem.id,
        uniqueId: contentItem.uniqueId || '', // Include the uniqueId in the response
        type: contentItem.type || contentItem.category || 'general',
        pageLocation: contentItem.pageLocation || (contentItem.sectionId ? contentItem.sectionId.toString() : 'home'),
        name: contentItem.name || contentItem.title,
        title: contentItem.title,
        subtitle: contentItem.subtitle || '',
        content: contentItem.content || '',
        ctaText: contentItem.ctaText || contentItem.linkText || '',
        ctaUrl: contentItem.ctaUrl || contentItem.linkUrl || '',
        imageUrl: contentItem.imageUrl || '',
        order: contentItem.order || 0,
        isActive: contentItem.isActive
      };
      
      res.json({ success: true, data: websiteContent });
    } catch (error: any) {
      console.error('Error fetching website content item:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  });
  
  // POST endpoint for creating website content
  app.post('/api/cms/website-content', async (req, res) => {
    try {
      console.log('Creating website content:', req.body);
      
      // Transform website content format to content item format
      const websiteContent = req.body;
      const contentItemData = {
        title: websiteContent.title,
        subtitle: websiteContent.subtitle || null,
        content: websiteContent.content || null,
        type: websiteContent.type || 'general',
        pageLocation: websiteContent.pageLocation || 'home',
        name: websiteContent.name || websiteContent.title,
        imageUrl: websiteContent.imageUrl || null,
        linkText: websiteContent.ctaText || null,
        linkUrl: websiteContent.ctaUrl || null,
        order: websiteContent.order || 0,
        isActive: websiteContent.isActive !== undefined ? websiteContent.isActive : true,
        sectionId: isNaN(parseInt(websiteContent.pageLocation)) ? null : parseInt(websiteContent.pageLocation)
      };
      
      // Create the content item
      const contentItem = await storage.createContentItem(contentItemData);
      
      // Transform back to website content format for response
      const createdWebsiteContent = {
        id: contentItem.id,
        uniqueId: contentItem.uniqueId || '', // Include the uniqueId in the response
        type: contentItem.type || contentItem.category || 'general',
        pageLocation: contentItem.pageLocation || (contentItem.sectionId ? contentItem.sectionId.toString() : 'home'),
        name: contentItem.name || contentItem.title,
        title: contentItem.title,
        subtitle: contentItem.subtitle || '',
        content: contentItem.content || '',
        ctaText: contentItem.ctaText || contentItem.linkText || '',
        ctaUrl: contentItem.ctaUrl || contentItem.linkUrl || '',
        imageUrl: contentItem.imageUrl || '',
        order: contentItem.order || 0,
        isActive: contentItem.isActive
      };
      
      // Create version record
      await storage.createContentVersion({
        entityType: 'website_content',
        entityId: contentItem.id,
        data: createdWebsiteContent,
        createdBy: 'Admin',
        comment: 'Initial website content creation'
      });
      
      res.status(201).json({ success: true, data: createdWebsiteContent });
    } catch (error: any) {
      console.error('Error creating website content:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  });

  app.put('/api/cms/website-content/:id', requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const websiteContent = req.body;
      
      // Transform website content format back to content item format
      const contentItemData = {
        title: websiteContent.title,
        subtitle: websiteContent.subtitle,
        content: websiteContent.content,
        type: websiteContent.type,
        pageLocation: websiteContent.pageLocation,
        imageUrl: websiteContent.imageUrl,
        linkText: websiteContent.ctaText,
        linkUrl: websiteContent.ctaUrl,
        order: websiteContent.order,
        isActive: websiteContent.isActive,
        sectionId: isNaN(parseInt(websiteContent.pageLocation)) ? null : parseInt(websiteContent.pageLocation)
      };
      
      const contentItem = await storage.updateContentItem(id, contentItemData);
      
      if (!contentItem) {
        return res.status(404).json({ success: false, message: 'Content item not found' });
      }
      
      // Create version record
      await storage.createContentVersion({
        entityType: 'website_content',
        entityId: contentItem.id,
        data: websiteContent,
        createdBy: 'Admin',
        comment: 'Website content update'
      });
      
      res.json({ success: true, data: websiteContent });
    } catch (error: any) {
      console.error('Error updating website content:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  });
  
  // Delete website content
  app.delete('/api/cms/website-content/:id', requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      
      // Get the content item before deleting it (for version control)
      const contentItem = await storage.getContentItem(id);
      
      if (!contentItem) {
        return res.status(404).json({ success: false, message: 'Content item not found' });
      }
      
      // Create version record before deletion for recovery purposes
      await storage.createContentVersion({
        entityType: 'website_content',
        entityId: id,
        data: {
          id: contentItem.id,
          uniqueId: contentItem.uniqueId || '', // Include the uniqueId in the version record
          type: contentItem.type || contentItem.category || 'general',
          pageLocation: contentItem.pageLocation || (contentItem.sectionId ? contentItem.sectionId.toString() : 'home'),
          name: contentItem.name || contentItem.title,
          title: contentItem.title,
          subtitle: contentItem.subtitle || '',
          content: contentItem.content || '',
          ctaText: contentItem.ctaText || contentItem.linkText || '',
          ctaUrl: contentItem.ctaUrl || contentItem.linkUrl || '',
          imageUrl: contentItem.imageUrl || '',
          order: contentItem.order || 0,
          isActive: contentItem.isActive
        },
        createdBy: 'Admin',
        comment: 'Website content deletion'
      });
      
      // Delete the content item
      const success = await storage.deleteContentItem(id);
      
      if (!success) {
        return res.status(500).json({ success: false, message: 'Failed to delete content item' });
      }
      
      res.json({ success: true });
    } catch (error: any) {
      console.error('Error deleting website content:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  });
  
  // Navigation
  app.get('/api/cms/navigation', async (req, res) => {
    try {
      let parentId: number | null | undefined = undefined;
      
      if (req.query.parentId === 'null') {
        parentId = null;
      } else if (req.query.parentId) {
        parentId = Number(req.query.parentId);
      }
      
      const items = await storage.getNavigationItems(parentId);
      res.json({ success: true, data: items });
    } catch (error) {
      console.error('Error fetching navigation items:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch navigation items' });
    }
  });
  
  app.get('/api/cms/navigation/:id', async (req, res) => {
    try {
      const item = await storage.getNavigationItem(Number(req.params.id));
      if (!item) {
        return res.status(404).json({ success: false, message: 'Navigation item not found' });
      }
      res.json({ success: true, data: item });
    } catch (error) {
      console.error('Error fetching navigation item:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch navigation item' });
    }
  });
  
  app.post('/api/cms/navigation', requireAuth, async (req, res) => {
    try {
      const data = navigationItemSchema.parse(req.body);
      const item = await storage.createNavigationItem(data);
      res.status(201).json({ success: true, data: item });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: 'Validation error', errors: error.errors });
      }
      console.error('Error creating navigation item:', error);
      res.status(500).json({ success: false, message: 'Failed to create navigation item' });
    }
  });
  
  app.put('/api/cms/navigation/:id', requireAuth, async (req, res) => {
    try {
      const updateSchema = navigationItemSchema.partial();
      const data = updateSchema.parse(req.body);
      const item = await storage.updateNavigationItem(Number(req.params.id), data);
      
      if (!item) {
        return res.status(404).json({ success: false, message: 'Navigation item not found' });
      }
      
      res.json({ success: true, data: item });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: 'Validation error', errors: error.errors });
      }
      console.error('Error updating navigation item:', error);
      res.status(500).json({ success: false, message: 'Failed to update navigation item' });
    }
  });
  
  app.delete('/api/cms/navigation/:id', requireAuth, async (req, res) => {
    try {
      const success = await storage.deleteNavigationItem(Number(req.params.id));
      if (!success) {
        return res.status(404).json({ success: false, message: 'Navigation item not found' });
      }
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting navigation item:', error);
      res.status(500).json({ success: false, message: 'Failed to delete navigation item' });
    }
  });
  
  // Hero Sections
  app.get('/api/cms/hero-sections', async (req, res) => {
    try {
      const pageId = req.query.pageId ? String(req.query.pageId) : undefined;
      const sections = await storage.getHeroSections(pageId);
      res.json({ success: true, data: sections });
    } catch (error) {
      console.error('Error fetching hero sections:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch hero sections' });
    }
  });
  
  app.get('/api/cms/hero-sections/:id', async (req, res) => {
    try {
      const section = await storage.getHeroSection(Number(req.params.id));
      if (!section) {
        return res.status(404).json({ success: false, message: 'Hero section not found' });
      }
      res.json({ success: true, data: section });
    } catch (error) {
      console.error('Error fetching hero section:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch hero section' });
    }
  });
  
  app.post('/api/cms/hero-sections', requireAuth, async (req, res) => {
    try {
      const data = heroSectionSchema.parse(req.body);
      const section = await storage.createHeroSection(data);
      res.status(201).json({ success: true, data: section });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: 'Validation error', errors: error.errors });
      }
      console.error('Error creating hero section:', error);
      res.status(500).json({ success: false, message: 'Failed to create hero section' });
    }
  });
  
  app.put('/api/cms/hero-sections/:id', requireAuth, async (req, res) => {
    try {
      const updateSchema = heroSectionSchema.partial();
      const data = updateSchema.parse(req.body);
      const section = await storage.updateHeroSection(Number(req.params.id), data);
      
      if (!section) {
        return res.status(404).json({ success: false, message: 'Hero section not found' });
      }
      
      res.json({ success: true, data: section });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: 'Validation error', errors: error.errors });
      }
      console.error('Error updating hero section:', error);
      res.status(500).json({ success: false, message: 'Failed to update hero section' });
    }
  });
  
  app.delete('/api/cms/hero-sections/:id', requireAuth, async (req, res) => {
    try {
      const success = await storage.deleteHeroSection(Number(req.params.id));
      if (!success) {
        return res.status(404).json({ success: false, message: 'Hero section not found' });
      }
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting hero section:', error);
      res.status(500).json({ success: false, message: 'Failed to delete hero section' });
    }
  });
  
  // Gallery Items
  app.get('/api/cms/gallery', async (req, res) => {
    try {
      const category = req.query.category ? String(req.query.category) : undefined;
      const items = await storage.getGalleryItems(category);
      res.json({ success: true, data: items });
    } catch (error) {
      console.error('Error fetching gallery items:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch gallery items' });
    }
  });
  
  app.get('/api/cms/gallery/:id', async (req, res) => {
    try {
      const item = await storage.getGalleryItem(Number(req.params.id));
      if (!item) {
        return res.status(404).json({ success: false, message: 'Gallery item not found' });
      }
      res.json({ success: true, data: item });
    } catch (error) {
      console.error('Error fetching gallery item:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch gallery item' });
    }
  });
  
  app.post('/api/cms/gallery', requireAuth, async (req, res) => {
    try {
      const data = galleryItemSchema.parse(req.body);
      const item = await storage.createGalleryItem(data);
      res.status(201).json({ success: true, data: item });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: 'Validation error', errors: error.errors });
      }
      console.error('Error creating gallery item:', error);
      res.status(500).json({ success: false, message: 'Failed to create gallery item' });
    }
  });
  
  app.put('/api/cms/gallery/:id', requireAuth, async (req, res) => {
    try {
      const updateSchema = galleryItemSchema.partial();
      const data = updateSchema.parse(req.body);
      const item = await storage.updateGalleryItem(Number(req.params.id), data);
      
      if (!item) {
        return res.status(404).json({ success: false, message: 'Gallery item not found' });
      }
      
      res.json({ success: true, data: item });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: 'Validation error', errors: error.errors });
      }
      console.error('Error updating gallery item:', error);
      res.status(500).json({ success: false, message: 'Failed to update gallery item' });
    }
  });
  
  app.delete('/api/cms/gallery/:id', requireAuth, async (req, res) => {
    try {
      const success = await storage.deleteGalleryItem(Number(req.params.id));
      if (!success) {
        return res.status(404).json({ success: false, message: 'Gallery item not found' });
      }
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting gallery item:', error);
      res.status(500).json({ success: false, message: 'Failed to delete gallery item' });
    }
  });
  
  // Content Version API Routes
  app.get('/api/cms/versions/:entityType/:entityId', requireAuth, async (req, res) => {
    try {
      const { entityType, entityId } = req.params;
      const versions = await storage.getContentVersions(entityType, parseInt(entityId));
      res.json({ success: true, data: versions });
    } catch (error: any) {
      console.error('Error fetching versions:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  });
  
  app.post('/api/cms/versions/revert/:versionId', requireAuth, async (req, res) => {
    try {
      const { versionId } = req.params;
      const success = await storage.revertToVersion(parseInt(versionId));
      
      if (success) {
        res.json({ success: true, message: 'Successfully reverted to version' });
      } else {
        res.status(400).json({ success: false, message: 'Failed to revert to version' });
      }
    } catch (error: any) {
      console.error('Error reverting to version:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  });

  // Database Admin API endpoints
  
  // Get all tables
  app.get('/api/db/tables', requireAuth, async (req, res) => {
    try {
      // Get list of all tables in the database with row counts
      const tablesResult = await pool.query({
        text: `
          SELECT 
            table_name,
            (SELECT count(*) FROM information_schema.columns WHERE table_name = t.table_name) AS column_count,
            obj_description(('public.' || table_name)::regclass::oid, 'pg_class') AS description
          FROM information_schema.tables t
          WHERE table_schema = 'public'
          ORDER BY table_name
        `
      });
      
      // For each table, get the row count
      const tables = [];
      for (const row of tablesResult.rows) {
        try {
          const countResult = await pool.query({
            text: `SELECT COUNT(*) AS row_count FROM "${row.table_name}"`
          });
          
          tables.push({
            name: row.table_name,
            rowCount: parseInt(countResult.rows[0].row_count),
            description: row.description
          });
        } catch (err) {
          console.error(`Error counting rows for table ${row.table_name}:`, err);
          tables.push({
            name: row.table_name,
            rowCount: 0,
            description: row.description
          });
        }
      }
      
      res.json({
        success: true,
        data: tables
      });
    } catch (error: any) {
      console.error('Error fetching database tables:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  });
  
  // Get table data
  app.get('/api/db/table-data', requireAuth, async (req, res) => {
    try {
      const tableName = req.query.table as string;
      
      if (!tableName) {
        return res.status(400).json({ 
          success: false, 
          message: 'Table name is required' 
        });
      }
      
      // Get table columns information
      const columnsResult = await pool.query({
        text: `
          SELECT 
            column_name, 
            data_type,
            is_nullable,
            column_default,
            (
              SELECT count(*) FROM information_schema.table_constraints tc
              JOIN information_schema.key_column_usage kcu 
                ON tc.constraint_name = kcu.constraint_name
              WHERE tc.table_name = c.table_name 
                AND kcu.column_name = c.column_name
                AND tc.constraint_type = 'PRIMARY KEY'
            ) > 0 as is_primary
          FROM information_schema.columns c
          WHERE table_name = $1
          ORDER BY ordinal_position
        `,
        values: [tableName]
      });
      
      // Get table data (limit to prevent massive data loads)
      const dataResult = await pool.query({
        text: `SELECT * FROM "${tableName}" LIMIT 100`
      });
      
      const response = {
        success: true,
        data: {
          columns: columnsResult.rows.map(col => ({
            name: col.column_name,
            type: col.data_type,
            isPrimary: col.is_primary,
            isNullable: col.is_nullable === 'YES'
          })),
          rows: dataResult.rows
        }
      };
      
      res.json(response);
    } catch (error: any) {
      console.error(`Error fetching data for table ${req.query.table}:`, error);
      res.status(500).json({ 
        success: false, 
        message: `Error fetching table data: ${error.message}` 
      });
    }
  });
  
  // Execute custom SQL query
  app.post('/api/db/execute-query', requireAuth, async (req, res) => {
    try {
      const { query } = z.object({
        query: z.string().min(1)
      }).parse(req.body);
      
      // Basic SQL sanitization checks
      const upperQuery = query.trim().toUpperCase();
      const isDangerous = 
        upperQuery.includes('DROP DATABASE') || 
        upperQuery.includes('TRUNCATE DATABASE') || 
        upperQuery.includes('DROP SCHEMA PUBLIC') ||
        upperQuery.includes('DELETE FROM') && !upperQuery.includes('WHERE');
      
      if (isDangerous) {
        return res.status(400).json({
          success: false,
          message: 'This query contains potentially dangerous operations that could delete large amounts of data'
        });
      }
      
      const result = await pool.query({text: query});
      
      // Handle different query types
      const isSelect = upperQuery.startsWith('SELECT');
      const isUpdate = upperQuery.startsWith('UPDATE');
      const isDelete = upperQuery.startsWith('DELETE');
      const isInsert = upperQuery.startsWith('INSERT');
      const isAlter = upperQuery.startsWith('ALTER');
      const isCreate = upperQuery.startsWith('CREATE');
      
      let message = '';
      if (isSelect) {
        message = `Query returned ${result.rowCount || 0} rows`;
      } else if (isUpdate) {
        message = `Updated ${result.rowCount || 0} rows`;
      } else if (isDelete) {
        message = `Deleted ${result.rowCount || 0} rows`;
      } else if (isInsert) {
        message = `Inserted ${result.rowCount || 0} rows`;
      } else if (isAlter) {
        message = 'Schema altered successfully';
      } else if (isCreate) {
        message = 'Created successfully';
      } else {
        message = 'Query executed successfully';
      }
      
      res.json({
        success: true,
        results: result.rows || [],
        rowCount: result.rowCount || 0,
        message
      });
    } catch (error: any) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ 
        success: false, 
        message: `Error executing query: ${error.message}` 
      });
    }
  });
  
  // Create a new table
  app.post('/api/db/create-table', requireAuth, async (req, res) => {
    try {
      const { tableName, columns } = z.object({
        tableName: z.string().min(1).regex(/^[a-zA-Z0-9_]+$/, 'Table name can only contain letters, numbers, and underscores'),
        columns: z.array(z.object({
          name: z.string().min(1).regex(/^[a-zA-Z0-9_]+$/, 'Column name can only contain letters, numbers, and underscores'),
          type: z.string().min(1),
          isPrimary: z.boolean().optional(),
          isNullable: z.boolean().optional(),
          defaultValue: z.string().optional(),
          isUnique: z.boolean().optional()
        })).min(1)
      }).parse(req.body);
      
      // Build CREATE TABLE SQL
      let sql = `CREATE TABLE "${tableName}" (\n`;
      const columnDefs = columns.map((column) => {
        let def = `  "${column.name}" ${column.type}`;
        
        if (column.isPrimary) {
          def += ' PRIMARY KEY';
        }
        
        if (column.isUnique) {
          def += ' UNIQUE';
        }
        
        if (column.isNullable === false) {
          def += ' NOT NULL';
        }
        
        if (column.defaultValue) {
          def += ` DEFAULT ${column.defaultValue}`;
        }
        
        return def;
      });
      
      sql += columnDefs.join(',\n');
      sql += '\n)';
      
      await pool.query({text: sql});
      
      res.json({
        success: true,
        message: `Table "${tableName}" created successfully`
      });
    } catch (error: any) {
      console.error('Error creating table:', error);
      res.status(500).json({ 
        success: false, 
        message: `Error creating table: ${error.message}` 
      });
    }
  });
  
  // Add a column to an existing table
  app.post('/api/db/add-column', requireAuth, async (req, res) => {
    try {
      const { tableName, column } = z.object({
        tableName: z.string().min(1),
        column: z.object({
          name: z.string().min(1).regex(/^[a-zA-Z0-9_]+$/, 'Column name can only contain letters, numbers, and underscores'),
          type: z.string().min(1),
          isNullable: z.boolean().optional(),
          defaultValue: z.string().optional(),
          isUnique: z.boolean().optional()
        })
      }).parse(req.body);
      
      // Build ALTER TABLE SQL
      let sql = `ALTER TABLE "${tableName}" ADD COLUMN "${column.name}" ${column.type}`;
      
      if (column.isUnique) {
        sql += ' UNIQUE';
      }
      
      if (column.isNullable === false) {
        sql += ' NOT NULL';
      }
      
      if (column.defaultValue) {
        sql += ` DEFAULT ${column.defaultValue}`;
      }
      
      await pool.query({text: sql});
      
      res.json({
        success: true,
        message: `Column "${column.name}" added to table "${tableName}" successfully`
      });
    } catch (error: any) {
      console.error('Error adding column:', error);
      res.status(500).json({ 
        success: false, 
        message: `Error adding column: ${error.message}` 
      });
    }
  });
  
  // Update a row in a table
  app.post('/api/db/update-row', requireAuth, async (req, res) => {
    try {
      const { tableName, rowData, primaryKey, primaryKeyValue } = z.object({
        tableName: z.string().min(1),
        rowData: z.record(z.string(), z.any()),
        primaryKey: z.string().min(1),
        primaryKeyValue: z.any()
      }).parse(req.body);
      
      // Build UPDATE SQL
      const setValues = Object.entries(rowData)
        .filter(([key]) => key !== primaryKey) // Don't update primary key
        .map(([key, value]) => `"${key}" = $${Object.keys(rowData).indexOf(key) + 2}`);
      
      if (setValues.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'No values to update'
        });
      }
      
      const sql = `UPDATE "${tableName}" SET ${setValues.join(', ')} WHERE "${primaryKey}" = $1`;
      
      // Prepare values array
      const values = [primaryKeyValue];
      Object.entries(rowData)
        .filter(([key]) => key !== primaryKey)
        .forEach(([, value]) => values.push(value));
      
      await pool.query({
        text: sql,
        values
      });
      
      res.json({
        success: true,
        message: `Row updated successfully in table "${tableName}"`
      });
    } catch (error: any) {
      console.error('Error updating row:', error);
      res.status(500).json({ 
        success: false, 
        message: `Error updating row: ${error.message}` 
      });
    }
  });
  
  // Delete a row from a table
  app.delete('/api/db/delete-row', requireAuth, async (req, res) => {
    try {
      const { tableName, primaryKey, primaryKeyValue } = z.object({
        tableName: z.string().min(1),
        primaryKey: z.string().min(1),
        primaryKeyValue: z.any()
      }).parse(req.body);
      
      const sql = `DELETE FROM "${tableName}" WHERE "${primaryKey}" = $1`;
      
      await pool.query({
        text: sql,
        values: [primaryKeyValue]
      });
      
      res.json({
        success: true,
        message: `Row deleted successfully from table "${tableName}"`
      });
    } catch (error: any) {
      console.error('Error deleting row:', error);
      res.status(500).json({ 
        success: false, 
        message: `Error deleting row: ${error.message}` 
      });
    }
  });
  
  // Insert a new row into a table
  app.post('/api/db/insert-row', requireAuth, async (req, res) => {
    try {
      const { tableName, rowData } = z.object({
        tableName: z.string().min(1),
        rowData: z.record(z.string(), z.any())
      }).parse(req.body);
      
      const columns = Object.keys(rowData).map(key => `"${key}"`).join(', ');
      const placeholders = Object.keys(rowData).map((_, index) => `$${index + 1}`).join(', ');
      const values = Object.values(rowData);
      
      const sql = `INSERT INTO "${tableName}" (${columns}) VALUES (${placeholders}) RETURNING *`;
      
      const result = await pool.query({
        text: sql,
        values
      });
      
      res.json({
        success: true,
        message: `Row inserted successfully into table "${tableName}"`,
        data: result.rows[0]
      });
    } catch (error: any) {
      console.error('Error inserting row:', error);
      res.status(500).json({ 
        success: false, 
        message: `Error inserting row: ${error.message}` 
      });
    }
  });
  
  const httpServer = createServer(app);

  return httpServer;
}
