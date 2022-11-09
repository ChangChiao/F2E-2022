<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";
import { useMedia } from "../hooks/useMedia";
const isMobile = useMedia();
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  if (isMobile.value) return;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-mur",
      pin: true,
      scrub: true,
      markers: true,
      pinSpacing: false,
    },
  });

  tl.fromTo(
    ".cloud-mur",
    { scale: 1.2 },
    {
      scale: 0.8,
      opacity: 0.8,
      duration: 2,
    }
  )
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
    .fromTo(
      ".title-mur",
      { scale: 4 },
      {
        opacity: 1,
        duration: 4,
        scale: 1,
      }
    )
    .set({}, {}, "+=4");
});
</script>

<template>
  <section class="flex items-center justify-center h-screen banner section-mur">
    <div
      class="cloud-mur fixed top-[30%] flex w-full items-center justify-between overflow-hidden opacity-0"
    >
      <img class="w-1/4" src="@/assets/bg/bg_decorate_03.png" alt="" />
      <img class="w-1/4" src="@/assets/bg/bg_decorate_07.png" alt="" />
    </div>
    <h2
      class="title-mur origin-center -translate-y-[100px] text-6xl text-highlight-normal opacity-0"
    >
      區區修煉已經無法滿足了嗎？
    </h2>
  </section>
</template>
