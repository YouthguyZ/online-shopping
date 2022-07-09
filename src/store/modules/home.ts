import {defineStore} from 'pinia'
// 导入请求 request
import request from '@/utils/request'
import { ApiRes, BrandItem, HomeItem, HotItem, NewItem, ProductItem, SpecialItem } from '@/types'

export default defineStore('home',{
  state:()=>{
    return {
      // 类型断言
      bannerList:[] as HomeItem[],
      NewList:[] as NewItem[],
      hotList:[] as HotItem[],
      brandList:[] as BrandItem[],
      productList:[] as ProductItem[],
      specialList:[] as SpecialItem[]
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
    this.brandList=[...res.data.result,...res.data.result,...res.data.result,]
    this.brandList.pop()
   },
   async getProductList(){
    const res =await request.get<ApiRes<ProductItem[]>>('/home/goods')
    // console.log(res.data.result);
    this.productList=res.data.result
   },
   async getSpecialtList(){
    const res =await request.get<ApiRes<SpecialItem[]>>('/home/special')
    // console.log(res.data.result);
    this.specialList=res.data.result
   }
   
  }
})