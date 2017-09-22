import Vue from 'vue'
import app from './app'
import router from './router'
import VueScroller from 'vue-scroller'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'


Vue.use(Mint)
Vue.use(VueScroller)

new Vue({
  el: '#app',
  render: h=>h(app),
  router
})
