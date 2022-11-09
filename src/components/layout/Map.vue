<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
gsap.registerPlugin(ScrollTrigger);

const x = ref(0);
const y = ref(0);

const posList = {
  0: { x: "11", y: "53" },
  1: { x: "45", y: "11" },
  2: { x: "106", y: "19" },
  3: { x: "176", y: "20" },
  4: { x: "168", y: "62" },
  5: { x: "120", y: "83" },
  6: { x: "113", y: "81" },
};

const setPos = (num) => {
  x.value = posList[num].x;
  y.value = posList[num].y;
};

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
  tl.to(".point", {
    duration: 5,
    onComplete: setPos,
    onCompleteParams: [1],
  });
  tl.to(".point", {
    duration: 4,
    onComplete: setPos,
    onCompleteParams: [2],
  })
    .to(".point", {
      duration: 4,
      onComplete: setPos,
      onCompleteParams: [3],
    })
    .to(".point", {
      duration: 4,
      onComplete: setPos,
      onCompleteParams: [4],
    })
    .to(".point", {
      duration: 4,
      onComplete: setPos,
      onCompleteParams: [5],
    })
    .to(".point", {
      duration: 4,
      onComplete: setPos,
      onCompleteParams: [6],
    });
});

const throttle = (fn, wait) => {
  var time = Date.now();
  return () => {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
};

onMounted(() => {
  document.addEventListener("scroll", (e) => {});
  setPos(0);
});
</script>

<template>
  <div class="fixed bottom-5 left-7 z-40 hidden w-[220px] lg:block">
    <img src="../../assets/main/map.svg" alt="" />
    <img
      :style="{ top: y + 'px', left: x + 'px' }"
      class="absolute point"
      src="../../assets/main/map_now.svg"
      alt=""
    />
  </div>
</template>

<style scoped></style>
