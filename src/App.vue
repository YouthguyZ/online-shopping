<template>
  <div>
    app 组件
  </div>
  <h1>我是大盒子</h1>
</template>

<script setup lang="ts">
// 路径改写
import axios from '@/utils/request';

// 测试接口
axios.get('/home/index').then(res=>console.log(res))
</script>

<style scoped lang="less">
// 必须导入variables.less
@import '@/assets/styles/variable.less';
@import '@/assets/styles/mixins.less';
h1 {
  background-color: @xtxColor;
  .hoverShadow();
}
</style>