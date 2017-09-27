import Vue from 'vue'
import app from './app'
import router from './router'
import VueScroller from 'vue-scroller'
import Mint from 'mint-ui';
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import loading from './load.gif'

import 'mint-ui/lib/style.css'
import './mock/mockSever'


Vue.use(Mint)
Vue.use(VueScroller)
Vue.use(VueResource)
Vue.use(VueLazyload,{
  loading:loading
})
new Vue({
  el: '#app',
  render: h=>h(app),
  router
})
