// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/image',
		'@nuxt/icon',
		'@nuxt/fonts',
		'@nuxt/eslint',
		'@nuxt/ui',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/supabase',
		'@pinia/nuxt',
		'@nuxtjs/sitemap',
		'@vite-pwa/nuxt',
		'@nuxtjs/seo',
		'motion-v/nuxt'
	],
	devtools: { enabled: true },
	app: {
		head: {
			title: 'Dutch Anime Community',
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ charset: 'utf-8' },
				{ name: 'description', content: 'Welkom bij de grootste anime community van Nederland' },
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			],
		},
	},
	css: ['~/assets/css/main.css'],
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
	vite: {
		server: {
			allowedHosts: ['nearby-pigeon-touching.ngrok-free.app']
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
})
