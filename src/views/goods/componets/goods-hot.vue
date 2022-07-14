<script setup lang="ts">
import GoodsItems from '@/views/category/components/goods-item.vue'
import { PropType, ref } from 'vue'
import request from '@/utils/request'
import { ApiRes, GoodsItem } from '@/types';
import { useRoute } from 'vue-router';
const route=useRoute()
const props = defineProps({
  type: {
    type: Number as PropType<1 | 2 | 3>,
    default: 1,
  },
})

// 标题对象
const titleObj = {
  1: '24小时热销榜',
  2: '周热销榜',
  3: '总热销榜',
}
const list=ref<GoodsItem[]>([])
// 发请求 
async function getHotList(){
  const res = await request.get<ApiRes<GoodsItem[]>>('/goods/hot',{
    params:{
      type:props.type,
      id:route.params.id
    }
  })
  console.log(res);
  list.value=res.data.result
  
}
getHotList()
</script>

<template>
  <div class="goods-hot">
    <h3>{{ titleObj[props.type] }}</h3>
    <div class="goods-list">
      <!-- 商品区块 -->
      <GoodsItems v-for="item in list" :key="item.id" :goods="item" />
    </div>
  </div>
</template>

<style scoped lang="less">
.goods-hot {
  background-color: #fff;
  margin-bottom: 20px;
  h3 {
    height: 70px;
    background: @helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }
  .goods-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>