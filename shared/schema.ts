import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User Schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact Form Schema
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  isResolved: boolean("is_resolved").default(false).notNull(),
});

export const contactFormSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// Newsletter Subscription Schema
export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  isActive: boolean("is_active").default(true).notNull(),
});

export const newsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).pick({
  email: true,
});

export type NewsletterSubscription = typeof newsletterSubscriptions.$inferSelect;

// Website content management tables
export const contentSections = pgTable("content_sections", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type ContentSection = typeof contentSections.$inferSelect;

export const contentItems = pgTable("content_items", {
  id: serial("id").primaryKey(),
  sectionId: integer("section_id").references(() => contentSections.id),
  title: text("title").notNull(),
  subtitle: text("subtitle"),
  content: text("content").notNull(),
  imageUrl: text("image_url"),
  linkUrl: text("link_url"),
  linkText: text("link_text"),
  order: integer("order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type ContentItem = typeof contentItems.$inferSelect;
export type InsertContentItem = typeof contentItems.$inferInsert;

export const navigationItems = pgTable("navigation_items", {
  id: serial("id").primaryKey(),
  parentId: integer("parent_id"), // We'll set the reference separately
  title: text("title").notNull(),
  path: text("path").notNull(),
  icon: text("icon"),
  description: text("description"),
  order: integer("order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// We're using a simple self-reference with the integer column
// This will be handled in the application logic instead of at the DB level

export type NavigationItem = typeof navigationItems.$inferSelect;
export type InsertNavigationItem = typeof navigationItems.$inferInsert;

export const heroSections = pgTable("hero_sections", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  subtitle: text("subtitle"),
  description: text("description"),
  imageUrl: text("image_url"),
  ctaText: text("cta_text"),
  ctaLink: text("cta_link"),
  isActive: boolean("is_active").default(true),
  pageId: text("page_id").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type HeroSection = typeof heroSections.$inferSelect;
export type InsertHeroSection = typeof heroSections.$inferInsert;

export const galleryItems = pgTable("gallery_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  imageUrl: text("image_url").notNull(),
  linkUrl: text("link_url"),
  category: text("category"),
  order: integer("order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type GalleryItem = typeof galleryItems.$inferSelect;
export type InsertGalleryItem = typeof galleryItems.$inferInsert;

// Zod schemas for validation
export const contentItemSchema = createInsertSchema(contentItems).pick({
  sectionId: true,
  title: true,
  subtitle: true,
  content: true,
  imageUrl: true,
  linkUrl: true,
  linkText: true,
  order: true,
  isActive: true,
});

export const navigationItemSchema = createInsertSchema(navigationItems).pick({
  parentId: true,
  title: true,
  path: true,
  icon: true,
  description: true,
  order: true,
  isActive: true,
});

export const heroSectionSchema = createInsertSchema(heroSections).pick({
  title: true,
  subtitle: true,
  description: true,
  imageUrl: true,
  ctaText: true,
  ctaLink: true, 
  isActive: true,
  pageId: true,
});

export const galleryItemSchema = createInsertSchema(galleryItems).pick({
  title: true,
  description: true,
  imageUrl: true,
  linkUrl: true,
  category: true,
  order: true,
  isActive: true,
});
