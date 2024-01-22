// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Victor Bayas',

      titleTemplate: '%s | Victor Bayas',
    },
  },
  content: {},
  ui: {
    icons: ['tabler'],
  },
  googleFonts: {
    families: {
      Inter: true,
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxtjs/google-fonts'],
});
