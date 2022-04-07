export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'evermos-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400&family=Rubik:wght@400;500;600;700&display=swap',
      },
      {
        type: 'module',
        href: 'https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js',
      },
      {
        href: 'https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js',
      },
      {
        href: 'https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js',
      },
    ],
  },

  vue: {
    config: {
      ignoredElements: [/^ion-/],
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/css/styles.css', '@assets/css/queries.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:3001',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
