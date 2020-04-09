import { build, head, dynamicRoute } from "./config"

// import { join } from 'path'

module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head,
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#5a46ff",
    height: "3px",
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.css", "@/assets/css/prism.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/prism.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/tailwindcss"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // 'nuxt-purgecss'
    // '@nuxtjs/svg-sprite',
    "@nuxtjs/tailwindcss",
  ],
  tailwindcss: {
    configPath: "@/tailwind.config.js",
    cssPath: "@/assets/css/tailwind.css",
    purgeCSSInDev: false,
    exposeConfig: true,
  },
  // postcss: {
  //   plugins: {
  //     tailwindcss: join(__dirname, 'tailwind.config.js'),
  //     'postcss-pxtorem': {
  //       propList: [
  //         '*',
  //         '!border*',
  //       ]
  //     }
  //   }
  // },
  // svgSprite: {
  //   input: '~/assets/sprite/svg',
  //   output: '~/assets/sprite/gen',
  // },
  /*
   ** Build configuration
   */
  build,

  generate: {
    fallback: true,
    routes: [
      dynamicRoute({
        "/blog": "blog/*.md",
      }),
    ],
  },
}
