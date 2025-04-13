import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { 
  users, type User, type InsertUser,
  contactSubmissions, type ContactFormData, type ContactSubmission,
  newsletterSubscriptions,
  contentSections, contentItems, navigationItems, heroSections, galleryItems, contentVersions,
  type ContentSection, type ContentItem, type InsertContentItem,
  type NavigationItem, type InsertNavigationItem,
  type HeroSection, type InsertHeroSection,
  type GalleryItem, type InsertGalleryItem,
  type ContentVersion, type InsertContentVersion
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
  
  // Version Control
  createContentVersion(data: {
    entityType: string,
    entityId: number,
    data: any,
    createdBy?: string,
    comment?: string
  }): Promise<ContentVersion>;
  getContentVersions(entityType: string, entityId: number): Promise<ContentVersion[]>;
  getContentVersion(id: number): Promise<ContentVersion | undefined>;
  revertToVersion(versionId: number): Promise<boolean>;
}

export class PostgresStorage implements IStorage {
  
  // Version control helper methods
  private async getLatestVersionNumber(entityType: string, entityId: number): Promise<number> {
    const versions = await db.select({ version: contentVersions.version })
      .from(contentVersions)
      .where(and(
        eq(contentVersions.entityType, entityType),
        eq(contentVersions.entityId, entityId)
      ))
      .orderBy(desc(contentVersions.version))
      .limit(1);
    
    return versions.length > 0 ? versions[0].version : 0;
  }
  
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
  
  // Helper to generate a unique ID for a content section
  private generateUniqueId(prefix: string, name: string): string {
    const cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const timestamp = Date.now().toString(36);
    return `${prefix}-${cleanName}-${timestamp}`;
  }
  
  async createContentSection(data: { name: string, description?: string }): Promise<ContentSection> {
    const now = new Date();
    const uniqueId = this.generateUniqueId('section', data.name);
    
    const result = await db.insert(contentSections).values({
      ...data,
      uniqueId,
      createdAt: now,
      updatedAt: now
    }).returning();
    return result[0];
  }
  
  async updateContentSection(id: number, data: { name?: string, description?: string }): Promise<ContentSection | undefined> {
    // Get current section to check for uniqueId
    const currentSection = await this.getContentSection(id);
    if (currentSection && !currentSection.uniqueId) {
      // Generate a uniqueId if it doesn't exist
      data = {
        ...data,
        uniqueId: this.generateUniqueId('section', data.name || currentSection.name)
      };
    }
    
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
    const uniqueId = this.generateUniqueId('content', data.title || 'item');
    
    const result = await db.insert(contentItems).values({
      ...data,
      uniqueId,
      createdAt: now,
      updatedAt: now
    }).returning();
    return result[0];
  }
  
  async updateContentItem(id: number, data: Partial<InsertContentItem>): Promise<ContentItem | undefined> {
    // Get the current item to save as a version
    const currentItem = await this.getContentItem(id);
    if (currentItem) {
      // Create a version of the current state before updating
      await this.createContentVersion({
        entityType: 'content_item',
        entityId: id,
        data: currentItem,
        comment: 'Automatic version before update'
      });
      
      // Ensure uniqueId is preserved if it exists, or generate one if it doesn't
      if (!currentItem.uniqueId) {
        data.uniqueId = this.generateUniqueId('content', data.title || currentItem.title || 'item');
      }
    }
    
    // Update the item
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
    // Get the current item to save as a version
    const currentItem = await this.getNavigationItem(id);
    if (currentItem) {
      // Create a version of the current state before updating
      await this.createContentVersion({
        entityType: 'navigation_item',
        entityId: id,
        data: currentItem,
        comment: 'Automatic version before update'
      });
    }
    
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
    const uniqueId = this.generateUniqueId('hero', data.title || `${data.pageId}-hero`);
    
    const result = await db.insert(heroSections).values({
      ...data,
      uniqueId,
      createdAt: now,
      updatedAt: now
    }).returning();
    return result[0];
  }
  
  async updateHeroSection(id: number, data: Partial<InsertHeroSection>): Promise<HeroSection | undefined> {
    // Get the current item to save as a version
    const currentItem = await this.getHeroSection(id);
    if (currentItem) {
      // Create a version of the current state before updating
      await this.createContentVersion({
        entityType: 'hero_section',
        entityId: id,
        data: currentItem,
        comment: 'Automatic version before update'
      });
      
      // Ensure uniqueId is preserved if it exists, or generate one if it doesn't
      if (!currentItem.uniqueId) {
        data.uniqueId = this.generateUniqueId('hero', data.title || currentItem.title || `${currentItem.pageId}-hero`);
      }
    }
    
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
    const uniqueId = this.generateUniqueId('gallery', data.title || 'gallery-item');
    
    const result = await db.insert(galleryItems).values({
      ...data,
      uniqueId,
      createdAt: now,
      updatedAt: now
    }).returning();
    return result[0];
  }
  
  async updateGalleryItem(id: number, data: Partial<InsertGalleryItem>): Promise<GalleryItem | undefined> {
    // Get the current item to save as a version
    const currentItem = await this.getGalleryItem(id);
    if (currentItem) {
      // Create a version of the current state before updating
      await this.createContentVersion({
        entityType: 'gallery_item',
        entityId: id,
        data: currentItem,
        comment: 'Automatic version before update'
      });
      
      // Ensure uniqueId is preserved if it exists, or generate one if it doesn't
      if (!currentItem.uniqueId) {
        data.uniqueId = this.generateUniqueId('gallery', data.title || currentItem.title || 'gallery-item');
      }
    }
    
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

  // Version Control methods
  async createContentVersion(data: {
    entityType: string,
    entityId: number,
    data: any,
    createdBy?: string,
    comment?: string
  }): Promise<ContentVersion> {
    // Get the latest version number for this entity
    const latestVersion = await this.getLatestVersionNumber(data.entityType, data.entityId);
    const newVersion = latestVersion + 1;
    
    // Create the new version
    const result = await db.insert(contentVersions).values({
      entityType: data.entityType,
      entityId: data.entityId,
      version: newVersion,
      data: data.data,
      createdBy: data.createdBy || null,
      comment: data.comment || null,
      isActive: true
    }).returning();
    
    return result[0];
  }
  
  async getContentVersions(entityType: string, entityId: number): Promise<ContentVersion[]> {
    return await db.select()
      .from(contentVersions)
      .where(and(
        eq(contentVersions.entityType, entityType),
        eq(contentVersions.entityId, entityId)
      ))
      .orderBy(desc(contentVersions.version));
  }
  
  async getContentVersion(id: number): Promise<ContentVersion | undefined> {
    const result = await db.select()
      .from(contentVersions)
      .where(eq(contentVersions.id, id));
    return result[0];
  }
  
  async revertToVersion(versionId: number): Promise<boolean> {
    // Get the version to revert to
    const version = await this.getContentVersion(versionId);
    if (!version) return false;
    
    // Extract data fields that are appropriate for the entity type
    // We need to be selective about what fields we restore to avoid
    // database errors with primary keys, etc.
    const now = new Date();
    
    // Determine what type of entity we're reverting and update accordingly
    try {
      switch (version.entityType) {
        case 'content_item': {
          const data = version.data as ContentItem;
          await db.update(contentItems)
            .set({
              sectionId: data.sectionId,
              title: data.title,
              subtitle: data.subtitle,
              content: data.content,
              imageUrl: data.imageUrl,
              linkUrl: data.linkUrl,
              linkText: data.linkText,
              order: data.order,
              isActive: data.isActive,
              updatedAt: now
            })
            .where(eq(contentItems.id, version.entityId));
          break;
        }
        case 'hero_section': {
          const data = version.data as HeroSection;
          await db.update(heroSections)
            .set({
              title: data.title,
              subtitle: data.subtitle,
              description: data.description,
              imageUrl: data.imageUrl,
              ctaText: data.ctaText,
              ctaLink: data.ctaLink,
              isActive: data.isActive,
              pageId: data.pageId,
              updatedAt: now
            })
            .where(eq(heroSections.id, version.entityId));
          break;
        }
        case 'navigation_item': {
          const data = version.data as NavigationItem;
          await db.update(navigationItems)
            .set({
              parentId: data.parentId,
              title: data.title,
              path: data.path,
              icon: data.icon,
              description: data.description,
              order: data.order,
              isActive: data.isActive,
              updatedAt: now
            })
            .where(eq(navigationItems.id, version.entityId));
          break;
        }
        case 'gallery_item': {
          const data = version.data as GalleryItem;
          await db.update(galleryItems)
            .set({
              title: data.title,
              description: data.description,
              imageUrl: data.imageUrl,
              linkUrl: data.linkUrl,
              category: data.category,
              order: data.order,
              isActive: data.isActive,
              updatedAt: now
            })
            .where(eq(galleryItems.id, version.entityId));
          break;
        }
        default:
          return false;
      }
      
      // Create a new version that's a copy of the reverted version
      // but with a new timestamp and comment
      await this.createContentVersion({
        entityType: version.entityType,
        entityId: version.entityId,
        data: version.data,
        createdBy: version.createdBy || undefined,
        comment: `Reverted to version ${version.version}`
      });
      
      return true;
    } catch (error) {
      console.error('Error reverting to version:', error);
      return false;
    }
  }
}

export const storage = new PostgresStorage();
