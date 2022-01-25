import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { microWebPlugin } from '@micro-web/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue/',
  server: {
    port: 3004,
  },
  plugins: [vue(), microWebPlugin()],
});
