# 🏗️ Tessel Architecture Overview

This document describes the high-level architecture of **Tessel**, a 3D Multiplayer Voice Chat Game. The project utilizes a **Monorepo** strategy to ensure a strict separation between business logic, 3D rendering, and authoritative server-side orchestration.

## 📦 Monorepo Structure (NPM Workspaces)

The project is organized into `apps/` and `packages/`. **Apps** represent end-products or host environments, while **Packages** provide shared core logic and the game engine.

```mermaid
graph TD
    AppWeb[apps/client-web] --> Game[@tessel/game]
    AppDesktop[apps/client-desktop] --> Game
    Game --> Core[@tessel/core]
    Api[@tessel/api] --> Core
    Game --> Studio[@tessel/studio]

    subgraph "Presentation Layer (Client)"
        Game
        R3F[React Three Fiber v9]
        TSL[Three Shading Language]
        RapierClient[Rapier Client Physics]
    end

    subgraph "Logic & SSOT Layer"
        Core
        XState[State Machines]
        Zod[Validation Schemas]
    end

    subgraph "Host Layer"
        Api
        Www[apps/www]
        Fastify[Fastify 5]
        RapierServer[Rapier Server Physics]
        Mongo[MongoDB / Mongoose]
    end
```

### 1. Workspace Details

- **`apps/`**: Host environments and products.
  - **Hosts (Core Products)**:
    - **`api` (@tessel/api)**: The authoritative backend. A Fastify 5 server that manages real-time room synchronization, server-side physics (Rapier), and database persistence (MongoDB).
    - **`www` (@tessel/www)**: The public-facing product. A React 19 website handling landing pages, user dashboards, and social features outside the game loop.
  - **Client Platforms (Entry Points)**:
    - **`client-web` (@tessel/client-web)**: A thin Vite wrapper that initializes the `@tessel/game` engine for web browsers.
    - **`client-desktop` (@tessel/client-desktop)**: An Electron wrapper that provides a native host for `@tessel/game`, enabling desktop-specific integrations.

- **`packages/`**: Reusable business logic and engine cores.
  - **`core` (@tessel/core)**: **Single Source of Truth (SSOT)**. Contains all Zod schemas, shared constants, i18n locales, and XState machines.
  - **`game` (@tessel/game)**: The core 3D engine. Contains R3F components, TSL materials, and client-side physics hooks.

- **`studio/`**: Strategic hub and asset pipeline. Contains Blender automation scripts, 3D model processing, and design tokens.

## 🛠️ Technology Stack

- **Graphics**: [Three.js](https://threejs.org/) (v0.182+) with **WebGPU** priority and TSL (Three Shading Language).
- **Physics**: [Rapier](https://rapier.rs/) (Deterministic, runs on both Client and Backend via WASM).
- **Backend**: [Fastify 5](https://www.fastify.io/), Mongoose (MongoDB), Redis, BullMQ.
- **Frontend**: [React 19](https://react.dev/), Zustand, TailwindCSS v4, GSAP.
- **State Management**: XState (Complex flows) + Zustand (Local engine state).
- **Desktop**: Electron.

## 📐 Design Patterns & Guiding Principles

- **DDD (Domain-Driven Design)**: Business logic organized into domains (e.g., `auth`, `rooms`, `players`) to ensure scalability and clarity.
- **SOLID Principles**: Focus on Single Responsibility and Dependency Inversion. The `game` engine depends on `core` interfaces, not concrete implementations.
- **Controller-Service-Repository**: Mandatory pattern for `@tessel/api` to separate transport (Fastify), business logic (Services), and persistence (Mongoose Repositories).
- **Authoritative Server**: The server (`@tessel/api`) is the ultimate authority for physics and state. Clients perform prediction and interpolation for a smooth experience but are corrected by the server if necessary.

## 🔄 Data & Physics Flow

1.  **Input**: User moves their character in `apps/client-web`.
2.  **Prediction**: `@tessel/game` package simulates the move locally for immediate feedback.
3.  **Synchronization**: The move is sent to `@tessel/api` via a secure socket.
4.  **Validation**: `@tessel/api` runs the same move in its Rapier instance.
5.  **Reconciliation**: If valid, the move is broadcasted to other players. If invalid, the client is corrected.

## 🚦 Operational Governance

The project infrastructure is built for high-performance and strict consistency. Detailed coding standards and operational workflows can be found in the **[STYLEGUIDE.md](./STYLEGUIDE.md)**.

- **Workspace Manager**: NPM Workspaces.
- **SSOT Enforcement**: All shared contracts MUST originate from `@tessel/core`.
- **Graphics Pipeline**: WebGPU priority (TSL nodes only, no GLSL).
