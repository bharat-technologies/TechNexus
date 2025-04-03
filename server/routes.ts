import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
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

  const httpServer = createServer(app);

  return httpServer;
}
