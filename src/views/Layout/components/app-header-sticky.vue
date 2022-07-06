<script lang="ts" setup name="AppHeaderSticky">
import { ref } from 'vue';
import AppHeaderNav from './app-header-nav.vue'

const y=ref(0)

// 监听滚动事件
window.addEventListener('scroll',()=>{
  const scrolltop=document.documentElement.scrollTop||document.body.scrollTop
   y.value=scrolltop 
   console.log(y);
   
})
</script>

<template>
  <div class="app-header-sticky" :class="{show:y>=78}">
    <div class="container" v-if="y>=78">
      <RouterLink class="logo" to="/" />
      <AppHeaderNav />
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.app-header-sticky {
  width: 100%;
  height: 85px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);
  &.show {
    transition: all 0.3s linear;
    transform: translateY(0%);
  }
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url(@/assets/images/logo.png) no-repeat right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid @xtxColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: @xtxColor;
      }
    }
  }
}
</style>