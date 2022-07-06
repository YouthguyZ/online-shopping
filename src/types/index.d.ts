// 类型声明 
// 接口
export interface categoryItem{
  id:string
  name:string
  picture:string
  children:categoryItem[]
  // 添加 open 属性
  open:boolean
}
export interface ApiRes<t>{
  code:string
  msg:string
  result:t
}