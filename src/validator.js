/**
 * Created by shanshan on 2017/9/25.
 */
import Vue from 'vue'
import Validator from 'vue-validator'

Vue.use(Validator)

//自定义验证器
//手机号验证
Vue.validator('tel',function (val) {
  return /^[0-9]{11}$/.test(val)
})
//密码验证
Vue.validator('passw',function (val) {
   return /^(\w){6,20}$/.test(val)
})
