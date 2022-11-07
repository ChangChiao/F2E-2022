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
      start: "top 20%",
      end: "bottom 20%",
      scrub: true,
    },
  });
  tl.to(".player-group", {
    scale: 0.7,
    bottom: 0,
    // delay: 12,
    duration: 5,
  });
  tl.to(".player-group", {
    scale: 1,
    bottom: 10,
    duration: 10,
  }).to(".player-group", {
    scale: 0.7,
    bottom: 0,
    duration: 10,
  });
});
</script>

<template>
  <div
    class="absolute bottom-0 left-0 right-0 z-50 mx-auto player-group lg:fixed lg:w-1/2"
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
