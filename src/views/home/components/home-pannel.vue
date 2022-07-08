<script lang="ts" setup name="HomePanel">
defineProps<{
  title: string
  subTitle: string
}>()
</script>
<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
       <h3>{{ title }}<small>{{ subTitle }}</small></h3>
        <!-- 这里不能写死, 也不能用布尔值判断是否使用「更多」组件 -->
        <!-- <XtxMore to="/"></XtxMore> -->
        <!-- 最佳解决方案: 插槽 -->
        <slot name="right" />
      </div>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="less">
.home-panel {
  background-color: #fff;
  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;
    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;
      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>