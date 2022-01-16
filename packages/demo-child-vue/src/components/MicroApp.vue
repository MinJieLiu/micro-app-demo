<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const { entry, ...props } = defineProps<{ entry: string }>();
const container = ref<HTMLDivElement | null>(null);
const config = ref();

onMounted(() => {
  const element = container.value
  import(/* @vite-ignore */ entry).then((res) => {
    // 将 div 传给子应用渲染
    const config = res.default(element);
    // 调用子应用的装载方法
    config.mount?.(props);
    config.value = config;
  });
});

onUnmounted(() => {
  // 调用子应用的卸载方法
  config.value?.unmount?.();
});
</script>

<template>
  <div ref="container"></div>
</template>
