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
  ]
}