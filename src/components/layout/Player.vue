<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

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
  tl.to(
    ".player-group",
    {
      scale: 0.7,
      bottom: 0,
      // delay: 12,
      // duration: 1,
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
        scale: 0.5,
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
      scale: 0.5,
      bottom: 0,
      duration: 1,
    });
});
</script>

<template>
  <div
    class="absolute bottom-0 left-0 right-0 z-50 mx-auto origin-bottom player-group lg:fixed lg:w-2/3"
  >
    <div class="flex items-center justify-between" id="player">
      <img
        id="players"
        class="player"
        src="@/assets/character/character_f2e.gif"
        alt=""
      />
      <img class="player" src="@/assets/character/character_ui.gif" alt="" />
      <img class="player" src="@/assets/character/character_team.gif" alt="" />
    </div>
    <img class="mx-auto -mt-12" src="@/assets/main/road.png" alt="" />
  </div>
</template>

<style scoped>
.player {
  @apply relative z-10 w-1/3;
}
</style>
