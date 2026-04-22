# 🎮 Game Engine Roadmap (@tessel/game)

Focus on WebGPU rendering, client-side prediction, and UDP-based networking.

## 🏁 Phase 1: Rendering & Network Integration

- [ ] WebGPU Renderer initialization and TSL Pipeline.
- [ ] **UDP Client Integration:** Connecting to DGS via Geckos.io.
- [ ] **Client-Side Prediction (CSP):** Immediate input feedback with Rapier.
- [ ] **Entity Interpolation:** Smooth movements for remote players at 30Hz.
- [ ] Animation state machine integration synced with network state.

## 🌈 Phase 2: Visual Fidelity & FX

- [ ] Advanced TSL Shaders (Dynamic environments and WebGPU FX).
- [ ] Post-processing pipeline (Bloom, SSAO, Color Grading).
- [ ] Dynamic lighting and shadow optimization.
- [ ] Particle system (GPU-accelerated via TSL).

## 🗣️ Phase 3: Spatial Immersion

- [ ] **SFU Voice Integration:** LiveKit/Mediasoup for high-density spatial audio.
- [ ] Emote system with synchronized network triggers.
- [ ] Interactive world objects (Network-synced triggers and states).

---

_Status: Implementing CSP & UDP Sync_
