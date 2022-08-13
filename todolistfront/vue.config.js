const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3333/todolist",
      },
    },
  },
})
