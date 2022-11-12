<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMedia } from "../hooks/useMedia";
import JoinBtn from "../components/common/JoinBtn.vue";
const isMobile = useMedia();
gsap.registerPlugin(ScrollTrigger);
const isBottom = ref(false);
const detectBottom = () => {
  isBottom.value =
    window.innerHeight + Math.ceil(window.pageYOffset) >=
    document.body.offsetHeight;
};
onMounted(() => {
  if (isMobile.value) return;
  window.addEventListener("scroll", detectBottom);
});

onUnmounted(() => {
  window.removeEventListener("scroll", detectBottom);
});
</script>

<template>
  <footer
    :class="[
      isBottom && 'opacity-0',
      'footer fixed right-5 bottom-5 z-50 hidden text-center lg:block',
    ]"
  >
    <a href="https://2022.thef2e.com/" target="_blank">
      <strong class="pb-2 tracking-wider text-primary-normal">JOIN</strong>
      <JoinBtn :is-show-hand="true" />
    </a>
  </footer>
</template>
