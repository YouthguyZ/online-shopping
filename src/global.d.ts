import XtxSkeleton from '@/component/skeleton/index.vue'
import XtxCarousel from '@/component/carousel/index.vue'
import XtxMore from '@/component/more/index.vue'
// 参考：
declare module 'vue' {
  export interface GlobalComponents {
    XtxSkeleton: typeof XtxSkeleton
    XtxCarousel: typeof XtxCarousel
    XtxMore: typeof XtxMore
  }
}
export {}