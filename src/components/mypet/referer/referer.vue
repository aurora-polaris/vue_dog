<template>
    <div class="wrap">
      <div class="content">
         <!--<toast :toastShow.sync="toastShow" :toasttext="toasttext"></toast>
        <validator name="validation_registerl"> </validator>-->

          <form action="" class="form">
            <ul class="mform ml">
              <li class="for-li" style="margin-top: -20px">
              <span class="seccodeIco icon">
                <img src="../register/ico5.png" alt="">
              </span>
                <input type="seccode" placeholder="图片验证码" name="seccode" id="seccode"
                       style="width:57%;display:inline-block;" class="regtext">
                <span style="margin-left: 30px;">
                <img src="../img/seccode.jpg" >
              </span>
              </li>
              <li class="for-li">
              <span class="mEmailIco icon">
                 <img src="../register/ico2.png" alt="">
              </span>
                <input type="text" placeholder="验证码" name="code" id="code" class="regtext" >
                <!--<a class="get_phonepass afff ft14 w9 nocode" style="display:none">(<d id="stime">60</d>)验证码已发送</a>-->
                <!--<a href="javascript:void(0);" onclick="EpetWeixin.register.getDynamicCode2(this)" class="get_phonepass afff ft14 w9" id="scodebtn">获取短信验证码</a>-->
                <div class="text" >
                  <a href="">获取短信验证码</a>
                </div>
              </li>
              <li class="for-li">
              <span class="mNameIco icon">
                 <img src="../register/ico3.png" alt="">
              </span>
                <input type="text" placeholder="你的昵称/用户名" name="username" id="username" class="regtext">
              </li>
              <li class="for-li">
              <span class="mpasswordIco icon">
                 <img src="../register/ico4.png" alt="">
              </span>
                <input type="password" placeholder="请设置密码"
                       name="password" check="no" id="password" class="regtext">
                       <!--@invalid="passwInvalid" v-model="passw1" initial="off"
                      v-validate:passw1="['passw']" -->
              </li>
              <li class="for-li" >
              <span class="mpasswordIco icon">
                 <img src="../register/ico4.png" alt="">
              </span>
                <input type="password" placeholder="请确认密码" name="passwordag" id="passwordag" class="regtext">
              </li>
            </ul>
          </form>

          <div class="nextBtn">
            <a href="" @click="register_user()">下一步</a>
          </div>


        <div class="close">
          <router-link to="/mypet" class="rou-close">
            <a href="" class="close-a">
              取消
            </a>
          </router-link>
        </div>
      </div>


    </div>
</template>
<script>
 /* import validator from '../../../validator'
  import toast from '../toast/toast.vue'
    export default{
      components:{
            toast
      },
      data(){
          return {

            toastShow:false,
            //toasttext:'',
            password:'',
            passwordag:''
          }
      },
      methods:{
          //手机号验证失败时执行的方法
        /!*telonInvalid(){
            //设置提示信息
          this.$set('toasttext','手机不正确');
          //显示提示信息组件
          this.$set('toastShow',true);
        },*!/
        //密码验证失败时执行的方法
        passInvalid(){
            this.$set('toasttext','只能输入6-20个字母、数字、下划线')
           this.$set('toastShow',true);
        },
        register_user(){
            const that=this;
            const telephones=that.$grt('telphone');
            const pw1=that.$get('password');
            const pw2=that.$get('passwordag');
            that.$validate(true,function () {
              if(that.$validation_registerl.invalid){
                  //验证无效
                that.$set('toasttext','请完善表单');
                that.$set('toastShow',true);
              }else{
                  that.$set('toasttext','验证通过');
                  that.$set('toastShow',true)
              }
            })
        }
      }
    }*/
 import './gVerify'
 export default{
     data(){
       return {
           verifyCode:''
       }
     },
     mounted:{
         //verifyCode=new GVerify('v_container')
     }
 }
</script>
<style  lang="stylus" rel="stylesheet/stylus">
  .wrap
  .content
    .form
      margin-left -20px
      .mform
        .for-li
          border-bottom 1px solid #e2e2e2
          height 50px
          .icon
            &>img
              margin-top 20px
              width 20px
          .regtext
            border none
            outline medium
          .text
            margin-top 20px
            margin-right 10px
            height 20px
            background-color aqua
            float right
            &>a
              background: #fff
              color: #ff4259
              border: 1px solid #eb4c33
              position: absolute
              right: 0
              top: 7.5em
              margin-right 5px
              border-radius: 3px
              width: 160px
              text-align: center
              padding: 0.3em 0





    .nextBtn
      background-color gainsboro
      width 300px
      height 30px
      text-align center
      line-height 30px
      border-radius 20px
      margin-top 30px
      &>a
        color #fff
    .close
        .close-a
          float right
          margin-top 30px
          margin-right 10px
          color blue
</style>
