import {defineStore} from 'pinia'
// 导入请求 request
import request from '@/utils/request'
// 导入类型声明
import { ApiRes, categoryItem, SubCategory, TopCategory } from '@/types'

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
      list:defaultCategory as categoryItem[],
      topCategory:{} as TopCategory,
      subCategory:{} as SubCategory
    }
  },
  actions:{
   async getAllCategory(){
      const res=await request.get<ApiRes<categoryItem[]>>('/home/category/head')
      // console.log(res.data.result);
      // 给 list 增加 open 属性
      res.data.result.forEach(item=>item.open=false)
      this.list=res.data.result
      
    },
    show(id:string){
      // 找到相同 id 点击时 或 鼠标移动到时
      const item=this.list.find(item=>item.id===id)
      // if(item){
      //   item.open=true
      // }

      // 第二种 使用有风险
      item!.open=true

    },
    hide(id:string){
      const item=this.list.find(item=>item.id===id)
      // if(item){
      //   item.open=true
      // }

      // 第二种 使用有风险
      item!.open=false
    },
    async getTopCategory(id:string){
      const res= await request.get<ApiRes<TopCategory>>('/category',{
        params:{id}
      })
      // console.log(res.data.result);
      this.topCategory=res.data.result
    },
    async getSubFilter(id:string){
      const res= await request.get<ApiRes<SubCategory>>('/category/sub/filter',{
        params:{id}
      })
      // console.log(res.data.result);
      this.subCategory=res.data.result
    }
  }
})