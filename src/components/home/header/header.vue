<template>
  <div class="header">
    <!--app部分-->
    <div class="xiazaiApp" style="display: block;">
      <div class="overflow rela">
        <div class="appdowimg">
          <a href="#" style="display: block; ">
            <img src="./xiazaiApp.png" style="width: 100%; height: 100%">
          </a>
        </div>
        <!--<span class="clsoebtn">
          <img id="close_down_bar" src="./closebtn_03.png" >
        </span>-->
      </div>
    </div>

   <div class="headerbox float-div floathearder" style="top: 55px;">
      <div class="main">
        <div class="clearfix pt5 pl10 pr10 pb5">
          <div class="epet-search bgf">
            <div class="fl rela ft14 location">
              <a href="#">
                <span class="catordog c89">狗狗站</span>
                <span class="c89">|</span>
                <span data-name="my-place" class="myposition c89 ft13">重庆</span>
                <i></i></a></div>

           <p class="search-text">
              <a href="#">
                <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
               <span class="eico serach-ico">
                   <img src="./search.png" >
               </span></a>
           </p>
            <a href="#" class="epet-category">
              <img src="./mydope.png"></a>
          </div>
          </div>

          <div class="find_nav">

            <div class="find_nav_left ">

                <div class="find_nav_list dscroll-div" style="width: 120%;">
                  <ul class="dscroll-ul">
                    <li data-type="0" data-shareid="1" class="dscroll-li on" style="width: 74.5px;">
                      <a href="">
                  <span class="rela">
                    <span>首页</span>
                   <i></i>
                 </span>
                      </a></li>
                    <li data-type="123" data-shareid="372" class="dscroll-li" style="width: 74.5px;">
                      <a href="">
                        <span class="rela"><span>主粮</span><i></i></span>
                      </a></li>
                    <li data-type="125" data-shareid="374" class="dscroll-li" style="width: 74.5px;">
                      <a href="">
                        <span class="rela"><span>医疗保健</span><i></i></span>
                      </a></li>
                    <li data-type="131" data-shareid="375" class="dscroll-li" style="width: 74.5px;">
                      <a href="">
                        <span class="rela"><span>零食玩具</span><i></i></span></a></li>
                    <li data-type="134" data-shareid="0" class="dscroll-li" style="width: 74.5px;">
                      <a href="">
                        <span class="rela"><span>日用外出</span><i></i></span></a></li>
                    <li data-type="140" data-shareid="371" class="dscroll-li" style="width: 74.5px;">
                      <a href="">
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

  export default {


  }
</script>

<style >
  .header{
    overflow: hidden;
    position: fixed;
    z-index: 100;
    margin-top: -140px;
    background-color: white;
  }
  .xiazaiApp{
    position: relative;
    overflow: hidden;
  }
  .appdowimg a img{
    position: relative;
    height: 100%;
    width: 100%;
  }
  .c89{
    color:#898989
  }
  .ft14{
    font-size: 14px;
  }
  .epet-search{
    padding:8px 0 ;
    text-align: center;
    display: -webkit-box;
    width: 100%;
    margin-left: 10px;
    margin-top: 10px;
  }
  .epet-search Input{
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
  }
  .search-text{
    margin-left: 10px;
    margin-top: -5px;
  }
  .serach-ico img{
    position: absolute;
    width: 11px;
    height: 11px;
    margin-top: -17px;
    margin-left: 86px;
  }
  .epet-category img{
    position: absolute;
   width: 25px;
    height:25px;
    top:70px;
    right:13px;
  }
  .find_nav_list ul li{
    float: left;
  }
.find_nav_list ul li a{
  display: block;
  width: 100%;
  height: 100%;
  line-height: 36px;
  font-size: 14px;
  text-align: center;
  color: #666;
}
  .find_nav_list ul li.on
    span{
      color: #459d36;
      display: inline-block;
    }

  .page-part {
    margin-bottom: 15px;
  }








</style>
