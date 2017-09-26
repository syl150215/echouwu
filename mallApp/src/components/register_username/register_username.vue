<template>
  <div>
    <div class="username">
      <span class="icon-mobile"></span>
      <input type="text" placeholder="手机号/邮箱/用户名" class="text_input">
    </div>
    <div class="password">
      <span class="icon-lock"></span>
      <input type="password" placeholder="输入密码" class="text_password">
    </div>
    <div class="password_active">
      <span class="icon-lock"></span>
      <input type="password" placeholder="输入密码" class="text_password">
    </div>
  </div>
</template>
<script>

</script>
<style lang="stylus" rel="stylesheet/stylus">

  .username
    position relative
    margin-bottom 30px
    color #666
    .text_input
      outline: medium
      color:#999;
    &:after
      display block
      height 1px
      width 100%
      content ""
      background #999
      transform scaleY(0.5)
      position absolute
      bottom -14px
    .icon-mobile
      &:before
       content "\e958"

  .password
    position relative
    margin-bottom 30px
    color #666
    border none
    .text_password
      outline: medium
    &:after
      display block
      height 1px
      width 100%
      content ""
      background #999
      transform scaleY(0.5)
      position absolute
      bottom -14px
    .icon-lock
      &:before
        content "\e98f"

  .password_active
    .icon-lock
      &:before
        content "\e98f"
</style>
