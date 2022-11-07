<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TraffictLight from "@/components/banner/TraffictLight.vue";
import { onMounted } from "vue";
import Count from "./banner/Count.vue";
gsap.registerPlugin(ScrollTrigger);
let player = null;

const handleMouseMove = (e) => {
  const valueX = Math.max((e.pageX * -1) / 12, 30);
  player.style.transform = `translateX(${valueX}px)`;
};

onMounted(() => {
  player = document.getElementById("player");
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-banner",
      pin: true,
      scrub: true,
      pinSpacing: false,
    },
  });

  tl.to(".cloud", {
    scale: 0.8,
    opacity: 0.8,
    duration: 2,
  })
    .to(".cloud", {
      scale: 0.5,
      opacity: 0.5,
      duration: 2,
    })
    .to(".cloud", {
      scale: 0.2,
      opacity: 0,
      display: "none",
      duration: 2,
    })
    .to(".bar", {
      display: "none",
      duration: 2,
    })
    .to(
      ".logo",
      {
        display: "none",
        duration: 2,
      },
      "<"
    );
});
</script>

<template>
  <section class="h-screen banner section-banner" @mousemove="handleMouseMove">
    <TraffictLight />
    <div class="cloud fixed top-[30%] flex w-full items-center justify-between">
      <img class="w-1/4" src="@/assets/bg/bg_decorate_01.png" alt="" />
      <img class="w-1/4" src="@/assets/bg/bg_decorate_05.png" alt="" />
    </div>
    <div class="fixed left-0 right-0 w-1/3 mx-auto logo top-2">
      <img class="" src="@/assets/logo/logo_text.png" alt="" />
      <h1
        class="w-2/3 h-10 p-2 mx-auto text-xl text-center text-white rounded-3xl bg-highlight-normal"
      >
        互動式網頁設計
      </h1>
    </div>
    <ul class="items-center justify-between w-1/2 count-list lg:flex">
      <li v-for="item in [920, 110, 41]" :key="item">
        <Count :count="item" />
      </li>
    </ul>
    <img class="fixed z-10 h-screen bar" src="@/assets/main/start.png" alt="" />
  </section>
</template>
