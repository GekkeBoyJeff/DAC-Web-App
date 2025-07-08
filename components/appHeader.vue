<script lang="ts" setup>
const colorMode = useColorMode()

const isDark = computed({
	get() {
		return colorMode.value === 'dark'
	},
	set(_isDark) {
		colorMode.preference = _isDark ? 'dark' : 'light'
	},
})
</script>

<template>
	<header class="flex items-center justify-between p-4 top-0 left-0 z-10 w-full backdrop-blur-sm  absolute h-20">
		<nav>
			<ul class="flex gap-2">
				<li>
					<NuxtLink to="/">Home</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/login">Login</NuxtLink>
				</li>
				<li>
					<NuxtLink to="https://discord.gg/dutchanimecommunity" class="p-2 border rounded-lg font-bold"
						external>Join community</NuxtLink>
				</li>
			</ul>
		</nav>
		<ClientOnly v-if="!colorMode?.forced">
			<UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" color="neutral" variant="ghost"
				@click="isDark = !isDark" />

			<template #fallback>
				<div class="size-8" />
			</template>
		</ClientOnly>
	</header>
</template>
