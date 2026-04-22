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

## 🚀 2. Development Workflow

### 2.1. General Workflow
- **Shared First**: Always update `@tessel/core` Zod schemas before modifying Backend or Game logic. This ensures data integrity and synchronization across the full stack.
- **Authoritative Logic**: Room state and physics validation MUST happen in `@tessel/api` (as defined in the [Architecture](./ARCHITECTURE.md)). Clients should only perform local prediction and interpolation.
- **Surgical Changes**: Adhere strictly to the established architecture of each package. For the backend, follow the `Controller -> Service -> Repository` flow without exceptions.

### 2.2. Code Quality & Standards
- **Strict Typing**: No `any`. Strict null checks MUST be enabled and respected.
- **Zero Allocations**: Prohibited creation of objects or state updates inside high-frequency loops (e.g., `useFrame`).
- **Language Policy**: **English is mandatory** for all code, comments, JSDoc, Git messages, and documentation. No exceptions.
- **Documentation**: All code and markdown files must include clear, concise, and professional comments.

## ⚛️ 3. 3D Engine & Rendering (WebGPU/TSL)

We are migrating to **WebGPU**. Performance and modern standards are the priority.

### 3.1. The Render Loop (Hot Path)

**CRITICAL**: The `useFrame` loop (R3F) is a hot path.

- **NO Allocations**: Never create objects (`new THREE.Vector3()`) or clones inside `useFrame`. Use pre-allocated variables outside the hook or in `useMemo`.
- **NO State Updates**: Never call `setState` or dispatch actions inside `useFrame`. Use `useRef` for direct mutations of objects and properties.

### 3.2. WebGPU & TSL Rules
- **WebGPU First**: All new materials MUST be written in **Three Shading Language (TSL)**. GLSL is deprecated and should be avoided.
- **TSL Nodes Only**: Prohibited use of GLSL strings or `ShaderMaterial`. Use `MeshStandardNodeMaterial`, `MeshPhysicalNodeMaterial`, etc.
- **Async Init**: The `<Canvas>` must initialize `WebGPURenderer` asynchronously and handle compatibility fallbacks if necessary.
- **TSL Syntax**: Use TSL methods (`float()`, `vec3()`, `texture()`) over primitive values to ensure proper node compilation.
- **v9 Compatibility**: Do not use deprecated `MeshProps` or `GroupProps`. Use `ThreeElements['mesh']`.

## 🌐 4. Backend Standards (Fastify)

- **Type Safety**: Use `FastifyZodHandler` with Zod schemas for all routes to ensure request/response validation.
- **Async Safety**: Every `await` must be in a `try/catch` or have a `.catch()` to prevent unhandled rejections. Use the `void` operator for fire-and-forget promises.
- **Response Mapping**: Controllers must map Mongoose documents to Core DTOs (Data Transfer Objects) defined in `@tessel/core` before sending responses.

## 🧹 5. Code Quality & Linting

Our standards are strictly enforced by **ESLint v9** using a combination of specialized plugins:
- `@typescript-eslint`: Ensures rigorous type safety and modern TS patterns.
- `@react-three`: Validates R3F-specific performance and best practices (no allocations in `useFrame`).
- `import`: Enforces clean and predictable module resolution.

### 5.1. General Policies
- **Console Policy**: `console.log` is prohibited. Use `console.warn/error/info` only for diagnostics or formal logging plugins.
- **No Floating Promises**: All promises must be awaited or marked with `void` to signify intentional asynchronous execution.
- **Strict Booleans**: Explicit checks only (`if (value !== undefined)` instead of `if (value)`).
- **Early Returns**: Favor early returns to reduce indentation and improve readability.
- **Error Handling**: Use custom `AppError` class for backend errors to maintain consistent response formats.

## 🏷️ 6. Naming Conventions

- **Schemas**: Always end with `Schema` (e.g., `UserSchema`).
- **Files**: `name.type.ts` (e.g., `auth.service.ts`, `player.component.tsx`).
- **Variables & Methods**: CamelCase for classes/types, camelCase for variables and methods.

## 📝 7. Documentation Standards

- **Clarity**: All code and markdown files must include clear and concise comments.
- **SSOT**: Strategic documents (Masterplan, Architecture) located in `studio/strategy/` are the primary source of truth for features and system behavior.
- **Global Maintainability**: All documentation must be in English to ensure the project can be maintained by a global team.
