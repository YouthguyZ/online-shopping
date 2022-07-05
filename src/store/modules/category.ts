import {defineStore} from 'pinia'
// 导入请求 request
import request from '@/utils/request'
// 导入类型声明
import { ApiRes, categoryItem } from '@/types'

// 优化首页加载
import { topCategory } from '../contansts'
const defaultCategory=topCategory.map(item=>{
  return {
    name:item
  }
})

// 接口
// interface categoryItem{
//   id:string
//   name:string
//   picture:string
// }
// interface ApiRes<t>{
//   code:string
//   msg:string
//   result:t
// }
export default defineStore('category',{
  state:()=>{
    return {
      // 类型断言
      list:defaultCategory as categoryItem[]
    }
  },
  actions:{
   async getAllCategory(){
      const res=await request.get<ApiRes<categoryItem[]>>('/home/category/head')
      console.log(res.data.result);
      this.list=res.data.result
      
    }
  }
})