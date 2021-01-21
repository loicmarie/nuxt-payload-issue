export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-debug',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // 'nuxt-i18n'
  ],

  i18n: {
    baseUrl: 'https://open-chess.com',
    // strategy: 'prefix',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    },
    seo: false, // Because we use $nuxtI18nSeo instead
    locales: [
      {
        code: 'fr',
        iso: 'fr-FR'
      },
      {
        code: 'en',
        iso: 'en-US'
      }
    ],
    // parsePages: false,
    // pages: {
    //   'index': {
    //     fr: '/',
    //     en: '/'
    //   },
    //   '/_id': {
    //     fr: '/:id',
    //     en: '/:id'
    //   }
    // }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    routes () {
      return [
        {
          route: '/',
          payload: { test: 'home' }
        },
        {
          route: '/todos',
          payload: { test: 'todos' }
        },
        {
          route: '/todos/test-id',
          payload: { test: 'todos-id' }
        }
      ]
    }
  }
}
