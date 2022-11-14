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
import Footer from "../components/Footer.vue";
import Loading from "@/components/common/Loading.vue";

const isMobile = useMedia();
const isShowLoading = ref(true);
let player = null;
let windowWidth = 0;
onMounted(() => {
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
  <div @mousemove="handleMouseMove">
    <Header />
    <Menu />
    <Banner :isShowLoading="isShowLoading" />
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
    <Footer />
  </div>
  <Loading v-if="isShowLoading" />
</template>

<style scoped></style>
