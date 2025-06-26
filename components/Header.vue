<script lang="ts" setup>
const colorMode = useColorMode()

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set(_isDark) {
        colorMode.preference = _isDark ? 'dark' : 'light'
    }
})
</script>

<template>
    <header class="flex items-center justify-between p-4 bg-gray-800 text-white">
        <nav>
            <ul class="flex gap-2">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/login">Login</NuxtLink>
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