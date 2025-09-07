<script lang="ts" setup>

</script>

<template>
  <div :class="'pointer-events-auto flex relative z-10 h-full top-20 sm:top-0 justify-around sm:justify-start md:gap-4 sm:w-1/3 items-center md:p-4'">
      <h2 :class="'sr-only'">Volg ons op onze socials</h2>
      <NuxtLink to="https://instagram.com/dutchanimecommunity" target="_blank" rel="noopener noreferrer"
          class=" text-DacBlack px-4 py-2 rounded-full flex items-center gap-2 transition h-fit">
          <UIcon name="i-simple-icons-instagram" class="size-5" />
          <span class="font-semibold">Instagram</span>
      </NuxtLink>
      <NuxtLink to="https://tiktok.com/@dutchanimecommunity" target="_blank" rel="noopener noreferrer"
          class=" text-DacBlack px-4 py-2 rounded-full flex items-center gap-2 transition h-fit">
          <UIcon name="i-simple-icons-tiktok" class="size-5" />
          <span class="font-semibold">TikTok</span>
      </NuxtLink>
  </div>  
</template>


<style>

</style>