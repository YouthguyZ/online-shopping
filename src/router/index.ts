import {createRouter ,createWebHashHistory}from 'vue-router'

// 导入首页组件
import Layout from '@/views/Layout/index.vue'
const router= createRouter({
  routes:[
    {path:'/',
    component:Layout
  },
  {path:'/login',component:()=>import('@/views/Login/index.vue')}
  ],
  history:createWebHashHistory()
})
export default router