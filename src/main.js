import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
const app = createApp(App);
//引入CSS初始化文件
import './assets/css/base.css'
//ant design组件 按需注册
import { Menu, MenuItem } from 'ant-design-vue';
import * as antIcons from '@ant-design/icons-vue'
import './assets/css/myTheme.less' //自定义主题
// 注册icon组件
Object.keys(antIcons).forEach(key => {
    app.component(key, antIcons[key])
})
// 添加到全局
app.config.globalProperties.$antIcons = antIcons
app.use(Menu).use(MenuItem).use(router).mount('#app')