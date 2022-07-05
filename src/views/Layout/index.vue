<template>
  <AppTopnav/>
  <AppHeader/>
   <main class="app-body">
    <!-- 路由出口 -->
  </main>
  <AppFooter/>

</template>

<script name="Layout" setup lang="ts">
import AppTopnav from './components/app-topnav.vue';
import AppHeader from './components/app-header.vue';
import AppFooter from './components/app-footer.vue';

</script>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>