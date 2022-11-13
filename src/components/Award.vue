<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
import { useMedia } from "../hooks/useMedia";
gsap.registerPlugin(ScrollTrigger);
const isMobile = useMedia();
onMounted(() => {
  if (isMobile.value) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-award",
        pin: false,
        scrub: true,
        toggleClass: "active",
        start: "top center",
        end: "bottom bottom",
      },
    });
    tl.fromTo(
      ".title-award",
      {
        yPercent: -100,
      },
      { yPercent: 0, opacity: 1 }
    )
      .fromTo(
        ".award-trophy-light",
        { rotation: 720 },
        {
          rotation: 0,
          duration: 3,
        }
      )
      .fromTo(
        ".trophy",
        { yPercent: 100 },
        {
          yPercent: 0,
          opacity: 1,
        },
        "<"
      )
      .fromTo(
        ".rule",
        { yPercent: 100 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 2,
        }
      )
      .fromTo(
        ".prize",
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
      trigger: ".section-award",
      pin: true,
      scrub: true,
      pinSpacing: false,
      toggleClass: "active",
    },
  });
  tl.fromTo(
    ".title-award",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
    },
    1
  )
    .fromTo(
      ".award-trophy-light",
      { rotation: 720 },
      {
        rotation: 0,
        duration: 3,
      }
    )
    .fromTo(
      ".trophy",
      {
        xPercent: -50,
      },
      {
        opacity: 1,
        xPercent: 0,
      },
      "<"
    )
    // .fromTo(
    //   ".award-trophy-light",
    //   { rotation: 720 },
    //   {
    //     rotation: 0,
    //   }
    // )
    .fromTo(
      ".doc",
      {
        xPercent: 50,
      },
      {
        opacity: 1,
        xPercent: 0,
        duration: 2,
      }
    )
    .set({}, {}, "+=6")
    .to(".doc", {
      opacity: 0,
      xPercent: 50,
      duration: 2,
    })

    .to(
      ".trophy",
      {
        opacity: 0,
        xPercent: 50,
      },
      "<"
    )
    .to(
      ".award-trophy-light",
      {
        rotation: 720,
      },
      "<"
    )
    .to(".section-award", {
      opacity: 0,
    });
});
</script>

<template>
  <section class="section section-award">
    <div class="title-award">
      <h2 class="title">還有比賽等著你！</h2>
    </div>
    <div
      class="mx-auto flex w-[90%] flex-col items-center justify-center pt-10 lg:w-2/3 lg:flex-row"
    >
      <div class="trophy relative w-full opacity-0 lg:w-[375px]">
        <img
          class="award-trophy-light"
          src="@/assets/main/award_light.png"
          alt=""
        />
        <img
          class="absolute top-0 bottom-0 left-0 right-0 w-full"
          src="@/assets/main/award_trophy.png"
          alt=""
        />
      </div>
      <div class="opacity-100 doc lg:pl-20 lg:opacity-0">
        <div class="doc-item rule">
          <h3 class="award-title">評審機制</h3>
          <ul>
            <li class="award-item">
              初選：將由六角學院前端、UI 評審進行第一波篩選，並於
              12/5（五）公布初選佳作名單
            </li>
            <li class="award-item">
              決選：由三大企業針對該企業主題進行入圍獎最後篩選，並於
              12/23（五）公布企業得獎名單
            </li>
          </ul>
        </div>
        <div class="doc-item prize">
          <h3 class="award-title">獎項</h3>
          <ol>
            <li class="award-item">1. 初選佳作 共六十位 數位獎狀</li>
            <li class="award-item">
              2. 個人企業獎 共六位 NTD <span class="money">3,000</span>/位
            </li>
            <li class="award-item">
              3. 團體企業獎 共三組 NTD <span class="money">10,000</span>/組
            </li>
            <li class="award-item">4. 以上皆提供完賽數位獎狀</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.award-title {
  @apply pb-4 text-2xl text-highlight-normal  lg:text-4xl;
}
.money {
  @apply text-lg text-highlight-normal lg:text-2xl;
}
.award-item {
  @apply text-lg text-primary-normal lg:text-2xl;
}

.doc-item {
  @apply pb-8 opacity-0 lg:opacity-100;
}
</style>
