<script setup>
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
onMounted(() => {
  document.body.style.overflow = "hidden";
  const tl = gsap.timeline();
  tl.to(".loading-bar", { width: "100%", duration: 1, delay: 0.5 });
  // .to(
  //   ".loading",
  //   { opacity: 0, duration: 1 }
  // );
});

onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>

<template>
  <div
    class="loading fixed top-0 left-0 z-[999] h-full w-full overflow-hidden bg-secondary-normal"
  >
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
    <div class="opacity-0 img-preload"></div>
  </div>
</template>

<style scoped>
.player-loading {
  @apply relative z-10 w-1/3 duration-100;
}

.img-preload {
  background-image: url("src/assets/btn/btn_user_h.png"),
    url("src/assets/btn/btn_burger_close_h.png"),
    url("src/assets/btn/btn_burger_open_h.png"),
    url("src/assets/btn/btn_join_h.png");
}
</style>
