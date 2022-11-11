<script setup>
const props = defineProps({
  isShowHand: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "w-10",
  },
});
</script>

<template>
  <div :class="[size, 'join-btn group mx-auto cursor-pointer']">
    <img
      src="@/assets/btn/btn_joinHand.png"
      :class="[
        'w-[1/4] animate-bounce',
        !isShowHand && 'opacity-0 group-hover:opacity-100',
      ]"
      alt=""
    />
    <div
      class="h-10 w-20 bg-[url(@/assets/btn/btn_join.png)] bg-contain bg-center bg-no-repeat hover:bg-[url(@/assets/btn/btn_join_h.png)]"
    ></div>
    <!-- <img class src="@/assets/btn/btn_join.png" alt="" /> -->
  </div>
</template>

<style scoped></style>
