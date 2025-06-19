import tailwindcss from '@tailwindcss/vite'

/** @type {import('vite').UserConfig} */
export default {
	plugins: [
		tailwindcss()
	],
	server: {
		allowedHosts: ['webhooks.stanleymasinde.com'],
	}
}
