import react from '@vitejs/plugin-react';
import fs from 'fs';
import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    {
      name: 'inject-styles',
      transform(code, id) {
        if (id.endsWith('/index.ts')) {
          const stylesPath = resolve(__dirname, 'dist/style.css');

          if (fs.existsSync(stylesPath)) {
            const styles = fs.readFileSync(stylesPath, 'utf-8');

            return code + `
              const styleTag = document.createElement('style');
              styleTag.textContent = ${JSON.stringify(styles)};
              document.head.appendChild(styleTag);
            `;
          } else {
            console.error(`File not found: ${stylesPath}`);
          }
        }
        return code;
      },
    },
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