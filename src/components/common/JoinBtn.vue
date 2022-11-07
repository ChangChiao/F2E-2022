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
  <div :class="[size, 'join-btn mx-auto']">
    <img
      v-if="isShowHand"
      src="@/assets/btn/btn_joinHand.png"
      :class="['w-[1/4] animate-bounce', isHover && 'hidden hover:block']"
      alt=""
    />
    <img class src="@/assets/btn/btn_join.png" alt="" />
  </div>
</template>

<style scoped></style>
