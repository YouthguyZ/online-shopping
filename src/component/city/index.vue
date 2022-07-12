<script lang="ts" setup name="XtxCity">
import  Axios  from 'axios';
import { ref } from 'vue';
const active=ref(false)

  const cityList =ref<AreaList[]>([])
// 城市列表类型
type AreaList = {
  code: string
  level: number
  name: string
  areaList: AreaList[]
}

// 获取地址数据
async function getCityList(){
  const res =await Axios.get<AreaList[]>('https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json')
  console.log(res.data);
  cityList.value=res.data
}
getCityList()
</script>
<template>
  <div class="xtx-city">
    <div @click="active=!active" :class="{active:active}" class="select">
      <span class="placeholder">请选择配送地址</span>
      <span class="value"></span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div v-show="active" class="option">
      <span class="ellipsis" v-for="item in cityList" :key="item.code">{{item.name}}</span>
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