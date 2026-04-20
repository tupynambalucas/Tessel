# @tessel/game - Game Engine Core

This package contains the core 3D logic and rendering components for the Tessel game. It is built on top of **React Three Fiber** and **Three.js**, with a primary focus on **WebGPU** performance.

## 🛠 Features

- **WebGPU Rendering**: Modern rendering pipeline using TSL (Three Shading Language).
- **R3F Components**: Optimized 3D components for players, environments, and interactions.
- **Client-side Physics**: Local prediction and interpolation using Rapier.
- **Spatial Audio Integration**: Positional voice chat hooks.
- **State Integration**: Seamless connection with `@tessel/core` state machines.

## ⚛️ Tech Stack

- **Three.js**: v0.182+ (WebGPU priority).
- **React Three Fiber**: v9+.
- **Rapier**: 3D physics engine.
- **Zustand**: Local engine state.

## 🏗 Directory Structure

- `src/canvas/`: Main scene and platform-specific canvas wrappers.
- `src/player/`: Character controllers, animations, and input handling.
- `src/scenes/`: High-level scene orchestrators (Lobby, Game, Launcher).
- `src/world/`: Environmental components and physics colliders.
- `src/hooks/`: Specialized 3D and animation hooks.

## 🚦 Usage

This package is consumed by the platform apps in `apps/`. It depends on `@tessel/core` for shared types and schemas.

```bash
npm run build
```

---
*Core Graphics & Logic - Tessel Engine*
