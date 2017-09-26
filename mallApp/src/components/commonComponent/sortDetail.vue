<template>
  <div class="wrap">
    <div class="recommenditem_discribe">
      <span class="recommenditem_discribe_one">{{productsDetail.discribeOne}}</span>
      <span class="recommenditem_discribe_two">{{productsDetail.discribeTwo}}</span>
    </div>
    <div class="recommenditem_wrap">
      <ul class="recommenditem_wrap_small">
        <li class="recommenditem" v-for="item in productsDetail.details">
          <img :src="item.imgUrl" >
          <div class="recommenditem_discribe">{{item.discri}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      productsDetail:Object
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .wrap
    /*margin-top 20px*/
    border-top 5px solid #F3F4F5
    border-left 5px solid #F3F4F5
    height 100%
    width 100%
    .recommenditem_discribe
      box-sizing border-box
      padding 5px
      width 100%
      height 30px
      .recommenditem_discribe_one
        box-sizing border-box
        padding 5px
        float left
        font-size 12px
        color #999
      .recommenditem_discribe_two
        box-sizing border-box
        padding 5px
        float right
        font-size 12px
        color #999
    .recommenditem_wrap
      box-sizing border-box
      padding-top 5px
      .recommenditem_wrap_small
        box-sizing border-box
        padding 0 2px
        .recommenditem
          height 110px
          float left
          width 33%
          box-sizing border-box
          padding 0 7px
          .recommenditem_discribe
            padding-top 4px
            font-size 10px
            text-align center
            color #000000
          img
            width 100%


</style>

