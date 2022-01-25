<script setup lang="ts">
import { ref } from "vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import logo from "./assets/logo.png";

const msg = ref("Hello Vue 3 + TypeScript + Vite");
</script>

<template>
  <img class="vue-logo" alt="Vue logo" :src="logo" />
  <HelloWorld :msg="msg" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.vue-logo {
  width: 200px;
}
</style>
