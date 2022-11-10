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
const isMobile = useMedia();
const isShowLoading = ref(true);
onMounted(() => {
  if (isMobile.value) {
    console.log("8888");
    AOS.init();
  }
  setTimeout(() => {
    isShowLoading.value = false;
  }, 2000);
});
</script>

<template>
  <Loading v-if="isShowLoading" />
  <div>
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
  </div>
</template>

<style scoped></style>
