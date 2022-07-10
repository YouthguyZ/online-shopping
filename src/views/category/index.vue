<template>
  <div class="category">分类组件
    <XtxBread>
      <XtxBreadItem to="/">首页</XtxBreadItem>
      <XtxBreadItem>{{category.topCategory.name}}</XtxBreadItem>
      
    </XtxBread>
  </div>
</template>

<script lang="ts" name="TopCategory" setup>
import XtxBread from '@/component/bread/index.vue'
import XtxBreadItem from '@/component/bread/item.vue'

// 发请求获取一级分类数据 
import useStore from '@/store';
import { watch } from 'vue';
import { useRoute } from 'vue-router';
const {category} =useStore()
// 获取 id 使用 useroute
const route=useRoute()

// console.log(route.params.id); // 能够获取到 url 参数 id

// watch 侦听器 监听 id 变化 
// 三个参数
// 第一个参数：监视的对象
// 第二个参数：回调函数
// 第三个参数：对象：immediate、deep
watch(()=>route.params.id,()=>{
  // 判断
  if(!route.params.id) return
  category.getTopCategory(route.params.id as string) // as 类型断言
},{immediate:true})

</script>

<style></style>