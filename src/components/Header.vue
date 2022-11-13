<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
gsap.registerPlugin(ScrollTrigger);
const editUser = () => {
  window.open("https://2022.thef2e.com/users", "_blank");
};
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
    },
    2
  )
    .to(
      ".header-logo",
      {
        opacity: 1,
      },
      9
    )
    .to(
      ".header-logo",
      {
        opacity: 0,
      },
      9.5
    );
});
</script>

<template>
  <header
    class="fixed top-0 z-[999] flex h-20 w-full items-center justify-between p-4 pt-2 lg:h-48"
  >
    <div class="header-logo hidden w-40 opacity-0 lg:block">
      <img class="" src="../assets/logo/logo.png" alt="" />
    </div>
    <img
      class="relative left-1/2 block w-1/3 -translate-x-1/2 lg:hidden"
      src="@/assets/logo/logo_text.png"
      alt=""
    />
    <div
      @click="editUser"
      class="h-10 w-10 cursor-pointer bg-[url('@/assets/btn/btn_user.png')] bg-contain hover:bg-[url('@/assets/btn/btn_user_h.png')] lg:h-20 lg:w-20"
    ></div>
    <!-- <img class="w-20" src="../assets/btn/btn_user.png" alt="" /> -->
  </header>
</template>

<style scoped></style>
