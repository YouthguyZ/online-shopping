<script setup lang="ts" name="GoodsSku">
import { GoodsInfo, SpecItem, ValueItem } from '@/types';
import bwPowerSet from '@/utils/bwSet';

// 接收父组件传值
const props=defineProps<{
  goods:GoodsInfo
}>()
// sub 是当前点击的条目
// item 是当前点击的条目所属的规格
const changeSelected = (sub: ValueItem, item: SpecItem) => {
  // // 干掉所有人
  // item.values.forEach(i => i.selected = false)
  // 判断如果被禁用了就不要选中
  if (sub.disabled) return
  // 干掉除了我之外的所有人
  item.values.filter(v => v.name !== sub.name).forEach(i => i.selected = false)
  // 修改当前被点击的对象属性 selected 取反
  // selected 默认是 undefined 而 undefined 取反正好是 true
  sub.selected = !sub.selected
}
// 目标: 生成路径字典(对象/映射) => 传入一个 庆友黄+中国 => 有货
// obj['中国+10cm']

// obj['中国', '10cm'] 无法取值, 需要拼接
function getPathMap() {
  // 1. 筛选无效的数据 (没有库存的)
  const skus = props.goods.skus.filter(item => item.inventory > 0)
  // console.log(skus)
  // 创建一个路径字典
  const pathMap: any = {}
  skus.forEach(item => {
    // 2. 将 skus 转成字符串数组 (都是有货的 sku)
    // 算法要的是字符串数组 => 我们就将对象数组转成字符串数组
    // valueName
    const arr = item.specs.map(v => v.valueName)
    // console.log(arr)
    // 3. 调用算法生成子集
    const result = bwPowerSet(arr)
    // console.log(result)
    // 4. 往路径字典对象中添加属性
    result.forEach(arrItem => {
      // console.log(arrItem.join('☆'))
      const key = arrItem.join('☆')
      // pathMap[key] = true
      // 'xxx' in 对象 作用是判断 'xxx' 是否是对象的属性, 有就返回 true, 没有就是 false
      if (key in pathMap) {
        // 4.2 如果对象中有这个属性, 就直接添加 id 到数组
        pathMap[key].push(item.id)
      } else {
        // 4.1 如果对象中没有这个属性, 就创建一个数组, 添加 id
        // const arr = [1, 2, 3, 4, item.id]
        pathMap[key] = [item.id]
        // pathMap[key].push(item.id)
      }
    })
  })
  return pathMap
}
// 修改禁用状态, 页面加载时就对所有元素进行修改
function updateDisabledStatus() {
  // 该方法的作用: 循环所有 specs(规格) 去路径字典里找, 是否存在
  // 如果存在就不禁用, 如果不存在就禁用
  props.goods.specs.forEach(item => {
    item.values.forEach(sub => {
      // console.log(sub.name)
      // 去对象里找是否有这个属性, 该怎么做? key in obj 得到布尔值
      // 如果存在就不禁用, 如果不存在就禁用
      // if (sub.name in pathMap) {
      //   sub.disabled = false
      // } else {
      //   sub.disabled = true
      // }
      // 只要是将 if 条件表达式的结果赋值给某个对象, 都可以用这种办法: 直接将条件表达式赋给对象的属性
      // 开发小技巧
      sub.disabled = !(sub.name in pathMap)
    })
  })
}

const pathMap = getPathMap()
console.log(pathMap)
// 调用方法
updateDisabledStatus()
</script>
<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.name">
      <dt>{{item.name}}</dt>
      <dd>
        <template v-for="sub in item.values" :key="sub.name">
          <img
            v-if="sub.picture"
            :class="{ selected: sub.selected ,disabled:sub.disabled}"
            :src="sub.picture"
            :alt="sub.name"
            :title="sub.name"
             @click="changeSelected(sub, item)"
          />
          <span  @click="changeSelected(sub, item)" :class="{ selected: sub.selected ,disabled:sub.disabled}" v-else>{{sub.name}}</span>
        </template>
      </dd>
    </dl>
    
  </div>
</template>

<style scoped lang="less">
.sku-state-mixin () {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: @xtxColor;
  }
  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;
  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      flex: 1;
      color: #666;
      > img {
        width: 50px;
        height: 50px;
        margin-top: 5px;
        .sku-state-mixin ();
      }
      > span {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding: 0 20px;
        margin-top: 5px;
        .sku-state-mixin ();
      }
    }
  }
}
</style>
