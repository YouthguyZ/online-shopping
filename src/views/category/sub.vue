<script lang="ts" setup name="SubCategory">
import useStore from '@/store';
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';
const route =useRoute()
const {category} =useStore()
console.log(route);

// 侦听器
watchEffect(()=>{  
  if(!route.params.id) return
  if(route.fullPath!=='/category/sub/'+route.params.id)return
   // 清空数据
  category.resetSubCategory()
  // 再发请求
  category.getSubFilter(route.params.id as string)
})
</script>
<template>
  <div class="category">
    <div class="container">
      <div style="height: 70px;">
      <!-- 面包蟹 -->
        <transition name="fade-in-out">
          <XtxBread v-if="category.subCategory.parentName">
            <XtxBreadItem to="/">首页</XtxBreadItem>
            <XtxBreadItem :to="`/category/${category.subCategory.parentId}`">{{category.subCategory.parentName}}</XtxBreadItem>
            <XtxBreadItem >{{category.subCategory.name}}</XtxBreadItem>
          </XtxBread>
          <!-- 骨架屏 -->
          <XtxBread v-else>
              <XtxBreadItem to="/">首页</XtxBreadItem>
              <XtxBreadItem>
                <XtxSkeleton opacity="0.2" bg="#27bb9a" animated :width="28" :height="18" />
              </XtxBreadItem>
              <XtxBreadItem>
                <XtxSkeleton opacity="0.2" bg="#27bb9a" animated :width="76" :height="18" />
              </XtxBreadItem>
            </XtxBread>
        </transition>
      </div>

        <!-- 筛选区 -->
        <div class="sub-filter">
          <div class="item">
            <div class="head">品牌：</div>
            <div class="body">
              <a href="javascript:;">全部</a>
              <a href="javascript:;" v-for="brand in category.subCategory.brands" :key="brand.id">{{brand.name}}</a>
            </div>
          </div>
          <div class="item" v-for="item in category.subCategory.saleProperties" :key="item.id">
            <div class="head">{{item.name}}:</div>
            <div class="body">
              <a href="javascript:;">全部</a>
              <a href="javascript:;" v-for="i in item.properties" :key="i.id">{{i.name}}</a>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>


<style scoped lang="less">
// 筛选区
.sub-filter {
  background: #fff;
  padding: 25px;
  .item {
    display: flex;
    line-height: 40px;
    .head {
      width: 80px;
      color: #999;
    }
    .body {
      flex: 1;
      a {
        margin-right: 36px;
        transition: all 0.3s;
        display: inline-block;
        &.active,
        &:hover {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
