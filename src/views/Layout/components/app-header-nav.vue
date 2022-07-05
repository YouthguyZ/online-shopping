<template>
   <ul class="app-header-nav">
      <li class="home"><RouterLink to="/">首页</RouterLink></li>
      <li v-for="item in category.list" :key="item.id" ><router-link to="/">{{item.name}}</router-link></li>
      
    </ul>
</template>

<script setup lang="ts" name="AppHeaderNav">
  import useStore from '@/store';
  const {category}=useStore()
  // 获取全部分类列表
  category.getAllCategory()
</script>

<style scoped lang="less">
.app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;
    li {
      margin-right: 40px;
      width: 38px;
      text-align: center;
      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;
          &:hover {
            color: @xtxColor;
            border-bottom: 1px solid @xtxColor;
          }
      }
    }
  }
</style>