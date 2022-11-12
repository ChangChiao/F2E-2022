<script setup>
const props = defineProps({
  isShowHand: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "small",
  },
});
</script>

<template>
  <div
    :class="[
      size === 'small' ? 'w-20' : 'w-[140px]',
      'join-btn group mx-auto cursor-pointer',
    ]"
  >
    <img
      src="@/assets/btn/btn_joinHand.png"
      :class="[
        ' mx-auto w-1/2 animate-jump',
        !isShowHand && 'opacity-0 group-hover:opacity-100',
      ]"
      alt=""
    />
    <div
      :class="[
        size === 'small' ? 'h-10 w-20' : 'h-20 w-[140px]',
        'bg-[url(@/assets/btn/btn_join.png)] bg-contain bg-center bg-no-repeat hover:bg-[url(@/assets/btn/btn_join_h.png)]',
      ]"
    ></div>
    <!-- <img class src="@/assets/btn/btn_join.png" alt="" /> -->
  </div>
</template>

<style scoped></style>
