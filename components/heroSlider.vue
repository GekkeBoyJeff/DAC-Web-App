<script lang="ts" setup>

const slides = [
    {
        name: 'Welkom bij Dutch Anime Community',
        description: 'De grootste anime community van Nederland',
        // image: 'https://picsum.photos/1920/1080',
        image: '',
        alt: 'Welkom bij Dutch Anime Community',
        link: '/about',
        linkText: 'Lees meer',
    }
]

</script>

<template>
    <div class="h-dvh w-dvw overflow-hidden relative max-w-full">
        <div v-for="(slide, index) in slides" :key="index" class="relative grid h-full w-full grid-cols-12 grid-rows-8">
            <img :src="slide.image" :alt=slide.alt class="h-dvh w-dvw object-cover col-span-12" />
            <div
                class="flex flex-col text-white bg-black/50 p-2 rounded-md col-span-2 col-start-2 row-start-6 row-span-2">
                <h2>{{ slide.name }}</h2>
                <p>{{ slide.description }}</p>
                <nuxt-link :to="slide.link" class="btn">{{ slide.linkText }}</nuxt-link>
            </div>
        </div>
    </div>
</template>