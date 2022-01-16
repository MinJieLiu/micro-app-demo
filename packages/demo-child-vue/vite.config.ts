import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vue/",
  server: {
    port: 3004,
  },
  plugins: [vue()],
});
