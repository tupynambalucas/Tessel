# 🤝 Contributing to Tessel

First off, thank you for considering contributing to Tessel! It's people like you that make this 3D spatial social platform possible.

## 🚦 Getting Started

### 1. Environment Setup
To ensure consistency across development environments, we use a standardized stack:
- **Node.js**: v20+ (LTS recommended)
- **Package Manager**: NPM (Workspaces enabled)
- **Infrastructure**: Docker Desktop (for MongoDB and Redis)

```bash
# Clone the repository
git clone https://github.com/your-org/tessel.git
cd tessel

# Install dependencies
npm install

# Start local infrastructure
npm run infra:up
```

### 2. Development Workflow
We follow an authoritative server architecture. Before you start coding, please review our **[Architecture Map](./docs/ARCHITECTURE.md)**.

1.  **Shared First**: If your change involves data shared between client and server, modify `@tessel/core` Zod schemas first.
2.  **Branching**: Use descriptive branch names (`feat/character-sync`, `fix/voice-spatial-audio`).
3.  **Commits**: We use Conventional Commits (`feat:`, `fix:`, `refactor:`, `docs:`).

## 🎨 Coding Standards

Your code must adhere to our **[Style Guide](./docs/STYLEGUIDE.md)**. We strictly enforce:
- **100% English**: Code, comments, and documentation.
- **Strict Typing**: No `any`, rigorous null checks.
- **WebGPU/TSL**: New materials must use Three Shading Language.

## 📝 Submitting Changes

1.  **Format & Lint**: Run `npm run lint` and `npm run format`.
2.  **Tests**: Ensure all tests pass.
3.  **PR Description**: Explain *what* changed and *why*.
4.  **Changelog**: If your PR introduces a user-facing change, add an atomic fragment to `docs/changelogs/next-release.md`.

## 📜 Documentation Governance
- **Architecture**: [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)
- **Style Guide**: [docs/STYLEGUIDE.md](./docs/STYLEGUIDE.md)
- **Product Vision**: [docs/PRODUCT.md](./docs/PRODUCT.md)

---
*Building the future of spatial communication.*
