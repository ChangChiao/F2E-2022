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
      trigger: ".section-feature",
      // snap: [1, 2, 5, 7],
      pin: !isMobile.value,
      scrub: true,
      // markers: true,
      pinSpacing: isMobile.value,
      toggleClass: "active",
    },
  });
  console.log("isMobile", isMobile.value);
  if (isMobile.value) {
    tl.from(".title-feature", {
      yPercent: -100,
    })
      .fromTo(
        ".feature-1",
        { xPercent: -100 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 1,
        }
      )
      .to(".feature-2", {
        opacity: 1,
        duration: 1,
        duration: 1,
      })
      .fromTo(
        ".feature-3",
        { xPercent: 100 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 1,
        }
      );
    return;
  }

  tl.timeScale(0.5)
    .to(
      ".title-feature",
      {
        opacity: 1,
        duration: 1,
      },
      1
    )
    .to(
      ".grass-group",
      {
        scale: 1.25,
        opacity: 1,
      },
      "<"
    )
    .fromTo(
      ".feature-1",
      { xPercent: -100 },
      {
        opacity: 1,
        duration: 4,
        xPercent: 0,
      }
      // 2
    )
    .to(
      ".grass-group",
      {
        scale: 1,
        opacity: 1,
      },
      "<"
    )
    .to(
      ".feature-2",
      {
        opacity: 1,
        duration: 4,
      }
      // 5
    )
    .to(
      ".grass-group",
      {
        scale: 0.8,
        opacity: 0.8,
      },
      "<"
    )
    .fromTo(
      ".feature-3",
      { xPercent: 100 },
      {
        opacity: 1,
        duration: 4,
        xPercent: 0,
      }
      // 7
    )
    // .addPause(10)
    // .addLabel("blueGreenSpin", 4)
    .set({}, {}, "+=4")
    // .to(".feature-3", {
    //   duration: 4,
    //   opacity: 1,
    // })
    .to(
      ".grass-group",
      {
        scale: 0.5,
        opacity: 0.5,
      },
      "<"
    )
    .to(".section-feature", {
      opacity: 0,
      duration: 1,
    });
});
</script>

<template>
  <div class="pt-10 section section-feature">
    <h2 class="opacity-0 title title-feature">你是否也有以下困擾？</h2>
    <div class="items-center justify-between wrapper lg:flex">
      <div class="feature feature-1">
        <h3 class="slogan">羨慕別人的酷酷網頁動畫？</h3>
        <img src="@/assets/main/question_1.png" alt="" />
      </div>
      <div class="feature feature-2">
        <h3 class="slogan">滿足不了同事的許願？</h3>
        <img src="@/assets/main/question_2.png" alt="" />
      </div>
      <div class="feature feature-3">
        <h3 class="slogan">動畫技能樹太雜無從下手？</h3>
        <img src="@/assets/main/question_3.png" alt="" />
      </div>
    </div>
    <div
      class="fixed bottom-0 left-0 right-0 justify-between hidden w-2/3 mx-auto scale-125 grass-group lg:flex"
    >
      <img class="w-1/6" src="@/assets/bg/bg_decorate_09.png" alt="" />
      <img class="w-1/6" src="@/assets/bg/bg_decorate_09.png" alt="" />
    </div>
  </div>
</template>
<style scoped>
.feature {
  @apply mr-3 opacity-0;
}
.slogan {
  @apply pb-2 text-center text-4xl text-highlight-normal;
}
</style>
