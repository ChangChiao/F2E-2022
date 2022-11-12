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
    class="fixed top-0 z-40 flex items-center justify-between w-full h-20 p-4 pt-2 lg:h-48"
  >
    <div class="hidden w-40 opacity-0 header-logo lg:block">
      <img class="" src="../assets/logo/logo.png" alt="" />
    </div>
    <img
      class="relative block w-1/3 -translate-x-1/2 left-1/2 lg:hidden"
      src="@/assets/logo/logo_text.png"
      alt=""
    />
    <div
      @click="editUser"
      class="h-10 w-10 cursor-pointer bg-[url('@/assets/btn/btn_user.png')] bg-contain hover:bg-[url('@/assets/btn/btn_user_h.png')]"
    ></div>
    <!-- <img class="w-20" src="../assets/btn/btn_user.png" alt="" /> -->
  </header>
</template>

<style scoped></style>
