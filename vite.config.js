import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig ({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.jsx"),
      name: "rampui",
   		 
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});