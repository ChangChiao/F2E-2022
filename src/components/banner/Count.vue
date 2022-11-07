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
    <h4 class="pb-2 text-xl font-bold text-center text-primary-normal">
      {{ itemData.title }}
    </h4>
    <div
      class="flex h-[42px] w-[135px] items-center justify-center rounded-3xl bg-primary-normal font-bold tracking-wider text-white"
    >
      <img class="w-6 mr-2" src="@/assets/ic/ic_users.svg" alt="" />
      {{ itemData.count }}
    </div>
  </div>
</template>

<style scoped></style>
