<template>
    <div class="head">
      <div class="login-main">
        <ul class="mform">
          <li class="m-li">

            <span class="nameIcon">
              <img src="../img/ico3.png"  >
            </span>
            <input type="text" @blur="usern" placeholder="手机号/邮箱/用户名" class="text"
            name="username" id="username" ref="username" v-model="username">
          </li>
          <li class="m-li">
            <span class="nameIcon">
              <img src="../img/ico4.png" alt="">
            </span>
            <input type="password" placeholder="输入密码" class="text"
                   name="password" id="password" ref="password" v-model="password">
          </li>
        </ul>
      </div>
      <foot></foot>
    </div>
</template>
<script>
  import foot from '../footer/footer.vue'
  import test from '../../../mock/test.json'
  import {MassageBox} from 'mint-ui'
  import axios from 'axios'
    export default{
      data(){
        return {
            username:'',
            password:''
        }
      },
      methods:{
        usern(){
            console.log(1111)
          const username=this.$refs.username.value
          const password=this.$refs.password.value
          axios.get('/api/login')
            .then(response=>{
              console.log(222);

              console.log(username,password)
              const result=response.data
              //console.log(result[0].username);
               /*if (result[0].username==username){
                   console.log('用户名一致')
               }
               else{
                   console.log('用户名错误')
               }*/
                const test=result.find(item=>(item.username==username && item.password==password))
                if(!test){
                  //console.log('用户名错误')
                  alert('用户名错误')
                }
                else{
                  if(!test.password){
                    //console.log('密码错误')
                    alert('密码错误')
                  }
                  else{
                    //console.log('登录成功')
                    alert('登录成功')
                  }
              /*const pass=result.find(item=>(item.password==password))
              if(!pass){
                console.log('密码错误')
              }
              else{
                console.log('登录成功')
              }*/
              /* const test=result.find(item=>(item.username==username))|| {}
               if(!test){
              // MassageBox('用户名不存在，请重新输入')
                 alert('用户名不存在，请重新输入')
               }
               else{
               if(!test.password==password){
               //MassageBox('密码错误，请重新输入')
                 alert('密码错误，请重新输入')
               }
               else{
               //MassageBox('登录成功')
                 alert('登录成功')
               }*/
               }

            })
        }
      },

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
