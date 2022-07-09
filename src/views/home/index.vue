<script lang="ts" setup>
import HomeBanner from './components/home-banner.vue'
import HomeCategory from './components/home-category.vue'
import HomePannel from './components/home-pannel.vue'
import HomeNew from './components/home-new.vue';
import HomeHot from './components/home-hot.vue';

// 优化再首页里面发获取分类请求
 import useStore from '@/store';
  const {category}=useStore()
  // 获取全部分类列表
  category.getAllCategory()

</script>

<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- banner轮播图 -->
        <HomeBanner />
      </div>
    </div>
    <!-- !新鲜好物 -->
    <HomeNew/>
    <!-- !人气推荐 -->
    <HomeHot/>
  </div>
</template>



<style lang="less" scoped></style>