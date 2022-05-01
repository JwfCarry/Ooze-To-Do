const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#5030e5',  //全局主色 紫色
            'link-color': '#5030e5',  //链接颜色
            'border-radius-base': '10px',
            'text-color': '#797587'  //主文本颜色
          },
          javascriptEnabled: true,
        },
      },
    },
  },
})
