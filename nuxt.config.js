const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    // title: pkg.name,
    title: 'OnclickSell.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://js.stripe.com/v3/'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    // '@/assets/sass/Css-Layout-system.sass',
    // '@/assets/sass/OnclickSell.com--css--config.sass'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/axios', '~/plugins/vee-validate'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // '@nuxtjs/axios'
    // '~/modules/dis/sweetalert.min.js'
  ],
  /*
  ** Nuxt.js routes
  */
  router: {
    middleware: ['checkAuth']
  },
  /*
  ** Build configuration
  */
  build: {
   vendor: [
    'axios'
    ],
    
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
