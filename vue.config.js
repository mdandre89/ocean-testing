module.exports = {
  "runtimeCompiler": true,

  "configureWebpack": {
    "devServer": {
      "disableHostCheck": true,
      "watchOptions": {
        "aggregateTimeout": 200,
        "ignored": "node_modules/**",
        "poll": 5000
      }
    }
  },

  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    },
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about',
        '/policy',
        '/intro',
        '/results',
        '/results/5febaa2cc9b7b116872e0cf2'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
