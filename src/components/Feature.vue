<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMedia } from "../hooks/useMedia";
import { onMounted, ref } from "vue";
const isMobile = useMedia();
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      //   end: "top 30%",
      trigger: ".section-feature",
      pin: true,
      scrub: true,
      markers: true,
      pinSpacing: false,
    },
  });

  if (isMobile) {
    tl.from(".title-feature", {
      yPercent: -100,
    })
      .from(".feature-1", {
        xPercent: 100,
        duration: 2,
      })
      .from(".feature-2", {
        opacity: 0,
        duration: 2,
      })
      .from(".feature-3", {
        xPercent: -100,
        duration: 2,
      });
    return;
  }

  tl.to(".title-feature", {
    opacity: 1,
  })
    .to(
      ".grass-group",
      {
        scale: 1,
        opacity: 1,
      },
      "<"
    )
    .to(".feature-1", {
      opacity: 1,
      duration: 2,
    })
    .to(
      ".grass-group",
      {
        scale: 0.8,
        opacity: 0.8,
      },
      "<"
    )
    .to(".feature-2", {
      opacity: 1,
      duration: 2,
    })
    .to(
      ".grass-group",
      {
        scale: 0.5,
        opacity: 0.4,
      },
      "<"
    )
    .to(".feature-3", {
      opacity: 1,
      duration: 2,
    })
    .to(
      ".grass-group",
      {
        scale: 0.3,
        opacity: 0,
      },
      "<"
    )
    .to(".section-feature", {
      opacity: 0,
    });
});
</script>

<template>
  <div class="pt-10 section section-feature">
    <div class="feature-inner">
      <h2 class="opacity-0 title-feature feature">你是否也有以下困擾？</h2>
      <div class="items-center justify-between lg:flex">
        <div class="opacity-0 feature-1">
          <h3 class="slogan">羨慕別人的酷酷網頁動畫？</h3>
          <img src="@/assets/main/question_1.png" alt="" />
        </div>
        <div class="opacity-0 feature-2">
          <h3 class="slogan">滿足不了同事的許願？</h3>
          <img src="@/assets/main/question_2.png" alt="" />
        </div>
        <div class="opacity-0 feature-3">
          <h3 class="slogan">動畫技能樹太雜無從下手？</h3>
          <img src="@/assets/main/question_3.png" alt="" />
        </div>
      </div>
      <div
        class="fixed bottom-0 left-0 right-0 flex justify-between w-2/3 mx-auto scale-125 opacity-0 grass-group"
      >
        <img class="w-1/6" src="@/assets/bg/bg_decorate_09.png" alt="" />
        <img class="w-1/6" src="@/assets/bg/bg_decorate_09.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.slogan {
  @apply pb-2 text-center text-xl text-highlight-normal;
}
</style>
