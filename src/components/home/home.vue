<template>
  <div>
    <Eheader></Eheader>
    <!--眨眼睛的小狗-->
    <div class="godog">

    </div>

   <scroller>
    <div class="allmodule module">

      <div class="banner_item">
        <!--轮播图-->
        <mt-swipe class="mt-swipe" :auto="4000"  style="width: 375px;height: 150px;" >
          <mt-swipe-item class="mt-item" >
            <img src="./content/1.jpg" >
          </mt-swipe-item>
          <mt-swipe-item class="mt-item">
            <img src="./content/2.jpg" >
          </mt-swipe-item>
          <mt-swipe-item class="mt-item">
            <img src="./content/3.jpg" >
          </mt-swipe-item>
          <mt-swipe-item class="mt-item">
            <img src="./content/4.jpg" >
          </mt-swipe-item>
          <mt-swipe-item class="mt-item">
            <img src="./content/5.jpg" >
          </mt-swipe-item>
          <mt-swipe-item class="mt-item">
            <img src="./content/6.jpg" >
          </mt-swipe-item>
        </mt-swipe>

        <!--logo-->
        <div class="swiper-container banner-scroll">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="#" class="pointer">
                <img src="./content/7.gif">
              </a></div></div>
          <div class="swiper-pagination banner-round">
          </div></div>

        <!--小图-->
        <div class="row">
          <div class="items">
            <a href="javascript:;">
              <img src="./content/8.png" style="width: 93px;height: 83px">
            </a>
          </div>
          <div class="items">
            <a href="javascript:;"><img src="./content/9.png" style="width: 93px;height: 83px"></a>
          </div>
          <div class="items">
            <a href="javascript:;"><img src="./content/10.png" style="width: 93px;height: 83px"></a>
          </div>
          <div class="items">
            <a href="javascript:;"><img src="./content/11.png" style="width: 93px;height: 83px"></a>
          </div>
        </div>

        <div class="row">
          <div class="items">
            <a href="javascript:;">
              <img src="./content/12.png" style="width: 93px;height: 83px">
            </a>
          </div>
          <div class="items">
            <a href="javascript:;">
              <img src="./content/13.jpg" style="width: 93px;height: 83px"></a>
          </div>
          <div class="items">
            <a href="javascript:;">
              <img src="./content/14.png" style="width: 93px;height: 83px"></a>
          </div>
          <div class="items">
            <a href="javascript:;"><img src="./content/11.png" style="width: 93px;height: 83px"></a>
          </div>
        </div>

      </div>

      <split></split>

      <surpriseItem></surpriseItem>

      <split></split>

      <!--热门栏目-->
      <div class="currency-adcon">
         <div class="title">
           <img src="./content/lanmu.jpg" style="width: 100%">
         </div>
        <div class="divboxing" >
          <div class="divimgLeft" style="width: 42.53%;">
            <a href="#" class="divimg-1">
              <img name="319x379" src="./content/th-2.png" lazy="loaded"></a></div>
          <div class="divimgRight" style="width: 57.33%;">
            <a href="#" class="divimg-2" >
              <img name="430x189" src="./content/th-1.png" lazy="loaded"></a>
            <a href="#" class="divimg-2" >
              <img name="430x189" src="./content/th-3.jpg" lazy="loaded"></a></div>
        </div>
      </div>

      <split></split>

      <!--潮品视频-->
      <div class="custom_tite">
        <div class="titmoudle" style="border-bottom: 0px solid">
          <a href="#" class="titimg">
            <img src="./content/shipin.png" >
          </a>
          <a href="#" class="titmore">
            <img src="./content/shipinmore.png" >
          </a>
        </div>
         <div class="relative">
           <img src="./content/shipinlogo.jpg" >
         </div>
         <div class="ft12">
           <div class="textover">神奇饮水除口臭</div>
           <div class="textspan">
             <span class="cmallViewIco"></span>
             <i class="num">23671</i>
             <span class="m110">|</span>
             <span class="time">01:13</span>
           </div>
         </div>
      </div>

      <split></split>

      <!--体验馆-->
      <div class="custom_tite">
        <div class="titmoudle" style="border-bottom: 0px solid">
          <a href="#" class="titimg">
            <img src="./content/tiyan.png" >
          </a>
          <a href="#" class="titmore">
            <img src="./content/shipinmore.png" >
          </a>
        </div>
        <div class="relative">
          <img src="./content/naodong.jpg" >
        </div>

      </div>

      <split></split>

      <!--品牌特卖-->
      <div class="custom_tite" >
        <div class="titmoudle" style="border-bottom: 0px solid">
          <a href="#" class="titimg">
            <img src="./content/pinpai.png" >
          </a>
        </div>
        <div class="line"></div>
        <div class="pad10">
          <span class="ft15">ZIWI</span>
          <span class="ft12 ms3">参与征集，巅峰带你免费畅游新西兰</span>
        </div>
        <div class="relative">
          <img src="./content/1.jpg" >
        </div>

      </div>

      <!--伯纳天纯-->
      <div class="custom_tite">
        <div class="pad10">
          <span class="ft15">伯纳天纯</span>
        </div>
        <div class="relative">
          <img src="./content/boran.jpg" >
        </div>
      </div>

      <!--萌贝，超值满意-->
      <div class="custom_tite">
        <div class="pad10">
          <span class="ft15">萌贝</span>
          <span class="ft12 ms3">超值满意</span>
        </div>
        <div class="relative">
          <img src="./content/mengbei.jpg" >
        </div>
      </div>

      <!--海洋之星FISH4DOGS-->
      <div class="custom_tite">
        <div class="pad10">
          <span class="ft15">海洋之星FISH4DOGS</span>
        </div>
        <div class="relative">
          <img src="./content/haiyang.jpg" >
        </div>
      </div>

      <!--冠能 送178元宠物碗-->
      <div class="custom_tite">
        <div class="pad10">
          <span class="ft15">冠能</span>
          <span class="ft12 ms3">送178元宠物碗</span>
        </div>
        <div class="relative">
          <img src="./content/guannneg.jpg" >
        </div>
      </div>
      <!--丝倍亮 8折加送丝巾-->
      <div class="custom_tite">
        <div class="pad10">
          <span class="ft15">丝倍亮</span>
          <span class="ft12 ms3"> 8折加送丝巾</span>
        </div>
        <div class="relative">
          <img src="./content/sibei.jpg" >
        </div>
      </div>

      <!--荣耀玛氏 全场6折起-->
      <div class="custom_tite">
        <div class="pad10">
          <span class="ft15">荣耀玛氏 </span>
          <span class="ft12 ms3">全场6折起</span>
        </div>
        <div class="relative">
          <img src="./content/mashi.jpg" >
        </div>
      </div>

      <!--优卡 只为爱宠卓越表现-->
      <div class="custom_tite">
        <div class="pad10">
          <span class="ft15">优卡 </span>
          <span class="ft12 ms3">只为爱宠卓越表现</span>
        </div>
        <div class="relative">
          <img src="./content/youka.jpg" >
        </div>
      </div>

      <!--禾仕嘉&SMartbones-->
      <div class="custom_tite">
        <div class="pad10">
          <span class="ft15">禾仕嘉&SMartbones</span>
        </div>
        <div class="relative">
          <img src="./content/jiechi.jpg" >
        </div>
      </div>

      <!--爱普士妙鲜包 8折尝鲜-->
      <div class="custom_tite">
        <div class="pad10">
          <span class="ft15">爱普士妙鲜包 </span>
          <span class="ft12 ms3">8折尝鲜</span>
        </div>
        <div class="relative">
          <img src="./content/aipushi.jpg" >
        </div>
      </div>

      <!--NexGard 尼可信-->
      <div class="custom_tite">
        <div class="pad10">
          <span class="ft15">NexGard 尼可信</span>
        </div>
        <div class="relative">
          <img src="./content/nikexin.jpg" >
        </div>
      </div>

      <!--他的公益-->
      <div class=" ta_welfare">
        <div class="yhtitdiv" >
          <div class="leftimg2">
            <a href="#" class="taimg">
              <img src="./content/gongyi.jpg" >
            </a>
          </div>
          <div class="more">
            <a href="#" class="ftc">
              <img src="./content/gongyimore.png" >
            </a>
          </div>
        </div>
        <div class="ta-bg">
          <img src="./content/gongyilogo.jpg" >
          <div class="ft14 bold">
            <p class="mt5">截止今日，TA公益已联合E宠商城和
              <b class="bgfff cred round5 pl5 pr5 mr5 ml5">15</b>
              家品牌</p>
            <p class="mt5">累积捐赠
              <b class="cred">857,272.44</b>元</p>
            <p class="mt5">已合作<b class="ml5 mr5">7</b>
              家公益组织，举办参与
              <b class="bgfff cred round5 pl5 pr5 mr5 ml5">2</b>
              场公益活动,助养
              <b class="bgfff cred round5 pl5 pr5 mr5 ml5">34</b>
              位领养人</p></div>
        </div>
        <div class="clearfix">
            <div class="fl" style="border-left: 1px solid">
              <img src="./content/zanzhushang.png" >
            </div>
            <div class="ta-wrap"  ref="navbar" id="taWrap">
              <ul class="ta-ul"  v-if="datas[37]">
                <li class="ta-li" v-for="(ls,index) in datas[37].list">
                  <a href="#" class="ta-a" style="width: 100px">
                    <img :src="ls.image" >
                    <span >{{ls.donate_money_txt}}</span>
                  </a>
                </li>
               <!-- <li class="ta-li">
                  <a href="#" class="ta-a">
                    <img src="./content/epet_brand_logo.png" >
                    <span>已捐助￥18797</span>
                  </a>
                </li>
                <li class="ta-li">
                  <a href="#" class="ta-a">
                    <img src="./content/epet_brand_logo.png" >
                    <span>已捐助￥18797</span>
                  </a>
                </li>
                <li class="ta-li">
                  <a href="#" class="ta-a">
                    <img src="./content/epet_brand_logo.png" >
                    <span>已捐助￥18797</span>
                  </a>
                </li>
                <li class="ta-li">
                  <a href="#" class="ta-a">
                    <img src="./content/epet_brand_logo.png" >
                    <span>已捐助￥18797</span>
                  </a>
                </li>-->
              </ul>
            </div>
        </div>

      </div>
      <split></split>

      <!--口碑评价-->
      <div class=" judgediv">
        <div class="yhtitdiv" >
          <div class="leftimg2">
            <a href="#" class="taimg">
              <img src="./content/koubei.png" >
            </a>
          </div>
          <div class="more">
            <a href="#" class="ftc">
              <img src="./content/gongyimore.png" >
            </a>
          </div>
        </div>
        <div class="brands-judge pr10 pb10">
          <ul class="clearfix" v-if="datas[39]">
            <li class="f1"  v-for="(lis,index) in datas[39].list" :key="index">
              <a href="javascript:;" class="f1-div">
                <div class="mt10 ml10 bgf5 pb15">
                  <div class="main_img">
                    <div class="thising">
                      <img  class="image" v-lazy="lis.image" style="width: 100%">
                    </div>
                    <div class="ell">{{lis.join_time}}</div>
                  </div>
                  <div class="mt5">
                    <span class="f1" style="margin-top: -5px">{{lis.username}}</span>
                    <span class=" pet-name">{{lis.pet_des}}</span>
                  </div>
                  <div class="mt5 ft13 pr5 pl5 c999 font-intro">
                    {{lis.comment_content}}
                  </div>
                </div>
              </a>
            </li>

          </ul>

        </div>

      </div>

      <split></split>

      <!--关于我们-->
      <div class="wap-footer-bar hide">
        <div class="footer" style="display: block">
          <div class="ft">
            <span class="bt" title="触摸板">触摸板</span>
            <span>
              <a href="#">手机客户端</a>
            </span>
            <span>
              <a href="#">关于我们</a>
            </span>
            <span>
              <a href="#">联系我们</a>
            </span>
          </div>
          <div
            style="text-align:center;margin:0 10px 0 10px;
            padding-bottom:25px; font-size:12px;color: #7e8c8d;padding-top: 10px">
            © wap.epet.com 版权：重庆易宠科技有限公司
          </div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </scroller>

    <foot></foot>
  </div>

</template>
<script>
  import Vue from 'vue'
  import Eheader from './header/header.vue'
  import BScroll from 'better-scroll'
  import split from './split/split.vue'
  import foot from '../footer/footer.vue'
  import axios from 'axios'

  import surpriseItem from './surpriseItem/surpriseItem.vue'
  import { Swipe, SwipeItem } from 'mint-ui';
    export default{
        data(){
          return {
              datas:[],

          }
        },
      components:{
          Eheader,split,surpriseItem,foot
      },
      mounted(){
        axios.get('/api/home')
          .then(response=>{
            const result=response.data
            if(result.code===0){
              this.datas=result.data
//              setTimeout(()=>{
//                  this._initScroll()
//              },100)
//              Vue.$nextTick(()=>{
//                Vue._initScroll()
//              })
            }
          })
        setTimeout(() => {
          console.log(document.getElementById('taWrap'))
          new BScroll(document.getElementById('taWrap'), {
            click:true,
            scrollX:true
          })
        }, 1000)
      },
      method:{
        _initScroll(){
          console.log(document.getElementById('taWrap'))
          new BScroll(Vue.$refs.navbar, {
            click:true,
            scrollX:true
          })
        }
      }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .godog
    background url("./content/godog.png") no-repeat
    width 41px
    height 46px
    background-size 80px auto
    position: fixed
    bottom 15%
    right -1px
    z-index 2
    animation nnh 2.5s steps(2,end) infinite
  @keyframes nnh
     from
       background-position 0 0
     to
       background-position -85px 0
  .allmodule
    margin-top 140px
    .banner_item
      position relative
      .mt-swipe
        .mt-item
          &>img
            width 100%
            height 100%
      .swiper-container
        .swiper-wrapper
          .swiper-slide
            .pointer
              &>img
                width 100%

      .row
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        .items
          -webkit-box-flex: 1;
          flex: 1;
          width: 0;
          text-align: center;
          text-align: center;
        &>a
          font-size: 12px;
          line-height: 30px;



    .surprise_day
      .surprise
        .surprise-tit
          .titing
            &>img
              position absolute
              width 105px
              height 24px
              margin-top 8px
              margin-left -4px
          .fl
            margin-left 100px
            padding-top 8px
            display inline-block
          .more
            .more_img
              &>img
                position absolute
                width 67px
                height 40px
                margin-left 308px
                margin-top -28px
        .surprise-pro
          .swiper-container
            .swiper-wrapper
              z-index: 1;
              display: flex;
              -webkit-transition-property: -webkit-transform;
              transition-property: -webkit-transform;
              transition-property: transform;
              transition-property: transform,-webkit-transform;
              box-sizing: content-box;
              .swiper-slide
                width: 100%;
                height: 100%;
                position: relative;
                .pro-block
                  margin: 0 .5em;
                  .pro-img
                    .thispro-img
                      &>img
                        background: url("./content/default-epet.png") no-repeat center center #f4f4f4;
                        background-size: 120px auto;
                        position: absolute;
                        padding-top: 100%;
                        width 100%
                        height 100%


    .currency-adcon
      .divboxing
        width 100%
        .divimgLeft
          .divimg-1
            &>img
              width 100%
        .divimgRight
          float right
          margin-top -191px
          .divimg-2
            &>img
              width 100%



    .custom_tite
      position relative
      .titmoudle
        width 100%
        height 52px
        display block
        .titmore
          &>img
            position absolute
            width 67px
            height 40px
            margin-left 310px
            margin-top 7px
        .titimg
          position absolute
          &>img
            max-width 50%
            max-height 73%
            margin-left 95px
      .relative
        &>img
          width 100%
      .ft12
        font-size 12px
        text-align center
        height 58px
        line-height 19px

        .textover
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          color #333
          padding-top 10px
        .textspan
          .cmallViewIco
            background-image url("./content/view-black.png")
            display inline-block
            width 10px
            height 9px
            background-size contain
        .num
          font-style normal
          color #999
        .m110
          color #999
          margin-left 5px
          margin-right 5px
        .time
          color: #999
      .line
        display inline-block
        height 1px
        width 100%
        background-color #7e8c8d
      .pad10
        padding 10px
        .ft15
          font-size 15px
        .ms3
          color #999
          margin-left 5px
          overflow hidden
        .ftc
          &>img
            position absolute
            width 30px




    .ta_welfare
      .yhtitdiv
        .leftimg2
          text-align center
          .taimg
            &>img
              height 45px
              width auto
              margin 0 auto
        .more
          .ftc
            &>img
              position absolute
              width 20%
              height auto
              margin-left 300px
              margin-top -30px
      .ta-bg
        &>img
          width 100%
        .ft14
          left 0
          width 100%
          color: #fff
          font-size: 14px
          text-align center
          margin-top -115px
          z-index 100

          .mt5
            margin-top 5px
            display block
            line-height 20px
            font-weight bold
            .bgfff
              width 10px
              border-radius 5px
              background #fff
              color red
              padding-left 5px
              margin-left 5px
              margin-right 5px
              font-weight 400
            .cred
              color red
              padding-right 5px

      .clearfix
        .fl
          margin-top 20px
          &>img
           width 60px
           padding-top 20px
           float left
           z-index 2
           position: absolute
           background #fff
           left: -1px;
           border: 1px solid #eee;
           padding-left 10px
           padding-right 10px
        .ta-wrap
          width 100%
          overflow: hidden
          position: relative
          .ta-ul
            overflow: hidden
            position: relative
            white-space: nowrap
            float left
            display: flex
            /*margin-top 10px*/
            margin-bottom 10px
            margin-left 70px
            margin-right 100px
            height 70px
            .ta-li
              display inline-block
              width 130px
              height 60px
              margin-top 5px

              margin-left 20px
              .ta-a
                display block
                width 100%
                text-align center
                font-size 12px
                margin-right 5px
                &>img
                  width 100%
                &>span
                  display block
                  height 12px
                  font-size 12px
                  position: absolute;
                  bottom: 0;
                  margin-left: 15px;
    .judgediv
      margin-top 0px
      .yhtitdiv
        .leftimg2
          text-align center
          .taimg
            &>img
              height 45px
              width auto
              margin 0 auto
              margin-right 0px
        .more
          .ftc
            &>img
              position absolute
              width 20%
              height auto
              margin-left 300px
              margin-top -30px
      .brands-judge
        padding-bottom 10px
        padding-right 10px
        .clearfix
          list-style-type: disc;

          .f1
            float left
            display list-item
            margin-left -8px
            margin-top 30px
            width: 50%;
            text-align: center;
            .f1-div
              .mt10
                background #f5f5f5
                padding-bottom 15px
                margin-left 30px
                margin-top 10px
                .main_img
                  overflow hidden
                  height 150px
                  position relative
                  .thisimg
                    background-image url("./content/default-epet.png") no-repeat center center #f4f4f4
                    background-size 120px auto
                    position relative

                    &>img
                      top 0
                      left 0
                      display block
                      width 100%
                      vertical-align middle

                  .ell
                    margin-top -60px
                    z-index 10
                    height 20px
                    line-height 20px
                    font-size 12px
                    color #fff
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    background: rgba(0,0,0,.4);
                .mt5
                  font-size 13px
                  position relative
                  margin-right 3px
                  .f1
                    position absolute
                    float left
                    width 100%
                    left -30px
                    top 8px
                  .pet-name
                    background #ddd
                    border-radius 5px
                    float right
                    margin-top 6px
                    padding 5px
                    margin-right 5px
                .ft13
                  height 60px
                  margin-top 30px
                  line-height 20px
                  overflow hidden
                  overflow hidden
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;

    .wap-footer-bar
      margin-bottom 100px
      .footer
        display: none
        padding-bottom: 0
        border-top: 5px solid #f3f4f5
        margin: 1em 0 0;
        padding-bottom: 36px;
        background: #fff;
        clear: both;
        .ft
          font-size 14px
          text-align center
          padding 15px 0 5px
          .bt
            color red
          &>span
            padding-right 10px

    .footer
      width 100%
      height 80px
</style>
