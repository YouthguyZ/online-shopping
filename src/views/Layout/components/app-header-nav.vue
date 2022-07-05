<template>
   <ul class="app-header-nav">
      <li class="home"><RouterLink to="/">首页</RouterLink></li>
      <li><a href="#">美食</a></li>
      <li><a href="#">餐厨</a></li>
      <li><a href="#">艺术</a></li>
      <li><a href="#">电器</a></li>
      <li><a href="#">居家</a></li>
      <li><a href="#">洗护</a></li>
      <li><a href="#">孕婴</a></li>
      <li><a href="#">服装</a></li>
      <li><a href="#">杂货</a></li>
    </ul>
</template>

<script setup lang="ts" name="AppHeaderNav">

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