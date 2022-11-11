<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Index from "./views/Index.vue";
import { onMounted } from "vue";
let windowWidth = 0;

const throttle = (callback, wait) => {
  console.log("callback, wait", callback, wait);
  let timeStamp = 0;
  return function (...args) {
    if (Date.now() - timeStamp > wait) {
      callback.apply(this, args);
      timeStamp = Date.now();
    }
  };
};

const checkDevice = () => {
  console.warn("windowWidth", windowWidth);
  console.warn(" window.innerWidth", window.innerWidth);
  if (
    (windowWidth <= 1024 && window.innerWidth > 1024) ||
    (windowWidth >= 1024 && window.innerWidth < 1024)
  ) {
    location.reload();
    // alert("請重新整理！確保動畫可以正常運行");
  }
};
onMounted(() => {
  windowWidth = window.innerWidth;
  window.addEventListener("resize", throttle(checkDevice, 100));
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
