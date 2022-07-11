<template>
  <RouterLink :to="`/goods/${goods.id}`" class="goods-item">
    <img
      v-lazy="goods.picture"
      alt=""
    />
    <p class="name ellipsis">{{goods.name}}</p>
    <p class="desc ellipsis">{{goods.desc}}</p>
    <p class="price">&yen;{{goods.price}}</p>
  </RouterLink>
</template>

<script lang="ts" setup name="GoodsItem">
import { GoodsItem } from '@/types';
// 接受传值
defineProps<{
  goods:GoodsItem
}>()
</script>

<style scoped lang="less">
.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  .hoverShadow();
  img {
    width: 160px;
    height: 160px;
  }
  p {
    padding-top: 10px;
  }
  .name {
    font-size: 16px;
  }
  .desc {
    color: #999;
    height: 29px;
  }
  .price {
    color: @priceColor;
    font-size: 20px;
  }
}
</style>