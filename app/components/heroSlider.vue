<script lang="ts" setup>

const slides = [
    {
        name: 'Welkom bij Dutch Anime Community',
        description: 'De grootste anime community van Nederland',
        image: '/images/spelletjesmiddag.jpg',
        alt: 'Welkom bij Dutch Anime Community',
        link: '/about',
        linkText: 'Lees meer',
    },
]

</script>

<template>
    <section class="h-[90dvh] md:h-[70dvh] w-dvw overflow-hidden relative max-w-full hero">
        <div v-for="(slide, index) in slides" :key="index"
            class="relative px-4 md:px-8 grid h-full w-full grid-rows-6 grid-cols-6 md:grid-cols-12 md:grid-rows-8">
            <NuxtImg :src="slide.image" :alt="slide.alt"
                class="bg-top absolute w-full h-full object-cover object-[50%_25%] brightness-75" />
            <div class="text-DacWhite col-start-1 md:p-0 row-start-3 md:row-start-4 col-span-6 row-span-2 grid gap-2">
                <h2 class="text-4xl font-bold">{{ slide.name }}</h2>
                <p>{{ slide.description }}</p>
                <nuxt-link :to="slide.link" class="bg-DacWhite p-4 text-DacBlack rounded-full w-fit">{{ slide.linkText
                }}</nuxt-link>
            </div>
            <div
                class="col-span-6 -row-start-3 md:-row-start-2 md:col-start-6 md:p-0 col-start-1 md:-mx-8 md:mb-4 md:-mt-4">
                <ul
                    class="flex flex-wrap gap-4 text-DacWhite h-auto -mt-4 sm:mt-0 md:h-full p-4 md:p-0 justify-around sm:justify-evenly sepia-50 items-center bg-DacWhite/10 backdrop-blur-md rounded-2xl">
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
