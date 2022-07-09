<script lang="ts" setup>
import useStore from '@/store'
import HomePannel from './home-pannel.vue'

import {useIntersectionObserver} from '@vueuse/core'
import { ref } from 'vue';
import { useLazyData } from '@/utils/hooks';
const { home } = useStore()
// home.getHotList()
// 实现数据懒加载
// 在进入可视区后才发请求
const target =ref(null)
// const {stop}=useIntersectionObserver(target,([{isIntersecting}])=>{
//   // 判断是否进入可视区
//   if(isIntersecting){
//     home.getHotList()
//     // 请求过后就不用再发请求 优化性能
//     // 解构出 stop
//     stop()
//   }
// })


// 原始封装
useLazyData(target,()=>{
  home.getHotList()
})

// 借助引用数据类型的特性实现封装
// const target = useLazyData(() => home.getNewList())

// 极致精简 => 将 api 函数直接作为回调传入, 自动执行
// const target = useLazyData(home.getNewList)

</script>
<template>
 <HomePannel ref="target" title="人气推荐" sub-title="人气爆款 不容错过">
    <ul ref="pannel" class="goods-list">
      <li v-for="item in home.hotList" :key="item.id">
        <RouterLink to="/">
          <!-- <img :src="item.picture" alt="" /> -->
          <!-- 使用路由懒加载 -->
          <img v-lazy="item.picture" alt="" />
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePannel>
</template>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>