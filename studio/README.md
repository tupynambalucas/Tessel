# Elo Orgânico - Workspace Package (@elo-organico/workspace)

This package is the **Intelligence and Governance Hub** of the Elo Orgânico platform. It centralizes non-application logic, including strategy synchronization, automated changelogs, design tokens, and asset pipelines.

## 📂 Architecture

- **`brand/`**: Visual identity source of truth.
  - `tokens/`: Design tokens (JSON) defining colors, typography, and spacing.
  - `raw/`: Raw assets like `.ai` files and original SVGs.
- **`content/`**: Static and generated content.
  - `changelogs/`: Modular, AI-generated changelogs (`vX.X.X.md`).
  - `legal/`: Legal documents and policies.
- **`scripts/`**: Automation logic (Logic outside `src` as per project standards).
  - `generate-changelog.ts`: Integrates with **Gemini API** to transform commits into user-friendly logs.
  - `sync-masterplan.ts`: Pulls strategy documents directly from **Google Docs**.
  - `build-assets.ts`: Orchestrates **SVGR** to transform SVGs into React Components.
- **`src/`**: Distribution and Exports.
  - `icons/`: React Components generated from SVGs (consumed by Frontend).
  - `index.ts`: Unified entry point for tokens and metadata.
- **`strategy/`**: Living documentation synchronized from external sources.

## 🚀 Key Automation Features

### 1. AI-Powered Changelog
Uses the **Gemini 1.5 Flash** model to analyze git commits since the last tag and generate a professional, emoji-rich changelog. It automatically saves a modular version and prepends it to the root `CHANGELOG.md`.

### 2. Strategy Synchronization
Implements a "Pull" strategy to synchronize the Master Plan from Google Docs using the official Google Docs API. This ensures the documentation is always up-to-date without manual intervention.

### 3. Asset Pipeline (SVGR)
Automatically transforms SVG files located in `brand/raw` into optimized, memoized React Components in `src/icons`. This reduces weight and simplifies usage in the `@elo-organico/frontend` package.

## 🏗 Implementation Status

Current progress of the workspace professionalization:

- [x] **Project Structure**: Organized folders for `brand`, `content`, `scripts`, and `strategy`.
- [x] **Governance Rules**: Integrated into the global `eslint.config.ts` with workspace-specific rules.
- [x] **TypeScript Infrastructure**: `tsconfig.json` optimized with correct `rootDir` to include automation scripts.
- [x] **Asset Pipeline**: `build-assets.ts` fully functional (SVGR + Token processing).
- [x] **AI Automation**: `generate-changelog.ts` implemented and integrated with Gemini API.
- [/] **Strategy Sync**: `sync-masterplan.ts` implemented but pending `.env` URL configurations and parser refinement.
- [ ] **Type Integrity Check**: Requires a full run of `npm run typecheck` to validate deep dependencies and refactor remaining `any` types in scripts.

## 🛠 Available Commands

- **`npm run sync:masterplan`**: Syncs strategic documents from Google Docs.
- **`npm run changelog:generate`**: Generates AI changelog based on git history.
- **`npm run build:assets`**: Runs the SVGR and Token processing pipeline.
- **`npm run lint`**: Standardizes script and source code (ESLint).
- **`npm run typecheck`**: **Critical:** Validates TypeScript integrity and identifies logic errors in scripts.

## ⚙️ Environment Variables

The following variables are required for automation (configured in GitHub Secrets):
- `GEMINI_API_KEY`: Google Generative AI access.
- `GOOGLE_DOC_MASTERPLAN_PT_ID`: ID of the Portuguese Master Plan doc.
- `GOOGLE_DOC_MASTERPLAN_EN_ID`: ID of the English Master Plan doc.
- `GOOGLE_APPLICATION_CREDENTIALS`: Service account key for Google API access.

---
*Internal Governance Tooling - Elo Orgânico*
