<template>
    <div class="login-text" >
      <div class="forget-pad">
        <a href="" >忘记密码?</a>
      </div>

      <div class="btn">
        <a href="">登录</a>
      </div>

      <div class="mt5">
        APP专享：E宠团5折包邮，首单满99送99
          <a href="" class="cblue">去下载</a>
      </div>

     <div style="height: 5em"></div>

      <div class="other-login">
        <div class="ftc">
          <b>合作网站登录</b>
        </div>
        <ul class="uList1">
          <li class="list-li">
            <a href="" class="list-a">
              <img src="../img/login_ico4.png" alt="">
            </a>
          </li>
          <li class="list-li">
            <a href="" class="list-a">
              <img src="../img/login_ico2.png" alt="">
            </a>
          </li>
        </ul>
      </div>


    </div>
</template>
<script>
    export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.login-text
  margin-top 50px
  .forget-pad
    position relative
    float right
    margin-right 10px
  .btn
    position absolute
    width 345px
    background #2ec975
    margin-top 30px
    margin-left 15px
    border-radius 10px
    height 40px
    text-align center
    line-height 40px
    &>a
      color #fff
  .mt5
    position relative
    font-size 10px
    height 30px
    text-align center
    line-height 30px
    padding-top 80px
    .cblue
      color #0ca4ed

  .other-login
    .ftc
      text-align center
      line-height 21px
      height 21px
      &>b
        font-weight normal
        color #d7d7d7
    .uList1
      .list-li
        width: 33.3%
        padding: 0 1.2em
        float: left
        display: inline
      .list-a
        &>img
          width: 50%
          height: auto
          display: block
          margin: auto
          margin-top 20px
          max-width: 176px
</style>
