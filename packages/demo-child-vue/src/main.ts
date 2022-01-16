import { createApp } from "vue";
import App from "./App.vue";

if (!import.meta.url.includes("microAppEnv")) {
  createApp(App).mount("#app");
}

export default (container: HTMLElement) => {
  const app = createApp(App);
  return {
    mount() {
      app.mount(container);
    },
    unmount() {
      app.unmount();
    },
  };
};
