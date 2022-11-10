<script setup>
const props = defineProps({
  isHover: {
    type: Boolean,
    default: false,
  },
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
      v-if="isShowHand || isHover"
      src="@/assets/btn/btn_joinHand.png"
      :class="[
        'w-[1/4] animate-bounce',
        isHover && 'opacity-0 group-hover:opacity-100',
      ]"
      alt=""
    />
    <img class src="@/assets/btn/btn_join.png" alt="" />
  </div>
</template>

<style scoped></style>
