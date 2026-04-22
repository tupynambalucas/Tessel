# @tessel/studio - Assets, Automation & Distribution Hub

The **Studio** is the engine room for the Tessel ecosystem's resources. It manages the automated processing of 3D assets, strategic synchronization, and AI-powered documentation workflows.

## 📂 Core Responsibilities

- **Asset Pipeline (`brand/`, `local/`)**: Automated conversion, optimization, and distribution of 3D models (GLB), textures, and design tokens.
- **Automation Scripts (`scripts/`)**: 
  - **Asset Processing**: GLB to TSL optimization.
  - **Governance Automation**: AI-powered (Gemini) consolidation of atomic roadmaps and changelogs.
  - **Strategy Sync**: Aligning external strategic data with the local `docs/` hub.
- **Distribution**: Managing the delivery of optimized assets to the Game Engine and CDN.

## 🚀 Key Automation Tools

- `npm run build:assets`: Transforms raw SVGs and 3D models into optimized engine components.
- `npm run generate:changelog`: AI-powered script that gathers fragments from `docs/changelogs/` and updates the root `CHANGELOG.md`.
- `npm run sync:roadmap`: Consolidates modular roadmaps from `docs/roadmaps/` into the master `ROADMAP.md`.

## 📜 Governance Notice
Strategic documentation has been moved to the project's central **[docs/](../docs/)** directory to ensure enterprise-level visibility and accessibility.

---
*Asset & Automation Hub - Tessel Studio*
