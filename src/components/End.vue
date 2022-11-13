<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";
import JoinBtn from "./common/JoinBtn.vue";
import { useMedia } from "../hooks/useMedia";
const isMobile = useMedia();
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  if (isMobile.value) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-end",
        scrub: true,
        start: "top bottom",
        // end: "bottom bottom",
        toggleClass: "active",
      },
    });
    tl.to(".pattern", {
      opacity: 1,
      duration: 2,
    }).to(".pattern", {
      opacity: 1,
      duration: 2,
    });
    return;
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-end",
      pin: true,
      scrub: true,
      toggleClass: "active",
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
        duration: 1,
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
        duration: 1,
      },
      "<"
    )
    .to(".left-line", {
      xPercent: -5,
      duration: 1,
    })
    .to(
      ".right-line",
      {
        xPercent: 10,
        duration: 1,
      },
      "<"
    )
    .to(".left-line", {
      xPercent: -20,
      duration: 1,
    })
    .to(".line", {
      scale: 1.5,
      duration: 1,
      opacity: 0,
    })
    .to(
      ".finish-bar",
      {
        duration: 1,
        opacity: 0,
      },
      "<"
    )
    .to(".pattern", {
      opacity: 1,
      duration: 2,
    });
});
</script>

<template>
  <section class="z-50 pointer-events-auto section banner section-end">
    <div
      class="cloud-end fixed top-[30%] hidden w-full items-center justify-between opacity-0 lg:flex"
    >
      <img class="w-1/4" src="@/assets/bg/bg_decorate_01.png" alt="" />
      <img class="w-1/4" src="@/assets/bg/bg_decorate_05.png" alt="" />
    </div>
    <div
      class="pattern relative left-0 right-0 z-[999] m-auto mx-auto w-3/5 translate-y-[65%] text-center opacity-0 lg:fixed lg:bottom-0 lg:top-0 lg:h-[800px] lg:w-[400px]"
    >
      <img src="@/assets/logo/logo.png" class="mb-4" alt="" />
      <a href="https://2022.thef2e.com/" target="_blank">
        <JoinBtn :size="isMobile ? 'small' : 'big'" :isShowHand="true" />
        <h3 class="pt-2 text-3xl text-highlight-normal lg:text-5xl">
          立即報名
        </h3>
      </a>
    </div>
    <img
      class="fixed top-0 left-0 right-0 z-10 hidden h-screen mx-auto origin-center opacity-0 finish-bar lg:block"
      src="@/assets/main/finish.png"
      alt=""
    />
    <div
      class="line fixed left-0 right-0 top-[60%] mx-auto hidden h-20 w-full origin-center items-center justify-center opacity-0 lg:flex"
    >
      <img
        class="w-1/2 -mr-8 left-line"
        src="@/assets/main/finishLine_l.png"
        alt=""
      />
      <img
        class="w-1/2 right-line"
        src="@/assets/main/finishLine_r.png"
        alt=""
      />
    </div>
  </section>
</template>
