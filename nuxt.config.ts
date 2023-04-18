// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "primevue/resources/themes/bootstrap4-dark-blue/theme.css",
        "primevue/resources/primevue.css",
        "primeicons/primeicons.css",
        "primeflex/primeflex.css",
        "assets/default.css",
    ],
    build: {
        transpile: ['primevue']
    },
    
    modules: [
        // ...
        [
          '@pinia/nuxt',
          {
            autoImports: [
              // automatically imports `defineStore`
              'defineStore', // import { defineStore } from 'pinia'
              // automatically imports `defineStore` as `definePiniaStore`
              ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
            ],
          },
        ],
      ],
})
