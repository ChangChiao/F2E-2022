<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
gsap.registerPlugin(ScrollTrigger);
const text = ref("READY?");
onMounted(() => {
  const finish = (param) => {
    console.log("reeeeee", text);
    text.value = param;
  };
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".traffict-light",
      //   markers: true,
      start: "top 45%",
      end: "top 1%",
      scrub: true,
      // pin: true,
    },
  });

  tl.to(".ready", {
    opacity: 0,
    duration: 1,
    onComplete: finish,
    onCompleteParams: ["READY??"],
  })
    .to(".yellow", {
      opacity: 0,
      duration: 1,
    })
    .to(
      ".green",
      {
        opacity: 0,
      },
      "<"
    )
    .set({}, {}, "+=4")
    .to(".red", {
      opacity: 0,
      duration: 1,
    })
    .to(
      ".yellow",
      {
        opacity: 1,
      },
      "<"
    )
    .set({}, {}, "+=4")
    .to(".yellow", {
      opacity: 0,
      duration: 1,
    })
    .to(
      ".green",
      {
        opacity: 1,
        onComplete: finish,
        onCompleteParams: ["GO!!"],
      },
      "<"
    )
    .to(
      ".ready",
      {
        opacity: 1,
        delay: 2,
      },
      "<"
    )
    .set({}, {}, "+=4")
    .to(".traffict-light", {
      opacity: 0,
      onComplete: finish,
      onCompleteParams: ["READY??"],
      duration: 2,
      delay: 2,
    });
});
</script>

<template>
  <div
    class="traffict-light fixed right-0 top-[48%] z-30 w-[275px] origin-right md:scale-50 lg:scale-75 xl:scale-100"
  >
    <div
      class="text-2xl tracking-wider text-center ready text-highlight-normal"
    >
      {{ text }}
    </div>
    <div class="relative h-[108px]">
      <img src="@/assets/main/ready_frame.png" alt="" />
      <div
        class="absolute top-14 bottom-0 left-8 m-auto flex h-full w-[180px] justify-between"
      >
        <img class="light red" src="@/assets/main/ready_3.png" alt="" />
        <img class="light yellow" src="@/assets/main/ready_2.png" alt="" />
        <img class="light green" src="@/assets/main/ready_1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.light {
  @apply h-12 w-12;
}
</style>
