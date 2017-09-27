<template>
    <div v-show="toastShow" transtion="toast" class="toast font-normal">
      {{toasttext}}
    </div>
</template>
<script>
    export default{
        //是否显示提示
        props:{
            toastShow:{
                type:Boolean,
                required:false,
                default:function () {
                  return false
                }
            },
          //提示的内容
          toasttext:{
            type:String,
            required:false,
            default:function () {
              return 'no message'
            }
          },

          //显示时间
          duration:{
            type:Number,
            default:3000,
            required:false
          }
        },
      ready(){

      },
      watch:{
          toastShow(val){
              if(this._timeout) clearTimeout(this._timeout)
            if(val && !! this.duration){
                  this._timeout=setTimeout(()=>this.toastShow=false,this.duration)
            }
          }
      }

    }

</script>
<style>
  .toast{
    position:absolute;
    left:50%;
    margin-left:-25%;
    bottom:30px;
    display:block;
    width:200px;
    height:auto;
    text-align:center;
    color:white;
    background-color:rgba(0,0,0,0.5);
    border-radius:10px;
    z-index:10;
    transform:scale(1);
    padding:5px;
  }
  .toast-transition{
    transition: all .3s ease;
  }
  .toast-enter{
    opacity:0;
    transform:scale(0.1);
  }
  .toast-leave{
    opacity:0;
    transform:scale(0.1);
  }
</style>
