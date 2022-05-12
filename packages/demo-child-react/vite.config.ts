import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { microWebPlugin } from '@micro-web/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react/',
  server: {
    port: 3002,
  },
  plugins: [react(), microWebPlugin({ styleAppendTo: 'document.head' })],
});
