<script setup>
import gsap from "gsap";
import JoinBtn from "./common/JoinBtn.vue";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMedia } from "../hooks/useMedia";
import { onMounted } from "vue";
const isMobile = useMedia();
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  if (!isMobile) return;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-stage",
      pin: true,
      scrub: true,
    },
  });

  if (isMobile.value) {
    tl.from(".title-stage", {
      yPercent: -100,
    })
      .from(".stage-1", {
        yPercent: 100,
        opacity: 0,
        duration: 2,
      })
      .from(".stage-2", {
        yPercent: 100,
        opacity: 0,
        duration: 2,
      })
      .from(".stage-3", {
        yPercent: 100,
        opacity: 0,
        duration: 2,
      });
    return;
  }

  tl.fromTo(
    ".title-stage",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 2,
    }
  )
    .fromTo(".line-mask", { width: "100%" }, { width: 0, duration: 3 }, 5)
    .from(".stage-group", {
      opacity: 0,
      translateY: 40,
      duration: 10,
    })
    .to(".title-stage", {
      opacity: 0,
    });
});
</script>

<template>
  <section class="pt-10 section section-stage">
    <div class="title-stage" data-aos="fade-up">
      <h2 class="title">本屆主題：互動式網頁設計</h2>
      <h3 class="sub-title">以下兩個角色進行攜手合作</h3>
    </div>
    <div
      class="flex items-center justify-between w-1/2 pt-20 mx-auto opacity-100 stage-group"
    >
      <div class="opacity-1 stage-1 lg:w-1/3">
        <div class="bg-secondary-normal">
          <JoinBtn size="w-16" isShowHand="true" />
          <h4 class="slogan">SIGN UP</h4>
          <span class="date">10/1 - 11/16</span>
          <p class="sub-title">截止前可修改報名組別</p>
        </div>
        <img
          class="w-6 for-mobile"
          src="../assets/main/date_weekLine.png"
          alt=""
        />
      </div>
      <div class="w-1/3 opacity-1 stage-2 lg:w-1/3">
        <div class="bg-secondary-normal">
          <img class="w-24" src="../assets/main/date_start.png" alt="" />
          <h4 class="slogan">START</h4>
          <span class="date">10/31 - 11/28</span>
          <p class="sub-title">10/31(一) UI</p>
          <p class="sub-title">團體組開賽 11/7(一) 前端組開賽</p>
        </div>
        <img class="w-6" src="../assets/main/date_weekLine.png" alt="" />
      </div>
      <div class="w-1/3 opacity-1 stage-3 lg:w-1/3">
        <div class="bg-secondary-normal">
          <img class="w-24" src="../assets/main/date_upload.png" alt="" />
          <h4 class="slogan">UPLOAD</h4>
          <span class="date">10/31 - 11/28</span>
          <p class="sub-title">依賽程登錄作品</p>
          <p class="remark">額外競賽： 主題豐厚獎金等著你</p>
        </div>
        <img
          class="w-6 for-mobile"
          src="../assets/main/date_weekLine.png"
          alt=""
        />
      </div>
    </div>
    <div class="relative for-mobile">
      <img src="../assets/main/date_line.png" alt="" />
      <div class="absolute top-0 h-20 line-mask bg-secondary-normal"></div>
    </div>
  </section>
</template>
<style scoped>
.slogan {
  @apply pt-2 pb-2 text-center text-4xl font-bold tracking-wider text-highlight-normal;
}
.date {
  @apply rounded-2xl bg-primary-normal px-4 py-2 text-center text-xl text-white;
}

.for-mobile {
  @apply hidden lg:block;
}
</style>
