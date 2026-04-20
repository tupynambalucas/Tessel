# 🧬 Elo Orgânico - Master Context & AI Guidelines

This is the primary context entry point for the Gemini CLI, located at `.gemini/GEMINI.md`. It centralizes all operational knowledge and imports the core strategic documentation of the **Elo Orgânico** ecosystem.

## 📖 Strategic Core (Imports)

@../README.md
@../packages/backend/README.md
@../packages/frontend/README.md
@../packages/shared/README.md
@../packages/workspace/README.md
@../packages/workspace/strategy/masterplan/MASTERPLAN-EN_US.md
@../packages/workspace/strategy/PRODUCT.md
@../packages/workspace/strategy/architecture/ARCHITECTURE.md
@../packages/workspace/strategy/roadmap/ROADMAP.md
@./STYLEGUIDE.md

## 🌟 Project Overview

**Elo Orgânico** is an organic product trading platform designed to connect producers and consumers through **scheduled sales cycles**.

**STRATEGIC FOCUS:** The current and absolute priority is to deliver a **complete, 100% functional, and polished single-instance application** for a private ecovillage. While the project is architected to eventually scale into a **multi-tenant SaaS platform**, this is a long-term goal. **Do not implement multi-tenant logic, tenant IDs, or cluster routing at this stage.** All development must focus on single-community excellence.

This project is a **monorepo** managed with **NPM Workspaces**, containing a Fastify backend, a React frontend, a shared library for contracts/types, and an internal workspace package for strategy and automation.

## 🏗️ Architecture & Tech Stack

### Workspace Structure

- **Root:** Orchestration, Docker configs, ESLint/Prettier configs.
- **`packages/shared`:** Single Source of Truth (SSOT) for data contracts. Contains Zod schemas and TypeScript types shared between backend and frontend.
- **`packages/backend`:** API Server (Fastify).
- **`packages/frontend`:** Web Client (React 19).
- **`packages/workspace`:** Internal tooling for strategy, brand assets, and automation (Changelog, Google Docs Sync).

### Technology Stack

- **Backend:** Fastify, Mongoose (MongoDB), Zod, BullMQ, Sentry, `sdk-node-apis-efi`.
- **Frontend:** React 19, Vite, Zustand, TailwindCSS v4, GSAP, Axios, i18next.
- **Database:** MongoDB (Replica Set enabled), Redis.
- **Shared:** TypeScript, Zod.
- **Workspace:** TypeScript, Node.js, Google Docs API.
- **Infra:** Docker Compose, Nginx.

## 🚀 Operational Guidelines

### 1. Infrastructure Management

The project requires a MongoDB Replica Set and Redis.

- **Up:** `npm run infra:up` (Starts DB & Redis, handles keyfile generation)
- **Stop:** `npm run infra:stop`
- **Reset:** `npm run infra:reset` (Wipes volumes and restarts)

### 2. Development Workflow

1. **Infra First:** Ensure infra is running before starting apps.
2. **Full Stack:** `npm run dev:stack` (Runs backend and frontend concurrently)
3. **Seeding:** `npm run backend:seed` (Populates initial Admin user)
4. **Quality:** `npm run build:all`, `npm run lint`, `npm run typecheck:all`

### 3. Development Conventions

- **Single-Instance First:** All code generation must assume a single-tenant environment.
- **Shared First:** Always update `@elo-organico/shared` Zod schemas before modifying Backend/Frontend logic.
- **Strategy First:** Consult documents in `packages/workspace/strategy/` for major features.
- **Language Policy:** English is mandatory for all code, comments, and documentation.
- **State/Style:** Use **Zustand** for state and **TailwindCSS (v4)** with **CSS Modules** for styling.

## 🛠️ Professional AI Operating Rules

### 1. Contextual Mandates

- **Surgical Changes:** Modify only what is strictly necessary. Adhere to the `Controller -> Service -> Repository` pattern in the Backend.
- **Safety & Quality:** Never use `any`. Use `context7` to verify library patterns (Fastify v5, React 19, etc.).
- **Performance:** Optimize for sub-millisecond latency as defined in `ARCHITECTURE.md`.

## Common Issues / Troubleshooting

- **MongoDB Connection:** Ensure the Replica Set (`rs0`) is correctly initiated. The `infra:up` script's healthcheck attempts to auto-initiate it.
- **Type Errors:** If `shared` is updated, you may need to restart the TypeScript server or run `npm run build:shared` to reflect changes in dependent packages.

---

_Professional entry point for the Elo Orgânico Development Environment._
