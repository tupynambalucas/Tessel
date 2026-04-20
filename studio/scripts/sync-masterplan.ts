import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { google } from 'googleapis';
import type { docs_v1 } from 'googleapis';
import * as dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Professional Google Docs Synchronization Script.
 * Fetches the Master Plan and converts it to Markdown.
 */

async function syncMasterplan(): Promise<void> {
  console.info('🔄 Starting Strategy Synchronization from Google Docs...');

  const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/documents.readonly'],
  });

  const docs = google.docs({ version: 'v1', auth });

  const docsToSync = [
    {
      id: process.env.GOOGLE_DOC_MASTERPLAN_PT_ID,
      dest: '../strategy/masterplan/MASTERPLAN-PT_BR.md',
      name: 'Masterplan (PT-BR)',
    },
    {
      id: process.env.GOOGLE_DOC_MASTERPLAN_EN_ID,
      dest: '../strategy/masterplan/MASTERPLAN-EN_US.md',
      name: 'Masterplan (EN-US)',
    },
  ];

  for (const doc of docsToSync) {
    if (!doc.id) {
      console.warn(`⚠️ Skip ${doc.name}: Document ID not provided.`);
      continue;
    }

    try {
      console.info(`📥 Fetching ${doc.name} (ID: ${doc.id})...`);
      const res = await docs.documents.get({ documentId: doc.id });
      
      const content = parseGoogleDoc(res.data);
      
      const destPath = path.resolve(__dirname, doc.dest);
      fs.writeFileSync(destPath, content);
      console.info(`✅ ${doc.name} synchronized successfully!`);
    } catch (error) {
      console.error(`❌ Failed to sync ${doc.name}:`, error instanceof Error ? error.message : error);
    }
  }

  console.info('🏁 Synchronization finished.');
}

/**
 * Basic parser to extract text from Google Docs JSON structure.
 */
function parseGoogleDoc(doc: docs_v1.Schema$Document): string {
  let text = '';
  if (!doc.body?.content) return text;

  doc.body.content.forEach((element) => {
    if (element.paragraph?.elements) {
      element.paragraph.elements.forEach((part) => {
        if (part.textRun?.content) {
          text += part.textRun.content;
        }
      });
    }
  });
  return text;
}

void syncMasterplan();
