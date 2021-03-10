import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Crypto Ticker",
    meta: [
      { charset: "utf-8" },
      {
        hid: "viewport",
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

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
    "@nuxtjs/sitemap"
  ],
  googleAnalytics: {
    id: "{YOUR GOOGLE ANALYTICS ID}",
    dev: false
  },
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://tested-seo.herokuapp.com/",
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    routes: [
      "/",
      "/inspire",
      "/test",
      "/test2",
      "/test3",
      "/cartoon/1613749319",
      "/user/:id"
    ].map(route => ({
      url: route,
      changefreq: "monthly",
      priority: 1,
      lastmodISO: new Date().toISOString().split("T")[0]
    }))
    // sitemaps: [
    //   {
    //     path: "/user/:id",
    //     exclude: [],
    //     routes: async () => {
    //       let apiUrl = "https://jsonplaceholder.typicode.com/todos/"; // or API url
    //       const { data } = await axios.get(`${apiUrl}`);
    //       return data.data.map(v => `/${v.id}`);
    //     }
    //   }
    // ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "https://api.7toons.com/v1"
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
