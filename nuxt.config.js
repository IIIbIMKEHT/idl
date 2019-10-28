
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'IDL Second Life',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content:"IDL оздает качественные сайты с использованием соврменных технологий быстро и качественно,Infinity Digital Life - это то что вам нужно, IDL-Infinity Digital Life" },
      { hid: 'keywords', name: 'keywords', content:"JS,Nuxt,сайт на nuxt,что такое nuxt,idl,IDL,Infinity Digital Life " },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href: "https://fonts.googleapis.com/css?family=Alice|Ledger|Philosopher|Spectral&display=swap"},


    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // "@assets/style.scss"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:"~/plugins/particles.js",ssr:false},
    "~/plugins/donut.js",
    {src:"~/plugins/vuecarousel3d",ssr:false},
    {src:"~/plugins/aos",ssr:false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
      ['nuxt-seo',{seo: {
              // Module options
              name: 'IDL SECOND LIFE',
              title: 'IDL SECOND LIFE',
              templateTitle: '%name% - %title%',
              description: 'IDL-команда профессионалов которая разрабатывает сайты любой сложности'
              //...
          }}],

          ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faDollarSign','faHome','faBuilding','faDesktop','faCubes','faAddressBook','faSpaceShuttle','faCode','faBrush','faHandHoldingUsd','faFileCode','faTint','faCog','faHeadset','faLightbulb','faCodeBranch','faCogs','faRocket','faAddressCard','faHeart','faCheckCircle']
        }
      ]
    }],
      ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],

  ],

  /*
  ** Build configuration
  */
  build: {

    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },




}
module.exports = {
    modules: [
        '@bazzite/nuxt-optimized-images',
    ],

    optimizedImages: {
        inlineImageLimit: -1,
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        defaultImageLoader: 'img-loader',
        mozjpeg: {
            quality: 85
        },
        optipng: false,
        pngquant: {
            speed: 7,
            quality: [0.65, 0.8]
        },
        webp: {
            quality: 85
        }
    }
}





