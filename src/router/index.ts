import {createRouter ,createWebHashHistory}from 'vue-router'

// 导入首页组件
import Layout from '@/views/Layout/index.vue'
import home from '@/views/home/index.vue'
const router= createRouter({
  routes:[
    {path:'/',
    component:Layout,
    // 配置路由组件
    children:[
      {path:'', // 默认路由 先加载 laylout 再加载 home 首页
      component:home
       },
      {path:'/category/:id', 
      component:()=>import('@/views/category/index.vue') // 路由懒加载 一级分类
      },
      {path:'/category/sub/:id', 
      component:()=>import('@/views/category/sub.vue') // 路由懒加载 二级分类
    },
    ]
  },
  {path:'/login',component:()=>import('@/views/Login/index.vue')}
  ],
  history:createWebHashHistory(),
  // 优化跳转 点击首页 直接回到首页顶部
  scrollBehavior:()=>{
    return {
      top:0
    }
  }
})
export default router