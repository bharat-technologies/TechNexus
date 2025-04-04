import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  contactFormSchema, contentItemSchema, 
  navigationItemSchema, heroSectionSchema,
  galleryItemSchema
} from "@shared/schema";
import { z } from "zod";
import { generateAgentResponse } from "./services/openai";

export async function registerRoutes(app: Express): Promise<Server> {
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
    // For now, we'll skip actual authentication and allow access
    // In a real implementation, you would check session status
    next();
    
    // Example with passport authentication:
    // if (!req.isAuthenticated || !req.isAuthenticated()) {
    //   return res.status(401).json({ success: false, message: 'Authentication required' });
    // }
    // next();
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
  
  const httpServer = createServer(app);

  return httpServer;
}
