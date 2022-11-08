<script setup>
import { onMounted } from "vue";
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
const isMobile = useMedia();
onMounted(() => {
  if (isMobile) {
    AOS.init();
  }
});
</script>

<template>
  <div class="wrapper">
    <Header />
    <Menu />
    <Banner />
    <Player />
    <Feature />

    <Cooperation />
    <Level />
    <Stage />
    <!-- <TimeLine /> -->
    <Murmur />
    <Award />
    <!-- <Speech /> -->
    <!-- <Question /> -->
    <Sponsor />
    <End />
    <Map />
  </div>
</template>

<style scoped></style>
