export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Website title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    [
      'nuxt-i18n',
       {
         locales: [
           {
              code: 'es',
              iso: 'en-ES',
              name: 'Español',
            },
            {
              code: 'en',
              iso: 'en-US',
              name: 'English',
            },
            {
              code: 'ru',
              iso: 'ru-RU',
              name: 'Russian',
            },
         ],
         defaultLocale: 'en',
         noPrefixDefaultLocale: true,
         vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: require('./locales/en-us.json'),
            es: require('./locales/es-es.json'),
            ru: require('./locales/ru-ru.json'),
          },
        },
       }
    ]
  ],
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
