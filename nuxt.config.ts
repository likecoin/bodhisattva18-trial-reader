// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/bodhisattva18/sample/',
    rootAttrs: {
      class: 'h-full min-h-svh',
    }
  },
  colorMode: {
    preference: 'light'
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', "nuxt-gtag"],
  gtag: {
    id: 'G-S48XCGK428'
  },
})
