// 统一的注册所有的全局组件
import XtxSkeleton from '@/component/skeleton/index.vue'
import { App } from 'vue'
export default {
  install(app: App) {
    app.component('XtxSkeleton', XtxSkeleton)
  },
}