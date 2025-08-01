import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint', '@nuxtjs/seo'],

  plugins: ['~/plugins/pwa.client.ts'],

  devtools: { enabled: true },

  app: {
    head: {
      title: 'Stanley Masinde — Software Engineer, Writer & Technologist',
      titleTemplate: '',
      meta: [
        {
          name: 'description',
          content: 'Software engineer. I build software, write on tech, speak at events.',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  site: {
    name: 'Stanley Masinde',
  },

  compatibilityDate: '2025-05-15',

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    config: {
      stylistic: {
        semi: false,
      },
    },
  },
})
