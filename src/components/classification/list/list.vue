<template>
    <div class="tab1" >
      <scroller>
        <div class="leftbox" ref="leftsDiv">
        <!--  <ul>
            &lt;!&ndash;current: 代表当前的&ndash;&gt;
            <li class="menu-item" v-for="(category, index) in categorys"
                 @click="clickMenuItem(index)">
            <span class="text border-1px">
             &lt;!&ndash; <span class="icon" v-if="good.type>=0" ></span>{{good.name}}&ndash;&gt;
            </span>
            </li>
          </ul>-->
        <ul class="left-ul">
          <li data-id="88888" class="ftc bgfff" @click="clickMenuItem(index)"  :class="{current: currIndex==index}" v-for="(category,index) in categorys" :key="index">{{category.name}}</li>
        </ul>
      </div>
      </scroller>

      <div class="rightbox" ref="rightDiv">
       <div class="rightlist">
         <ul class="clearfix">
           <li class="clearfix-li">
             <ul class="right-ul">
               <li class="right-li">
                 <a href="" class="db">
                   <div class="img ">
                   <img class="lheight image" src="./image/list-1.jpg" lazy="loaded" style="width: 100%">
                   </div>
                   <p class="ftc ft12 mt10">SmartBones</p>
                 </a>
               </li>
               <li class="right-li">
                 <a href="" class="db">
                   <div class="img ">
                     <img class="lheight image" src="./image/list-1.jpg" lazy="loaded" style="width: 100%">
                   </div>
                   <p class="ftc ft12 mt10">SmartBones</p>
                 </a>
               </li>
             </ul>
           </li>
           <li class="clearfix-li">
             <ul class="right-ul">
               <li class="right-li">
                 <a href="" class="db">
                   <div class="img ">
                     <img class="lheight image" src="./image/list-1.jpg" lazy="loaded" style="width: 100%">
                   </div>
                   <p class="ftc ft12 mt10">SmartBones</p>
                 </a>
               </li>
               <li class="right-li">
                 <a href="" class="db">
                   <div class="img ">
                     <img class="lheight image" src="./image/list-1.jpg" lazy="loaded" style="width: 100%">
                   </div>
                   <p class="ftc ft12 mt10">SmartBones</p>
                 </a>
               </li>
             </ul>
           </li>
           <li class="clearfix-li">
             <ul class="right-ul">
               <li class="right-li">
                 <a href="" class="db">
                   <div class="img ">
                     <img class="lheight image" src="./image/list-1.jpg" lazy="loaded" style="width: 100%">
                   </div>
                   <p class="ftc ft12 mt10">SmartBones</p>
                 </a>
               </li>
               <li class="right-li">
                 <a href="" class="db">
                   <div class="img ">
                     <img class="lheight image" src="./image/list-1.jpg" lazy="loaded" style="width: 100%">
                   </div>
                   <p class="ftc ft12 mt10">SmartBones</p>
                 </a>
               </li>
             </ul>
           </li>
           <li class="clearfix-li">
             <ul class="right-ul">
               <li class="right-li">
                 <a href="" class="db">
                   <div class="img ">
                     <img class="lheight image" src="./image/list-1.jpg" lazy="loaded" style="width: 100%">
                   </div>
                   <p class="ftc ft12 mt10">SmartBones</p>
                 </a>
               </li>
               <li class="right-li">
                 <a href="" class="db">
                   <div class="img ">
                     <img class="lheight image" src="./image/list-1.jpg" lazy="loaded" style="width: 100%">
                   </div>
                   <p class="ftc ft12 mt10">SmartBones</p>
                 </a>
               </li>
             </ul>
           </li>
           <li class="clearfix-li">
             <ul class="right-ul">
               <li class="right-li">
                 <a href="" class="db">
                   <div class="img ">
                     <img class="lheight image" src="./image/list-1.jpg" lazy="loaded" style="width: 100%">
                   </div>
                   <p class="ftc ft12 mt10">SmartBones</p>
                 </a>
               </li>
               <li class="right-li">
                 <a href="" class="db">
                   <div class="img ">
                     <img class="lheight image" src="./image/list-1.jpg" lazy="loaded" style="width: 100%">
                   </div>
                   <p class="ftc ft12 mt10">SmartBones</p>
                 </a>
               </li>
             </ul>
           </li>
           <li class="clearfix-li">
             <ul class="right-ul">
               <li class="right-li">
                 <a href="" class="db">
                   <div class="img ">
                     <img class="lheight image" src="./image/list-1.jpg" lazy="loaded" style="width: 100%">
                   </div>
                   <p class="ftc ft12 mt10">SmartBones</p>
                 </a>
               </li>
               <li class="right-li">
                 <a href="" class="db">
                   <div class="img ">
                     <img class="lheight image" src="./image/list-1.jpg" lazy="loaded" style="width: 100%">
                   </div>
                   <p class="ftc ft12 mt10">SmartBones</p>
                 </a>
               </li>
             </ul>
           </li>

         </ul>
       </div>
      </div>

    </div>
</template>
<script>
  import { Swipe, SwipeItem } from 'mint-ui'
  import BScroll from 'better-scroll'
  import axios from 'axios'
    export default{
      data(){
        return {
          categorys:[],
          tops:[],
          scrollY:0
        }
      },
      mounted(){
        axios.get('/api/classification/list')
          .then(response=>{
            const result=response.data
            if(result.code===0){
              this.categorys=result.data
             /* this.$nextTick(()=>{
                  this._initTops()
                  this._initScroll()
              })*/
            }
          })
        },
      methods: {

        /*  _initScroll () {
          // 创建左侧列表对应的scroll对象
          new BScroll(this.$refs.leftsDiv, {
            click: true //响应点击
          })
          // 创建右侧列表对应的scroll对象
          this.foodsScroller = new BScroll(this.$refs.foodsDiv, {
            click: true, //响应点击
            probeType: 3 // 标识分发scroll事件-->绑定scroll回调函数才会调用
          })*/
        // 监视foods列表的滚动
        /*this.foodsScroller.on('scroll',  (event) => {
            if(!this.clickMenu) {
              this.scrollY = Math.abs(event.y)
            }
            // console.log(this.scrollY)
          })
          this.foodsScroller.on('scrollEnd', (event) => {
            this.clickMenu = false
            this.scrollY = Math.abs(event.y)
          })*/
        /* _initTops(){
            const tops=[]
            let top=0
            tops.push(top)
            const lis=this.$refs.rightDiv.getElementsByClassName('ftc')
            Array.prototype.slice.call(lis).forEach(li=>{
                top+=li.clientHeight
              tops.push(top)
            })
            this.tops=top
            console.log(tops)

          }, */
        clickMenuItem(index){
          console.log(index)

        }
}

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.tab1

  .leftbox
    margin-top 40px

    top 40px
    left 0
    bottom 0
    padding-bottom 45px
    overflow hidden
    .left-ul
      .ftc
        padding: 15px 0
        border-bottom: 1px solid #f3f4f5
        width: 70px
        height: 50px
        font-size: 13px
        text-align center
        line-height 50px
        &.current
          position relative
          z-index 10
          margin-top -1px
          background-color red
          font-weight 700
  .rightbox
    margin-left 75px
    background-color #fff
    padding-top 50px
    width 300px
    .rightlist
      .clearfix
        .clearfix-li
          .right-ul
            display flex
            .right-li
              float left
              flex 1
              border 1px solid #7e8c8d
              margin 10px
              .db
                font-size 12px
                text-align center







</style>
