<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";
import { useMedia } from "../hooks/useMedia";
const isMobile = useMedia();
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  if (isMobile.value) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-mur",
        scrub: true,
        markers: true,
        start: "top center",
        end: "bottom bottom",
      },
    });
    tl.fromTo(
      ".title-mur",
      { scale: 3 },
      {
        opacity: 1,
        duration: 4,
        scale: 1,
      }
    );
    return;
  }

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
    { scale: 1.5 },
    {
      scale: 0.8,
      opacity: 0.8,
      duration: 4,
    }
  )
    .fromTo(
      ".title-mur",
      { scale: 4 },
      {
        opacity: 1,
        duration: 4,
        scale: 1,
      },
      "<"
    )
    .set({}, {}, "+=4")
    .to(".title-mur", {
      opacity: 0,
      duration: 2,
    })
    .to(".cloud-mur", { opacity: 0 }, "<");
});
</script>

<template>
  <section
    class="flex items-center justify-center h-screen overflow-hidden banner section-mur"
  >
    <div
      class="cloud-mur fixed top-[30%] hidden w-full items-center justify-between overflow-hidden opacity-0 lg:flex"
    >
      <img class="w-1/4" src="@/assets/bg/bg_decorate_03.png" alt="" />
      <img class="w-1/4" src="@/assets/bg/bg_decorate_07.png" alt="" />
    </div>
    <h2
      class="title-mur origin-center text-3xl text-highlight-normal opacity-0 lg:-translate-y-[100px] lg:text-6xl"
    >
      區區修煉已經無法滿足了嗎？
    </h2>
  </section>
</template>
