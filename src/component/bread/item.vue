<script lang="ts" setup name="XtxBreadItem">
import { inject } from 'vue'

defineProps({
  to: {
    type: String,
  },
})

const separator = inject('separator')
</script>
<template>
  <div class="xtx-bread-item">
    <!--
      如果to存在 有值 我们就渲染一个router-link标签
      如果to不存在  那就渲染一个span标签
    -->
    <router-link v-if="to" :to="to"><slot /></router-link>
    <span v-else><slot /></span>
    <!-- 分隔符 -->
    <i v-if="separator">{{ separator }}</i>
    <i v-else class="iconfont icon-angle-right"></i>
  </div>
</template>

<style lang="less" scoped>
.xtx-bread-item {
  i {
    margin: 0 6px;
    font-size: 10px;
  }
  // 最后一个i隐藏
  &:nth-last-of-type(1) {
    i {
      display: none;
    }
  }
}
</style>