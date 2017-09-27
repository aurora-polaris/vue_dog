<template>
  <!--<div class="container">-->
    <!--<section v-show="loading">-->
      <!--<div class="loader loader-1">-->
        <!--<div class="loader-outter"></div>-->
        <!--<div class="loader-inner"></div>-->
      <!--</div>-->
    <!--</section></div>-->
    <div class="shopping" >
      <img v-lazy="imgUrl">
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
          <router-link to="/">
            <span style="border: 1px solid #7e8c8d;
                               font-size: 20px;
                      padding: 10px;
                      margin-left: 15px;
                      border-radius: 10px;
          color: #7e8c8d;">去逛逛</span>
          </router-link>

          <span>我的收藏</span>
        </div>
      </div>
    </div>


</template>
<script>
    export default{
        data(){
            return {
                //loading:false
              imgUrl:'../../../'
            }
        },
      mounted(){
            this.loading=!this.loading
      }
    }
</script>
<style  lang="stylus" rel="stylesheet/stylus">
/*.container
  &>section
    width: 30%;
    display: inline-block;
    text-align: center;
    min-height: 215px;
    vertical-align: top;
    margin: 1%;
    border-radius: 5px;
  @media only screen and (max-width:600px)
    setion
      min-width 375px
    .loader
      position relative
      width 60px
      border-radius 50%
      margin 75px
      display inline-block
      vertical-align middle
      height 60px
      .loader-outter
        border 4px solid #f50057
        border-left-color transparent
        border-bottom 0px
        width 100%
        height 100%
        border-radius 50%
        animation loader 1s cubic-bezier(.42, .61, .58, .41) 3
        position absolute
        .loader-inner
          position: absolute
          border: 4px solid #f50057
          border-radius: 50%
          width: 40px
          height: 40px
          left: calc(50% - 20px)
          top: calc(50% - 20px)
          border-right: 0
          border-top-color: transparent
          animation: loader 1s cubic-bezier(.42, .61, .58, .41) infinite;
  @keyframes loader
    0%
      -webkit-transform: rotate(0deg)
      transform: rotate(0deg)
    100%
      -webkit-transform: rotate(360deg)
      transform: rotate(360deg)
 */


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
