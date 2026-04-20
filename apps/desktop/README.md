# @tessel/app-desktop - Desktop Application

Desktop version of Tessel, built with **Electron** and **Vite**. It provides a native experience with enhanced performance and deep system integration for voice chat.

## 🛠 Tech Stack

- **Framework**: Electron
- **Renderer**: React 19 + Vite
- **Graphics**: WebGPU (Chromium-based)
- **Physics**: Rapier

## 🚦 Getting Started

### Development

```bash
npm run dev
```

### Build

```bash
# For Windows
npm run build:win

# For macOS
npm run build:mac
```

## 🏗 Architecture

Utilizes `electron-vite` for a streamlined development experience. The main process handles window management and system-level integrations, while the renderer process hosts the game engine from `@tessel/game`.

---
*Desktop Entry Point - Tessel*
