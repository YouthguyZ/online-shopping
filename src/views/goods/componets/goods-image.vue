<script lang="ts" setup name="GoodsImage">
import { ref } from 'vue';

defineProps<{
  images: string[]
}>()
const active=ref(0)
</script>
<template>
  <div class="goods-image">
    <div class="middle">
      <img
        :src="images[active]"
        alt=""
      />
    </div>
    <ul class="small">
      <li v-for="(item,index) in images"
       :key="item" 
       :class="{ active: index === active }"
        @mouseenter="active = index"
       >
        <img
          :src="item"
          alt=""
        />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }
  .small {
    width: 80px;
    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;
      &:hover,
      &.active {
        border: 2px solid @xtxColor;
      }
    }
  }
}
</style>