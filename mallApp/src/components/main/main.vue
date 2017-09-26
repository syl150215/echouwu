<template>
  <div>
    <router-view class="main_router"></router-view>
    <div class="footer_fix">
      <div class="item_fix">
        <router-link to="/mainFirst">
          <img src="./img/shouye.png" >
        </router-link>
      </div>
      <div class="item_fix">
        <router-link to="/sort">
          <img src="./img/fen.png" >
        </router-link>
      </div>
      <div class="item_fix">
        <router-link to="/shopping">
          <img src="./img/gouwuche.png" >
        </router-link>
      </div>
      <div class="item_fix">
        <router-link to="/register">
          <img src="./img/echong.png" >
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style lang="stylus" rel="stylesheet/stylus">
    .main_router
     margin-bottom 70px
    .footer_fix
      display flex
      position fixed
      bottom 0
      z-index 2
      background #ffffff
      width 100%
      &::before
        display block
        content ""
        position absolute
        background #3333
        bottom 47px
        height 1px
        width 100%
        transform  scaleY(0.5)

      .item_fix
        height 55px
        img
          width 50%
          height 40px
          padding-left 25%
          padding-top 15%



</style>
