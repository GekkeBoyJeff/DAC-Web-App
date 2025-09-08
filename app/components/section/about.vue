<script lang="ts" setup>

const content = {
    title: 'Meer dan een Discord Server',
    Text: 'DAC is de online plek waar je passies tot leven komen. Praat mee over de nieuwste anime, deel je fan-art, of vind teamgenoten voor een game-avond. Maar we zijn meer dan alleen online: je vindt ons terug op de grootste conventies en onze eigen offline meet-ups door het hele land. Gezelligheid staat altijd voorop.',
    images : {
        image1: {
            src: '/images/about-us.jpg',
            alt: 'Een sfeerfoto foto van de DAC-stand op een conventie, met lachende vrijwilligers en bezoekers.',
            extra: 'Dac-stand'
        },
        image2: {
            src: '/images/about-us-2.jpg',
            alt: 'Een foto van een offline meet-up in de bioscoop in leiden, met een grote groep mensen die samen een anime kijken.',
            extra: 'Bioscoop bezoek'
        },
        image3: {
            src: '/images/about-us-3.jpg',
            alt: 'Een showcase van community-kunst: een mooie cosplayfoto of een digitale tekening van een lid',
            extra: 'Community kunst'
        },
        image4: {
            src: '/images/about-us-4.jpg',
            alt: 'Discord screenshot waarin...',
            extra: 'Discord chat'
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
        <div class="flex sm:grid grid-cols-12 pt-20 pb-14">
            <ItemCrossTitle :title="content.title" class="col-span-12 lg:col-span-8" />
        </div>
        <div :class="'flex flex-wrap md:grid grid-cols-12 gap-4 p-4'">
            <div class="col-start-9 -col-end-1">
                <span class="flex items-center gap-2 text-lg font-bold mb-4 text-DacBlack">
                    <UIcon name="i-lucide-users" />
                    <span>Jouw community</span>    
                </span>
                <p>{{ content.Text }}</p>
            </div>
            <div class="col-start-1 flex col-span-8 row-start-1">
                <ItemHorizontalImages :images="[content.images.image1, content.images.image2, content.images.image3, content.images.image4]" />
            </div>
        </div>
    </section>
</template>
