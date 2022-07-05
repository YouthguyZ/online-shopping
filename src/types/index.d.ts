// 类型声明 
// 接口
export interface categoryItem{
  id:string
  name:string
  picture:string
  children:categoryItem[]
}
export interface ApiRes<t>{
  code:string
  msg:string
  result:t
}