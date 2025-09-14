// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // Allow base URL and Nitro preset to be controlled by environment
  // - On GitHub Pages: NUXT_APP_BASE_URL=/portfolio/ and NITRO_PRESET=github-pages
  // - On Vercel and local: defaults to '/'
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
  nitro: {
    preset: process.env.NITRO_PRESET,
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    'motion-v/nuxt'
  ]
})
