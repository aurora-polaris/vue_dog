<template>
  <div class="classification">
    <div class="cation-title">
      <ul class="cation-ul">
        <li class="cation-li">
          <router-link to="/classification/list" class="cation-a">
            <span style="margin-left: 65px;">分类</span>
          </router-link>
        </li>
        <li class="cation-li">
          <router-link to="/classification/brand" class="cation-a">
            <span style="margin-left: -30px">品牌</span>
          </router-link>
        </li>
      </ul>
      <div class="search">
        <img src="./search.png">
      </div>
    </div>

    <router-view></router-view>
    <foot></foot>
  </div>
</template>
<script>
  import foot from '../footer/footer.vue'
    export default{
      components:{
          foot
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .classification
    .cation-title
      width 100%
      position absolute
      z-index 100
      height 40px
      background-color #fff
      border-bottom 1px solid #e4dede

      .cation-ul
        display flex
        .cation-li
          float left
          flex 1
          font-size 13px
          .cation-a
            width 50%
            height 50%
            content ''
            display block
            margin 0 auto
            background-size 100% 100% !important
            color #333
            &>span
              line-height 40px
            &.router-link-active
              color red

      .search
        float right
        margin-top -30px
        margin-right 10px



</style>
