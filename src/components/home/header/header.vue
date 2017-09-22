<template>
  <div class="header">
    <!--app部分-->
    <div class="xiazaiApp" style="display: block;">
      <div class="overflow rela">
        <div class="appdowimg">
          <a href="#" style="display: block; " class="appimg">
            <img src="./xiazaiApp.png" style="width: 100%; height: 100%">
          </a>
        </div>
        <span class="clsoebtn">
          <img id="close_down_bar" src="./closebtn_03.png" style="width: 18px;height: 18px" >
        </span>
      </div>
    </div>

    <div class="headerbox float-div floathearder" style="top: 55px;">
      <div class="main">
        <div class="clearfix pt5 pl10 pr10 pb5">

          <div class="epet-search bgf">
            <!--狗站-->
            <div class="fl rela ft14 location">
              <a href="#" class="flimg">
                <span class="catordog c89">狗狗站</span>
                <span class="c89">|</span>
                <span data-name="my-place" class="myposition c89 ft13">重庆</span>
                <i></i></a></div>
             <!--搜索-->
            <p class="search-text">
              <a href="#" class="searchInput">
                <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
               <span class="eico serach-ico">
                   <img src="./search.png" >
               </span></a>
           </p>
            <a href="#" class="epet-category">
              <img src="./mydope.png"></a>
          </div>

          </div>
            <!--导航栏-->
        <div class="find_nav">

            <div class="find_nav_left ">

                <div class="find_nav_list dscroll-div" ref="navbar" style="width: 120%">
                  <ul class="dscroll-ul" style="width: 120%">
                    <li data-type="0" data-shareid="1" class="dscroll-li on" style="width: 74.5px;" >
                      <a href="#" class="descroll-a">
                        <span class="rela">
                          <span>首页</span>
                          <i></i>
                         </span>
                      </a> </li>
                    <li data-type="123" data-shareid="372" class="dscroll-li" style="width: 74.5px;">
                      <a href="#" class="descroll-a">
                        <span class="rela"><span>主粮</span><i></i></span>
                      </a></li>
                    <li data-type="125" data-shareid="374" class="dscroll-li" style="width: 74.5px;">
                      <a href="#" class="descroll-a">
                        <span class="rela"><span>医疗保健</span><i></i></span>
                      </a></li>
                    <li data-type="131" data-shareid="375" class="dscroll-li" style="width: 74.5px;">
                      <a href="#" class="descroll-a">
                        <span class="rela"><span>零食玩具</span><i></i></span></a></li>
                    <li data-type="134" data-shareid="0" class="dscroll-li" style="width: 74.5px;">
                      <a href="#" class="descroll-a">
                        <span class="rela"><span>日用外出</span><i></i></span></a></li>
                    <li data-type="140" data-shareid="371" class="dscroll-li" style="width: 74.5px;">
                      <a href="#" class="descroll-a">
                        <span class="rela"><span>美容香波</span><i></i></span></a></li>
                  </ul>
                </div>


          </div>
          </div>

      </div>
   </div>

  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
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
  .header
    position: absolute;
    z-index: 100;
    background-color: white;
    width 100%
    .xiazaiApp
      position: relative;
      overflow: hidden;
      width: 100%;
      .overflow
        .appdowimg
          .appimg
            .img
              position relative
              width: 100%;
              height: 100%;
        .clsoebtn
          position absolute
          margin-left 8px
          margin-top -40px
    .headerbox
      .main
        .clearfix
          overflow hidden
          .epet-search
            padding:8px 0 ;
            text-align: center;
            display: -webkit-box;
            width: 100%;
            margin-left: 10px;
            margin-top: -5px;


            .fl
              font-size 14px
              padding-top 8px

              .flimg
                &>span
                  color: #898989
                &>i
                  position: absolute;
                  top: 75px;
                  left: 93px;
                  border-width: 4px;
                  font-size: 0;
                  line-height: 0;
                  border-style: solid solid dotted;
                  border-color: #898989 transparent transparent;


            .search-text
              margin-left: 10px;
              margin-top: -5px;

              .searchInput
                &>input
                  width: 220px;
                  border: 0;
                  height: 25px;
                  background: #e9e9e9;
                  border-radius: 4px;
                  color: #bcbcbc;
                  text-indent: 10px;
                  font-size: 13px;
                  outline: 0;
                  position: relative;
                  margin-top 10px
                  margin-left 3px
                .serach-ico
                  position: absolute;
                  margin-top: -20px;
                  margin-left: 90px;
                  &>img
                    width 11px
                    height 11px
            .epet-category
              &>img
                position: absolute
                width: 25px
                height:25px
                top:65px
                right:13px
        .find_nav
          .find_nav_left
            overflow hidden
            .find_nav_list
              .dscroll-ul
                white-space: nowrap
                display: flex
                .dscroll-li
                  .descroll-a
                    display block
                    width 100%
                    height 100%
                    line-height 36px
                    text-align center
                    .rela
                      font-size 14px
                      &>span
                        color #898989
</style>
