// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        '@nuxt/icon',
        '@nuxt/fonts',
        '@nuxt/eslint',
        '@nuxt/ui',
        '@nuxtjs/supabase',
        '@pinia/nuxt',
        '@nuxtjs/sitemap',
        '@vite-pwa/nuxt',
        '@nuxtjs/seo',
        'motion-v/nuxt'
    ],
    build: {
        transpile: ['@nuxt/image']
    },
    devtools: {
        enabled: true
    },
    site: {
        url: process.env.NUXT_APP_BASE_URL || 'https://gekkeboyjeff.github.io',
        name: 'Dutch Anime Community',
        description: 'Welkom bij de grootste anime community van Nederland'
    },
    app: {
        baseURL: process.env.NODE_ENV === 'production' ? '/DAC-Web-App/' : '/',
        head: {
            title: 'Dutch Anime Community',
            meta: [{
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover'
                },
                {
                    charset: 'utf-8'
                },
                {
                    name: 'description',
                    content: 'Welkom bij de grootste anime community van Nederland'
                },
            ],
            link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },],
            bodyAttrs: {
                class: 'bg-DacWhite text-DacBlack max-w-[120rem] m-auto self-center'
            }
        },
    },
    css: ['~/assets/css/main.css'],
    alias: {
        '~utils': '/utils',
        '~components': '/components',
        '~assets': '/assets',
    },
    ui: {
        theme: {
            colors: [
                'primary',
                'secondary',
                'tertiary',
                'info',
                'success',
                'warning',
                'error',
            ],
        },
    },
    components: {
        global: true,
        dirs: ['~/components']
    },
    vite: {
        server: {
            allowedHosts: ['nearby-pigeon-touching.ngrok-free.app']
        },
        build: {
            rollupOptions: {
                external: []
            }
        },
        optimizeDeps: {
            include: ['@nuxt/image']
        }
    },
    image: {
        // Configuratie voor @nuxt/image
        quality: 80,
        format: ['webp', 'jpg', 'png'],
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
        },
        presets: {
            avatar: {
                modifiers: {
                    format: 'jpg',
                    width: 50,
                    height: 50,
                },
            },
        },
    },
    nitro: {
        prerender: {
            failOnError: false
        }
    },
    compatibilityDate: '2025-05-15',
    eslint: {
        config: {
            stylistic: {
                semi: false,
                quotes: 'single',
                commaDangle: 'always-multiline',
                indent: 'tab',
            },
        },
    },
    supabase: {
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY,
        redirectOptions: {
            login: '/login',
            callback: '/confirm',
            include: ['/dashboard', '/dashboard/**'],
            exclude: [],
            saveRedirectToCookie: false,
        },
    },
    robots: {
        robotsTxt: false
    },
    linkChecker: {
        enabled: false
    },
})