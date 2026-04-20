# @tessel/app-web - Web Application

This is the web platform for Tessel, a 3D multiplayer voice chat game. Built with React 19 and Vite, it delivers a high-performance experience directly in the browser using **WebGPU**.

## 🛠 Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Rendering**: WebGPU (Three.js / R3F)
- **Styling**: TailwindCSS v4
- **State Management**: Zustand / XState

## 🚦 Getting Started

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## 🏗 Architecture

The web app acts as a thin wrapper around the `@tessel/game` and `@tessel/website` packages, orchestrating the 3D canvas and the UI overlays.

---
*Web Entry Point - Tessel*
