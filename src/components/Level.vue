<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMedia } from "../hooks/useMedia";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);
const isMobile = useMedia();
const toLink = (num) => {
  window.open(`https://2022.thef2e.com/news/week${num}`, "_blank");
};
onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-level",
      pin: !isMobile.value,
      scrub: true,
      pinSpacing: isMobile.value,
      toggleClass: "active",
    },
  });

  if (isMobile.value) {
    tl.fromTo(
      ".title-level",
      {
        yPercent: -100,
      },
      { yPercent: 0, opacity: 1 }
    )
      .fromTo(
        ".level-1",
        {
          yPercent: 100,
        },
        { yPercent: 0, opacity: 1, duration: 2 }
      )
      .fromTo(
        ".level-2",
        {
          yPercent: 100,
        },
        { yPercent: 0, opacity: 1, duration: 2 }
      )
      .fromTo(
        ".level-3",
        {
          yPercent: 100,
        },
        { yPercent: 0, opacity: 1, duration: 2 }
      );
    return;
  }

  tl.to(
    ".title-level",
    {
      opacity: 1,
      duration: 1,
    },
    1
  )
    .to(
      ".level-list",
      {
        opacity: 1,
      },
      "<"
    )
    .to(".level-1", {
      opacity: 1,
      duration: 2,
    })
    .to(".level-2", {
      opacity: 0.5,
      duration: 2,
    })
    .set({}, {}, "+=6")
    .to(".level-list", {
      yPercent: -60,
      duration: 8,
    })
    .to(
      ".level-1",
      {
        opacity: 0,
        duration: 2,
      },
      "<"
    )
    .to(
      ".level-2",
      {
        opacity: 1,
      },
      "<"
    )
    .to(
      ".level-3",
      {
        opacity: 0.5,
      },
      "<"
    )
    .set({}, {}, "+=6")
    .to(".level-2", {
      opacity: 0.5,
      duration: 2,
    })
    .to(".level-3", {
      opacity: 1,
      duration: 2,
    })
    .set({}, {}, "+=6")
    .to(".section-level", {
      opacity: 0,
    });
});
</script>

<template>
  <section class="section section-level">
    <div class="opacity-0 title-level">
      <h2 class="title">年度最強合作，三大主題來襲</h2>
      <h3 class="sub-title">各路廠商強強聯手</h3>
      <h3 class="sub-title">共同設計出接地氣的網頁互動挑戰關卡</h3>
    </div>
    <div class="mx-auto h-[50vh] w-3/4 overflow-hidden">
      <div class="opacity-0 level-list">
        <div class="level level-1">
          <img class="level-icon" src="@/assets/main/week_1.png" alt="" />
          <div class="level-content">
            <h4 class="week">WEEK1</h4>
            <h5 class="level-name">The F2E 活動網站設計</h5>
            <div class="level-tag">
              <span class="mr-2 hash-tag">Parallax Scrolling</span>
              <span class="hash-tag">#版塊設計</span>
            </div>
            <button @click="toLink(1)" class="btn">查看關卡細節</button>
          </div>
        </div>
        <div class="justify-end level level-2">
          <div class="level-content">
            <h4 class="week">WEEK2</h4>
            <h5 class="level-name">今晚，我想來點點簽</h5>
            <div class="level-tag">
              <span class="mr-2 hash-tag">Canvas</span>
              <span class="hash-tag">#凱鈿行動科技</span>
            </div>
            <button @click="toLink(2)" class="btn">查看關卡細節</button>
          </div>
          <img class="level-icon" src="@/assets/main/week_2.png" alt="" />
        </div>
        <div class="level level-3">
          <img class="level-icon" src="@/assets/main/week_3.png" alt="" />
          <div class="level-content">
            <h4 class="week">WEEK3</h4>
            <h5 class="level-name">Scrum 新手村</h5>
            <div class="level-tag">
              <span class="mr-2 hash-tag">JS draggable</span>
              <span class="hash-tag">#鈦坦科技</span>
            </div>
            <button @click="toLink(3)" class="btn">查看關卡細節</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.level {
  @apply flex items-start py-2 opacity-0;
  &-content {
    @apply px-4;
  }
  &-icon {
    @apply w-[160px];
  }
  &-name {
    @apply text-5xl  text-primary-normal;
  }
  &-tag {
    @apply block py-3;
  }
  .btn {
    @apply pointer-events-auto;
  }
}
.week {
  @apply text-6xl  tracking-wider text-highlight-normal;
}
</style>
