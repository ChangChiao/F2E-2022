<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";
import { useMedia } from "../../hooks/useMedia";
gsap.registerPlugin(ScrollTrigger);
const isMobile = useMedia();
onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      // markers: true,
      start: "top",
      end: "bottom",
      scrub: true,
    },
  });
  if (isMobile.value) {
    tl.to(
      ".player-group",
      {
        scale: 0.3,
        bottom: 0,
      },
      0.5
    ).to(
      ".player-group",
      {
        scale: 0.5,
        bottom: 0,
      },
      3
    );
    return;
  }
  tl.to(
    ".player-group",
    {
      scale: 0.7,
      bottom: 0,
    },
    0.5
  )
    .to(
      ".player-group",
      {
        scale: 1,
        bottom: 10,
        // duration: 1,
      },
      1
    )
    .to(
      ".player-group",
      {
        scale: 0.7,
        bottom: 0,
        duration: 1,
      },
      1.5
    )
    .to(
      ".player-group",
      {
        scale: 1,
        bottom: 0,
        duration: 1,
      },
      2
    )
    .to(".player-group", {
      scale: 0.7,
      bottom: 0,
      duration: 1,
    });
});
</script>

<template>
  <div
    class="player-group fixed bottom-0 left-0 right-0 z-40 mx-auto max-w-[1000px] origin-bottom lg:fixed lg:w-2/3 xl:w-1/2"
  >
    <div class="flex items-center justify-between" id="player">
      <img
        class="translate-y-10 player player-1"
        src="@/assets/character/character_f2e.gif"
        alt=""
      />
      <img
        class="translate-y-10 player player-2"
        src="@/assets/character/character_ui.gif"
        alt=""
      />
      <img
        class="translate-y-20 player player-3"
        src="@/assets/character/character_team.gif"
        alt=""
      />
    </div>
    <img class="mx-auto -mt-12" src="@/assets/main/road.png" alt="" />
  </div>
</template>

<style scoped>
.player {
  @apply relative z-10 w-1/3 duration-100;
}

.offset-left {
  .player-1 {
    @apply -translate-x-3;
  }
  .player-2 {
    @apply -translate-x-2;
  }
  .player-3 {
    @apply translate-x-4;
  }
}

.offset-right {
  .player-1 {
    @apply -translate-x-5;
  }
  .player-2 {
    @apply translate-x-3;
  }
  .player-3 {
    @apply translate-x-2;
  }
}
</style>
