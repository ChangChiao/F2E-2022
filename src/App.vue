<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Index from "./views/Index.vue";
import { onMounted } from "vue";
let windowWidth = 0;
const checkDevice = () => {
  if (
    windowWidth <= 1024 &&
    window.innerHeight > 1024 &&
    windowWidth >= 1024 &&
    window.innerHeight < 1024
  ) {
    alert("請重新整理！確保動畫可以正常運行");
  }
};
onMounted(() => {
  windowWidth = window.innerWidth;
  window.onresize = checkDevice;
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
});
</script>

<template>
  <div>
    <Index />
  </div>
</template>

<style></style>
