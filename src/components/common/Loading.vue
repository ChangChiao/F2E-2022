<script setup>
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
onMounted(() => {
  document.body.style.overflow = "hidden";
  const tl = gsap.timeline();
  tl.to(".loading-bar", { width: "100%", duration: 1, delay: 0.5 })
    .to(".loading-group", {
      display: "none",
      duration: 0.3,
    })
    .to(".loading", { scale: 0, duration: 0.5 });
});

onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>

<template>
  <div class="fixed top-0 left-0 z-50 w-full h-full overflow-hidden">
    <div
      class="fixed top-0 bottom-0 left-0 right-0 w-full h-full m-auto origin-center scale-150 border rounded-full loading bg-secondary-normal"
    ></div>
    <div
      class="loading-group absolute top-0 bottom-0 left-0 right-0 m-auto h-[200px] w-[400px]"
    >
      <div class="player-group mx-auto min-h-[100px] w-[200px]">
        <div class="flex items-center justify-between">
          <img
            class="translate-y-1 player-loading player-1"
            src="@/assets/character/character_f2e.gif"
            alt=""
          />
          <img
            class="player-loading player-2"
            src="@/assets/character/character_ui.gif"
            alt=""
          />
          <img
            class="translate-y-3 player-loading player-3"
            src="@/assets/character/character_team.gif"
            alt=""
          />
        </div>
        <img class="mx-auto -mt-4" src="@/assets/main/road.png" alt="" />
      </div>
      <div
        class="loading mx-auto h-5 w-[90%] overflow-hidden rounded-2xl border-2 border-white lg:w-[400px]"
      >
        <div class="w-0 h-full loading-bar bg-primary-normal"></div>
      </div>
    </div>
    <!-- <div
      class="fixed top-0 bottom-0 left-0 right-0 w-1 h-1 m-auto origin-center bg-red-500 rounded-full circle bg-clip-content"
    ></div>
    <div class="fixed w-10 h-10 test top-6 left-6 bg-slate-500">test...</div> -->
  </div>
</template>

<style scoped>
.player-loading {
  @apply relative z-10 w-1/3 duration-100;
}

.test {
  clip-path: circle(20%);
}
</style>
