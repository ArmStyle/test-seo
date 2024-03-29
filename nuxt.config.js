import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - 7toons",
    meta: [
      { charset: "utf-8" },
      {
        hid: "viewport",
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/icon.png" },
       {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/styles/index.css',],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/format.js',],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/google-analytics",
    "@nuxtjs/google-adsense",
    "@nuxtjs/sitemap"
  ],
  googleAnalytics: {
    id: "UA-188445235-1",
    dev: false
  },
  googleAdsense: {
    id: 'ca-pub-2735809627790100',
  },
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://tested-seo.herokuapp.com/",
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    routes: [
      "/",
      "/manga",
      "/novel",
      "/doujin",
      "/doujinshi",
      "/inspire",
      "/test",
      "/test2",
      "/test3",
      '/About-Us',
      '/Privacy',
      "/:title",
      "/:title/:ep",
      "/user/:id"
    ].map(route => ({
      url: route,
      changefreq: "monthly",
      priority: 1,
      lastmodISO: new Date().toISOString().split("T")[0]
    }))
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "https://api.7toons.com/v1"
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.red,
        },
        dark: {
          primary: colors.red,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: '~/components/LoadingBar.vue'
};
