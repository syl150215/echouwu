<template>
  <div class="sort_wrap">
    <div class="header">
      <router-link to="/sortDetail" class="rouer_one active">分类</router-link>
      <router-link to="/brand" class="rouer_two">品牌</router-link>
      <span class="icon_search">搜索</span>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default{

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
      .sort_wrap
        position relative
        box-sizing border-box
        .header
          width 100%
          height 40px
          position fixed
          background #ffffff
          z-index 10
          text-align center
          line-height 40px
          &::after
            height 1px
            content ""
            display block
            transform scaleY(0.3)
            background #333333
            width 100%
          .rouer_one
            font-size 13px
            box-sizing border-box
            padding 10px
          .router_two
            font-size 13px
            color #999
            box-sizing border-box
            padding 10px
          .active
            color red
          .icon_search
            display inline-block
            float right

</style>
