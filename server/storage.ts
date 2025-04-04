import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { 
  users, type User, type InsertUser,
  contactSubmissions, type ContactFormData, type ContactSubmission,
  newsletterSubscriptions,
  contentSections, contentItems, navigationItems, heroSections, galleryItems,
  type ContentSection, type ContentItem, type InsertContentItem,
  type NavigationItem, type InsertNavigationItem,
  type HeroSection, type InsertHeroSection,
  type GalleryItem, type InsertGalleryItem
} from "@shared/schema";
import { eq, and, isNull, desc } from 'drizzle-orm';
import 'dotenv/config';

// Initialize PostgreSQL client
const connectionString = process.env.DATABASE_URL || '';
const client = postgres(connectionString);
const db = drizzle(client);

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form operations
  createContactSubmission(data: ContactFormData): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Newsletter operations
  createNewsletterSubscription(email: string): Promise<any>;
  isEmailSubscribed(email: string): Promise<boolean>;
  getNewsletterSubscriptions(): Promise<any[]>;
  
  // Content management operations
  // Content sections
  getContentSections(): Promise<ContentSection[]>;
  getContentSection(id: number): Promise<ContentSection | undefined>;
  createContentSection(data: { name: string, description?: string }): Promise<ContentSection>;
  updateContentSection(id: number, data: { name?: string, description?: string }): Promise<ContentSection | undefined>;
  deleteContentSection(id: number): Promise<boolean>;
  
  // Content items
  getContentItems(sectionId?: number): Promise<ContentItem[]>;
  getContentItem(id: number): Promise<ContentItem | undefined>;
  createContentItem(data: InsertContentItem): Promise<ContentItem>;
  updateContentItem(id: number, data: Partial<InsertContentItem>): Promise<ContentItem | undefined>;
  deleteContentItem(id: number): Promise<boolean>;
  
  // Navigation
  getNavigationItems(parentId?: number | null): Promise<NavigationItem[]>;
  getNavigationItem(id: number): Promise<NavigationItem | undefined>;
  createNavigationItem(data: InsertNavigationItem): Promise<NavigationItem>;
  updateNavigationItem(id: number, data: Partial<InsertNavigationItem>): Promise<NavigationItem | undefined>;
  deleteNavigationItem(id: number): Promise<boolean>;
  
  // Hero sections
  getHeroSections(pageId?: string): Promise<HeroSection[]>;
  getHeroSection(id: number): Promise<HeroSection | undefined>;
  createHeroSection(data: InsertHeroSection): Promise<HeroSection>;
  updateHeroSection(id: number, data: Partial<InsertHeroSection>): Promise<HeroSection | undefined>;
  deleteHeroSection(id: number): Promise<boolean>;
  
  // Gallery
  getGalleryItems(category?: string): Promise<GalleryItem[]>;
  getGalleryItem(id: number): Promise<GalleryItem | undefined>;
  createGalleryItem(data: InsertGalleryItem): Promise<GalleryItem>;
  updateGalleryItem(id: number, data: Partial<InsertGalleryItem>): Promise<GalleryItem | undefined>;
  deleteGalleryItem(id: number): Promise<boolean>;
}

export class PostgresStorage implements IStorage {
  
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }
  
  // Contact form operations
  async createContactSubmission(data: ContactFormData): Promise<ContactSubmission> {
    const result = await db.insert(contactSubmissions).values(data).returning();
    return result[0];
  }
  
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  }
  
  // Newsletter operations
  async createNewsletterSubscription(email: string): Promise<any> {
    const result = await db.insert(newsletterSubscriptions).values({ email }).returning();
    return result[0];
  }
  
  async isEmailSubscribed(email: string): Promise<boolean> {
    const result = await db.select()
      .from(newsletterSubscriptions)
      .where(eq(newsletterSubscriptions.email, email));
    return result.length > 0;
  }
  
  async getNewsletterSubscriptions(): Promise<any[]> {
    return await db.select().from(newsletterSubscriptions).orderBy(desc(newsletterSubscriptions.createdAt));
  }
  
  // Content sections
  async getContentSections(): Promise<ContentSection[]> {
    return await db.select().from(contentSections).orderBy(contentSections.name);
  }
  
  async getContentSection(id: number): Promise<ContentSection | undefined> {
    const result = await db.select().from(contentSections).where(eq(contentSections.id, id));
    return result[0];
  }
  
  async createContentSection(data: { name: string, description?: string }): Promise<ContentSection> {
    const now = new Date();
    const result = await db.insert(contentSections).values({
      ...data,
      createdAt: now,
      updatedAt: now
    }).returning();
    return result[0];
  }
  
  async updateContentSection(id: number, data: { name?: string, description?: string }): Promise<ContentSection | undefined> {
    const result = await db.update(contentSections)
      .set({
        ...data,
        updatedAt: new Date()
      })
      .where(eq(contentSections.id, id))
      .returning();
    return result[0];
  }
  
  async deleteContentSection(id: number): Promise<boolean> {
    const result = await db.delete(contentSections).where(eq(contentSections.id, id)).returning();
    return result.length > 0;
  }
  
  // Content items
  async getContentItems(sectionId?: number): Promise<ContentItem[]> {
    if (sectionId) {
      return await db.select()
        .from(contentItems)
        .where(eq(contentItems.sectionId, sectionId))
        .orderBy(contentItems.order);
    } else {
      return await db.select()
        .from(contentItems)
        .orderBy(contentItems.order);
    }
  }
  
  async getContentItem(id: number): Promise<ContentItem | undefined> {
    const result = await db.select().from(contentItems).where(eq(contentItems.id, id));
    return result[0];
  }
  
  async createContentItem(data: InsertContentItem): Promise<ContentItem> {
    const now = new Date();
    const result = await db.insert(contentItems).values({
      ...data,
      createdAt: now,
      updatedAt: now
    }).returning();
    return result[0];
  }
  
  async updateContentItem(id: number, data: Partial<InsertContentItem>): Promise<ContentItem | undefined> {
    const result = await db.update(contentItems)
      .set({
        ...data,
        updatedAt: new Date()
      })
      .where(eq(contentItems.id, id))
      .returning();
    return result[0];
  }
  
  async deleteContentItem(id: number): Promise<boolean> {
    const result = await db.delete(contentItems).where(eq(contentItems.id, id)).returning();
    return result.length > 0;
  }
  
  // Navigation
  async getNavigationItems(parentId?: number | null): Promise<NavigationItem[]> {
    if (parentId === null) {
      // Get root items (where parentId is null)
      return await db.select()
        .from(navigationItems)
        .where(isNull(navigationItems.parentId))
        .orderBy(navigationItems.order);
    } else if (parentId !== undefined) {
      // Get children of specific parent
      return await db.select()
        .from(navigationItems)
        .where(eq(navigationItems.parentId, parentId))
        .orderBy(navigationItems.order);
    } else {
      // Get all items
      return await db.select()
        .from(navigationItems)
        .orderBy(navigationItems.order);
    }
  }
  
  async getNavigationItem(id: number): Promise<NavigationItem | undefined> {
    const result = await db.select().from(navigationItems).where(eq(navigationItems.id, id));
    return result[0];
  }
  
  async createNavigationItem(data: InsertNavigationItem): Promise<NavigationItem> {
    const now = new Date();
    const result = await db.insert(navigationItems).values({
      ...data,
      createdAt: now,
      updatedAt: now
    }).returning();
    return result[0];
  }
  
  async updateNavigationItem(id: number, data: Partial<InsertNavigationItem>): Promise<NavigationItem | undefined> {
    const result = await db.update(navigationItems)
      .set({
        ...data,
        updatedAt: new Date()
      })
      .where(eq(navigationItems.id, id))
      .returning();
    return result[0];
  }
  
  async deleteNavigationItem(id: number): Promise<boolean> {
    const result = await db.delete(navigationItems).where(eq(navigationItems.id, id)).returning();
    return result.length > 0;
  }
  
  // Hero sections
  async getHeroSections(pageId?: string): Promise<HeroSection[]> {
    if (pageId) {
      return await db.select()
        .from(heroSections)
        .where(eq(heroSections.pageId, pageId))
        .orderBy(desc(heroSections.updatedAt));
    } else {
      return await db.select()
        .from(heroSections)
        .orderBy(desc(heroSections.updatedAt));
    }
  }
  
  async getHeroSection(id: number): Promise<HeroSection | undefined> {
    const result = await db.select().from(heroSections).where(eq(heroSections.id, id));
    return result[0];
  }
  
  async createHeroSection(data: InsertHeroSection): Promise<HeroSection> {
    const now = new Date();
    const result = await db.insert(heroSections).values({
      ...data,
      createdAt: now,
      updatedAt: now
    }).returning();
    return result[0];
  }
  
  async updateHeroSection(id: number, data: Partial<InsertHeroSection>): Promise<HeroSection | undefined> {
    const result = await db.update(heroSections)
      .set({
        ...data,
        updatedAt: new Date()
      })
      .where(eq(heroSections.id, id))
      .returning();
    return result[0];
  }
  
  async deleteHeroSection(id: number): Promise<boolean> {
    const result = await db.delete(heroSections).where(eq(heroSections.id, id)).returning();
    return result.length > 0;
  }
  
  // Gallery
  async getGalleryItems(category?: string): Promise<GalleryItem[]> {
    if (category) {
      return await db.select()
        .from(galleryItems)
        .where(eq(galleryItems.category, category))
        .orderBy(galleryItems.order);
    } else {
      return await db.select()
        .from(galleryItems)
        .orderBy(galleryItems.order);
    }
  }
  
  async getGalleryItem(id: number): Promise<GalleryItem | undefined> {
    const result = await db.select().from(galleryItems).where(eq(galleryItems.id, id));
    return result[0];
  }
  
  async createGalleryItem(data: InsertGalleryItem): Promise<GalleryItem> {
    const now = new Date();
    const result = await db.insert(galleryItems).values({
      ...data,
      createdAt: now,
      updatedAt: now
    }).returning();
    return result[0];
  }
  
  async updateGalleryItem(id: number, data: Partial<InsertGalleryItem>): Promise<GalleryItem | undefined> {
    const result = await db.update(galleryItems)
      .set({
        ...data,
        updatedAt: new Date()
      })
      .where(eq(galleryItems.id, id))
      .returning();
    return result[0];
  }
  
  async deleteGalleryItem(id: number): Promise<boolean> {
    const result = await db.delete(galleryItems).where(eq(galleryItems.id, id)).returning();
    return result.length > 0;
  }
}

export const storage = new PostgresStorage();
