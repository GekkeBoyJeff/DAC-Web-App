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
  <div class="rounded-md flex gap-4 flex-wrap">
    <div v-for="(image, index) in props.images" :key="index" :class="'relative h-50 bg-DacYellow/50 rounded-lg flex-1 basis-40 md:basis-1/3'">
      <figure class="relative w-full h-full overflow-hidden">
        <NuxtImg :src="image.src" :alt="image.alt" :placeholder="[50, 25, 75, 5]" class="object-cover w-full h-full rounded-lg overflow-hidden" />
        <figcaption v-if="image.extra" class="absolute bottom-0 left-0 text-DacWhite backdrop-blur-2xl bg-DacBlack/10 text-sm p-2 rounded-b-lg w-full flex justify-between">
          <span>
            {{ image.extra }}
          </span>
          <span>
            {{ index + 1 }}
          </span>
        </figcaption>
      </figure>
    </div>
  </div>
</template>