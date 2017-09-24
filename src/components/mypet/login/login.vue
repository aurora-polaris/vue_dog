<template>
    <div class="head">
      <div class="login-main">
        <ul class="mform">
          <li class="m-li">

            <span class="nameIcon">
              <img src="../img/ico3.png"  >
            </span>
            <input type="text" placeholder="手机号/邮箱/用户名" class="text"
            name="username" id="username" >
          </li>
          <li class="m-li">
            <span class="nameIcon">
              <img src="../img/ico4.png" alt="">
            </span>
            <input type="password" placeholder="输入密码" class="text"
                   name="password" id="password">
          </li>
        </ul>
      </div>
      <foot></foot>
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
</style>
