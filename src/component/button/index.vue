<script lang="ts" setup name="XtxButton">
import { PropType } from 'vue'

defineProps({
  size: {
    type: String as PropType<'large' | 'middle' | 'small' | 'mini'>,
    default: 'middle',
  },
  type: {
    type: String as PropType<'default' | 'primary' | 'plain' | 'gray'>,
    default: 'default',
  },
})
</script>
<template>
  <button class="xtx-button ellipsis" :class="[size, type]">
    <slot />
  </button>
</template>

<style scoped lang="less">
.xtx-button {
  appearance: none;
  border: none;
  outline: none;
  background: #fff;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}
.large {
  width: 240px;
  height: 50px;
  font-size: 16px;
}
.middle {
  width: 180px;
  height: 50px;
  font-size: 16px;
}
.small {
  width: 100px;
  height: 32px;
}
.mini {
  width: 60px;
  height: 32px;
}
.default {
  border-color: #e4e4e4;
  color: #666;
}
.primary {
  border-color: @xtxColor;
  background: @xtxColor;
  color: #fff;
}
.plain {
  border-color: @xtxColor;
  color: @xtxColor;
  background: lighten(@xtxColor, 50%);
}
.gray {
  border-color: #ccc;
  background: #ccc;
  color: #fff;
}
</style>