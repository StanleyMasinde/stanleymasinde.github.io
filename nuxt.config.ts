import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

	app: {
		head: {
			title: 'Stanley Masinde — Fullstack Engineer, Writer & Technologist',
			titleTemplate: '',
			meta: [
				{
					name: 'description',
					content: 'Self-taught fullstack engineer from Nairobi. I build software, write on tech, speak at events & lead projects like Farm Direct and Lnky.'
				}
			]
		}
	},

	site: {
		name: 'Stanley Masinde'
	},

	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	modules: ['@nuxt/eslint', '@nuxtjs/seo'],

	css: ['~/assets/css/main.css'],

	vite: {
		plugins: [
			tailwindcss(),
		]
	}
})
