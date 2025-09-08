<script lang="ts" setup>
  import { defineProps } from 'vue'

  const props = defineProps<{
    images: Array<{
      src: string
      alt: string
      extra?: string
    }>
  }>()
</script>

<template>
  <div class="flex flex-row mx-auto w-full gap-2">
    <span v-for="(image, index) in props.images" :key="index" class="flex-1 sm:w-1/3 h-80 overflow-hidden rounded-xl">
      <img
        :src="image.src"
        :alt="image.alt"
        :class="[
          'rounded-xl',
          // index % 2 === 0 ? 'rotate-6' : '-rotate-6',
          'hover:rotate-0',
          'duration-500',
          'hover:-scale-110',
          'h-full',
          'w-full',
          'object-cover',
          'hover:scale-120',
          'transform',
          'origin-bottom',
          // index % 2 === 0 && index !== 0 ? '-translate-x-16' : ''
        ]"
      />
    </span>
  </div>
</template>