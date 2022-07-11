  z<template>
  <div class="category">分类组件
    <XtxBread>
      <XtxBreadItem to="/">首页</XtxBreadItem>
      <XtxBreadItem>{{category.topCategory.name}}</XtxBreadItem>
    </XtxBread>
    <XtxCarousel style="height:500px" :slides="home.bannerList"/>
    <!-- 所有二级分类 -->
    <div class="sub-list">
      <h3>全部分类</h3>
      <ul>
        <li v-for="item in topCategory.children" :key="item.id">
          <a href="javascript:;">
            <img :src="item.picture" >
            <p>{{item.name}}</p>
          </a>
        </li>
      </ul>
    </div>
    <!-- 分类关联商品 -->
    <div class="ref-goods" v-for="item in topCategory.children">
      <div class="head">
        <h3>- {{item.name}} -</h3>
        <p class="tag">温暖柔软，品质之选</p>
        <XtxMore />
      </div>
      <div class="body">
        <GoodsItem v-for="sub in item.goods" :key="item.id" :goods="sub"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" name="TopCategory" setup>
import XtxBread from '@/component/bread/index.vue'
import XtxBreadItem from '@/component/bread/item.vue'

// 发请求获取一级分类数据 
import useStore from '@/store';
import { storeToRefs } from 'pinia';
import { watch, watchEffect } from 'vue';
import GoodsItem from './components/goods-item.vue';
import { useRoute } from 'vue-router';
const {category,home} =useStore()
// 获取 id 使用 useroute
const route=useRoute()

// console.log(route.params.id); // 能够获取到 url 参数 id

// watch 侦听器 监听 id 变化 
// 三个参数
// 第一个参数：监视的对象
// 第二个参数：回调函数
// 第三个参数：对象：immediate、deep
// watch(()=>route.params.id,()=>{
//   // 判断
//   if(!route.params.id) return
//   category.getTopCategory(route.params.id as string) // as 类型断言
// },{
//   immediate:true // 立即执行
// })

// 优化
watchEffect(()=>{
  if(!route.params.id) return
  category.getTopCategory(route.params.id as string)
})

// 获取轮播数据
home.getBannerList()
// 结构二级分类 category pinia 解构方式
const {topCategory}=storeToRefs(category) 
</script>

<style scoped lang="less">
.category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
}
 .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }
    .body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 65px 30px;
    }
  }
</style>