<template>
    <div class="shopping">
      <!--头部-->
     <div class="head">
       <p>购物车</p>
       <span class="imgtk">
         <img src="./image/imgtk-new.png" style="width: 20px;height: 20px">
       </span>
       <router-link to="/">
         <a class="personal">
         <img src="./image/personal-bico1.png" style="width: 22px;height: 20px">
       </a>
       </router-link>

     </div>

      <!--购物车-->
      <div class="cart">

        <!--中间图片-->
        <div class="img">
          <span data-reactid=".0.0.0.0"> </span>
        </div>
        <!--图片文字-->
        <div class="textcart">
          <p>购物车是空的</p>
        </div>

        <!--底部文字-->
        <div class="text">
          <span>去逛逛</span>
          <span>我的收藏</span>
        </div>
      </div>
    </div>
</template>
<script>
    export default{}
</script>
<style  lang="stylus" rel="stylesheet/stylus">
  .shopping
    .head
      width 100%
      height 60px
      border-bottom 1px solid #e4dede
      text-align center
      line-height 60px
      &>p
        font-size 25px
      .imgtk
        float right
        margin-top -56px
        margin-right 10px
      .personal
        float left
        margin-top -56px
        margin-left 10px
    .cart
      .img
        width 100px
        &>span
          margin 50px auto 20px  130px
          display: inline-block;
          width: 100px;
          height: 100px;
          background: url("./image/cart-ico.png") no-repeat 0 -160px;
          background-size: 105px auto;

      .textcart
        height 40px
        text-align center
        line-height 40px
        &>p
          color #7e8c8d
          font-size 20px
          font-weight 500
      .text
        height 50px
        text-align center
        line-height 50px
        margin-top 25px
        &>span
          border 1px solid #7e8c8d
          font-size 20px
          padding 10px
          margin-left 15px
          border-radius 10px
          color #7e8c8d


</style>
