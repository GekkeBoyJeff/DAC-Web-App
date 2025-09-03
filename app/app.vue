<script setup lang="ts">
</script>

<template>
	<NuxtRouteAnnouncer />
	<NuxtLoadingIndicator />
	<NuxtLayout>
		<UApp>
			<NuxtPage />
			<div class="cursor" />
			<div class="cursor-circle" />
		</UApp>
	</NuxtLayout>
</template>
