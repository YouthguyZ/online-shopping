<script lang="ts" setup>
import useStore from '@/store';
const {home}=useStore()
// 调用 api 获取轮播图数据
home.getBannerList()
</script>
<template>
  <div class="home-banner">
    <!-- 轮播图 -->
  </div>
</template>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  background-color: pink;
}
</style>