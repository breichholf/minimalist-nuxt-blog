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
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma',
    // '@nuxtjs/style-resources'
  ],

  // styleResources: {
  //   scss: [
  //     '@/assets/scss/main.scss'
  //   ],
  // },
  /*
  ** Build configuration
  */
  build,

  generate: {
    fallback: true,
    routes: dynamicRoute({
      '/blog': 'blog/*.md'
    })
  },

  slugs: {
    blog: dynamicRoute({
      '/blog': 'blog/*.md'
    })
  }
}
