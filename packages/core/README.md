# @tessel/core - Shared Logic & SSOT

This package is the **Single Source of Truth (SSOT)** for the Tessel project. It contains all shared logic, schemas, and types used by both the backend and frontend.

## 📦 Exported Modules

1.  **Schemas (Zod)**: Rigorous definitions for all data contracts (Auth, Player, Room).
2.  **State Management**: XState machines for complex game state orchestration.
3.  **Constants**: Physics constants, camera settings, and game configuration.
4.  **Types**: Centralized TypeScript definitions inferred from schemas.
5.  **Locales**: Internationalization strings (i18next).

## 🔄 Development Flow

1.  **Modify**: Update schemas or constants in `packages/core`.
2.  **Build**: Run `npm run build` to generate types and distribution files.
3.  **Refactor**: Backend and Frontend will automatically detect type changes.

## 🛠 Available Commands

- `npm run build`: Compile TypeScript and generate declarations.
- `npm run typecheck`: Verify integrity without output.
- `npm run lint`: Enforce code standards.

---
*SSOT & Core Intelligence - Tessel*
