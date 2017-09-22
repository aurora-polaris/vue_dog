<template>
  <div>
    <Eheader></Eheader>

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

      <div class="surprise_day">
        <div class="titing">
          <img src="./content/15.png" >
        </div>
        <div class="fl ft13 ml10" style="margin-top: 1px;">距本场结束</div>
        <div class="more">
          <a href="#" class="more_img">
            <img src="./content/16.png" >
          </a>
        </div>

        <!--<div class="row">
          <div class="items">
            <a href="javascript:;">
              <img src="./8.png" style="width: 93px;height: 83px">
            </a>
          </div>
          <div class="items">
            <a href="javascript:;"><img src="./9.png" style="width: 93px;height: 83px"></a>
          </div>
          <div class="items">
            <a href="javascript:;"><img src="./10.png" style="width: 93px;height: 83px"></a>
          </div>
          <div class="items">
            <a href="javascript:;"><img src="./11.png" style="width: 93px;height: 83px"></a>
          </div>
        </div>-->
      </div>

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

    </div>
  </div>

</template>
<script>
  import Eheader from './header/header.vue'
  import split from './split/split.vue'
  import { Swipe, SwipeItem } from 'mint-ui';
    export default{
      components:{
          Eheader,split
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
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
      .titing
        &>img
          position absolute
          width 105px
          height 24px
          margin-top 8px
          margin-left -4px
      .fl
      //position absolute
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
</style>
