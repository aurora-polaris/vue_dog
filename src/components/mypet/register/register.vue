<template>
    <div class="wrap">
     <!-- <toast :toastShow.sync="toastShow" :toasttext="toasttext"></toast>-->
     <!-- <validator name="validation_registerl">
      </validator>-->
      <div class="title">
        <span class="registerIcon">
              <img src="../img/ico1.png"  >
      </span>
        <input type="tel" class='register' placeholder='请输入手机号码' v-model="number" >

      </div>

        <router-link to="/register/referer">
        <div class="btn" v-show="isShow" @click="btnShow" ref="nextBtn" :class="{classA:this.number}">
        <a href="" >下一步</a>
      </div>
      </router-link>

   <!--   <div class="content" v-show="!isShow">
        <form action="" class="form">
          <ul class="mform ml">
            <li>
              <span class="mNumIco"></span>
              <input type="text" placeholder="请输入手机号码" name="bdphone"  class="regtext" readonly="readonly">
            </li>
            <li>
              <span class="seccodeIco"></span>
              <input type="seccode" placeholder="图片验证码" name="seccode" id="seccode" style="width:57%;display:inline-block;" class="regtext"><img name="varify" style="right:20px;position: absolute;" src="share/seccode.html?hash=9487&amp;height=30&amp;width=85" class="codevar" align="absbottom" onclick="freshcode(this,85,30)"></li>
            <li>
              <span class="mEmailIco"></span>
              <input type="text" placeholder="验证码" name="code" id="code" class="regtext" style="padding-right:9.5em;">
              &lt;!&ndash;<a class="get_phonepass afff ft14 w9 nocode" style="display:none">(<d id="stime">60</d>)验证码已发送</a>&ndash;&gt;
              &lt;!&ndash;<a href="javascript:void(0);" onclick="EpetWeixin.register.getDynamicCode2(this)" class="get_phonepass afff ft14 w9" id="scodebtn">获取短信验证码</a>&ndash;&gt;
            </li>
            <li>
              <span class="mNameIco"></span>
              <input type="text" placeholder="你的昵称/用户名" name="username" id="username" class="regtext">
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="password" placeholder="请设置密码" name="password" check="no" id="password" class="regtext">
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="password" placeholder="请确认密码" name="passwordag" id="passwordag" class="regtext">
            </li>
          </ul>
        </form>
      </div>-->
      <router-view></router-view>
    </div>
</template>
<script>
  //import validator from '../../../validator'
  //import toast from '../toast/toast.vue'
    export default{
        data(){
            return {
                isShow:true,
                number:'',


                //telphone:'',
                //toastShow:false
            }
        },
      /*components:{
        toast
      },*/
      methods:{
            btnShow(){
                this.isShow=!this.isShow
            },
        /*telonInvalid(){
         //设置提示信息
         this.$set('toasttext','手机不正确');
         //显示提示信息组件
         this.$set('toastShow',true);
         },*/
      },
      watch(){

      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.wrap
  margin-top 20px
  margin-left 20px

  .title
    border-bottom 1px solid #e2e2e2
    .registerIcon
      &>img
        width 15px
        margin-right 5px
        vertical-align middle
        margin-bottom 10px
    .register
      margin-bottom 10px
      //清除默认样式
      border none
      outline medium
  .btn
    background-color gainsboro
    width 200px
    height 30px
    text-align center
    line-height 30px
    margin 0 auto
    border-radius 20px
    margin-top 30px
  .classA
    background red

    &>a
      color #fff


</style>
