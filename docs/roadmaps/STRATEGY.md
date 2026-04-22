# 🗺️ Tessel Strategic Roadmap (Master)

High-level vision and cross-package milestones focused on the Hybrid Spatial Social Ecosystem (Hub & Instance).

## 🏁 Phase 1: Ecosystem Foundation & DGS

_Packages involved: Core, Game, Api, WWW, Game-Server_

- [x] Monorepo architecture and enterprise documentation structure.
- [ ] **Unified Identity (SSO):** Web-based login acting as Identity Provider.
- [ ] **DGS & Room Instancing:** Orchestration of isolated authoritative simulation instances.
- [ ] **Geckos.io Integration:** High-performance real-time synchronization (UDP-like).
- [ ] WebGPU/TSL rendering pipeline for high-fidelity cross-platform visuals.

## 📱 Phase 2: High-Performance Social Hub

_Packages involved: WWW, Api, Core_

- [ ] **Asynchronous Social Layer:** Global feeds, community groups, and private messaging via Socket.io.
- [ ] **Persistent Economy:** Central Marketplace and cross-instance inventory.
- [ ] **Tick-Rate Stability:** 20-30Hz authoritative Rapier simulation in Dedicated Game Servers.
- [ ] Real-time notification system across Hub and Instances.

## 🚀 Phase 3: The Connected Experience

_Packages involved: Game, WWW, Studio, Desktop_

- [ ] **Media Bridge:** Seamless in-game screenshot/video sharing to social feeds.
- [ ] **Spatial Immersion:** SFU-based positional voice chat and interactive objects.
- [ ] **Infrastructure Scaling:** Full Agones orchestration on Kubernetes.
- [ ] Community-driven content tools and localized social hubs.

---

## 🔗 Sub-Roadmaps

- [🎮 Game Engine](./GAME.md)
- [🖥️ Backend & DGS](./BACKEND.md)
- [🌐 Social Hub (WWW)](./WWW.md)
- [🧠 Core Logic](./CORE.md)
- [🎨 Studio & Assets](./STUDIO.md)
