<script setup lang="ts">
import type { GoodsInfo } from '@/types'

interface Props {
  goods: GoodsInfo
}
defineProps<Props>()
</script>

<template>
  <div class="goods-tabs">
    <nav>
      <a>商品详情</a>
    </nav>
    <div class="goods-detail">
      <!-- 属性 -->
      <ul class="attrs">
        <li v-for="item in goods.details.properties" :key="item.value">
          <span class="dt">{{ item.name }}</span>
          <span class="dd">{{ item.value }}</span>
        </li>
      </ul>
      <!-- 图片 -->
      <img
        v-for="item in goods.details.pictures"
        :key="item"
        :src="item"
        alt=""
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.goods-tabs {
  min-height: 600px;
  background: #fff;
  nav {
    height: 70px;
    line-height: 70px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    a {
      padding: 0 40px;
      font-size: 18px;
      position: relative;
      > span {
        color: @priceColor;
        font-size: 16px;
        margin-left: 10px;
      }
    }
  }
}
.goods-detail {
  padding: 40px;
  .attrs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    li {
      display: flex;
      margin-bottom: 10px;
      width: 50%;
      .dt {
        width: 100px;
        color: #999;
      }
      .dd {
        flex: 1;
        color: #666;
      }
    }
  }
  > img {
    width: 100%;
  }
}
</style>