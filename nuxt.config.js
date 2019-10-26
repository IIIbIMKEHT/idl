
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
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
    "@assets/style.scss"
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
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faDollarSign','faHome','faBuilding','faDesktop','faCubes','faAddressBook','faSpaceShuttle','faCode','faBrush','faHandHoldingUsd','faFileCode','faTint','faCog','faHeadset','faLightbulb','faCodeBranch','faCogs','faRocket','faAddressCard','faHeart','faCheckCircle']
        }
      ]
    }],
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
  }
}
