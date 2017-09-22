/**
 * 路由器js模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import classification from '../components/classification/classification.vue'
import home from '../components/home/home.vue'
import shoppingcart from '../components/shoppingcart/shoppingcart.vue'
import mypet from '../components/mypet/mypet.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/classification',
      component: classification
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
      component: mypet
    },

  ]
})
