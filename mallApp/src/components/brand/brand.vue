<template>
  <div class="brandWrap">
    <div class="brandWrap_small">
      <div class="brandWrap_title">
        <span>—— 推荐品牌 ——</span>
      </div>
      <ul class="brandWrap_items">
        <li class="brandWrap_item" >
          <div class="brandWrap_img">
            <img src="./img/acana.jpg">
          </div>
         <div class="brandWrap_discribe">
           <p class="brandWrap_one">ZIWI Peak</p>
           <p class="brandWrap_two">新西兰</p>
         </div>
        </li>
        <li class="brandWrap_item" >
          <div class="brandWrap_img">
            <img src="./img/ziwi.jpg" >
          </div>
          <div class="brandWrap_discribe">
            <p class="brandWrap_one">渴望</p>
            <p class="brandWrap_two">加拿大</p>
          </div>
        </li>
        <li class="brandWrap_item" >
          <div class="brandWrap_img">
            <img src="./img/ongine.jpg" >
          </div>
          <div class="brandWrap_discribe">
            <p class="brandWrap_one">卡比CANIDAE</p>
            <p class="brandWrap_two">美国</p>
          </div>
        </li>
        <li class="brandWrap_item" >
          <div class="brandWrap_img">
            <img src="./img/acana.jpg" >
          </div>

          <div class="brandWrap_discribe">
            <span class="brandWrap_one">爱肯拿Acana</span>
            <span class="brandWrap_two">加拿大</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script></script>
<style lang="stylus" rel="stylesheet/stylus">
      .brandWrap
        width 100%
        padding-top 40px
        .brandWrap_small
          width 100%
          height 19px
          padding-top 20px
          .brandWrap_title
            font-size 12px
            color #999
            text-align center
          .brandWrap_items
            margin-top 10px
            width 100%
            overflow hidden
            box-sizing border-box
            padding 0 10px
            .brandWrap_item
              width 33%
              float left
              box-sizing border-box
              padding  5px
              height 107px
              margin-top 12px
              .brandWrap_img
                height 62px
                width 100%
                position relative
                border 1px solid #333
                img
                  position absolute
                  top 50%
                  left 50%
                  transform translateX(-50%) translateY(-50%)
                  height 40px
                  text-align center
              .brandWrap_discribe
                margin-top 2px
                text-align center
                .brandWrap_one
                  font-size 13px
                  padding-top 8px
                  box-sizing border-box
                .brandWrap_two
                  font-size 12px
                  padding-top 8px
                  box-sizing border-box






</style>
