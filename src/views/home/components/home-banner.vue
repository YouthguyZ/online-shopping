<script lang="ts" setup>

import useStore from '@/store';
const {home}=useStore()
// 调用 api 获取轮播图数据
home.getBannerList()
</script>
<template>
  <div class="home-banner">
    <!-- 轮播图 -->
    <xtx-carousel/>
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
  // 修改按钮位置 less 样式穿透 旧语法 /deep/ => 新语法 :deep()
  :deep(.carousel-btn.prev) {
  left: 270px!important;
}
:deep(.carousel-indicator) {
  padding-left: 250px;
}
}
</style>