<template>
  <div class="sortdetail_wrap">
    <div class="sort_list">
      <ul>
        <li class="sort_item">
          <router-link to="/recommend">为您推荐</router-link>
        </li>
        <li class="sort_item">
          <router-link to="/recommend">狗狗主粮</router-link>
        </li>
        <li class="sort_item">
          <div>狗狗零食</div>
        </li>
        <li class="sort_item">
          <div>狗狗日用</div>
        </li>
        <li class="sort_item">
          <div>狗狗保健</div>
        </li>
        <li class="sort_item">
          <div>狗狗服饰</div>
        </li>
        <li class="sort_item">
          <div>狗狗牵引</div>
        </li>
        <li class="sort_item">
          <div>狗狗美容</div>
        </li>
        <li class="sort_item">
          <div>狗狗美容</div>
        </li>
        <li class="sort_item">
          <div>狗狗香波</div>
        </li>
        <li class="sort_item">
        <div>狗狗周边</div>
        </li>
        <li class="sort_item">
          <div>狗狗定制</div>
        </li>
        <li class="sort_item">
          <div>狗狗周边</div>
        </li>
        <li class="sort_item">
          <router-link to="/book">狗狗书籍</router-link>
        </li>
      </ul>
    </div>
    <div class="sort_detail">
      <router-view></router-view>
    </div>
  </div>
</template>
<script></script>
<style lang="stylus" rel="stylesheet/stylus">
    .sortdetail_wrap
      width 100%
      padding-top 40px
      display flex
      display -webkit-box-flex
      .sort_list
        width 20%
        .sort_item
          font-size 12px
          line-height 50px
          text-align center
          height 50px
          width 100%
          &::after
            content ""
            display block
            position absolute
            height 1px
            width 20%
            background #999
            transform scaleY(0.2)
      .sort_detail
        width 80%


</style>
