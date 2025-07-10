<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

import { navigationItems } from '../utils/navigation'

</script>

<template>
  <header ref="header" class="z-10 w-full fixed h-20 px-4 top-4 flex justify-between items-center ">
	<div class="flex items-center justify-between">
		<NuxtLink to="/" class="text-2xl font-bold text-DacBlack"><img src="" alt="DAC Logo" class="h-12 w-12 rounded-full"></NuxtLink>
	</div>
		  <UNavigationMenu
			color="secondary"
			orientation="horizontal"
			:variant="'link'"
			:items="navigationItems">
			<template #item="{ item }">
			  <NuxtLink :to="item.to" class="text-DacBlack hover:text-DacWhite" active-class="font-bold">
				{{ item.label }}
			  </NuxtLink>
			</template>
		</UNavigationMenu>
	<div class="p-2 border rounded-lg font-bold h-10 self-center text-center">
		<NuxtLink to="https://discord.gg/dutchanimecommunity" external>Word lid!</NuxtLink>
	</div>
  </header>
</template>