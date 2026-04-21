import { resolve } from 'path';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    root: resolve(__dirname, 'src/renderer'),
    build: {
      rollupOptions: {
        input: resolve(__dirname, 'src/renderer/index.html'),
      },
    },
    assetsInclude: [
      '**/*.glb',
      '**/*.gltf',
      '**/*.otf',
      '**/*.glsl',
      '**/*.wgsl',
      '**/*.vert',
      '**/*.frag',
      '**/*.vs',
      '**/*.fs',
    ],
    define: {
      'process.env.APP_VERSION': JSON.stringify(process.env.npm_package_version),
    },
    optimizeDeps: {
      /* Impede o cache do Vite, habilitando HMR instantâneo para os pacotes do monorepo */
      exclude: ['@tessel/game', '@tessel/core'],
    },
    plugins: [react(), tsconfigPaths()],
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
        },
      },
    },
  },
});
