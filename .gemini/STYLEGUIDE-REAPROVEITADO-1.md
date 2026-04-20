# Style Guide and Standards - Elo Organico

This document serves as the "Master Instruction" for code generation and review within this monorepo. Gemini must consult and strictly follow these guidelines.

## 1. Architecture and Guiding Principles

The project adheres to modern software architecture principles to ensure scalability, maintainability, and code quality.

### 1.1. Monorepo Structure

- **Framework:** Monorepo managed with NPM Workspaces.
- **Package Division:**
  - `packages/shared`: Contains Zod schemas, constants, DTO types, and i18n translations. It is the **Single Source of Truth** for data contracts.
  - `packages/backend`: Node.js API using Fastify and Mongoose.
  - `packages/frontend`: SPA application using React, Vite, and Zustand.
  - `packages/workspace`: Internal tools for strategy, brand tokens, and automation scripts.

### 1.2. Architectural Principles

- **Domain-Driven Design (DDD):** The business logic is organized into domains to facilitate maintenance and scalability. This is evident in the backend, frontend, and shared packages.
- **Single Source of Truth (SSOT):** Data structures must be defined in `@elo-organico/shared`. Strategic truth is managed in `@elo-organico/workspace`.
- **SOLID Principles:**
  - **Single Responsibility:** Each class, function, or module has one specific purpose.
  - **Open/Closed:** Modules are open for extension but closed for modification.
  - **Liskov Substitution:** Subtypes must be substitutable for their base types.
  - **Interface Segregation:** Clients should not be forced to depend on interfaces they do not use.
  - **Dependency Inversion:** High-level modules do not depend on low-level modules; both depend on abstractions.

## 2. Code Formatting (Prettier)

Code must follow the rules defined in `.prettierrc`:

- **Indentation:** 2 spaces.
- **Semicolons:** Always use (true).
- **Quotes:** Use single quotes (true), except in JSX.
- **Trailing Comma:** Always use where possible (all).
- **Line Width:** Maximum of 100 characters.

## 3. TypeScript Rules (Based on eslint.config.ts)

The configuration is set for maximum type safety.

- **Object Definitions:** You **must** use `interface` instead of `type` for object definitions to ensure consistency. Union types and type aliases for primitives or third-party utility types (like `z.infer<typeof Schema>`) are permitted.
- **Arrays:** Use the simplified `T[]` syntax instead of `Array<T>`.
- **Type Imports:** Always use `import type` for types. Types must be imported separately from values (style: `separate-type-imports`) to optimize build performance and avoid circular dependencies.
- **Unused Variables:** Must be prefixed with an underscore (e.g., `_id`, `_args`) to be ignored by the linter.
- **Strict Typing:** The use of `any` is strictly forbidden.
- **Comparisons:** Always use strict equality (`===`), except for null/undefined checks where allowed.
- **Strict Booleans:** In strict packages (like `shared`), boolean expressions must be explicit. Use `if (value !== undefined)` instead of `if (value)`.

## 4. Asynchronous Code Management (Critical)

- **No Floating Promises:** It is forbidden to leave promises "floating". 
- **The `void` Operator:** When an async function is called for its side effects and its result is not awaited, it **must** be prefixed with the `void` operator (e.g., `void startServer()`, `void fetchActiveCycle()`). This explicitly signals intent to both the compiler and other developers.
- **Fastify Handlers:** In the backend, route handlers should use the `FastifyZodHandler` type and return `Promise<void>`. Use `void reply.send()` to satisfy the linter when not returning the reply object directly.
- **Error Handling:** Every `await` operation should be either within a `try/catch` block or part of a chain with a `.catch()` if it's a top-level floating promise.

## 5. Package-Specific Standards

### 5.1. Shared (@elo-organico/shared)

- **Maximum Rigor:** Boolean expressions must be strict (`strict-boolean-expressions` is an error).
- **Public APIs:** All public functions and exported members must have explicitly defined return types.
- **Strictness:** This package must have zero lint warnings or errors.

### 5.2. Backend (Fastify + Mongoose)

- **Domain Layers:** Follow the pattern: Controller -> Service -> Repository.
- **Naming:** Controllers and Services should use PascalCase for class names and camelCase for methods.
- **Response Mapping:** Controllers are responsible for mapping Mongoose documents to Shared DTOs using private mapping methods.

### 5.3. Frontend (React + Zustand)

- **Global State:** Use Zustand. Actions that trigger async side-effects should be called using `void` in `useEffect` or event handlers.
- **Styling:** Use **CSS Modules** (`.module.css`). Utility classes from Tailwind are allowed within CSS modules via `@apply` or directly in JSX for layout adjustments.
- **Console Logs:** `console.log` is allowed in development but must be removed or upgraded to `console.info/warn/error` before PR. Production build will fail on `console.log`.

## 6. Naming Conventions

- **Schemas:** Always end with `Schema` (e.g., `LoginRouteSchema`).
- **Files:** Follow the `name.type.ts` pattern (e.g., `auth.controller.ts`, `auth.api.ts`).
