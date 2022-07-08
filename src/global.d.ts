import XtxSkeleton from '@/component/skeleton/index.vue'
import XtxCarousel from '@/component/carousel/index.vue'
// 参考：
declare module 'vue' {
  export interface GlobalComponents {
    XtxSkeleton: typeof XtxSkeleton
    XtxCarousel: typeof XtxCarousel
  }
}
export {}