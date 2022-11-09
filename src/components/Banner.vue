<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TraffictLight from "@/components/banner/TraffictLight.vue";
import { onMounted } from "vue";
import { useMedia } from "../hooks/useMedia";
import Count from "./banner/Count.vue";
const isMobile = useMedia();
gsap.registerPlugin(ScrollTrigger);
let player = null;
let windowWidth = 0;

const countList = [
  { title: "前端工程師", count: "920" },
  { title: "UI設計師", count: "110" },
  { title: "團體組", count: "47" },
];

const handleMouseMove = (e) => {
  const valueX = e.clientX;
  const isLeft = valueX <= windowWidth;
  if (isLeft) {
    player.classList.add("offset-left");
    player.classList.remove("offset-right");
  } else {
    player.classList.add("offset-right");
    player.classList.remove("offset-left");
  }
};

onMounted(() => {
  if (isMobile.value) return;
  player = document.getElementById("player");
  windowWidth = window.innerHeight / 2;
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
    duration: 4,
  })
    .to(".cloud", {
      scale: 0.5,
      opacity: 0.5,
      duration: 4,
    })
    .to(".cloud", {
      scale: 0.2,
      opacity: 0,
      duration: 4,
      display: "none",
    })
    .to(
      ".count-list",
      {
        display: "none",
        duration: 1,
      },
      6
    )
    .to(
      ".bar",
      {
        display: "none",
        duration: 1,
      },
      7
    )
    .to(
      ".logo",
      {
        display: "none",
        duration: 1,
      },
      "<"
    );
});
</script>

<template>
  <section class="h-screen banner section-banner" @mousemove="handleMouseMove">
    <img
      class="fixed left-0 right-0 z-10 hidden h-screen mx-auto pointer-events-none bar lg:block"
      src="@/assets/main/start.png"
      alt=""
    />

    <div class="cloud fixed top-[30%] flex w-full items-center justify-between">
      <img class="w-1/4" src="@/assets/bg/bg_decorate_01.png" alt="" />
      <img class="w-1/4" src="@/assets/bg/bg_decorate_05.png" alt="" />
    </div>
    <div
      class="logo fixed left-0 right-0 top-[5%] z-20 mx-auto w-1/2 max-w-[600px]"
    >
      <img class="" src="@/assets/logo/logo_text.png" alt="" />
      <h1
        class="w-2/3 h-10 p-2 mx-auto text-xl text-center text-white rounded-3xl bg-highlight-normal"
      >
        互動式網頁設計
      </h1>
    </div>
    <div
      class="count-list top-[40%] left-0 right-0 m-auto w-2/3 max-w-[800px] -translate-y-10 items-center justify-between lg:fixed lg:flex"
    >
      <Count v-for="item in countList" :itemData="item" />
    </div>
    <TraffictLight />
  </section>
</template>
