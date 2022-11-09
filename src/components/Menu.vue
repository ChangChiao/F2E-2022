<script setup>
import { ref } from "vue";
const isShowMenu = ref(false);
const menu = [
  {
    title: "關卡資訊",
    icon: "ic_menu_info",
    link: "https://2022.thef2e.com/news",
  },
  {
    title: "作品列表",
    icon: "ic_menu_list",
    link: "https://2022.thef2e.com/works",
  },
  {
    title: "攻略資源",
    icon: "ic_menu_strategy",
    link: "https://hackmd.io/ofJD4K7iSI65V19zxC7d0w",
  },
  {
    title: "求職專區",
    icon: "ic_menu_job",
    link: "https://2022.thef2e.com/jobs",
  },
];

const toggleMenu = () => {
  isShowMenu.value = !isShowMenu.value;
};

const getImg = (icon) => {
  return new URL(`/src/assets/ic/${icon}.png`, import.meta.url);
};
</script>

<template>
  <div
    v-if="isShowMenu"
    class="h-screen opacity-50 nav-mask bg-secondary-normal lg:hidden"
  ></div>
  <nav
    :class="[
      'stop-0 fixed left-0 z-40 flex h-screen w-[150px] -translate-x-[150px] justify-center bg-primary-normal duration-500 lg:-translate-x-[120px]',
      { '-translate-x-[50px] lg:-translate-x-[20px]': isShowMenu },
    ]"
  >
    <div
      @click="toggleMenu"
      class="absolute top-0 -right-10 m-auto h-10 w-10 bg-[url('@/assets/btn/btn_burger_open.png')] bg-contain bg-no-repeat hover:bg-[url('@/assets/btn/btn_burger_open_h.png')] lg:bottom-0"
      src="@/assets/btn/btn_burger_open_h.png"
    ></div>
    <!-- <img
      @click="toggleMenu"
      class="absolute top-0 w-10 m-auto -right-10 lg:bottom-0"
      src="@/assets/btn/btn_burger_open_h.png"
      alt=""
    /> -->
    <ul class="pt-12 text-center">
      <li
        class="pb-5 group text-secondary-normal"
        v-for="(item, i) in menu"
        :key="`menu-${i}`"
      >
        <img
          class="w-10 mx-auto mb-2 group-hover:brightness-110"
          :src="getImg(item.icon)"
          alt=""
        />
        <span class="group-hover:brightness-110"> {{ item.title }}</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
