<template>

    <div class="wrap">
       <div class="head">
         <!--背景图-->
         <div class="bg">
           <img src="./img/background.png" >
         </div>
         <!--logo-->
         <div class="logo">
           <img src="./img/logo.png" >
         </div>
         <!--注册-->
         <div class="zhuce">
           <a href="">注册</a>
         </div>
         <!--尖角号-->
         <div class="personal">
           <router-link to="/" class="per-rou">
             <a href="" class="per-a">
               <img src="./img/personal-bico3.png" >
             </a>
           </router-link>

         </div>
         <!--切换登录-->
         <div class="denglu">
           <ul class="per-ul clearfix">
             <router-link to="/mypet/login">
               <li class="per-li">
                 <a href="" class="per-a">普通登录</a>
                 <i></i>
               </li>
             </router-link>
             <router-link to="/mypet/phone">
               <li class="per-li">
                 <a href="" class="per-a">手机动态密码登录</a>
                 <!--<i></i>-->
               </li>
             </router-link>

           </ul>
         </div>
         <router-view></router-view>
       </div>
    </div>

</template>
<script>
    export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">
   .wrap
     .head
       .bg
         &>img
          width 100%
       .logo
         &>img
           width 20%
           position absolute
           margin-left 150px
           margin-top -130px
       .zhuce
          &>a
            float right
            margin-top -190px
            margin-right 10px
            color: #fff
       .personal
         margin-top -190px
         margin-left 10px
         .per-a
           &>img
             width 12px
             height 17px

       .denglu
         background: red;
         height 44px
         .per-ul
           margin-top 125px
           .per-li
             float left
             width 50%
             text-align center
             height 44px
             line-height 44px
             position relative
             background: rgba(255,255,255,0.3);
             .per-a
               color #fff
             &>i
               border-left 10px solid transparent
               border-right 10px solid transparent
               border-bottom 10px solid #fff
               margin auto
               right 0
               left 0
               bottom 0
               position absolute
               height 0
               width 0px
</style>
