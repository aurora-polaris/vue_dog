<template>
  <div class="head">
    <div class="login-main">
      <ul class="mform">
        <li class="m-li">
            <span class="nameIcon">
              <img src="../img/ico1.png"  >
            </span>
            <input type="text" placeholder="已注册的手机号" class="text"
                 name="username" id="username" >
        </li>
        <li class="m-li">
            <span class="nameIcon">
              <img src="../img/ico4.png" alt="">
            </span>
            <input type="password" placeholder="请输入图片内容" class="text"
                 name="password" id="password">
             <span class="photo">
               <img src="../img/seccode.jpg" alt="">
             </span>
        </li>
        <li class="m-li" >
            <span class="nameIcon">
              <img src="../img/ico4.png" alt="">
            </span>
            <input type="password" placeholder="动态密码" class="text"
                 name="password" id="activepassword">
             <a href="" class="getpas">获取动态密码</a>
        </li>
      </ul>

    </div>
    <foot style="margin-top: 100px"></foot>
  </div>
</template>
<script>
  import foot from '../footer/footer.vue'
  export default{
    components:{
      foot
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .head
    .login-main
      .mform
        height 50px
        margin-bottom 20px
        .m-li
          border-bottom #e2e2e2 solid 1px
          padding 12px 0 12px 30px
          position relative
          height 20px
          overflow hidden
          font-size 15px
          .nameIcon
            float left
            display inline
            background-size contain
            margin-left -25px
            width 17px
            &>img
              width 20px
              height 20px
          .text
            height: 21px
            width: 100%
            font-size: 15px
            border: none
            padding: 0px
            color: #666
            margin-left 10px
            outline: none
          .getpas
            background: #fff
            color: #ff4259
            border: 1px solid #eb4c33
            position: absolute
            right: 0
            top: 0.5em
            margin-right 5px
            border-radius: 3px
            width: 100px
            text-align: center
            padding: 0.3em 0
          .photo
            display: block
            margin-top -25px
            margin-left 245px
            position: absolute

</style>
