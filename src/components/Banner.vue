<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TraffictLight from "@/components/banner/TraffictLight.vue";
import { onMounted } from "vue";
import { useMedia } from "../hooks/useMedia";
import Count from "./banner/Count.vue";
const isMobile = useMedia();
gsap.registerPlugin(ScrollTrigger);
const countList = [
  { title: "前端工程師", count: "920" },
  { title: "UI設計師", count: "110" },
  { title: "團體組", count: "47" },
];

const props = defineProps({
  isShowLoading: {
    type: Boolean,
  },
});

onMounted(() => {
  if (isMobile.value) return;
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
  <section
    :class="[
      !isShowLoading && 'animate-mask',
      'banner section-banner h-screen bg-secondary-normal',
    ]"
  >
    <img
      class="fixed left-0 right-0 z-10 hidden h-screen mx-auto pointer-events-none bar lg:block"
      src="@/assets/main/start.png"
      alt=""
    />

    <div
      class="cloud absolute top-[50%] flex w-full items-center justify-between lg:fixed lg:top-[30%]"
    >
      <img class="w-1/4" src="@/assets/bg/bg_decorate_01.png" alt="" />
      <img class="w-1/4" src="@/assets/bg/bg_decorate_05.png" alt="" />
    </div>
    <div
      class="logo left-0 right-0 top-[4%] z-20 mx-auto w-3/4 max-w-[600px] pt-[20%] lg:fixed lg:w-1/2 lg:pt-0"
    >
      <img class="hidden lg:block" src="@/assets/logo/logo_text.png" alt="" />
      <img class="block lg:hidden" src="@/assets/logo/logo.png" alt="" />
      <h1
        class="w-2/3 p-2 mx-auto text-xl tracking-wider text-center text-white rounded-3xl bg-highlight-normal lg:text-4xl"
      >
        互動式網頁設計
      </h1>
    </div>
    <div
      class="count-list top-[36%] left-0 right-0 m-auto flex max-w-[800px] flex-col items-center justify-between pt-[10%] text-xl lg:fixed lg:w-2/3 lg:-translate-y-10 lg:flex-row lg:pt-0"
    >
      <Count class="mb-4 lg:mb-0" v-for="item in countList" :itemData="item" />
    </div>
    <TraffictLight />
  </section>
</template>
