const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      title: "Diego Bittencourt Mendes",
      entry: "src/main.js"
    }
  }
})
