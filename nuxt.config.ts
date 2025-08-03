// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    // 'nuxt-security'
  ],
  css: ['~/assets/css/main.css'],
  // security: {
  //   headers: {
  //     contentSecurityPolicy: {
  //       'base-uri': ["'none'"],
  //       'upgrade-insecure-requests': false,
  //     },
  //   },
  // },
});
