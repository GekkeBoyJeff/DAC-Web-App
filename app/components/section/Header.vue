<script lang="ts" setup>
// import { navigationItems } from '../utils/navigation'

const headerRef = ref<HTMLElement | null>(null)
const navListRef = ref<HTMLElement | null>(null)
const navRef = ref<HTMLElement | null>(null)
const activeTracker = ref<HTMLElement | null>(null)
const navButtonRef = ref<HTMLElement | null>(null)
const navParentRef = ref<HTMLElement | null>(null)
const navChildRef = ref<HTMLElement | null>(null)
const tagRef = ref<HTMLElement | null>(null)
const adspaceRef = ref<HTMLElement | null>(null)

let isDown = false

const getAnimationDuration = () => {
	if (!headerRef.value) return 200 
	const duration = getComputedStyle(headerRef.value).getPropertyValue('--nav-duration')
	return parseInt(duration) || 200
}

const toggleNav = async () => {
	if (!headerRef.value || !navButtonRef.value) return

	setTimeout(() => {
		toggleButtonIcon()
	}, getAnimationDuration())

	await startAnimation()
}

const startAnimation = async () => {
	if (!headerRef.value) return
	if (!navParentRef.value) return

	const nav = navRef.value

	moveNavIntoView()
	nav?.classList.toggle('translate-y-[-100dvh]')

	if (isDown === false) {
		setTimeout(() => {
			navListRef.value?.classList.remove('hidden')
			nav?.classList.add('show-nav')
			headerRef.value?.classList.add('show-nav')
			moveActiveBackground()
			moveNavIntoView()
			navParentRef.value?.classList.toggle('m-[0_auto]')
			navParentRef.value?.classList.toggle('mt-4')
		}, getAnimationDuration())
		setTimeout(() => {
			adspaceRef.value?.classList.toggle('translate-y-full')
		}, getAnimationDuration() * 0.1)
		setTimeout(() => {
			tagRef.value?.classList.toggle('hidden')

		}, getAnimationDuration() + 300)
		isDown = true
	} else {
		setTimeout(() => {
			tagRef.value?.classList.toggle('hidden')
			navListRef.value?.classList.add('hidden')
			headerRef.value?.classList.remove('show-nav')
			nav?.classList.remove('show-nav')
			nav?.classList.toggle('toggleButton')
			navParentRef.value?.classList.toggle('m-[0_auto]')
			navParentRef.value?.classList.toggle('mt-4')
			adspaceRef.value?.classList.toggle('translate-y-full')
			moveActiveBackground()
			moveNavIntoView()
		}, getAnimationDuration())
		isDown = false
	}

	setTimeout(() => {
		nav?.classList.toggle('translate-y-[-100dvh]')
	}, getAnimationDuration())
}

const toggleButtonIcon = async () => {
	if (!navButtonRef.value) return
	const hamburgerIcon = navButtonRef.value.querySelector('.hamburger-icon')
	const closeIcon = navButtonRef.value.querySelector('.close-icon')

	hamburgerIcon?.classList.toggle('hidden')
	closeIcon?.classList.toggle('hidden')
}

const route = useRoute()

const moveActiveBackground = () => {
	if (!navListRef.value || !activeTracker.value) return

	const activeLink = navListRef.value.querySelector('.item-active') as HTMLElement | null
	if (activeLink) {
		const parentListItem = activeLink.parentElement as HTMLElement | null
		if (!parentListItem) return

		const { left, width, top, height } = parentListItem.getBoundingClientRect()
		const navContainer = navListRef.value.parentElement
		if (!navContainer) return

		const { left: navContainerLeft, top: navContainerTop } = navContainer.getBoundingClientRect()

		const isMobileNavOpen = headerRef.value?.classList.contains('show-nav')

		activeTracker.value.style.width = `${width}px`
		activeTracker.value.style.height = `${height}px`

		if (isMobileNavOpen) {
			activeTracker.value.style.transform = `translate(${left - navContainerLeft}px, ${top - navContainerTop}px)`
		} else {
			activeTracker.value.style.transform = `translateX(${left - navContainerLeft}px)`
		}
	}
}

const moveNavIntoView = () => {
	if (!navParentRef.value) return
	if (navParentRef.value.classList.contains('-translate-x-[100dvw]')) {
		navParentRef.value.classList.remove('-translate-x-[100dvw]')
	} else {
		if (!navChildRef.value) return
		console.log('Toggling navChildRef for slide animation')
		navChildRef.value.classList.toggle('-translate-x-[100dvw]')
	}
}

const handleNavItemClick = () => {
	if (isDown) {
		toggleNav()
	}
}

onMounted(() => {
	moveActiveBackground()
	window.addEventListener('resize', moveActiveBackground)
	moveNavIntoView()
})

watch(() => route.path, () => {
	setTimeout(() => {
		moveActiveBackground()
	}, 100)
})

</script>

<template>
	<header ref="headerRef"
		class="drop-shadow-md md:drop-shadow-none pointer-none z-20 fixed h-20 px-4 flex md:justify-between md:items-center w-full sm:w-[calc(100%-1.5rem)] max-w-[120rem] text-dacWhite border-t-[1em] border-DacWhite">
		<div ref="navParentRef"
			class="flex z-20 items-center gap-2 md:pt-0 sm:bg-DacWhite md:bg-transparent h-16 md:h-auto mt-4 md:mt-8 pt-0 rounded-full min-w-48 -translate-x-[100dvw] transition duration-500">
			<div ref="navChildRef" class="flex items-center justify-between transition duration-500 md:drop-shadow-md">
				<NuxtLink to="/" class="text-md font-bold text-DacBlack bg-DacWhite p-1 rounded-full z-50 flex gap-2">
					<NuxtImg src="/images/logo.png" alt="DAC Logo" class="h-14 w-14 rounded-full animate-myWiggle" />
					<span ref="tagRef" class="hidden sm:flex md:hidden self-center">Dutch Anime Community</span>
				</NuxtLink>
			</div>
			<nav ref="navRef"
				class="bg-DacWhite relative p-4 rounded-full flex transition duration-700 md:hover:scale-100 z-20 h-16 md:h-auto w-30 md:w-auto md:shadow-md">
				<button class="toggle-button md:hidden flex items-center gap-2" @click="toggleNav" ref="navButtonRef">
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
					<span>Menu</span>
				</button>
				<div class="w-full relative pointer-events-none md:pointer-events-auto md:h-8">
					<span ref="activeTracker"
						class="duration-[0ms] absolute h-8 left-0 rounded-4xl backdrop-invert-100 transition-all md:duration-300 ease-in-out active-tracker">
					</span>
					<ul class="pointer-events-auto hidden md:flex xs:flex-col landscape:flex-row landscape:flex-wrap landscape:gap-2 md:gap-2 flex-col md:flex-row"
						ref="navListRef">
						<li v-for="item in navigationItems" :key="item.to"
							class="flex-1 basis-1/2 md:flex-none md:basis-auto md:basis:unset landscape:flex-1/3 md:landscape:flex-[unset] hover:scale-[1.05] hover:font-bold transition has-[.active]:hover:scale-100 content-center z-10 md:h-8">
							<NuxtLink :to="item.to" class="flex items-center gap-2 p-4 md:p-1"
								activeClass="font-bold p-2 rounded-md md:rounded-full item-active scale-95"
								@click="handleNavItemClick">
								<span class="md:hidden flex show-tag">
									<UIcon :name="item.icon" class="w-5 h-5" />
								</span>
								{{ item.label }}
							</NuxtLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
		<div class="p-2 border rounded-lg font-bold h-10 self-center text-center top-2 right-6 absolute">
			<NuxtLink to="https://discord.gg/dutchanimecommunity" external>Word lid!</NuxtLink>
		</div>
		<div class="absolute bg-DacWhite w-34 right-[-1px] -z-10 rounded-[0_0_0_3rem] pointer-none corners h-16 top-0">
			<div class="corner left"></div>
			<div class="corner right"></div>
		</div>
		<div class="corner top-left pointer-none corners h-4"></div>
		<div @click="toggleNav" ref="adspaceRef"
			class="-mb-[1px] absolute top-0 left-0 w-[100dvw] h-[100dvh] z-10 bg-DacBlack/70 translate-y-full duration-300">
			<!-- form toevoegen like welke anime karakter is het beste etc.. -->
			<div class="h-60 w-[94dvw] absolute bg-black/50 bottom-8 left-[3dvw] rounded-md">

			</div>
		</div>
	</header>
</template>