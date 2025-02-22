// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "nuxt-icon", "@nuxt/fonts"],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ]
})