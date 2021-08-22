const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES'
  ? {
      router: {
        // history: createWebHashHistory(),
        base: '/yooxin-tech/'
      }
    }
  : {}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: process.env.DEPLOY_ENV === 'GH_PAGES' ? 'static' : 'server',

  // Git deploy 會用到
  ...routerBase,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '侑欣科技',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '侑欣科技成立於 2012 年 9 月，初期為 IC 代測加工廠起家，之後再進入記憶體產業從事 FLASHIC、晶片代測、晶片買賣。' },
      { name: 'format-detection', content: 'telephone=no' }
      // TODO: base seo
      // { hid: 'og:title', property: 'og:title', content: '' },
      // { hid: 'og:description', property: 'og:description', content: '' },
      // { hid: 'og:url', property: 'og:url', content: '' },
      // { hid: 'og:image', property: 'og:image', content: '' },
      // { hid: 'og:type', property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // import style (>= Swiper 6.x)
    // 如果要用 swiper css
    { src: "swiper/swiper-bundle.css" }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bus.js',
    // 如果要用 swiper js
    { src: '~/plugins/VueAwesomeSwiper.js', mode: 'client'}
    // or use this for browser using only
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    // jit: true,
    exposeConfig: false,
    config: {}
  }
}
