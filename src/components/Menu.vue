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
    class="nav-mask fixed z-[999] h-screen w-screen bg-secondary-normal opacity-50 lg:hidden"
  ></div>
  <nav
    :class="[
      'fixed top-0 left-0 z-[999] flex h-screen w-[150px]  justify-center bg-primary-normal duration-500 ',
      isShowMenu
        ? '-translate-x-[0px] lg:-translate-x-[10px]'
        : '-translate-x-[150px] lg:-translate-x-[140px]',
    ]"
  >
    <div
      @click="toggleMenu"
      :class="[
        'absolute top-5 -right-10 m-auto h-10 w-10 cursor-pointer bg-contain bg-no-repeat lg:-right-20 lg:top-0 lg:bottom-0  lg:h-20 lg:w-20 ',
        isShowMenu
          ? 'bg-[url(@/assets/btn/btn_burger_close.png)] hover:bg-[url(@/assets/btn/btn_burger_close_h.png)]'
          : 'bg-[url(@/assets/btn/btn_burger_open.png)] hover:bg-[url(@/assets/btn/btn_burger_open_h.png)]',
      ]"
    ></div>
    <ul class="pt-12 text-center">
      <li
        class="group cursor-pointer pb-10 text-secondary-normal"
        v-for="(item, i) in menu"
        :key="`menu-${i}`"
      >
        <a :href="item.link" target="_blank">
          <img
            class="mx-auto mb-2 w-12 group-hover:brightness-110"
            :src="getImg(item.icon)"
            alt=""
          />
          <span class="text-lg group-hover:brightness-110">
            {{ item.title }}</span
          >
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
