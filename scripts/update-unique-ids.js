// Script to update existing content items with unique IDs
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from 'ws';
import { contentItems } from '../shared/schema.js';
import { eq } from 'drizzle-orm';

// Configure Neon connection
neonConfig.webSocketConstructor = ws;

// Function to generate a unique ID
function generateUniqueId(prefix, name) {
  const cleanName = (name || 'item').toLowerCase().replace(/[^a-z0-9]/g, '-');
  const timestamp = Date.now().toString(36);
  return `${prefix}-${cleanName}-${timestamp}`;
}

async function updateUniqueIds() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL must be set. Did you forget to provision a database?");
    process.exit(1);
  }

  // Initialize database connection
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool);

  try {
    // Get all content items without uniqueId
    const itemsToUpdate = await db.select()
      .from(contentItems)
      .where(eq(contentItems.uniqueId, null));

    console.log(`Found ${itemsToUpdate.length} content items without uniqueId`);

    // Update each item with a unique ID
    for (const item of itemsToUpdate) {
      const uniqueId = generateUniqueId('content', item.title || 'item');
      
      await db.update(contentItems)
        .set({ uniqueId })
        .where(eq(contentItems.id, item.id));
      
      console.log(`Updated item ${item.id} with uniqueId: ${uniqueId}`);
    }

    console.log('Unique ID update completed successfully');
  } catch (error) {
    console.error('Error updating unique IDs:', error);
  } finally {
    await pool.end();
  }
}

// Run the update
updateUniqueIds();