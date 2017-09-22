<template>
  <!--小总容器每个产品-->
  <div class="surpriseContent">
    <div class="slide-container">
      <div class="slideItem">

        <div class="picture">
          <img src="https://img1.epetbar.com/2016-02/20/10/384c80b530bad17ab90de8f661f65e68.jpg">
        </div>

        <div class="content">
          <span class="con_1">￥</span>
          <span class="con_2">21.9</span>
        </div>

        <span class="text">省￥10.10</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .surpriseContent
    padding 6px
    display:inline-block;
    margin-right 6px

    .slide-container
      width 84px
      height 130px
      /*background-color #7e8c8d*/
      .slideItem
        height 130px
        width 84px
        /*background-color red*/
        .picture
          height 84px
          width 84px
          img
            height 100%
            width 100%
        .content
          width 84px
          height 22px
          line-height 22px
          text-align center
          .con_1
            font-size: 12px;
            color: red;
            text-align: center;
          .con_2
            font-size: 14px;
            color: red;
            text-align: center;
        .text
          display inline-block
          height 19px
          width 84px
          text-align center
          font-size: 12px;
          color: #999;
</style>
