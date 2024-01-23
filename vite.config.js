import react from '@vitejs/plugin-react';
import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "rampui",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});