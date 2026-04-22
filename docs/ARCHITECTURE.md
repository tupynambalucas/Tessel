# 🏗️ Tessel Architecture Overview

This document describes the high-level architecture of **Tessel**, a Hybrid Spatial Social Ecosystem. The project utilizes a **Monorepo** strategy to ensure a strict separation between asynchronous social networking (The Hub), immersive 3D rendering (The Instance), and authoritative server-side orchestration.

## 📦 Monorepo Structure (NPM Workspaces)

The project is organized into `apps/` and `packages/`. **Apps** represent end-products or host environments, while **Packages** provide shared core logic and the game engine.

```mermaid
graph TD
    Hub[apps/www: Social Hub] --> Game[@tessel/game]
    AppDesktop[apps/client-desktop] --> Game
    Game --> Core[@tessel/core]
    Api[@tessel/api] --> Core
    DGS[@tessel/game-server] --> Core
    Api -->|Provision| DGS

    subgraph "The Instance (Synchronous)"
        Game
        R3F[React Three Fiber v10]
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
        Hub
        Fastify[Fastify 5]
        RapierServer[Rapier Server Physics]
        Mongo[MongoDB / Mongoose]
        Agones[Agones Orchestrator]
    end
```

### 1. Workspace Details

- **`apps/`**: Host environments and products.
  - **The Social Hub (`www`)**: The asynchronous heart of the ecosystem. A full-featured social network (Timelines, Groups, Economy) acting as the primary entry point and Identity Provider.
  - **The Authority (`api`)**: The stateless orchestration layer. Manages matchmaking, user persistence, and **DGS Provisioning** (room instancing).
  - **The Dedicated Game Server (`game-server`)**: The stateful room instances. Each instance runs an authoritative Rapier simulation for a specific room.
  - **Client Platforms**:
    - **`client-web`**: A thin Vite wrapper that initializes the `@tessel/game` engine for web browsers.
    - **`client-desktop`**: An Electron wrapper for native desktop integration.

- **`packages/`**: Reusable business logic and engine cores.
  - **`core` (@tessel/core)**: **Single Source of Truth (SSOT)**. Contains all Zod schemas, shared constants, and XState machines.
  - **`game` (@tessel/game)**: The core 3D engine. Contains R3F components, TSL materials, and client-side physics hooks.

- **`studio/`**: Automation and resource hub. Manages asset pipelines, design tokens, and CI/CD strategy automation.

## 🛠️ Technology Stack

- **Graphics**: [Three.js](https://threejs.org/) (v0.182+) with **WebGPU** priority and TSL (Three Shading Language).
- **Physics**: [Rapier](https://rapier.rs/) (Deterministic, runs on both Client and Backend via WASM).
- **Backend**: [Fastify 5](https://www.fastify.io/), Mongoose (MongoDB), Redis, BullMQ.
- **Frontend**: [React 19](https://react.dev/), Zustand, TailwindCSS v4, GSAP.
- **Networking**: 
  - **Geckos.io (High-Performance Real-Time)**: Utilizes WebRTC Data Channels (UDP-like) for ultra-low latency spatial synchronization and authoritative physics.
  - **Socket.io (Social Signaling)**: Used for asynchronous notifications, social chat, and Hub events where consistency is prioritized over raw speed.

## 📐 Design Patterns & Guiding Principles

- **DDD (Domain-Driven Design)**: Business logic is organized into domains (e.g., `auth`, `social`, `rooms`, `players`) to ensure scalability.
- **SOLID Principles**: 
  - **Single Responsibility**: Each package and service has a clear, isolated purpose.
  - **Dependency Inversion**: High-level modules (`game`, `api`) depend on abstractions (interfaces in `core`), not concrete implementations.
- **Room Instancing (DGS)**: Unlike monolithic servers, Tessel uses a **Dedicated Game Server (DGS)** model. Every room is an independent, isolated instance (orchestrated by Agones in production) to ensure horizontal scalability and performance stability.
- **Controller-Service-Repository**: Mandatory pattern for `@tessel/api` to separate transport (Fastify), logic (Services), and persistence (Repositories).
- **Authoritative Server**: The DGS is the ultimate authority for 3D physics. Clients perform local prediction for smoothness but are corrected by the Geckos.io stream.

## 🔄 Data & Physics Flows

### 🔐 Unified Authentication (SSO)
Tessel implements a **Hub-First** authentication flow. Users log in via the Social Hub (`apps/www`), which acts as the master Identity Provider. 3D Instances inherit this session via shared secure cookies or deep links, eliminating multiple logins.

### ⚡ Social vs. Real-Time Traffic
The architecture handles two distinct traffic profiles in parallel:
- **Asynchronous Social Traffic (REST/Socket.io)**: Managed by the API/Hub. Optimized for data consistency, marketplace transactions, and social engagement.
- **Synchronous Real-Time Traffic (Geckos.io)**: High-tick rate (20-30Hz) streams handled by the Dedicated Game Server instances. Optimized for speed and minimal jitter using UDP-like delivery.

### 🌉 Media Bridge & UGC
Content Generated by the User (UGC) within the 3D Instance (e.g., high-fidelity snapshots or videos) is piped through a Media Bridge. These captures are processed and can be published directly to the Social Hub's timeline.

## 🚦 Operational Governance

Detailed coding standards and operational workflows can be found in the **[STYLEGUIDE.md](./STYLEGUIDE.md)**.

- **Workspace Manager**: NPM Workspaces.
- **SSOT Enforcement**: All shared contracts MUST originate from `@tessel/core`.
- **Graphics Pipeline**: WebGPU priority (TSL nodes only, no GLSL).
