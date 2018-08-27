module.exports = {
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
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
    ],

  },
  css: [
    '@/assets/css/main.scss'
  ],
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/font-awesome',
    { src: '@/plugins/vue-particles', ssr: false },
    '@/plugins/vue-scroll-to',
    '@/plugins/vue2-google-maps'
  ],
  /*
  ** Customize the progress bar color
  */
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
    }
  }
};
