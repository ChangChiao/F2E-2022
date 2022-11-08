<script setup>
const props = defineProps({
  itemData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <h4 class="pb-2 text-center text-xl text-primary-normal">
      {{ itemData.title }}
    </h4>
    <div
      class="flex h-[42px] w-[135px] items-center justify-center rounded-3xl bg-primary-normal tracking-wider text-white"
    >
      <img class="mr-2 w-6" src="@/assets/ic/ic_users.svg" alt="" />
      {{ itemData.count }}
    </div>
  </div>
</template>

<style scoped></style>
