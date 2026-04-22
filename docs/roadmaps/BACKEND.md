# 🖥️ Backend & DGS Roadmap (@tessel/api & @tessel/game-server)

Focus on stateless orchestration, stateful dedicated servers, and high-performance room instancing.

## 🏁 Phase 1: Orchestration & Matchmaking (API)

- [x] Fastify 5 core setup.
- [ ] **Matchmaker Implementation:** BullMQ + Redis for player queuing.
- [ ] **Room Instancing (DGS Provisioning):** Local mock for Agones (child_process management) to spawn room instances.
- [ ] Unified Identity integration: Hub-First authentication for game server access.

## 🕹️ Phase 2: The Dedicated Game Server (DGS)

- [ ] **Game Server Core:** Isolated package for authoritative simulation.
- [ ] **Geckos.io Integration:** High-performance real-time synchronization via WebRTC Data Channels (UDP).
- [ ] **Authoritative Physics:** Rapier (WASM) running at 20-30Hz in Worker Threads.
- [ ] **Redis Pub/Sub:** Real-time communication bridge between orchestration API and active room instances.

## 🚀 Phase 3: Infra & Scaling (Agones)

- [ ] **Agones Integration:** Full Kubernetes orchestration for automated room instance lifecycle.
- [ ] **Containerization:** Optimized Docker images for low-footprint Dedicated Game Servers.
- [ ] **Observability:** Custom telemetry for tick-rate stability and network jitter monitoring.
- [ ] Automated stress testing for concurrent room instancing.

---

_Status: Transitioning to Room Instancing Architecture_
