<template>
  <homePannel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
    <template #right>
      <XtxMore />
    </template>

    <ul class="goods-list">
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
  </homePannel>
</template>

<script setup lang="ts">
import homePannel from './home-pannel.vue';
import useStore from '@/store';
const {home} =useStore()
home.getNewList()
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