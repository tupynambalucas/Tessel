# 🌌 Tessel - Hybrid Spatial Social Ecosystem

**Tessel** is a next-generation hybrid spatial social ecosystem that bridges the gap between immersive 3D presence and asynchronous social networking. It leverages **WebGPU** for high-fidelity real-time interaction and a robust web platform for persistent community engagement.

## 🏛️ The Architecture: Hub & Instance

Tessel operates on a dual-layer social model:

- **The Social Hub (`apps/www`)**: An asynchronous social network (similar to X/Discord). The central point for identity, timelines, community groups, private messaging, and the persistent marketplace.
- **The Immersive Instance (`packages/game`)**: A synchronous 3D experience. Focuses on spatial presence, positional voice interaction, and real-time social physics powered by WebGPU and Rapier.

## 🚀 Key Features

- **Integrated Social Layer**: Friendships and interactions persist outside the 3D world via feeds and real-time notifications.
- **Media Bridge**: Seamlessly capture and share 3D moments from the "Instance" directly to the "Hub" timeline.
- **Unified Identity (SSO)**: A single account across all platforms, with the Hub acting as the primary identity provider.
- **Authoritative Simulation**: Secure and synchronized 3D environments for consistent multiplayer experiences.
- **WebGPU Powered**: Cutting-edge rendering using Three.js Node API (TSL).

## 🏗️ Governance & Documentation

- **[Architecture Overview](./docs/ARCHITECTURE.md)**: System design, data flows, and technology stack.
- **[Style Guide](./docs/STYLEGUIDE.md)**: Coding standards and quality requirements.
- **[Product Vision](./docs/PRODUCT.md)**: Strategic pillars and target audience.
- **[Contributing Guide](./CONTRIBUTING.md)**: Setup instructions and workflow.

## 📊 Roadmap & Changelog

- **[Master Roadmap](./ROADMAP.md)**: Current status and future milestones.
- **[Changelog](./CHANGELOG.md)**: Historical versions and updates.

---
*Building the future of spatial communication.*
