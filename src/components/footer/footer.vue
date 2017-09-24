<template>
    <div>
      <div class="home">
        <ul>
          <li>
            <a href="https://wap.epet.com/main.html?pet_type=dog">
              <router-link to="/home"><img src="./main_tab_1_sel.png"></router-link>
            </a>
          </li>
          <li >
            <a href="https://wap.epet.com/category.html?pet_type=dog" >
              <router-link to="/classification"><img src="./main_tab_2.png"></router-link>
            </a>
          </li>
          <li >
            <a href="https://wap.epet.com/cart/main.html" >
              <router-link to="/shoppingcart"><img src="./main_tab_3.png"></router-link>
            </a>
          </li>
          <li >
            <a href="https://wap.epet.com/user/UserCenter.html">
              <router-link to="/mypet"><img src="./main_tab_4.png"></router-link>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
    export default{}
</script>
<style></style>
