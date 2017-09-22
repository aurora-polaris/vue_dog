<template>
  <div>
    <div class="home">
      <ul>
        <li>
          <a href="https://wap.epet.com/main.html?pet_type=dog">
            <router-link to="/home"><img src="./components/home/main_tab_1_sel.png"></router-link>
          </a>
        </li>
        <li ><a href="https://wap.epet.com/category.html?pet_type=dog" >
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
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  import home from './components/home/home.vue'
  import classification from './components/classification/classification.vue'
  import mypet from './components/mypet/mypet.vue'
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
        height 50px
</style>
