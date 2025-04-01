import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { 
  users, type User, type InsertUser,
  contactSubmissions, type ContactFormData, type ContactSubmission,
  newsletterSubscriptions
} from "@shared/schema";
import { eq } from 'drizzle-orm';
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
}

export class PostgresStorage implements IStorage {
  
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
  
  async createContactSubmission(data: ContactFormData): Promise<ContactSubmission> {
    const result = await db.insert(contactSubmissions).values(data).returning();
    return result[0];
  }
  
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions).orderBy(contactSubmissions.createdAt);
  }
  
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
}

export const storage = new PostgresStorage();
