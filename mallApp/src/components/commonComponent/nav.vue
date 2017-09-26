<template>
  <div class="footer_fix">
    <div class="item_fix" v-for="itemOne in routeL">
      <router-link :to="itemOne.routeLink">
        <img :src="itemOne.imgu" >
      </router-link>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      imgUrl:Array
    },
    data(){
      return {
        roulin:["/mainFirst","/sort","/shopping","/shopping"]
      }
    },
    mounted(){
      console.log(this.routeL)
    },
    computed:{
      routeL(){
        return [
          {
            routeLink:this.roulin[0],
            imgu:this.$props.imgUrl[0]
          },{
            routeLink:this.roulin[1],
            imgu:this.$props.imgUrl[1]
          },{
            routelink:this.roulin[2],
            imgu:this.$props.imgUrl[2]
          },{
            routeLink:this.roulin[3],
            imgu:this.$props.imgUrl[3]
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footer_fix
    display flex
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
