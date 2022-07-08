import {defineStore} from 'pinia'
// 导入请求 request
import request from '@/utils/request'
import { ApiRes, HomeItem } from '@/types'

export default defineStore('home',{
  state:()=>{
    return {
      // 类型断言
      bannerList:[] as HomeItem[]
    }
  },
  actions:{
   async getBannerList(){
    const res =await request.get<ApiRes<HomeItem[]>>('/home/banner')
    console.log(res.data.result);
    this.bannerList=res.data.result
    
   }
  }
})