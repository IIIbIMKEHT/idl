
export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: 'IDL Second Life',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                name: 'yandex-verification',
                content: "8660c1dbe81cd7a9"
            },
            {
                name: 'keywords',
                content: "создание сайта, создать сайт в Казахстане, создать сайт в Шымкенте, создать сайт быстро и качественно, оптимизация сайта"
            },
            {
                name: 'description',
                content: "IDL-команда профессионалов которая разрабатывает сайты любой сложности,нужен сайт? Только IDL -создаст сайт быстро и качественно по гибкой цене!"
            },
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/img/logo1.png'},
            {
                rel: 'stylesheet',
                href: "https://fonts.googleapis.com/css?family=Alice|Ledger|Philosopher|Spectral&display=swap"
            },


        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
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
        "~/plugins/donut.js",
        {src: "~/plugins/aos", ssr: false},
        {src: "~/plugins/vuelidate", ssr: true},
        {src: "~/plugins/smoothscroll", ssr: false},
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        ['@nuxtjs/google-analytics', {
            id: '153765894'
        }]
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://bootstrap-vue.js.org/docs/
        'bootstrap-vue/nuxt',
        ['vue-sweetalert2/nuxt'],
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        ['nuxt-fontawesome', {
            component: 'fa',
            imports: [
                {
                    set: '@fortawesome/free-solid-svg-icons',
                    icons: ['faDollarSign', 'faHome', 'faBuilding', 'faDesktop', 'faCubes', 'faAddressBook', 'faSpaceShuttle', 'faCode', 'faBrush', 'faHandHoldingUsd', 'faFileCode', 'faTint', 'faCog', 'faHeadset', 'faLightbulb', 'faCodeBranch', 'faCogs', 'faRocket', 'faAddressCard', 'faHeart', 'faCheckCircle']
                }
            ]
        }],
        ['@nuxtjs/component-cache', {maxAge: 1000 * 60 * 60}],

    ],


    /*
    ** Build configuration
    */
    build: {

        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    },
}




