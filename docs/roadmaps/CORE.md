# 🧠 Core & SSOT Roadmap (@tessel/core)

Focus on binary protocols, shared physics logic, and orchestration contracts.

## 🏁 Phase 1: Data Contracts & Serialization

- [x] Base Zod schemas for Auth and User.
- [ ] **Binary Serialization Schemas:** FlatBuffers or Protocol Buffers for physics sync.
- [ ] **Redis Pub/Sub Contracts:** Definition of inter-service messaging (ServerReady, RoomFull).
- [ ] Centralized error code mapping and shared constants.

## 🔄 Phase 2: Shared State Logic

- [ ] **XState Orchestration:** Player lifecycle (Queueing -> Connecting -> InRoom).
- [ ] **DGS Configuration:** Shared physics presets (Rapier constants) for Client/Server.
- [ ] Internationalization (i18n) key structure for multiplayer UI.

## 🛠️ Phase 3: Developer Experience (DX)

- [ ] **Binary Utility Library:** Fast Buffer-to-Object mapping helpers.
- [ ] Shared 3D Math (Vector/Matrix) validated for both Client and DGS.
- [ ] Mock generators for load testing scenarios.

---

*Status: Adapting for Binary Protocols*
