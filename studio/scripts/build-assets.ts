import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { transform } from '@svgr/core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RAW_ICONS_DIR = path.resolve(__dirname, '../brand/raw');
const OUTPUT_ICONS_DIR = path.resolve(__dirname, '../src/icons');
const TOKENS_DIR = path.resolve(__dirname, '../brand/tokens');

interface DesignTokens {
  identity: Record<string, string>;
  background: Record<string, string>;
  typography: Record<string, Record<string, string>>;
  [key: string]: unknown;
}

/**
 * Asset Build Pipeline.
 * 1. Transforms SVGs to optimized React Components.
 * 2. Processes Design Tokens.
 */

async function buildAssets(): Promise<void> {
  console.info('🎨 Starting Asset Build Pipeline...');

  // 1. Process Icons (SVGR)
  if (fs.existsSync(RAW_ICONS_DIR)) {
    console.info('📽️  Transforming SVGs to React Components...');
    if (!fs.existsSync(OUTPUT_ICONS_DIR)) fs.mkdirSync(OUTPUT_ICONS_DIR, { recursive: true });

    const files = fs.readdirSync(RAW_ICONS_DIR).filter((file) => file.endsWith('.svg'));

    for (const file of files) {
      const svgCode = fs.readFileSync(path.join(RAW_ICONS_DIR, file), 'utf-8');
      const componentName = file
        .replace('.svg', '')
        .split(/[-_]/)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('') + 'Icon';

      const jsCode = await transform(
        svgCode,
        {
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
          icon: true,
          typescript: true,
          memo: true,
        },
        { componentName }
      );

      const outputPath = path.join(OUTPUT_ICONS_DIR, `${componentName}.tsx`);
      fs.writeFileSync(outputPath, jsCode);
      console.info(`✅ Generated: ${componentName}`);
    }

    // Generate Index for Icons
    const indexContent = files
      .map((file) => {
        const name = file
          .replace('.svg', '')
          .split(/[-_]/)
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join('') + 'Icon';
        return `export { default as ${name} } from './${name}.js';`;
      })
      .join('\n');
    
    fs.writeFileSync(path.join(OUTPUT_ICONS_DIR, 'index.ts'), indexContent);
  }

  // 2. Process Tokens
  console.info('💎 Processing Design Tokens...');
  const colorsPath = path.join(TOKENS_DIR, 'colors.json');
  if (fs.existsSync(colorsPath)) {
    const colors = JSON.parse(fs.readFileSync(colorsPath, 'utf-8')) as DesignTokens;
    const tokensTS = `export const colors = ${JSON.stringify(colors, null, 2)} as const;\n`;
    fs.writeFileSync(path.resolve(__dirname, '../src/tokens.ts'), tokensTS);
    console.info('✅ Tokens processed.');
  }

  console.info('🏁 Asset build finished.');
}

void buildAssets();
