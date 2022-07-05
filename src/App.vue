<template>
  <div>
    app 组件
  </div>
</template>

<script setup lang="ts">
// 路径改写
import axios from '@/utils/request';

// 测试接口
axios.get('/home/index').then(res=>console.log(res))
</script>

<style scoped>

</style>