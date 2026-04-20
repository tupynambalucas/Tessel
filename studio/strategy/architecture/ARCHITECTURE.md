# 🏗️ Tessel Architecture Overview

This document describes the high-level architecture of **Tessel**, a 3D Multiplayer Voice Chat Game. The project utilizes a **Monorepo** strategy to ensure a strict separation between business logic, 3D rendering, and authoritative server-side orchestration.

## 📦 Monorepo Structure

```mermaid
graph TD
    AppWeb[apps/web] --> Game[@tessel/game]
    AppDesktop[apps/desktop] --> Game
    Game --> Core[@tessel/core]
    Backend[@tessel/backend] --> Core
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

    subgraph "Authoritative Layer (Server)"
        Backend
        Fastify[Fastify 5]
        RapierServer[Rapier Server Physics]
        Mongo[MongoDB / Mongoose]
    end
```

### 1. `@tessel/core` (The Brain)
**Role:** The Single Source of Truth (SSOT).
- **Framework Agnostic:** Pure TypeScript logic.
- **Validation**: Zod schemas for all data exchanged between Client and Server.
- **State Machines**: XState defines complex game flows (e.g., Room joining, Player lifecycle).

### 2. `@tessel/game` (The Engine)
**Role:** The 3D runtime and visual representation.
- **Rendering**: Three.js with **WebGPU** and **TSL** (Three Shading Language).
- **Client Physics**: Local prediction and interpolation using Rapier.
- **Spatial Audio**: Real-time positional voice chat integration.

### 3. `@tessel/backend` (The Authority)
**Role:** Authoritative server orchestration.
- **Validation**: Server-side physics validation via Rapier to prevent cheating.
- **Room Management**: Instance-based room management with Fastify 5.
- **Persistence**: MongoDB for user data and persistent world states.

### 4. `@tessel/studio` (The Resources)
**Role:** Asset processing and strategic hub.
- **Asset Pipeline**: Automated conversion of GLB models and optimization of textures.
- **Governance**: Strategic documents and brand tokens.

## 🔄 Data & Physics Flow

1.  **Input**: User moves their character in `app-web`.
2.  **Prediction**: `game` package simulates the move locally for immediate feedback.
3.  **Synchronization**: The move is sent to `backend` via a secure socket.
4.  **Validation**: `backend` runs the same move in its Rapier instance.
5.  **Reconciliation**: If valid, the move is broadcasted to other players. If invalid, the client is corrected.

## 🛠️ Build & Tooling

- **Workspace Manager**: NPM Workspaces.
- **Linting**: ESLint v9 (Strict) with `@react-three` and `@typescript-eslint` plugins.
- **Graphics**: WebGPU priority (TSL nodes only, no GLSL).
- **Physics**: Rapier (WASM).
