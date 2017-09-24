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
        <mt-swipe class="mt-swipe" :auto="4000"  style="width: 375px;height: 150px;">
          <mt-swipe-item class="mt-item">
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
      <div class="custom_tite">
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
            <div class="ta-wrap"  ref="navbar">
              <ul class="ta-ul" style="width: 130%">
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
          <ul class="clearfix">
            <li class="f1">
              <a href="javascript:;" class="f1-div">
                <div class="mt10 ml10 bgf5 pb15">
                  <div class="main_img">
                    <div class="thising">
                      <img  class="image" src="./content/f1-1.jpg" >
                    </div>
                    <div class="ell">加入E宠2年2月</div>
                  </div>
                  <div class="mt5">
                    <span class="f1">红*****ω</span>
                    <span class=" pet-name">中华田园猫</span>
                  </div>
                  <div class="mt5 ft13 pr5 pl5 c999 font-intro">
                    包装完美，没有破漏的情况存在，虽说是跨境运输，
                    但是物流的速度还是比想象中快，最主要的还是正品保证
                    ，买得放心吃的安心
                  </div>
                </div>
              </a>
            </li>
            <li class="f1">
              <a href="javascript:;" class="f1-div">
                <div class="mt10 ml10 bgf5 pb15">
                  <div class="main_img">
                    <div class="thising">
                      <img  class="image" src="./content/f1-2.jpg" >
                    </div>
                    <div class="ell">加入E宠2年7月</div>
                  </div>
                  <div class="mt5">
                    <span class="f1">自***人</span>
                    <span class=" pet-name">萨摩耶</span>
                  </div>
                  <div class="mt5 ft13 pr5 pl5 c999 font-intro">

                    物流挺给力，到货很快。包装也十分的棒，外面还有塑料薄膜包裹，非常好，一看就让人觉得质量绝对一级棒。客服真心不错，很耐心的给你讲解！就冲这个大大的好评，以后狗狗的东西直接来这里！ 再次祝e宠生意兴隆。

                  </div>
                </div>
              </a>
            </li>
          </ul>
          <ul class="clearfix">
            <li class="f1">
              <a href="javascript:;" class="f1-div">
                <div class="mt10 ml10 bgf5 pb15">
                  <div class="main_img">
                    <div class="thising">
                      <img  class="image" src="./content/f1-3.jpg" >
                    </div>
                    <div class="ell">加入E宠3月</div>
                  </div>
                  <div class="mt5">
                    <span class="f1">殳**白</span>
                    <span class=" pet-name">哈士奇</span>
                  </div>
                  <div class="mt5 ft13 pr5 pl5 c999 font-intro">

                    不知不觉中这已经是第16次在E宠购物了，其实我家二妹才来了三个多月。二妹吃的，用的，玩的，包括生病的药全部是在E宠买的，看中的就是正品保障和一流的物流。印象最深的是618活动的时候因为订单量太大，有一个单子没有按时送到，我联系了客服，客服保证第二天送到，结果第二天晚上十一点多的时候E宠的工作人员开着自家的小轿车把货送到了我家楼下，兑现了承诺。希望E宠以后越来越好，继续做广大铲屎官的坚实后盾。

                  </div>
                </div>
              </a>
            </li>
            <li class="f1">
              <a href="javascript:;" class="f1-div">
                <div class="mt10 ml10 bgf5 pb15">
                  <div class="main_img">
                    <div class="thising">
                      <img  class="image" src="./content/f1-4.jpg" >
                    </div>
                    <div class="ell">加入E宠2月</div>
                  </div>
                  <div class="mt5">
                    <span class="f1">奥****家</span>
                    <span class=" pet-name">中华田园猫</span>
                  </div>
                  <div class="mt5 ft13 pr5 pl5 c999 font-intro">

                    客服和物流都是特别的满意，以前曾经在天猫国际买，但是物流速度太慢了。e宠的速度快不说，东西绝对是真货，最重要的是，每次的减震避震都做的特别完美。开了水族站之后，以后家里宠物的东西全都e宠买了。

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
  import Eheader from './header/header.vue'
  import BScroll from 'better-scroll'
  import split from './split/split.vue'
  import foot from '../footer/footer.vue'
  import surpriseItem from './surpriseItem/surpriseItem.vue'
  import { Swipe, SwipeItem } from 'mint-ui';
    export default{
      components:{
          Eheader,split,surpriseItem,foot
      },
      mounted(){
        this.$nextTick(()=>{
          this.scroll=new BScroll(this.$refs.navbar,{
            click:true,
            scrollX:true
          })
        })
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

          &>img
           width 60px
           padding-top 10px
           float left
           z-index 2
           position: absolute
           background-color white
           padding-left 10px
           padding-right 10px
        .ta-wrap
          .ta-ul
            white-space: nowrap
            display: flex
            margin-top 20px
            margin-bottom 10px
            margin-left 70px
            margin-right 100px
            .ta-li
              width 109px
              margin-top 10px
              border-right 1px solid #898989
              margin-left 10px
              .ta-a
                display block
                width 100%
                text-align center
                font-size 12px
                margin-right 5px
                &>img
                  width 100%
                  height 100%
                  margin-bottom 5px
                &>span
                  display block
                  font-size 12px

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
          display: flex
          .f1
            float left
            display list-item
            margin-left -13px
            -webkit-box-flex: 1;
            flex: 1;
            width: 0;
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
                    padding-top 100%
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
