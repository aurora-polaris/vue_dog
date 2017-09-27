/**
 * 路由器js模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import classification from '../components/classification/classification.vue'
import home from '../components/home/home.vue'
import shoppingcart from '../components/shoppingcart/shoppingcart.vue'
import mypet from '../components/mypet/mypet.vue'

import list from '../components/classification/list/list.vue'
import brand from '../components/classification/brand/brand.vue'

import login from '../components/mypet/login/login.vue'
import phone from '../components/mypet/phone/phone.vue'
import register from '../components/mypet/register/register.vue'
import referer from '../components/mypet/referer/referer.vue'

import food from '../components/home/header/food/food.vue'
import header from '../components/home/header/header.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/classification',
      component: classification,
      children:[
        {
          path:'list',
          component:list
        },{
          path:'brand',
          component:brand
        },
        {
          path:'/',
          component:list
        }
      ]
    },
    {
      path: '/home',
      component: home

    },
    {
      path: '/shoppingcart',
      component: shoppingcart
    },
    {
      path: '/mypet',
      component: mypet,
      children:[
        {
          path:'login',
          component:login
        },{
          path:'phone',
          component:phone
        },
        /*{
          path:'register',
          component:register
        },*/
        {
          path:'/',
          component:login
        }
      ]
    },
    {
      path: '/header',
      component: header,
      children:[
        {
          path:'food',
          component:food
        },
      ]
    },
    {
      path:'/register',
      component:register,
      children:[
        {
          path:'referer',
          component:referer
        }

      ]
    },
  ]
})
