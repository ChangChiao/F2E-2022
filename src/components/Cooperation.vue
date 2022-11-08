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
      //   start: "top 35%",
      trigger: ".section-cooperation",
      pin: !isMobile.value,
      scrub: true,
    },
  });

  if (isMobile.value) {
    tl.from(".title-cooperation", {
      yPercent: -100,
    })
      .from(".cooperation-item-1", {
        xPercent: 100,
      })
      .from(".cooperation-item-2", {
        xPercent: -100,
      })
      .from(".cooperation-item-3", {
        xPercent: 100,
      });
    return;
  }

  tl.to(".title-cooperation", {
    opacity: 1,
    duration: 2,
  })
    .from(".cooperation-group", {
      opacity: 0,
      translateY: 40,
      duration: 2,
    })
    .to(".cooperation-group", {
      translateY: 40,
      opacity: 0,
      duration: 2,
    })
    .to(".section-cooperation", {
      opacity: 0,
    });
});
</script>

<template>
  <div class="pt-10 section section-cooperation">
    <div class="opacity-0 title-cooperation">
      <h2 class="title">本屆主題：互動式網頁設計</h2>
      <h3 class="sub-title">以下兩個角色進行攜手合作</h3>
    </div>
    <div
      class="items-center justify-between pt-20 mx-auto opacity-100 cooperation-group lg:flex lg:w-2/3 xl:w-1/2"
    >
      <div class="cooperation-item cooperation-item-1">
        <img
          class="lg:hidden"
          src="@/assets/character/character_f2e.png"
          alt=""
        />
        <div>
          <JoinBtn :isHover="true" />
          <h4 class="identity">前端工程師</h4>
        </div>
      </div>
      <div class="cooperation-item cooperation-item-2">
        <div>
          <JoinBtn :isHover="true" />
          <h4 class="identity">UI設計師</h4>
        </div>
        <img
          class="lg:hidden"
          src="@/assets/character/character_ui.png"
          alt=""
        />
      </div>
      <div class="cooperation-item cooperation-item-3">
        <img
          class="lg:hidden"
          src="@/assets/character/character_team.png"
          alt=""
        />
        <div>
          <JoinBtn :isHover="true" />
          <h4 class="identity">團體組（ＵＩ＋前端）</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.identity {
  @apply pt-2 text-center text-xl font-bold text-primary-normal;
}

.cooperation-item {
  @apply flex items-center justify-center lg:w-1/3;
}
</style>
