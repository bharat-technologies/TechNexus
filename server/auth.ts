import { Request, Response, NextFunction } from "express";
import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
import { storage } from "./storage";
import { InsertUser } from "@shared/schema";

// Convert callback-based scrypt to Promise-based
const scryptAsync = promisify(scrypt);

// Session types
declare module "express-session" {
  interface SessionData {
    userId: number;
  }
}

// Hash password using scrypt with a salt
export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${derivedKey.toString("hex")}.${salt}`;
}

// Securely compare stored password with supplied password
export async function verifyPassword(
  suppliedPassword: string,
  storedPassword: string
): Promise<boolean> {
  const [hashedPassword, salt] = storedPassword.split(".");
  const hashedPasswordBuf = Buffer.from(hashedPassword, "hex");
  const suppliedPasswordBuf = (await scryptAsync(
    suppliedPassword,
    salt,
    64
  )) as Buffer;
  return timingSafeEqual(hashedPasswordBuf, suppliedPasswordBuf);
}

// Create a new user
export async function createUser(
  username: string,
  password: string
): Promise<{ success: boolean; message?: string; userId?: number }> {
  try {
    const existingUser = await storage.getUserByUsername(username);
    if (existingUser) {
      return { success: false, message: "Username already exists" };
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await storage.createUser({
      username,
      password: hashedPassword,
    });

    return { success: true, userId: newUser.id };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, message: "Error creating user" };
  }
}

// Login a user 
export async function loginUser(
  username: string,
  password: string
): Promise<{ success: boolean; message?: string; userId?: number }> {
  try {
    const user = await storage.getUserByUsername(username);
    if (!user) {
      return { success: false, message: "Invalid username or password" };
    }

    const passwordValid = await verifyPassword(password, user.password);
    if (!passwordValid) {
      return { success: false, message: "Invalid username or password" };
    }

    return { success: true, userId: user.id };
  } catch (error) {
    console.error("Error logging in:", error);
    return { success: false, message: "Error during login" };
  }
}

// Authentication middleware
export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.session || !req.session.userId) {
    return res.status(401).json({
      success: false,
      message: "Authentication required",
    });
  }
  next();
}

// Initialize an admin user if no users exist
export async function initializeAdminUser() {
  try {
    const users = await storage.getUserByUsername("admin");
    if (!users) {
      console.log("Creating default admin user...");
      await createUser("admin", "admin123");
      console.log("Default admin user created");
    }
  } catch (error) {
    console.error("Error initializing admin user:", error);
  }
}