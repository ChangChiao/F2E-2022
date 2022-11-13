<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
import { useMedia } from "../hooks/useMedia";
const isMobile = useMedia();
gsap.registerPlugin(ScrollTrigger);

const toLink = (url) => {
  window.open(url, "_blank");
};
onMounted(() => {
  if (isMobile.value) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-sponsors",
        scrub: true,
        toggleClass: "active",
        start: "top center",
        end: "bottom bottom",
      },
    });
    tl.from(".title-sponsor", {
      yPercent: -100,
    })
      .fromTo(
        ".sponsor-1",
        { yPercent: 100 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 2,
        }
      )
      .fromTo(
        ".sponsor-2",
        { yPercent: 100 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 2,
        }
      )
      .fromTo(
        ".sponsor-3",
        { yPercent: 100 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 2,
        }
      );
    return;
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-sponsors",
      pin: true,
      scrub: true,
      pinSpacing: false,
      toggleClass: "active",
    },
  });

  tl.fromTo(
    ".title-sponsor",
    { opacity: 0 },
    {
      opacity: 1,
    }
  )
    .to(
      ".tree-group",
      {
        scale: 1.25,
        opacity: 1,
      },
      "<"
    )
    .fromTo(
      ".sponsor-1",
      { yPercent: 100 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
      }
    )
    .to(
      ".tree-group",
      {
        scale: 1,
        opacity: 1,
      },
      "<"
    )
    .fromTo(
      ".sponsor-2",
      { yPercent: 100 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
      }
    )
    .to(
      ".tree-group",
      {
        scale: 0.8,
        opacity: 0.8,
      },
      "<"
    )
    .fromTo(
      ".sponsor-3",
      { yPercent: 100 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        delay: 0.6,
      }
    )
    .to(
      ".tree-group",
      {
        scale: 0.5,
        opacity: 0.5,
      },
      "<"
    )
    .set({}, {}, "+=6")
    .to(".section-sponsors", { opacity: 0 });
});
</script>

<template>
  <section class="section section-sponsors">
    <h2 class="title title-sponsor">贊助單位</h2>
    <div
      class="items-center justify-between pt-4 mx-auto sponsor-group lg:flex lg:w-2/3 lg:pt-20"
    >
      <div class="sponsor sponsor-1">
        <div class="sponsor-img" @click="toLink('https://blockstudio.tw/')">
          <img src="../assets/main/logo_blockstudio.png" alt="" />
        </div>
        <h4 class="hash-tag"># 版塊設計</h4>
      </div>
      <div class="sponsor sponsor-2">
        <div class="sponsor-img" @click="toLink('https://titansoft.com/tw')">
          <img src="../assets/main/logo_titansoft.png" alt="" />
        </div>
        <h4 class="hash-tag"># 鈦坦科技</h4>
      </div>
      <div class="sponsor sponsor-3">
        <div
          class="sponsor-img"
          @click="toLink('https://www.kdanmobile.com/zh-tw')"
        >
          <img src="../assets/main/logo_kdanmobile.png" alt="" />
        </div>
        <h4 class="hash-tag"># 凱細科技</h4>
      </div>
    </div>
    <div
      class="fixed left-0 right-0 flex justify-between w-2/3 mx-auto origin-bottom scale-125 opacity-0 tree-group -bottom-4"
    >
      <img class="w-1/4" src="@/assets/bg/bg_decorate_04.png" alt="" />
      <img class="w-1/4" src="@/assets/bg/bg_decorate_08.png" alt="" />
    </div>
  </section>
</template>
<style scoped>
.sponsor {
  @apply mx-auto mb-12 w-[200px] cursor-pointer opacity-0 lg:mb-0 lg:w-auto;
}
.sponsor-img {
  @apply mb-5
  flex
  h-[200px]
  w-[200px]  
  cursor-pointer
  items-center  
  justify-center 
  overflow-hidden
  rounded-[32px] 
  bg-sponsor 
  bg-contain
  hover:bg-sponsor-h
  lg:h-[250px]
  lg:w-[250px];
  img {
    @apply w-[80%];
  }
}
</style>
