<script lang="ts" setup name="XtxCity">
// 城市列表类型
export type AreaList = {
  code: string
  level: number
  name: string
  areaList: AreaList[]
}
// 选择城市
export type CityResult = {
  provinceCode: string,
  provinceName: string,
  cityCode: string,
  cityName: string,
  countyCode: string,
  countyName: string
}

import  Axios  from 'axios';
import { ref, watchEffect } from 'vue';
import {onClickOutside} from '@vueuse/core'
const active=ref(false)
const target=ref(null)

  const cityList =ref<AreaList[]>([])
  // 在定义一个数据接收
  const cacheList =ref<AreaList[]>([])
  const cityResult=ref<CityResult>({} as CityResult)

// 接收父组件传值
defineProps<{
  address?:string
}>()
// 向父传值
const emit=defineEmits<{
  (e: 'changeCity', city: CityResult): void
}>()
// 获取地址数据
async function getCityList(){
  const res =await Axios.get<AreaList[]>('https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json')
  console.log(res.data);
  cityList.value=res.data
  // 接收相同数据
  cacheList.value=res.data
}
getCityList()
// 点击 target 以外的地区会关闭
onClickOutside(target,()=>{
  active.value=false
})

// 定义点击事件
const selectCity=(city:AreaList)=>{
  // 选择城市时判断当前选择的是省还是市还是区
  if(city.level===0){
    // 省
    cityResult.value.provinceName=city.name
    cityResult.value.provinceCode=city.code
  }
  if(city.level===1){
    // 市
    cityResult.value.cityName=city.name
    cityResult.value.cityCode=city.code
  }
  if(city.level===2){
    // 县
    cityResult.value.countyName=city.name
    cityResult.value.countyCode=city.code
    // 给父组件传值
    emit('changeCity',cityResult.value)
  }
  // 如果没有地区信息内容 就中断执行并关闭弹框
  if(!city.areaList) return active.value=false
  cityList.value=city.areaList
}
// 侦听器 弹框关闭后重新赋原始地区值给 citylist （恢复数据）
watchEffect(() => {
  if (!active.value) cityList.value = cacheList.value
})
</script>
<template>
  <div ref="target" class="xtx-city">
    <div @click="active=!active" :class="{active:active}" class="select">
      <span v-if="address" class="placeholder">{{address}}</span>
      <span v-else class="placeholder">请选择配送地址</span>
      <span class="value"></span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div v-show="active" class="option">
      <span @click="selectCity(item)" class="ellipsis" v-for="item in cityList" :key="item.code">{{item.name}}</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.xtx-city {
  display: inline-block;
  position: relative;
  z-index: 400;
  .select {
    border: 1px solid #e4e4e4;
    height: 30px;
    padding: 0 5px;
    line-height: 28px;
    cursor: pointer;
    &.active {
      background: #fff;
    }
    .placeholder {
      color: #999;
    }
    .value {
      color: #666;
      font-size: 12px;
    }
    i {
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .option {
    width: 542px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 29px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    > span {
      width: 130px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      padding: 0 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
}
</style>