<script lang="ts" setup>
import { navigationItems } from '../utils/navigation'

const navRef = ref<HTMLElement | null>(null)
const navListRef = ref<HTMLElement | null>(null)
const navButtonRef = ref<HTMLElement | null>(null)

const getAnimationDuration = () => {
	if (!navRef.value) return 350
	return parseInt(getComputedStyle(navRef.value).getPropertyValue('--nav-duration'))
}

const toggleNavMenu = () => {
	if (!navListRef.value) return

	navListRef.value.classList.toggle('hidden')
	navListRef.value.classList.toggle('mobileView')
}

const toggleMenuButton = () => {
	if (!navButtonRef.value) return

	const span = navButtonRef.value.querySelector('span')
	const hamburgerIcon = navButtonRef.value.querySelector('.hamburger-icon')
	const closeIcon = navButtonRef.value.querySelector('.close-icon')

	if (span) {
		span.classList.toggle('hidden')
	}

	navButtonRef.value.classList.toggle('closeButton')

	if (hamburgerIcon && closeIcon) {
		hamburgerIcon.classList.toggle('hidden')
		closeIcon.classList.toggle('hidden')
	}
}

const finishNavAnimation = () => {
	if (!navRef.value) return

	navRef.value.classList.toggle('slideTransformSize')
	navRef.value.classList.toggle('slideNavLeft')
}

const toggleNav = () => {
	if (!navRef.value || !navListRef.value) return

	const duration = getAnimationDuration()

	navRef.value.classList.toggle('slideNavLeft')

	setTimeout(() => {
		toggleNavMenu()
		toggleMenuButton()
	}, duration)

	setTimeout(() => {
		finishNavAnimation()
	}, duration)
}

const closeNav = () => {
	if (!navRef.value || !navListRef.value) return

	// Only close if nav is currently open
	if (!navRef.value.classList.contains('slideTransformSize')) return

	toggleNav()
}

const handleNavClick = (event: Event) => {
	const target = event.target as HTMLElement

	// Check if clicked on the overlay area (outside the nav content)
	if (target.classList.contains('nav-overlay')) {
		closeNav()
	}
}

</script>

<template>
	<header
		class="z-10 fixed h-20 px-4 flex justify-between items-center w-full sm:w-[calc(100%-1.5rem)] text-dacWhite border-t-[1em] border-DacWhite">
		<div
			class="flex items-center gap-2 md:pt-0 bg-DacWhite md:bg-transparent h-16 md:h-auto mt-8 pt-0 rounded-full min-w-48">
			<div class="flex items-center justify-between">
				<NuxtLink to="/" class="text-md font-bold text-DacBlack bg-DacWhite p-1 rounded-full z-50 flex gap-2">
					<NuxtImg src="/images/logo.png" alt="DAC Logo" class="h-14 w-14 rounded-full animate-myWiggle" />
					<span class="hidden sm:flex md:hidden self-center">Dutch Anime Community</span>
				</NuxtLink>
			</div>
			<nav ref="navRef"
				class="bg-DacWhite relative p-4 px-4 rounded-full flex transition duration-700 md:hover:scale-100 z-10"
				@click="handleNavClick">

				<!-- Overlay element for closing nav when clicked -->
				<div class="nav-overlay absolute top-0 left-full w-[150vw] h-full opacity-0 pointer-events-none"></div>

				<button class="md:hidden flex items-center gap-2" @click="toggleNav" ref="navButtonRef">
					<!-- Hamburger menu icon -->
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 hamburger-icon">
						<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
						<g id="SVGRepo_iconCarrier">
							<path d="M4 18H10" stroke="#000000" stroke-width="2" stroke-linecap="round"></path>
							<path d="M4 12L16 12" stroke="#000000" stroke-width="2" stroke-linecap="round"></path>
							<path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"></path>
						</g>
					</svg>

					<!-- Close icon (X) -->
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
						class="w-6 close-icon hidden">
						<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
						<g id="SVGRepo_iconCarrier">
							<path d="M18 6L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round"
								stroke-linejoin="round"></path>
							<path d="M6 6L18 18" stroke="#000000" stroke-width="2" stroke-linecap="round"
								stroke-linejoin="round"></path>
						</g>
					</svg>

					<span>Menu</span>
				</button>

				<ul class="gap-4 hidden md:flex" ref="navListRef">
					<li v-for="item in navigationItems" :key="item.to"
						class="hover:scale-[1.05] hover:font-bold transition has-[.active]:hover:scale-100 h-10 md:h-unset content-center">
						<NuxtLink :to="item.to" class="text-DacBlack flex items-center gap-2"
							active-class="font-bold bg-black p-2 text-DacWhite rounded-full active">
							<span class="md:hidden flex">
								<UIcon :name="item.icon" class="w-5 h-5" />
							</span>
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