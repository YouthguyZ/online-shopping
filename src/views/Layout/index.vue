<template>
  <AppTopnav/>
  <AppHeader/>
  <AppHeaderSticky/>
   <main class="app-body">
    <!-- 路由出口 一二级分类-->
    <router-view></router-view>
  </main>
  <AppFooter/>

</template>

<script name="Layout" setup lang="ts">
import AppTopnav from './components/app-topnav.vue';
import AppHeader from './components/app-header.vue';
import AppFooter from './components/app-footer.vue';
import AppHeaderSticky from './components/app-header-sticky.vue';

</script>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>