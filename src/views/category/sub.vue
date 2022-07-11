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
  if(route.fullPath!=='/category/'+route.params.id)
  category.getSubFilter(route.params.id as string)
})
</script>
<template>
  <div class="category">
    <div class="container">
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem :to="`/category/${category.subCategory.parentId}`">{{category.subCategory.parentName}}</XtxBreadItem>
        <XtxBreadItem >{{category.subCategory.name}}</XtxBreadItem>
      </XtxBread>
    </div>
  </div>
</template>

<style></style>
