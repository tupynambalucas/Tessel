# 🌌 Tessel - 3D Multiplayer Voice Chat Game

**Tessel** is an immersive spatial social platform designed for high-performance 3D voice interaction. Built with a focus on modern web standards, it leverages **WebGPU** for advanced rendering and an authoritative backend for consistent multiplayer experiences.

## 🚀 Key Features

- **Spatial Social Experience**: Immersive 3D environments for real-time interaction.
- **WebGPU Powered**: Cutting-edge rendering using Three.js Node API (TSL).
- **Authoritative Physics**: Synchronized simulation using Rapier (Server & Client).
- **Cross-Platform**: Seamlessly available on Web and Desktop (Electron).
- **Spatial Audio**: High-fidelity voice chat with positional awareness.

## 🏗️ Project Structure (Monorepo)

The project is managed via NPM Workspaces:

- **`apps/`**: Platform-specific entry points.
  - `web`: Vite-powered SPA for browsers.
  - `desktop`: Electron-based application for desktop.
- **`packages/`**: Core system logic.
  - `game`: The heart of the 3D engine, R3F components, and game systems.
  - `backend`: Fastify 5 server managing rooms, physics, and persistence.
  - `core`: Shared single source of truth (Zod schemas, types, XState).
  - `website`: Dashboard, landing pages, and web interface.
- **`studio/`**: Asset processing pipeline, strategy documents, and design tokens.

## 🛠️ Tech Stack

- **Graphics**: [Three.js](https://threejs.org/) (WebGPU/TSL).
- **Framework**: [React 19](https://react.dev/).
- **Physics**: [Rapier](https://rapier.rs/).
- **Backend**: [Fastify 5](https://www.fastify.io/).
- **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose) + [Redis](https://redis.io/).
- **State**: [Zustand](https://github.com/pmndrs/zustand) + [XState](https://stately.ai/).
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/).

## 🚦 Getting Started

### Prerequisites

- Node.js v20+
- MongoDB & Redis (Use `npm run infra:up` if available)

### Installation

```bash
npm install
```

### Development

Run the full stack (Backend + Web App):

```bash
npm run dev:stack
```

Individual commands:
- `npm run dev:web`: Start web application.
- `npm run dev:desktop`: Start desktop application.
- `npm run dev:backend`: Start backend server.

## 📜 Documentation

- [Style Guide](.gemini/STYLEGUIDE.md)
- [Master Context](.gemini/GEMINI.md)
- [Architecture](studio/strategy/architecture/ARCHITECTURE.md)

---
*Developed with focus on performance, scalability, and immersion.*
