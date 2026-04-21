# 🎨 Tessel Style Guide & Coding Standards

This guide defines the coding standards for the **Tessel** project (3D Multiplayer Voice Chat Game). It is strictly enforced by our `eslint.config.ts`.

## 🛡️ 1. TypeScript & Typing (Rigorous)

Type safety is paramount for the stability of our WebGPU pipeline and authoritative backend.

- **ZERO `any`**: Use of `any` is strictly prohibited.
- **Strict Null Checks**: Always handle `null` and `undefined` explicitly.
- **Interfaces vs Types**: Use `interface` for object definitions to ensure consistency. Use `type` only for unions, primitives, or third-party utility types.
- **Type Imports**: Always use `import type` for types; never mix them with value imports.
- **Unused Variables**: Must be prefixed with an underscore (e.g., `_id`).
- **Arrays**: Use `T[]` syntax instead of `Array<T>`.

## 🏗️ 2. Architecture & Guiding Principles

### 2.1. Monorepo Structure (NPM Workspaces)

The project is organized into `apps/` and `packages/`. **Apps** represent end-products or host environments, while **Packages** provide shared core logic and the game engine.

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

### 2.2. Design Patterns
- **DDD (Domain-Driven Design)**: Business logic organized into domains (e.g., `auth`, `rooms`, `players`).
- **SOLID Principles**: Focus on Single Responsibility and Dependency Inversion (`game` depends on `core` interfaces).
- **Controller-Service-Repository**: Mandatory pattern for `@tessel/api` to separate transport, logic, and persistence layers.

## ⚛️ 3. 3D Engine & Rendering (WebGPU/TSL)

We are migrating to **WebGPU**. All new materials must use **Three Shading Language (TSL)**.

### 3.1. The Render Loop (Hot Path)
**CRITICAL**: The `useFrame` loop (R3F) is a hot path.
- **NO Allocations**: Never create objects (`new THREE.Vector3()`) or clones inside `useFrame`.
- **NO State Updates**: Never call `setState` or dispatch actions inside `useFrame`. Use `useRef` for direct mutations.

### 3.2. WebGPU & TSL Rules
- **TSL Nodes Only**: Prohibited use of GLSL strings or `ShaderMaterial`. Use `MeshStandardNodeMaterial`, `MeshPhysicalNodeMaterial`, etc.
- **Async Init**: The `<Canvas>` must initialize `WebGPURenderer` asynchronously.
- **TSL Syntax**: Use TSL methods (`float()`, `vec3()`, `texture()`) over primitive values.
- **v9 Compatibility**: Do not use deprecated `MeshProps` or `GroupProps`. Use `ThreeElements['mesh']`.

## 🌐 4. Backend Standards (Fastify)

- **Type Safety**: Use `FastifyZodHandler` with Zod schemas for all routes.
- **Async Safety**: Every `await` must be in a `try/catch` or have a `.catch()`. Use the `void` operator for fire-and-forget promises.
- **Response Mapping**: Controllers must map Mongoose documents to Core DTOs before sending.

## 🧹 5. Code Quality & Linting

- **Console Policy**: `console.log` is prohibited. Use `console.warn/error/info` only for diagnostics.
- **No Floating Promises**: All promises must be awaited or marked with `void`.
- **Strict Booleans**: Explicit checks only (`if (value !== undefined)` instead of `if (value)`).

## Naming Conventions
- **Schemas**: Always end with `Schema` (e.g., `UserSchema`).
- **Files**: `name.type.ts` (e.g., `auth.service.ts`, `player.component.tsx`).
