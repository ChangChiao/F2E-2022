<script setup>
import gsap from "gsap";
import JoinBtn from "./common/JoinBtn.vue";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMedia } from "../hooks/useMedia";
import { onMounted } from "vue";
const isMobile = useMedia();
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  if (isMobile.value) {
    const tl = gsap.timeline({
      scrollTrigger: {
        // start: "top 35%",
        trigger: ".section-cooperation",
        pin: false,
        scrub: true,
        toggleClass: "active",
        start: "top center",
        end: "bottom bottom",
      },
    });
    tl.fromTo(
      ".title-cooperation",
      {
        yPercent: -100,
      },
      { yPercent: 0, opacity: 1 }
    )
      .fromTo(
        ".cooperation-item-1",
        {
          xPercent: 100,
        },
        { xPercent: 0, opacity: 1, duration: 1 }
      )
      .fromTo(
        ".cooperation-item-2",
        {
          xPercent: -100,
        },
        { xPercent: 0, opacity: 1, duration: 1 }
      )
      .fromTo(
        ".cooperation-item-3",
        {
          xPercent: 100,
        },
        { xPercent: 0, opacity: 1, duration: 1 }
      );
    return;
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      //   start: "top 35%",
      trigger: ".section-cooperation",
      pin: true,
      scrub: true,
      pinSpacing: false,
      toggleClass: "active",
    },
  });

  tl.to(
    ".title-cooperation",
    {
      opacity: 1,
      duration: 1,
    },
    1
  )
    .fromTo(
      ".cooperation-group",
      {
        translateY: 40,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 10,
      }
    )
    .set({}, {}, "+=8")
    .to(".section-cooperation", {
      opacity: 0,
    });
});
</script>

<template>
  <div class="section section-cooperation">
    <div class="title-cooperation opacity-0">
      <h2 class="title">本屆主題：互動式網頁設計</h2>
      <h3 class="sub-title">以下兩個角色進行攜手合作</h3>
    </div>
    <div
      class="cooperation-group mx-auto mt-10 items-center justify-between opacity-100 lg:flex lg:w-3/4 lg:opacity-0 2xl:w-1/2"
    >
      <div class="cooperation-item cooperation-item-1">
        <img
          class="w-1/2 lg:hidden"
          src="@/assets/character/character_f2e.png"
          alt=""
        />
        <div class="cooperation-item-btn">
          <JoinBtn :is-show-hand="isMobile" />
          <h4 class="identity">前端工程師</h4>
        </div>
      </div>
      <div class="cooperation-item cooperation-item-2">
        <div class="cooperation-item-btn">
          <JoinBtn :is-show-hand="isMobile" />
          <h4 class="identity">UI設計師</h4>
        </div>
        <img
          class="w-1/2 lg:hidden"
          src="@/assets/character/character_ui.png"
          alt=""
        />
      </div>
      <div class="cooperation-item cooperation-item-3">
        <img
          class="w-1/2 lg:hidden"
          src="@/assets/character/character_team.png"
          alt=""
        />
        <div class="cooperation-item-btn">
          <JoinBtn :is-show-hand="isMobile" />
          <h4 class="identity">團體組（ＵＩ＋前端）</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.identity {
  @apply pt-4 text-center text-xl text-primary-normal  lg:text-4xl;
}

.cooperation-item {
  @apply mx-auto flex w-[90%] items-center justify-center lg:w-1/3;
  &-btn {
    @apply w-1/2 lg:w-auto;
  }
}
</style>
