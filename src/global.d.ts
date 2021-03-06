import XtxSkeleton from '@/component/skeleton/index.vue'
import XtxCarousel from '@/component/carousel/index.vue'
import XtxMore from '@/component/more/index.vue'
import XtxBread from '@/component/bread/index.vue'
import XtxBreadItem from '@/component/bread/item.vue'
import XtxCity from '@/component/city/index.vue'
import XtxNumbox from '@/component/numbox/index.vue'
import XtxButton from '@/component/button/index.vue'
// 参考：
declare module 'vue' {
  export interface GlobalComponents {
    XtxSkeleton: typeof XtxSkeleton
    XtxCarousel: typeof XtxCarousel
    XtxMore: typeof XtxMore
    XtxBread: typeof XtxBread
    XtxBreadItem: typeof XtxBreadItem
    XtxCity: typeof XtxCity
    XtxNumbox: typeof XtxNumbox
    XtxButton: typeof XtxButton
  }
}
export {}