<template>
  <div>
    <!--<div class="home">
      <ul>
        <li>
          <a href="https://wap.epet.com/main.html?pet_type=dog">
            <router-link to="/home"><img src="./components/home/main_tab_1_sel.png"></router-link>
          </a>
        </li>
        <li >
          <a href="https://wap.epet.com/category.html?pet_type=dog" >
          <router-link to="/classification"><img src="./components/home/main_tab_2.png"></router-link>
        </a>
        </li>
        <li >
          <a href="https://wap.epet.com/cart/main.html" >
            <router-link to="/shoppingcart"><img src="./components/home/main_tab_3.png"></router-link>
          </a>
        </li>
        <li >
          <a href="https://wap.epet.com/user/UserCenter.html">
            <router-link to="/mypet"><img src="./components/home/main_tab_4.png"></router-link>
          </a>
        </li>
      </ul>
    </div>-->
    <router-link to="/home"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>

  import home from './components/home/home.vue'
  import classification from './components/classification/classification.vue'
  import mypet from './components/mypet/mypet.vue'
  import axios from 'axios'
  import shoppingcart from './components/shoppingcart/shoppingcart.vue'
  export default {

    data () {
      return {
      }
    },
    components: {
      home,
      classification,
      mypet,
      shoppingcart
    },
    mounted(){
     axios.get('/api/home')
      .then(response=>{
          const result=response.data
          console.log('vue',result)
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home
    position: fixed;
    z-index: 100;
    background-color: white;
    bottom 0px
    li
      float left
      list-style none
      width 93px
      text-align center
      img
        height 40px
</style>
