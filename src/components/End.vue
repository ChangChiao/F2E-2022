<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";
import JoinBtn from "./common/JoinBtn.vue";
import { useMedia } from "../hooks/useMedia";
const isMobile = useMedia();
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  if (!isMobile) return;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-end",
      pin: true,
      scrub: true,
      pinSpacing: false,
    },
  });

  tl.to(".cloud-end", {
    scale: 0.8,
    opacity: 0.8,
    duration: 2,
  })
    .to(".cloud-end", {
      scale: 0.5,
      opacity: 0.5,
      duration: 2,
    })
    .to(".cloud-end", {
      scale: 0.2,
      opacity: 0,
      display: "none",
      duration: 2,
    })
    .to(".finish-bar", {
      display: "none",
      duration: 2,
    })
    .to(
      ".line",
      {
        // display: "none",
        duration: 2,
      },
      "<"
    )
    .to(
      ".pattern",
      {
        opacity: 1,
        duration: 2,
      },
      "<"
    );
});
</script>

<template>
  <section class="h-screen banner section-end">
    <div
      class="cloud-end fixed top-[30%] flex w-full items-center justify-between"
    >
      <img class="w-1/4" src="@/assets/bg/bg_decorate_01.png" alt="" />
      <img class="w-1/4" src="@/assets/bg/bg_decorate_05.png" alt="" />
    </div>
    <div class="opacity-0 pattern">
      <img src="@/assets/logo/logo.png" alt="" />
      <JoinBtn size="w-80" :isShowHand="true" />
      <h3 class="text-highlight-normal">立即報名</h3>
    </div>
    <img
      class="fixed z-10 hidden h-screen finish-bar lg:block"
      src="@/assets/main/finish.png"
      alt=""
    />
    <div
      class="line fixed left-0 right-0 top-[50%] z-50 mx-auto flex hidden h-20 w-full items-center justify-center lg:block"
    >
      <img class="w-1/2 -mr-5" src="@/assets/main/finishLine_l.png" alt="" />
      <img class="w-1/2" src="@/assets/main/finishLine_r.png" alt="" />
    </div>
  </section>
</template>
