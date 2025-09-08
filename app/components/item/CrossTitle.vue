<script lang="ts" setup>
  defineProps<{
      title: string
  }>()
</script>


<template>
  <h2 class="text-3xl sm:text-5xl grid grid-cols-24 gap-2 sm:gap-4">
      <span class="font-bold col-span-20 col-start-4">{{ title.split(' ').slice(0, 2).join(' ') }}</span>
      <span class="col-span-full col-start-6">{{ title.split(' ').slice(2).join(' ') }}</span>
  </h2>
</template>