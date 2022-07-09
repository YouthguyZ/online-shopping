import {defineStore} from 'pinia'
// 导入请求 request
import request from '@/utils/request'
import { ApiRes, BrandItem, HomeItem, HotItem, NewItem } from '@/types'

export default defineStore('home',{
  state:()=>{
    return {
      // 类型断言
      bannerList:[] as HomeItem[],
      NewList:[] as NewItem[],
      hotList:[] as HotItem[],
      brandList:[] as BrandItem[]
    }
  },
  actions:{
   async getBannerList(){
    const res =await request.get<ApiRes<HomeItem[]>>('/home/banner')
    // console.log(res.data.result);
    this.bannerList=res.data.result
   },
   async getNewList(){
    const res =await request.get<ApiRes<NewItem[]>>('/home/new')
    // console.log(res.data.result);
    this.NewList=res.data.result
   },
   async getHotList(){
    const res =await request.get<ApiRes<HotItem[]>>('/home/hot')
    // console.log(res.data.result);
    this.hotList=res.data.result
   },
   async getBrandList(){
    const res =await request.get<ApiRes<BrandItem[]>>('/home/brand')
    // console.log(res.data.result);
    this.brandList=res.data.result
   }
   
  }
})