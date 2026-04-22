# 📖 Tessel Master Plan

## 1. Executive Summary
Tessel is a high-performance 3D spatial social platform. Our goal is to bridge the gap between simple 2D chats and heavy 3D games, providing a high-fidelity, web-first environment for social interaction.

## 2. Technical Strategy
### 2.1. Web-First Performance
We leverage **WebGPU** to bring desktop-grade graphics to the browser. By using **Three Shading Language (TSL)**, we ensure a future-proof rendering that can scale across devices.

### 2.2. Authoritative Architecture
Unlike many web games, Tessel uses an authoritative server model. The `@tessel/api` validates all physics and state changes, ensuring a secure and synchronized experience.

### 2.3. Modular Assets
Our `studio/` package acts as a specialized pipeline, transforming high-quality assets into web-optimized resources without losing visual fidelity.

## 3. Implementation Phases
### Phase 1: The Character Experience
Focus on the feeling of movement. If moving feels good, the foundation is solid.
- Movement synchronization.
- Animation blending.
- Collision detection.

### Phase 2: The Social Experience
Focus on communication.
- Spatial audio.
- Presence indicators.
- Room discovery.

### Phase 3: The Creative Experience
Focus on retention.
- Room customization.
- Persistent objects.
- Social features (Friends, Profiles).

## 4. Key Metrics
- **Latency**: Under 50ms round-trip for movement.
- **Performance**: Consistent 60fps on mid-range devices via WebGPU.
- **Retention**: Average session time for social interaction.

