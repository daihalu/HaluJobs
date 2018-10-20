module.exports = {
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'https://halujobs.herokuapp.com',
    // proxyHeaders: false,
    // credentials: true
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'HaluJobs',
    meta: [
      { charset: 'utf-8' },
      { contact: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', contact: 'description', content: 'Một sản phẩm của © HaluTech' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }
    ],

  },
  css: [
    '@/assets/css/main.scss'
  ],
  plugins: [
    '@/plugins/ElementUi',
    '@/plugins/HaluApi',
    '@/plugins/FontAwesome',
    { src: '@/plugins/VueParticles', ssr: false },
    '@/plugins/VueScrollTo',
    '@/plugins/VueBar',
    '@/plugins/Vue2GoogleMaps',
    { src: '@/plugins/LocalStorage.js', ssr: false }
  ],
  /*
  ** Customize the progress bar color
  */

  router:  {
    extendRoutes(routes, resolve) {
      // Replace
      let replace = {
        'cong-ty/index':                 'cong-ty.html',
        'tuyen-dung/viec-lam/_id': 'tuyen-dung/viec-lam/:slug.html',
        'account/login': 'dang-nhap.html',
        'terms-of-use': 'thoa-thuan-su-dung.html'
      };
      for(let k in replace) {
        if(!replace.hasOwnProperty(k)) continue;
        routes.find((r) => r.chunkName.includes('pages/' + k)).path = '/' + replace[k];
      }
      // Add
      let add = [
        // {name: 'activity-manage-idn', path: '/activity/manage/:idn', component: resolve(__dirname, 'pages/activity/editor.vue')},
        // {name: 'hoat-dong-type-slug', path: '/hoat-dong/:type/:ids.html', component: resolve(__dirname, 'pages/activity/public/list.vue')}
      ];
      for(let k in add) {
        if(!add.hasOwnProperty(k)) continue;
        routes.push(add[k]);
      }
    },

    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
  },
  loading: { color: '#ffffff' },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      if (!isClient) {
        // This instructs Webpack to include `vue2-google-maps`'s Vue files
        // for server-side rendering
        config.externals.splice(0, 0, function (context, request, callback) {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false)
          } else {
            callback()
          }
        })
      }
    },

    // filenames:      {
    //   chunk: '[id].[chunkhash].js'
    // },
    // vendor:         ['js-cookie', 'lodash'],
    // styleResources: {
    //   scss: './assets/css/element-variables.scss'
    // },
    // extractCSS:     {
    //   allChunks: true
    // }
  }
};
