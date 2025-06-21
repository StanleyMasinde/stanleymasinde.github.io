import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

	app: {
		head: {
			title: 'Stanley Masinde — Fullstack Engineer, Writer & Technologist',
			meta: [
				{
					name: 'description',
					content: 'Self-taught fullstack engineer from Nairobi. I build software, write on tech, speak at events & lead projects like Farm Direct and Lnky.'
				}
			]
		}
	},

	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	modules: ['@nuxt/eslint'],

	css: ['~/assets/css/main.css'],

	vite: {
		plugins: [
			tailwindcss(),
		]
	}
})
