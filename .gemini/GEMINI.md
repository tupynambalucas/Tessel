# 🌌 Tessel - Master Context & AI Guidelines

This is the primary context entry point for the Gemini CLI, located at `.gemini/GEMINI.md`. It centralizes all operational knowledge and strategic documentation for **Tessel**, a 3D Multiplayer Voice Chat Game.

## 📖 Strategic Core (Imports)

- `D:\projects\Tessel\README.md`
- `D:\projects\Tessel\studio\strategy\PRODUCT.md`
- `D:\projects\Tessel\studio\strategy\architecture\ARCHITECTURE.md`
- `D:\projects\Tessel\studio\strategy\masterplan\MASTERPLAN-EN_US.md`
- `D:\projects\Tessel\.gemini\STYLEGUIDE.md`

## 🌟 Project Overview

**Tessel** is an immersive 3D multiplayer platform focused on voice interaction and spatial social experiences. It uses authoritative server-side logic and cutting-edge web technologies to deliver high-performance, low-latency gameplay.

**CURRENT FOCUS**: Implementing character movement with optimized animations and transitioning the rendering engine to **WebGPU** using Three.js Node API (TSL).

## 🏗️ Architecture & Tech Stack

### Workspace Structure (Monorepo)

- **`apps/web`**: Web platform entry point (Vite + React 19).
- **`apps/desktop`**: Desktop platform entry point (Electron + Vite).
- **`packages/game`**: Engine Core. R3F components, TSL Materials, Rapier hooks, and game systems.
- **`packages/website`**: Landing pages, user dashboards, and general UI.
- **`packages/backend`**: Fastify 5 server. Authoritative physics (Rapier), room management (Socket.io/WebRTC), and MongoDB.
- **`packages/core`**: Shared logic. Zod schemas (SSOT), Constants, XState machines, and Types.
- **`studio/`**: Assets processing, 3D models (GLB), strategy docs, and automation scripts.

### Technology Stack

- **Graphics**: Three.js (v0.182+) with **WebGPU** priority and TSL (Three Shading Language).
- **Physics**: Rapier (Deterministic, runs on both Client and Backend).
- **Backend**: Fastify 5, Mongoose (MongoDB), Redis, BullMQ.
- **Frontend**: React 19, Zustand, TailwindCSS v4, GSAP.
- **Desktop**: Electron.

## 🚀 Operational Guidelines

### 1. Development Workflow

1.  **Shared First**: Always update `@tessel/core` Zod schemas before modifying Backend or Game logic.
2.  **WebGPU First**: New materials MUST be written in TSL. GLSL is deprecated in this project.
3.  **Authoritative Logic**: Room state and physics validation must happen in `@tessel/backend`.
4.  **Surgical Changes**: Adhere to the `Controller -> Service -> Repository` pattern in the Backend.

### 2. Quality & Standards

- **Strict Typing**: No `any`. Strict null checks enabled.
- **Style Guide**: Follow all rules in `.gemini/STYLEGUIDE.md`.
- **Performance**: Zero allocations/state updates in `useFrame` loops.

---

_Professional entry point for the Tessel Development Environment._
