<script setup>
import { onMounted, ref } from "vue";
import Question from "@/components/Question.vue";
import Award from "@/components/Award.vue";
import Banner from "@/components/Banner.vue";
import Speech from "@/components/Speech.vue";
import Header from "@/components/Header.vue";
import Sponsor from "@/components/Sponsor.vue";
import Stage from "@/components/Stage.vue";
import Player from "@/components/layout/Player.vue";
import Feature from "@/components/Feature.vue";
import Cooperation from "@/components/Cooperation.vue";
import Level from "@/components/Level.vue";
import Menu from "@/components/Menu.vue";
import Murmur from "@/components/Murmur.vue";
import Map from "@/components/layout/Map.vue";
import End from "@/components/End.vue";
import { useMedia } from "../hooks/useMedia";
import AOS from "aos";
import Loading from "@/components/common/Loading.vue";
import JoinBtn from "../components/common/JoinBtn.vue";
const isMobile = useMedia();
const isShowLoading = ref(true);
let player = null;
let windowWidth = 0;
onMounted(() => {
  if (isMobile.value) {
    console.log("8888");
    AOS.init();
  }
  setTimeout(() => {
    isShowLoading.value = false;
  }, 2000);
});

const handleMouseMove = (e) => {
  const valueX = e.clientX;
  const isLeft = valueX <= windowWidth;
  if (!player) return;
  if (isLeft) {
    player.classList.add("offset-left");
    player.classList.remove("offset-right");
  } else {
    player.classList.add("offset-right");
    player.classList.remove("offset-left");
  }
};

onMounted(() => {
  if (isMobile.value) return;
  player = document.getElementById("player");
  windowWidth = window.innerHeight / 2;
});
</script>

<template>
  <Loading v-if="isShowLoading" />
  <div @mousemove="handleMouseMove">
    <Header />
    <Menu />
    <Banner />
    <Player />
    <Feature />

    <Cooperation />
    <Level />
    <Stage />
    <Murmur />
    <Award />
    <Sponsor />
    <End />
    <Map />
    <div class="fixed z-50 hidden text-center right-5 bottom-5 lg:block">
      <a href="https://2022.thef2e.com/" target="_blank">
        <strong class="pb-2 tracking-wider text-primary-normal">JOIN</strong>
        <JoinBtn size="w-20" :is-show-hand="true" />
      </a>
    </div>
  </div>
</template>

<style scoped></style>
