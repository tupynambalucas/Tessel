# 🌌 Tessel - 3D Multiplayer Voice Chat Game

**Tessel** is an immersive spatial social platform designed for high-performance 3D voice interaction. Built with a focus on modern web standards, it leverages **WebGPU** for advanced rendering and an authoritative backend for consistent multiplayer experiences.

## 🚀 Key Features

- **Spatial Social Experience**: Immersive 3D environments for real-time interaction.
- **WebGPU Powered**: Cutting-edge rendering using Three.js Node API (TSL).
- **Authoritative Physics**: Synchronized simulation using Rapier (Server & Client).
- **Cross-Platform**: Seamlessly available on Web and Desktop (Electron).
- **Spatial Audio**: High-fidelity voice chat with positional awareness.

## 🏗️ Governance & Documentation

We maintain high engineering standards to ensure scalability and performance:

- **[Architecture Overview](./docs/ARCHITECTURE.md)**: System design and technology stack.
- **[Style Guide](./docs/STYLEGUIDE.md)**: Coding standards and quality requirements.
- **[Product Vision](./docs/PRODUCT.md)**: Product pillars and target audience.
- **[Contributing Guide](./CONTRIBUTING.md)**: Setup instructions and workflow.

## 📊 Roadmap & Changelog

- **[Roadmap](./ROADMAP.md)**: Current status and future milestones.
- **[Changelog](./CHANGELOG.md)**: Historical versions and updates.

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

---
*Developed with focus on performance, scalability, and immersion.*
