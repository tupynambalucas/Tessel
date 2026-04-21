import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import svgr from 'vite-plugin-svgr';
import glsl from 'vite-plugin-glsl';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      include: '**/*.svg?react',
    }),
    glsl({
      include: ['**/*.glsl', '**/*.wgsl', '**/*.vert', '**/*.frag', '**/*.vs', '**/*.fs'],
      warnDuplicatedImports: true,
      minify: false,
      watch: true,
      root: '/',
    }),
  ],

  optimizeDeps: {
    /* Vital para HMR: impede o Vite de pré-empacotar os workspaces locais */
    exclude: ['@tessel/game', '@tessel/core'],
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

  server: {
    host: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    reportCompressedSize: true,
  },
});
