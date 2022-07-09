// 类型声明 
// 接口
export interface categoryItem{
  id:string
  name:string
  picture:string
  children:categoryItem[]
  // 添加 open 属性
  open:boolean
  goods:GoodsItem[]
}
export interface ApiRes<t>{
  code:string
  msg:string
  result:t
}

interface GoodsItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: number;
  orderNum?: number;
}


export interface HomeItem {
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}
export interface NewItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}
export interface HotItem {
  id: string;
  picture: string;
  title: string;
  alt: string;
}
export type BrandItem = {
  id: string
  name: string
  nameEn: string
  logo: string
  picture: string
  type?: any
  desc: string
  place: string
}


interface ProductItem {
  id: string;
  name: string;
  picture: string;
  saleInfo: string;
  children: Child[];
  goods: Good[];
}

interface Good {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}

interface Child {
  id: string;
  name: string;
  layer: number;
  parent?: any;
}