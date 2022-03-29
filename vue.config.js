const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://dummy.restapiexample.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
})

