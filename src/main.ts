import { createApp } from 'vue'
import App from './App.vue'
// 导入默认清除样式
import 'normalize.css'
// 导入公共样式
import '@/assets/styles/common.less'

// 导入路由对象并使用
import router from '@/router/index'

// 导入pinia对象并使用
import {createPinia} from 'pinia'



createApp(App).use(router).use(createPinia()).mount('#app')
