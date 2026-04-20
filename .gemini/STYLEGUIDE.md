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
- **`apps/`**: Platform entry points (`app-web` via Vite, `app-desktop` via Electron).
- **`packages/core`**: **Single Source of Truth (SSOT)**. Contains Zod schemas, constants, i18n, and shared state logic (XState).
- **`packages/game`**: Game engine core. Three.js components, R3F hooks, and client-side physics.
- **`packages/backend`**: Fastify server. Manages authoritative rooms, MongoDB persistence, and server-side Rapier physics.
- **`packages/website`**: Web interface, dashboards, and landing pages.
- **`studio/`**: Asset management, model processing scripts, and strategic documentation.

### 2.2. Design Patterns
- **DDD (Domain-Driven Design)**: Business logic organized into domains.
- **SOLID Principles**: Focus on Single Responsibility and Dependency Inversion (`game` depends on `core` interfaces).
- **Controller-Service-Repository**: Mandatory pattern for `@tessel/backend`.

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
