// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
  ],
  components: [
    {
      path: "~/components/ui",
    },
    {
      path: "~/components/sections",
    },
  ],
});