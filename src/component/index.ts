// 统一的注册所有的全局组件
// 导入骨架屏组件
import XtxSkeleton from '@/component/skeleton/index.vue'
// 导入轮播图组件
import XtxCarousel from '@/component/carousel/index.vue'
// 带入全局 more 组件
import XtxMore from '@/component/more/index.vue'

import { App } from 'vue'
// 图片懒加载：等图片正式进入到可视区中时，才加载对应的图片，否则不请求图片
// 通过vueuse封装的 useIntersectionObserver 可监视图片何时进入或离开可视区
import { useIntersectionObserver } from '@vueuse/core'
export default {
  install(app: App) {
    app.component('XtxSkeleton', XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
    
    // 全局注册指令
    // 参数1: 指令名
    // 参数2: 配置项
    app.directive('lazy', {
      // Vue2: 当绑定的元素插入到 DOM 中时执行, inserted
      // inserted(el, binding) {}
      // Vue3: 改为了 mounted
      mounted(el, binding) {
        // el: 当前指令绑定的 DOM 元素
        // console.log(el, binding)
        // 逻辑: 当 el 进入可视区后, 给它设置 src 属性
        useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.src = binding.value
          }
        })
      }
    })
  },
}