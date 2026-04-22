# 🖥️ Backend & DGS Roadmap (@tessel/api & @tessel/game-server)

Focus on stateless orchestration, stateful dedicated servers, and UDP-based synchronization.

## 🏁 Phase 1: Orchestration & Matchmaking (API)

- [x] Fastify 5 core setup.
- [ ] **Matchmaker Implementation:** BullMQ + Redis for player queuing.
- [ ] **DGS Provisioning Logic:** Local mock for Agones (child_process management).
- [ ] Session persistence and JWT-based authentication for Game Servers.

## 🕹️ Phase 2: The Dedicated Game Server (DGS)

- [ ] **Game Server Core:** Isolated package for authoritative simulation.
- [ ] **High-Performance UDP:** Integration with Geckos.io (WebRTC Data Channels).
- [ ] **Authoritative Physics:** Rapier (WASM) running at 20-30Hz in Worker Threads.
- [ ] **Redis Pub/Sub:** Real-time communication bridge between API and DGS instances.

## 🚀 Phase 3: Infra & Scaling (Agones)

- [ ] **Agones Integration:** Kubernetes orchestration for DGS lifecycle.
- [ ] **Containerization:** Optimized Docker images for low-footprint game servers.
- [ ] **Observability:** Sentry Performance and custom telemetry for tick-rate stability.
- [ ] Automated stress testing for concurrent DGS instances.

---

_Status: Transitioning to DGS Architecture_
