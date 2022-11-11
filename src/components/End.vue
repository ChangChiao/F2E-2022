<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";
import JoinBtn from "./common/JoinBtn.vue";
import { useMedia } from "../hooks/useMedia";
const isMobile = useMedia();
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-end",
      pin: !isMobile.value,
      scrub: true,
      markers: true,
      // pinSpacing: false,
      // end: window.innerHeight * 2,
    },
  });

  if (isMobile.value) {
    tl.to(".pattern", {
      opacity: 1,
      duration: 2,
    });
    return;
  }

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
      duration: 2,
    })
    .fromTo(
      ".finish-bar",
      {
        scale: 2,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
      }
    )
    .fromTo(
      ".line",
      {
        scale: 4,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
      },
      "<"
    )
    .to(".left-line", {
      xPercent: -5,
      duration: 1,
    })
    .to(".line", {
      scale: 1.5,
      duration: 1,
      opacity: 0,
    })
    .to(".finish-bar", {
      duration: 1,
      opacity: 0,
    })
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
  <section class="section banner section-end">
    <div
      class="cloud-end fixed top-[30%] hidden w-full items-center justify-between lg:flex"
    >
      <img class="w-1/4" src="@/assets/bg/bg_decorate_01.png" alt="" />
      <img class="w-1/4" src="@/assets/bg/bg_decorate_05.png" alt="" />
    </div>
    <div class="w-1/2 opacity-0 pattern">
      <img src="@/assets/logo/logo.png" alt="" />
      <JoinBtn size="w-80" :isShowHand="true" />
      <h3 class="text-highlight-normal">立即報名</h3>
    </div>
    <img
      class="fixed top-0 left-0 right-0 z-10 hidden h-screen mx-auto origin-center opacity-0 finish-bar lg:block"
      src="@/assets/main/finish.png"
      alt=""
    />
    <div
      class="line fixed left-0 right-0 top-[50%] z-50 mx-auto hidden h-20 w-full origin-center items-center justify-center opacity-0 lg:flex"
    >
      <img
        class="w-1/2 -mr-8 left-line"
        src="@/assets/main/finishLine_l.png"
        alt=""
      />
      <img class="w-1/2" src="@/assets/main/finishLine_r.png" alt="" />
    </div>
  </section>
</template>
