import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const CHANGELOGS_DIR = path.resolve(__dirname, '../content/changelogs');
const ROOT_CHANGELOG = path.resolve(__dirname, '../../../CHANGELOG.md');
const PACKAGE_JSON = path.resolve(__dirname, '../package.json');

interface PackageJson {
  version: string;
}

async function generateChangelog(): Promise<void> {
  if (!GEMINI_API_KEY) {
    console.error('❌ GEMINI_API_KEY is not defined in environment variables.');
    process.exit(1);
  }

  console.info('📜 Generating AI-Powered Changelog...');

  try {
    const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON, 'utf-8')) as PackageJson;
    const version = `v${pkg.version}`;

    // Get commits since last tag or last 20 commits if no tag
    let gitLogCommand = 'git log --pretty=format:"%s (%an)" -n 20';
    try {
      const lastTag = execSync('git describe --tags --abbrev=0').toString().trim();
      gitLogCommand = `git log ${lastTag}..HEAD --pretty=format:"%s (%an)"`;
    } catch {
      console.warn('⚠️ No git tags found, fetching last 20 commits.');
    }

    const commits = execSync(gitLogCommand).toString().trim();

    if (commits.length === 0) {
      console.info('ℹ️ No new commits to process.');
      return;
    }

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `
      Below are the technical git commits for version ${version} of the Elo Orgânico project.
      Transform them into a professional and friendly changelog for non-technical users.
      
      Structure the output with these sections (using emojis):
      - 🚀 New Features
      - 🛠 Improvements
      - 🐞 Bug Fixes
      - 📝 Others (if applicable)

      Use a clean Markdown format. Do not include internal commit hashes or technical jargon unless necessary.
      Keep it concise and aligned with the "Honest Simplicity" brand voice.

      Commits:
      ${commits}
    `;

    const result = await model.generateContent(prompt);
    const aiChangelog = result.response.text();

    // 1. Save modular changelog
    if (!fs.existsSync(CHANGELOGS_DIR)) fs.mkdirSync(CHANGELOGS_DIR, { recursive: true });
    const versionFile = path.join(CHANGELOGS_DIR, `${version}.md`);
    fs.writeFileSync(versionFile, aiChangelog);
    console.info(`✅ Modular changelog saved at ${versionFile}`);

    // 2. Prepend to root CHANGELOG.md
    let currentRootContent = '';
    if (fs.existsSync(ROOT_CHANGELOG)) {
      currentRootContent = fs.readFileSync(ROOT_CHANGELOG, 'utf-8');
    }

    const header = '# Changelog - Elo Orgânico';
    const cleanCurrentContent = currentRootContent.startsWith(header) 
      ? currentRootContent.replace(header, '').trim()
      : currentRootContent;

    const newRootContent = `${header}\n\n${aiChangelog}\n\n---\n\n${cleanCurrentContent}`;
    fs.writeFileSync(ROOT_CHANGELOG, newRootContent);
    console.info('✅ Root CHANGELOG.md updated.');

  } catch (error) {
    console.error('❌ Failed to generate AI changelog:', error);
  }
}

void generateChangelog();
