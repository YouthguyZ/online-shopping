<template>
  <homePannel ref="target" title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
    <template #right>
      <XtxMore />
    </template>

    <ul class="goods-list" v-if="home.NewList.length">
      <li v-for="item in home.NewList" :key="item.id">
        <RouterLink to="/">
          <!-- 图片懒加载 ：src => v-lazy -->
          <img
            v-lazy="item.picture"
            alt=""
          />
          <p class="name ellipsis">{{item.name}}</p>
          <p class="price">&yen;{{item.price}}</p>
        </RouterLink>
      </li>
    </ul>
    <HomeSkeleton v-else :count="4"/>
  </homePannel>
</template>

<script setup lang="ts">
import homePannel from './home-pannel.vue';
import useStore from '@/store';
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import HomeSkeleton from './home-skeleton.vue';
const {home} =useStore()
// home.getNewList()
// 实现数据懒加载
// 在进入可视区后才发请求
const target =ref(null)
const {stop}=useIntersectionObserver(target,([{isIntersecting}])=>{
  // 判断是否进入可视区
  if(isIntersecting){
    home.getNewList()
    // 请求过后就不用再发请求 优化性能
    // 解构出 stop
    stop()
  }
})
</script>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}

</style>