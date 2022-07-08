// 统一的注册所有的全局组件
// 导入骨架屏组件
import XtxSkeleton from '@/component/skeleton/index.vue'
// 导入轮播图组件
import XtxCarousel from '@/component/carousel/index.vue'
// 带入全局 more 组件
import XtxMore from '@/component/more/index.vue'

import { App } from 'vue'
export default {
  install(app: App) {
    app.component('XtxSkeleton', XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
  },
}