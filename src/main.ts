import { createApp } from 'vue'
import App from './App.vue'
// 导入默认清除样式
import 'normalize.css'
// 导入公共样式
import '@/assets/styles/common.less'

import router from '@/router/index'


createApp(App).use(router).mount('#app')
