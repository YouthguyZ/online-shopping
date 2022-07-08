<script lang="ts" setup name="XtxCarousel">


// 子组件接收数据
// Vue3 一般接收方法
// defineProps({
//   slides:{
//     type:Array,
//     require:true
//   }

import { HomeItem } from '@/types';
import { onMounted, onUnmounted, ref } from 'vue';

// })
// 默认赋值属于实验性语法，可以尝鲜，需要再 vite.config 里配置 reactivityTransform 属性
// 在内部帮你把每个结构的属性都做了响应式处理
const { slides,
        autoPlay=true,
        duration=3000
}=defineProps<{
  // slides:{
  //   type:Array,
  //   require:boolean
  // }[]
  slides:HomeItem[],
  // 小写
  autoPlay?:boolean,
  duration?:number
}>()

// 淡入淡出的轮播图是轮播图界的青铜
// 定义一个当前轮播图的索引
const active = ref(0)
// 定义点击事件
const prev=()=>{
  active.value--
  if(active.value<0){
    active.value=slides.length-1
  }
}
const next=()=>{
  active.value++
  if(active.value>=slides.length){
    active.value=0
  }
}
let timerId = -1

// 鼠标进入轮播区域停止自动轮播
const stop = () => {
  clearInterval(timerId)
}

// 鼠标离开轮播区域重新开始自动轮播
const start = () => {
  timerId = window.setInterval(() => {
    // 如果没有自动播放就 return 不执行
    if(!autoPlay)return
    next()
    // console.log('正在滚动中...')
  }, duration)
}

// 组件挂载时开始定时器
onMounted(() => {
  start()
})

// 组件销毁时清除定时器
onUnmounted(() => {
  stop()
})
</script>

<template>
  <div class="xtx-carousel" @mouseenter="stop" @mouseleave="start">
    <ul class="carousel-body">
      <li v-for="(item,index) in slides" :key="item.id" :class="{ fade: active === index }" class="carousel-item">
        <RouterLink to="/">
          <img
            :src="item.imgUrl"
            alt=""
          />
        </RouterLink>
      </li>
     
    </ul>
    <a href="javascript:;" class="carousel-btn prev" @click="prev"
      ><i class="iconfont icon-angle-left"></i
    ></a>
    <a href="javascript:;" class="carousel-btn next" @click="next"
      ><i class="iconfont icon-angle-right"></i
    ></a>
    <div class="carousel-indicator">
      <span v-for="(item,index) in slides"
      :key="item.id"  
      :class="{active:active===index}"
      @mouseenter="active=index"
      ></span>
    
    </div>
  </div>
</template>

<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>