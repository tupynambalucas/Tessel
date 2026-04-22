# 📖 Tessel Master Plan

## 1. Executive Summary
Tessel is a high-performance **Hybrid Spatial Social Ecosystem**. Our goal is to bridge the gap between immersive 3D presence and asynchronous social networking, providing a high-fidelity, web-first environment for global social interaction.

## 2. Technical Strategy

### 2.1. Web-First Performance
We leverage **WebGPU** to bring desktop-grade graphics to the browser. By using **Three Shading Language (TSL)**, we ensure future-proof rendering that scales across devices.

### 2.2. Authoritative Architecture
The `@tessel/api` validates all physics and social state changes, ensuring a secure and synchronized experience. Real-time traffic is handled by dedicated worker threads to maintain tick-rate stability.

### 2.3. Hub & Instance Synchronization
The **Social Hub** (`apps/www`) acts as the persistent brain, managing identity and communities, while the **Instance** provides the spatial body for interaction.

## 3. Implementation Phases

### Phase 1: Ecosystem Foundation & DGS
Focus on the core infrastructure and authoritative movement.
- Unified Identity (SSO) foundation.
- Authoritative Rapier physics integration.
- WebGPU/TSL base rendering pipeline.

### Phase 2: High-Performance Social Hub
Focus on persistent engagement and asynchronous interaction.
- Global and community social feeds.
- Private and group messaging systems.
- Marketplace core and persistent inventory hub.

### Phase 3: The Connected Experience
Focus on seamless integration and global scaling.
- **Media Bridge**: Automatic 3D capture publishing to social feeds.
- **Spatial Immersion**: Positional SFU voice chat and interactive objects.
- **Infrastructure Scaling**: Global Agones orchestration and stress testing.

## 4. Key Metrics
- **Latency**: Under 50ms round-trip for spatial movement.
- **Performance**: Consistent 60fps via WebGPU on mid-range hardware.
- **Retention**: Daily active engagement across both Hub (Social) and Instance (3D).
