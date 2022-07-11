<script lang="ts" setup>
import useStore from '@/store';
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';
const route=useRoute()
const {goods}=useStore()
watchEffect(()=>{
  if(route.fullPath!=='/goods/'+route.params.id)return
  goods.getGoodsInfo(route.params.id as string)
})
const { info } = storeToRefs(goods)
</script>
<template>
  <div class="xtx-goods-page">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread v-if="info.categories">
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem :to="`/goods/${info.categories[0]}}}`">{{info.categories[1].name}}</XtxBreadItem>
        <XtxBreadItem :to="`/goods/${info.categories[1]}}`">{{info.categories[0].name}}</XtxBreadItem>
        <XtxBreadItem >{{info.name}}</XtxBreadItem>
      </XtxBread>
      <!-- 商品信息 -->
      <div class="goods-info"></div>
      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <div class="goods-tabs"></div>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.goods-info {
  min-height: 600px;
  background: #fff;
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>