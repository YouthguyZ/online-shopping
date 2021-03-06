// 统一的注册所有的全局组件
// 导入骨架屏组件
import XtxSkeleton from '@/component/skeleton/index.vue'
// 导入轮播图组件
import XtxCarousel from '@/component/carousel/index.vue'
// 带入全局 more 组件
import XtxMore from '@/component/more/index.vue'
// 导入全局组件 面包屑
import XtxBread from '@/component/bread/index.vue'
import XtxBreadItem from '@/component/bread/item.vue'
// 导入全局组件 城市地址
import XtxCity from '@/component/city/index.vue'

// 导入默认加载失败图片
import defaultImg from "@/assets/images/200.png";

// 导入数量组件
import XtxNumbox from '@/component/numbox/index.vue'
// 导入全局按钮组件
import XtxButton from '@/component/button/index.vue'



import { App } from 'vue'
// 图片懒加载：等图片正式进入到可视区中时，才加载对应的图片，否则不请求图片
// 通过vueuse封装的 useIntersectionObserver 可监视图片何时进入或离开可视区
import { useIntersectionObserver } from '@vueuse/core'
export default {
  install(app: App) {
    app.component('XtxSkeleton', XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
    app.component(XtxBread.name, XtxBread)
    app.component(XtxBreadItem.name, XtxBreadItem)
    app.component(XtxCity.name, XtxCity)
    app.component(XtxNumbox.name, XtxNumbox)
    app.component(XtxButton.name, XtxButton)

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
          // 没有图片、图片加载失败就加载默认图片
          el.onerror=()=>{
            el.src=defaultImg
          }
        })
      }
    })
  },
}