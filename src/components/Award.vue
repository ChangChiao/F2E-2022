<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
import { useMedia } from "../hooks/useMedia";
gsap.registerPlugin(ScrollTrigger);
const isMobile = useMedia();
onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      //   start: "top 35%",
      trigger: ".section-award",
      pin: !isMobile.value,
      scrub: true,
      pinSpacing: isMobile.value,
      toggleClass: "active",
    },
  });

  if (isMobile.value) {
    tl.from(".title-award", {
      yPercent: -100,
    })
      .fromTo(
        ".trophy",
        { yPercent: 100 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 2,
        }
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
    <div class="items-center justify-center w-2/3 pt-10 mx-auto lg:flex">
      <div class="trophy relative w-[375px] opacity-0">
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
      <div class="pl-20 opacity-100 doc lg:opacity-0">
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
  @apply pb-2 text-4xl  text-highlight-normal;
}
.money {
  @apply text-2xl text-highlight-normal;
}
.award-item {
  @apply text-2xl text-primary-normal;
}

.doc-item {
  @apply pb-4 opacity-0 lg:opacity-100;
}
</style>
