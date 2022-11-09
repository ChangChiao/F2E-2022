<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
import { useMedia } from "../hooks/useMedia";
const isMobile = useMedia();
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  if (isMobile.value) return;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-sponsors",
      pin: true,
      scrub: true,
    },
  });

  if (isMobile.value) {
    tl.from(".title-sponsor", {
      yPercent: -100,
    })
      .from(".sponsor-1", {
        yPercent: 100,
        opacity: 0,
        duration: 2,
      })
      .from(".sponsor-2", {
        yPercent: 100,
        opacity: 0,
        duration: 2,
      })
      .from(".sponsor-3", {
        yPercent: 100,
        opacity: 0,
        duration: 2,
      });
    return;
  }
  tl.from(".sponsor-group", {
    opacity: 0,
    translateY: 40,
  })
    .fromTo(
      ".title-sponsor",
      { opacity: 0 },
      {
        opacity: 1,
      }
    )
    .to(".tree-group", {
      opacity: 1,
    });
});
</script>

<template>
  <section class="pt-10 section section-sponsors">
    <h2 class="title title-sponsor">贊助單位</h2>
    <div
      class="items-center justify-between pt-4 mx-auto sponsor-group lg:flex lg:w-2/3 lg:pt-20"
    >
      <div class="sponsor-1">
        <div class="sponsor-img">
          <img src="../assets/sponsor/blockstudio_logo.f3ba8de.png" alt="" />
        </div>
        <h4 class="hash-tag"># 版塊設計</h4>
      </div>
      <div class="sponsor-2">
        <div class="sponsor-img">
          <img src="../assets/sponsor/titan_logo.5e2885a.png" alt="" />
        </div>
        <h4 class="hash-tag"># 鈦坦科技</h4>
      </div>
      <div class="sponsor-3">
        <div class="sponsor-img">
          <img src="../assets/sponsor/kdan_logo.e8a0000.png" alt="" />
        </div>
        <h4 class="hash-tag"># 凱細科技</h4>
      </div>
    </div>
    <div
      class="fixed bottom-0 left-0 right-0 flex justify-between w-2/3 mx-auto scale-125 opacity-0 tree-group"
    >
      <img class="w-1/4" src="@/assets/bg/bg_decorate_04.png" alt="" />
      <img class="w-1/4" src="@/assets/bg/bg_decorate_08.png" alt="" />
    </div>
  </section>
</template>
<style scoped>
.sponsor-img {
  @apply h-[200px] w-[200px] overflow-hidden  rounded-[32px] border-8 border-primary-normal 2xl:h-[250px] 2xl:w-[250px];
}
</style>
