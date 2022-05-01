import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);
//引入CSS初始化文件
import './assets/css/base.css'
//ant design组件 全局注册
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
app.use(Antd)
//app挂载
app.mount('#app')
