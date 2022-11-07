<script setup>
import gsap from "gsap";
import JoinBtn from "./common/JoinBtn.vue";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
gsap.registerPlugin(ScrollTrigger);
const text = ref("READY?");
onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      //   start: "top 35%",
      trigger: ".section-award",
      pin: true,
      scrub: true,
    },
  });

  tl.fromTo(
    ".title-award",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 2,
    }
  )
    .from(".join-group", {
      opacity: 0,
      translateY: 40,
      duration: 10,
    })
    .to(".section-award", {
      opacity: 0,
    });
});
</script>

<template>
  <section class="pt-10 section section-award">
    <div class="title-award">
      <h2 class="title">還有比賽等著你！</h2>
    </div>
    <div class="justify-center w-2/3 mx-auto lg:flex">
      <img class="w-[375px]" src="@/assets/main/award.png" alt="" />
      <div class="doc">
        <div class="doc-item">
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
        <div class="doc-item">
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
  @apply pb-2 text-xl font-bold text-highlight-normal;
}
.money {
  @apply text-xl text-highlight-normal;
}
.award-item {
  @apply font-bold text-primary-normal;
}

.doc-item {
  @apply pb-4;
}
</style>
