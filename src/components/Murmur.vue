<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TraffictLight from "@/components/banner/TraffictLight.vue";
import { onMounted } from "vue";
import JoinBtn from "./common/JoinBtn.vue";
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-mur",
      pin: true,
      scrub: true,
      pinSpacing: false,
    },
  });

  tl.to(".cloud-mur", {
    scale: 0.8,
    opacity: 0.8,
    duration: 2,
  })
    .to(".cloud-mur", {
      scale: 0.5,
      opacity: 0.5,
      duration: 2,
    })
    .to(".cloud-mur", {
      scale: 0.2,
      opacity: 0,
      display: "none",
      duration: 2,
    })
    .to(".title-mur", {
      opacity: 1,
    });
});
</script>

<template>
  <section class="h-screen banner section-mur">
    <div
      class="cloud-mur fixed top-[30%] flex w-full items-center justify-between"
    >
      <img class="w-1/4" src="@/assets/bg/bg_decorate_03.png" alt="" />
      <img class="w-1/4" src="@/assets/bg/bg_decorate_07.png" alt="" />
    </div>
    <h2 class="text-3xl opacity-0 title-mur text-highlight-normal">
      區區修煉已經無法滿足了嗎？
    </h2>
  </section>
</template>
