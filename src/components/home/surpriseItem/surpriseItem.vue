<template>
  <div class="surprise">
    <div class="surpriseTitle">
      <div class="title">
        <img src="./suprice.png">
      </div>
      <div class="text">距本场结束</div>
      <div class="time">
        <div class="time1">
          <span class="time1-1">{{time.h}}</span>
          <span class="time1-2">:</span>
          <span class="time1-1">{{time.m}}</span>
          <span class="time1-2">:</span>
          <span class="time1-1">{{time.s}}</span>
        </div>
      </div>
      <div class="more">
         <a href="">
           <img src="https://img2.epetbar.com/nowater/2016-10/24/20/30b2568de06cb7c96a9af9ad4be3cae5.png">
         </a>
      </div>
    </div>

    <!--小总容器每个产品-->
    <div class="Listfore" ref="Listfore">
      <div class="nihao">
        <LList v-for="(List,index) in Lists" :key="index"></LList>
      </div>
    </div>







  </div>
</template>

<script>
  import LList from "../List/List.vue"
  import BScroll from 'better-scroll'
  export default {
    data (){
      return{
        time:{s:"",h:"",m:""},
        Lists:[1,2,3,4,5,3,3,3,3]
      }
    },

    mounted (){
      var me = this
      // 将ul的宽度 等于所有li的总和---此时的ul等于nihao
      const ul = this.$refs.Listfore.children[0]
      const liWidth = 96

      const count = ul.children.length
      ul.style.width = liWidth * count + 'px'
      this.$nextTick(() => {
        this.scroll=new BScroll(this.$refs.Listfore,{
          scrollX: true
        })
//        this.scroll.refresh()
      })

      // 倒计时
      setInterval(function getMyTime(){
        var startDate=new Date();
        var endDate=new Date('2017/10/17 11:15:00');
        var countDown=(endDate.getTime()-startDate.getTime())/1000;
        var h=parseInt(countDown/(60*60)%24);
        var m=parseInt(countDown/60%60);
        var s=parseInt(countDown%60);
        function p(n){
          return n<10?'0'+n:n;
        }
        me.$set(me.time, 's', s)
        me.$set(me.time, 'h', h)
        me.$set(me.time, 'm', m)
      },500)
    },
    components:{
      LList
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
.surprise
  /*background lightblue*/
  position relative
  .surpriseTitle
    overflow hidden
    padding 10px
    .title
      float left
      img
        height 24px
        margin-left -20px
    .text
      float left
      margin-top 1px
      font-size 13px
      margin-left 10px
    .time
      margin-left 5px
      float left
      text-align center
      .time1
        display flex
        font-size 12px
        width 83px
        height 20px
        .time1-1
          border 1px solid #ddd
          padding 1px 2px
          font-size 13px
        .time1-2
          margin 0.3px
          font-size 12px
          font-weight 700
    .more
      position absolute
      top 2px
      right -8px
      a
        img
          display block
          margin 0 0 0 auto
          width 50%
  .Listfore
    white-space: nowrap
    width 100%
    overflow hidden
</style>
