<script lang="ts" setup>

const content = {
    title: 'Meer dan "een Discord Server"',
    Text: 'DAC is de online (en offline) plek waar je passies tot leven komen. Praat mee over de nieuwste anime, deel je fan-art, of vind teamgenoten voor een game-avond. Maar we zijn meer dan alleen online: je vindt ons terug op de grootste conventies en onze eigen offline meet-ups door het hele land. Gezelligheid staat altijd voorop.',
    images : {
        image1: {
            src: '/images/about-us-1.png',
            alt: 'Een sfeerfoto foto van de DAC-stand op een conventie, met lachende vrijwilligers en bezoekers.',
            extra: 'Dac-stand'
        },
        image2: {
            src: '/images/about-us-2.png',
            alt: 'Een foto van een offline meet-up in de bioscoop in leiden, met een grote groep mensen die samen een anime kijken.',
            extra: 'Bioscoop bezoek'
        },
        image3: {
            src: '/images/amq.jpg',
            alt: 'Een showcase van community-kunst: een mooie cosplayfoto of een digitale tekening van een lid',
            extra: 'Community kunst'
        }
    }
}

</script>

<template>
    <section :class="''">
        <div class="relative">
            <ExtensionsSectionAddon>
                <itemSocials />
            </ExtensionsSectionAddon>
        </div>
        <div class="flex sm:grid grid-cols-12 h-[30dvh] pt-20 sm:pt-0 items-center">
            <ItemCrossTitle :title="content.title" class="col-span-12 lg:col-span-8" />
        </div>
        <div :class="'flex flex-wrap md:grid grid-cols-12 gap-4 p-8'">
            <div class="col-start-1 col-end-6 bg-DacYellow-sectionBG p-4 rounded-lg">
                <p>{{ content.Text }}</p>
            </div>
            <div class="mt-0 lg:-mt-32 xl:-mt-40 col-start-6 lg:col-start-7 2xl:col-start-6 flex -col-end-1 row-start-1">
                <ItemHorizontalImages :images="[content.images.image1, content.images.image2, content.images.image3]" />
            </div>
        </div>
    </section>
</template>
