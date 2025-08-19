<script lang="ts" setup>
import { navigationItems } from '../utils/navigation'

const toggleNav = () => {
	console.log('Toggle navigation')
};

</script>

<template>
	<header
		class="z-10 fixed h-20 px-4 flex justify-between items-center w-[calc(100%-1.5rem)] text-dacWhite border-t-[1em] border-DacWhite">
		<div class="flex items-center gap-2 pt-8">
			<div class="flex items-center justify-between">
				<NuxtLink to="/" class="text-2xl font-bold text-DacBlack bg-DacWhite p-1 rounded-full">
					<NuxtImg src="/images/logo.png" alt="DAC Logo" class="h-14 w-14 rounded-full" />
				</NuxtLink>
			</div>
			<nav
				class="bg-DacWhite relative p-4 px-4 rounded-full flex hover:scale-[1.05] transition md:hover:scale-100">
				<button class="md:hidden flex items-center gap-2" @click="toggleNav">
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6">
						<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
						<g id="SVGRepo_iconCarrier">
							<path d="M4 18H10" stroke="#000000" stroke-width="2" stroke-linecap="round"></path>
							<path d="M4 12L16 12" stroke="#000000" stroke-width="2" stroke-linecap="round"></path>
							<path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"></path>
						</g>
					</svg>
					<span>Menu</span>
				</button>
				<ul class="gap-4 hidden md:flex">
					<li v-for="item in navigationItems" :key="item.to"
						class="hover:scale-[1.05] hover:font-bold transition has-[.active]:hover:scale-100">
						<NuxtLink :to="item.to" class="text-DacBlack"
							active-class="font-bold bg-black p-2 text-DacWhite rounded-full active">
							{{ item.label }}
						</NuxtLink>
					</li>
				</ul>
			</nav>
		</div>
		<div class="p-2 border rounded-lg font-bold h-10 self-center text-center">
			<NuxtLink to="https://discord.gg/dutchanimecommunity" external>Word lid!</NuxtLink>
		</div>
		<div class="absolute bg-DacWhite h-full w-34 right-0 -z-10 rounded-[0_0_0_3rem] pointer-none:">
			<div class="corner left"></div>
			<div class="corner right"></div>
		</div>
		<div class="corner top-left pointer-none:"></div>
	</header>
</template>