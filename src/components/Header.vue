<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      // markers: true,
      // start: "top 5%",
      // end: "bottom 20%",
      scrub: true,
    },
  });
  tl.to(
    ".header-logo",
    {
      opacity: 1,
      duration: 1,
    },
    1
  ).set({}, {}, "+=10");
  const editUser = () => {
    window.open("https://2022.thef2e.com/users", "_blank");
  };
});
</script>

<template>
  <header
    class="fixed top-0 flex items-center justify-between w-full h-48 px-2"
  >
    <img
      class="w-40 opacity-0 header-logo"
      src="../assets/logo/logo.png"
      alt=""
    />
    <div
      @click="editUser"
      class="w-20 bg-[url('@/assets/btn/btn_user.png')] bg-contain hover:bg-[url('@/assets/btn/btn_user_h.png')]"
    ></div>
    <!-- <img class="w-20" src="../assets/btn/btn_user.png" alt="" /> -->
  </header>
</template>

<style scoped></style>
