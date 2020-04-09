import {
  build, head, dynamicRoute
} from './config';

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head,
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#5a46ff',
    height: '3px'
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.css',
    '~/assets/css/prism.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/prism.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    purgeCSSInDev: false,
    exposeConfig: true
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // '@nuxtjs/svg-sprite',
  ],
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
        '/blog': 'blog/*.md'
      })
    ],
  }
}
