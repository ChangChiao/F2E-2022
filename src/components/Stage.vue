<script setup>
import gsap from "gsap";
import JoinBtn from "./common/JoinBtn.vue";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMedia } from "../hooks/useMedia";
import { onMounted } from "vue";
const isMobile = useMedia();
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-stage",
      pin: !isMobile.value,
      scrub: true,
      pinSpacing: false,
    },
  });

  if (isMobile.value) {
    tl.from(".title-stage", {
      yPercent: -100,
    })
      .fromTo(
        ".stage-1",
        { yPercent: 100 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 2,
        }
      )
      .fromTo(
        ".stage-2",
        { yPercent: 100 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 2,
        }
      )
      .fromTo(
        ".stage-3",
        { yPercent: 100 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 2,
        }
      );
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
    .fromTo(
      ".stage-item-1",
      {
        yPercent: 50,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 4,
      }
    )
    .fromTo(
      ".stage-item-2",
      {
        yPercent: 50,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 4,
      }
    )
    .fromTo(
      ".stage-item-3",
      {
        yPercent: 50,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 4,
      }
    )
    .set({}, {}, "+=6")
    .to(".section-stage", {
      opacity: 0,
    });
});
</script>

<template>
  <section class="pt-4 section section-stage">
    <div class="flex items-center justify-between w-3/4 mx-auto stage-group">
      <div class="translate-y-10 stage-item stage-item-1">
        <div class="stage-item-content">
          <JoinBtn size="w-16" :isShowHand="true" />
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
      <div class="translate-y-5 stage-item stage-item-2">
        <div class="stage-item-content">
          <img class="w-24" src="../assets/main/date_start.png" alt="" />
          <h4 class="slogan">START</h4>
          <span class="date">10/31 - 11/28</span>
          <p class="sub-title">10/31(一) UI</p>
          <p class="sub-title">團體組開賽 11/7(一) 前端組開賽</p>
        </div>
        <img class="w-6" src="../assets/main/date_weekLine.png" alt="" />
      </div>
      <div class="stage-item stage-item-3 translate-y-14">
        <div class="stage-item-content">
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
      <div class="absolute top-0 h-40 line-mask bg-secondary-normal"></div>
    </div>
  </section>
</template>
<style scoped>
.slogan {
  @apply pt-2 pb-2 text-center text-6xl  tracking-wider text-highlight-normal;
}
.date {
  @apply mb-2 rounded-3xl bg-primary-normal px-4 py-2 text-center text-4xl text-white;
}
.stage-item {
  @apply flex w-1/3 flex-col items-center opacity-0;
  &-content {
    @apply flex flex-col items-center bg-secondary-normal;
  }
}

.for-mobile {
  @apply hidden lg:block;
}
</style>
