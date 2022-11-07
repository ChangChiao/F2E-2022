<script setup>
const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex h-[42px] w-[135px] items-center justify-center rounded-2xl bg-primary-normal font-bold text-white"
  >
    <img class="w-6 mr-2" src="@/assets/ic/ic_users.svg" alt="" />
    {{ count }}
  </div>
</template>

<style scoped></style>
