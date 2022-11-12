<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
gsap.registerPlugin(ScrollTrigger);

const x = ref(0);
const y = ref(0);

const posList = {
  0: { x: "10", y: "53" },
  1: { x: "45", y: "11" },
  2: { x: "106", y: "19" },
  3: { x: "176", y: "20" },
  4: { x: "168", y: "62" },
  5: { x: "120", y: "83" },
  6: { x: "80", y: "114" },
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
      // start: "top 20%",
      // end: "bottom 20%",
      scrub: true,
    },
  });
  // tl.to(
  //   ".point",
  //   {
  //      top: "11px",
  //      left: "53px",
  //      onComplete: setPos,
  //      onCompleteParams: [1],
  //   },
  //   1
  // );
  tl.to(
    ".point",
    {
      top: "11px",
      left: "45px",
      // onComplete: setPos,
      // onCompleteParams: [2],
    },
    2
  )
    .to(
      ".point",
      {
        top: "19px",
        left: "106px",
        // onComplete: setPos,
        // onCompleteParams: [3],
      },
      3
    )
    .to(
      ".point",
      {
        top: "20px",
        left: "176px",
        // onComplete: setPos,
        // onCompleteParams: [4],
      },
      4
    )
    .to(
      ".point", //mur
      {
        top: "62px",
        left: "168px",
        // onComplete: setPos,
        // onCompleteParams: [5],
      },
      5
    )
    .to(
      ".point",
      {
        top: "83px",
        left: "120px",
        // onComplete: setPos,
        // onCompleteParams: [6],
      },
      5.5
    )
    .to(
      ".point",
      {
        top: "114px",
        left: "80px",
        // onComplete: setPos,
        // onCompleteParams: [6],
      },
      6
    )
    .to(".map-box", { opacity: 0 }, 7)
    .to(".map-box", { opacity: 0 }, 8);
});

onMounted(() => {
  setPos(0);
});
</script>

<template>
  <div class="map-box fixed bottom-5 left-7 z-40 hidden w-[220px] lg:block">
    <img src="../../assets/main/map.svg" alt="" />
    <div
      class="point absolute top-[53px] left-[10px] h-2.5 w-2.5 rounded-full bg-red-500"
      alt=""
    />
  </div>
</template>

<style scoped>
.point {
  @apply after:absolute 
  after:-left-[11px]
  after:-top-[11px]
  after:h-8
  after:w-8
  after:animate-enlarge 
  after:rounded-full
  after:bg-red-500
  after:content-[''];
}
</style>
