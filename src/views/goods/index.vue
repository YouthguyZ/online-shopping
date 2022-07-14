<script lang="ts" setup>
import useStore from '@/store';
import { storeToRefs } from 'pinia';
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import GoodsImage from './componets/goods-image.vue';
import GoodsSales from './componets/goods-sales.vue';
import GoodsName from './componets/goods-name.vue';
import GoodsSku from './componets/goods-sku.vue';
const route=useRoute()
const {goods}=useStore()
watchEffect(()=>{
  if(route.fullPath!=='/goods/'+route.params.id)return
  goods.getGoodsInfo(route.params.id as string)
})
const { info } = storeToRefs(goods)
// 数量
const count=ref(2)
</script>
<template>
  <div class="xtx-goods-page">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread v-if="info.categories">
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem :to="`/category/${info.categories[1].id}`">{{info.categories[1].name}}</XtxBreadItem>
        <XtxBreadItem :to="`/category/sub/${info.categories[0].id}`">{{info.categories[0].name}}</XtxBreadItem>
        <XtxBreadItem >{{info.name}}</XtxBreadItem>
      </XtxBread>
      <!-- 商品信息 -->
      <!-- 商品信息 -->
      <div class="goods-info">
        <div class="media">
          <GoodsImage v-if="info.mainPictures" :images="info.mainPictures"></GoodsImage>
          <GoodsSales/>
        </div>
        <div class="spec">
          <GoodsName :goods="info"/>
          <GoodsSku v-if="info.id" :goods="info"/>
          <XtxNumbox v-model="count"/>
        </div>
      </div>
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
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
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