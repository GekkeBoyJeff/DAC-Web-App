<script lang="ts" setup>

const slides = [
    {
        name: 'Welkom bij Dutch Anime Community',
        description: 'De grootste anime community van Nederland en België. Of je nu van manga, games, cosplay of de Japanse cultuur houdt: bij ons vind je altijd gelijkgestemden.',
        image: '/images/Spelletjesmiddag.jpg',
        alt: 'Welkom bij Dutch Anime Community',
        link: '/about',
        linkText: 'Word lid!',
    },
]

</script>

<template>
    <section class="md:min-h-[70vh] relative grid">
        <div v-for="(slide, index) in slides" :key="index"
            class="flex w-full flex-col sm:grid grid-cols-12 grid-rows-1 h-full md:items-center">
            <NuxtImg :src="slide.image" :alt="slide.alt" :placeholder="[50, 25, 75, 5]"
                class="object-top bg-top absolute w-full h-full object-cover md:object-[50%_25%] brightness-75 z-0"
                loading="eager" />
            <div
                class="flex flex-col z-10 p-4 text-DacWhite mt-50 gap-4 sm:col-span-12 md:col-span-9 lg:col-span-6 sm:row-span-4 md:mt-26">
                <h2 class="hero-title text-4xl font-bold">{{ slide.name }}</h2>
                <p class="hero-description">{{ slide.description }}</p>
                <nuxt-link :to="slide.link"
                    class="hero-cta flex items-center bg-primary py-2 px-4 text-DacBlack rounded-full w-fit">
                    {{ slide.linkText }}
                    <span class="flex items-center text-DacWhite bg-black p-2 rounded-[100%] ml-4 -mr-2">
                        <UIcon name="i-lucide-arrow-up-right" class="size-5" />
                    </span>
                </nuxt-link>
            </div>
            <div
                class="px-4 py-4 col-span-8 col-start-6 md:col-start-5 sm:pl-0 md:pl-4">
                <ul
                    class="flex flex-wrap gap-4 text-DacWhite -mt-4 sm:mt-0 p-4 justify-around sm:justify-evenly sepia-50 items-center bg-DacWhite/10 backdrop-blur-md rounded-2xl">
                    <li class="flex flex-col items-center">
                        <span class="font-bold text-3xl">4500+</span>
                        <span class="text-xs">Leden</span>
                    </li>
                    <li class="flex flex-col items-center">
                        <span class="font-bold text-3xl">70.000+</span>
                        <span class="text-xs">berichten per maand</span>
                    </li>
                    <li class="flex flex-col items-center">
                        <span class="font-bold text-3xl">500+</span>
                        <span class="text-xs">Evenementen</span>
                    </li>
                    <li class="flex flex-col items-center">
                        <span class="font-bold text-3xl">100+</span>
                        <span class="text-xs">Supporters</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
