/**
 * Created by shanshan on 2017/9/25.
 */
//使用mockjs来mock数据，提供mock数据api接口
import Mock from 'mockjs'
import data from './data.json'
import left from './left.json'
import list from './list.json'

//注册接口
Mock.mock('/api/home',{
  code:0,
  data:data.datas
})
Mock.mock('/api/header',{
  code:0,
  data:data.menus
})
Mock.mock('/api/classification/list',{
  code:0,
  data:left.categorys
})
Mock.mock('/api/classification/brand',{
  code:0,
  data:list.brand
})
