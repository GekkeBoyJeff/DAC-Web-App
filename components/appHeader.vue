<script lang="ts" setup>
const header = ref<HTMLElement | null>(null)
const nav = ref<HTMLElement | null>(null)

const onScroll = () => {
  if (header.value) {
    if (window.scrollY > 1) {
    	header.value.classList.add('header-scrolled')
    } else {
		header.value.classList.remove('header-scrolled')
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})


</script>

<template>
  <header ref="header" class="grid grid-cols-12 items-top top-4 left-0 z-10 w-full fixed h-20 bg-DacWhite/15 px-4">
	<nav ref="nav" class="p-4 items-center translate-x-0 duration-500 md:col-span-4 flex">
		<ul class="flex gap-6 text-DacBlack align-middle w-full">
			<li>
				<NuxtLink to="/">Home</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/login">Login</NuxtLink>
			</li>
			<li class="sr-only">
				<NuxtLink to="https://discord.gg/dutchanimecommunity" class="p-2 border rounded-lg font-bold" external>Join community</NuxtLink>
			</li>
		</ul>
	</nav>
	<div class="p-2 border rounded-lg font-bold h-10 self-center md:col-span-2 lg:col-span-1 md:col-start-11 lg:col-start-12 text-center">
		<NuxtLink to="https://discord.gg/dutchanimecommunity" external>Word lid!</NuxtLink>
	</div>
  </header>
</template>