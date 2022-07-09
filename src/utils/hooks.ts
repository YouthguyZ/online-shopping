// 封装数据懒加载工具

import {useIntersectionObserver} from '@vueuse/core'
import { ref } from 'vue'
// 实现数据懒加载
// 在进入可视区后才发请求
export function useLazyData(target:any,callback:()=>void){
  // const target =ref(null)
  const {stop}=useIntersectionObserver(target,([{isIntersecting}])=>{
    // 判断是否进入可视区
    if(isIntersecting){
      // 进入可视区要做的事情 ?
      callback()
      // 停止监视, 以后不会再触发
      stop()
    }
  })
} 