<template>
  <div>
    <div class="header">
      <span class="icon-qrcode"></span>
      <span class="header_dog">狗主粮</span>
      <span class="icon-undo2"></span>
    </div>
    <div class="main_image">
      <img src="./img/quanchang.png">
    </div>
    <div class="main_link">
      <ul class="main_link_wrap">
        <li class="main_link_item">
          <router-link to="/importer">
            <img src="./img/danjinjiage.jpg" >
          </router-link>
        </li>
        <li class="main_link_item">
          <router-link to="/domestic">
            <img src="./img/guochanguoliang.jpg" >
          </router-link>
        </li>
        <li class="main_link_item">
          <router-link to="/recipe">
            <img src="./img/jinkougouliang.jpg" >
          </router-link>
        </li>
        <li class="main_link_item">
          <router-link to="/single">
            <img src="./img/kouweipeifang.jpg" >
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
    <div class="page_line_wraper_two">
      <div class="page_line_two"></div>
    </div>
    <div class="hot">
      <div class="hot_footer">
        <div class="hot_left">
          <img src="./img/jiaquan.jpg" >
        </div>
        <div class="hot_right">
          <img src="./img/gaopinzhi.jpg" >
          <img src="./img/chishi.jpg" >
        </div>
      </div>
    </div>
    <div class="page_line_wraper_three">
      <div class="page_line_three"></div>
    </div>
    <div class="staple_image">
      <img src="./img/jinxuan.jpg" >
    </div>
    <div class="staple_image_one">
      <img src="./img/aozhou.jpg" >
    </div>
    <div class="main_seckill_footer" ref="foodDetails">
      <ul class="foodList">
        <li class="item">
          <a href="">
            <img src="./img/yellow.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>15.00</span>
            </div>
            <p>省¥13.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/yellow.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>省¥3.25</span>
            </div>
            <p>省¥13.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/yellow.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>75.00</span>
            </div>
            <p>省¥75.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/yellow.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>4.45</span>
            </div>
            <p>省¥4.45</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/yellow.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>119.00</span>
            </div>
            <p>省¥19.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/yellow.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>169</span>
            </div>
            <p>省¥39.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/yellow.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>1.00</span>
            </div>
            <p>省¥4.90</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/yellow.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>16.90</span>
            </div>
            <p>省¥8.1</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/yellow.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>18.90</span>
            </div>
            <p>省¥11.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/yellow.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>68.90</span>
            </div>
            <p>省¥11.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/yellow.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>15.90</span>
            </div>
            <p>省¥18.10</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="staple_image_one">
      <img src="./img/gougou.png" >
    </div>
    <div class="main_seckill_footer" ref="foodDetails">
      <ul class="foodList">
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>15.00</span>
            </div>
            <p>省¥13.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>省¥3.25</span>
            </div>
            <p>省¥13.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>75.00</span>
            </div>
            <p>省¥75.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>4.45</span>
            </div>
            <p>省¥4.45</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>119.00</span>
            </div>
            <p>省¥19.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>169</span>
            </div>
            <p>省¥39.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>1.00</span>
            </div>
            <p>省¥4.90</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>16.90</span>
            </div>
            <p>省¥8.1</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>18.90</span>
            </div>
            <p>省¥11.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>68.90</span>
            </div>
            <p>省¥11.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/yellow.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>15.90</span>
            </div>
            <p>省¥18.10</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="staple_image_one">
      <img src="./img/aiquan.jpg" >
    </div>
    <div class="main_seckill_footer" ref="foodDetails">
      <ul class="foodList">
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>15.00</span>
            </div>
            <p>省¥13.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>省¥3.25</span>
            </div>
            <p>省¥13.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>75.00</span>
            </div>
            <p>省¥75.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>4.45</span>
            </div>
            <p>省¥4.45</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>119.00</span>
            </div>
            <p>省¥19.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>169</span>
            </div>
            <p>省¥39.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>1.00</span>
            </div>
            <p>省¥4.90</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>16.90</span>
            </div>
            <p>省¥8.1</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>18.90</span>
            </div>
            <p>省¥11.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/orange.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>68.90</span>
            </div>
            <p>省¥11.00</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img src="./img/yellow.jpg" alt="">
            <div class="foodDetail">
              <span>¥</span>
              <span>15.90</span>
            </div>
            <p>省¥18.10</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="product_classify">
      <div class="product_classify_item">
        <a href="">
          全部
        </a>
      </div>
      <div class="product_classify_item">
        <a href="">进口狗粮</a>
      </div>
      <div class="product_classify_item">
        <a href="">国产狗粮</a>
      </div>
      <div class="product_classify_item">
        <a href="">散装狗粮</a>
      </div>
    </div>
    <div class="product_list">
      <ul>
        <li class="product_item">
          <div class="product_item_one">
            <img src="./img/liangliang.jpg" >
          </div>
          <div class="product_item_two">
            <div class="font_one">美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)</div>
            <div class="font_two">
              <span class="one">138.00</span>
              <span class="two">38.12元/斤</span>
            </div>
            <div class="font_three">
              <span class="three">互动:23(100%好评)</span>
              <span>售出:23</span>
            </div>
          </div>
        </li>
        <li class="product_item">
          <div class="product_item_one">
            <img src="./img/liangliang.jpg" >
          </div>
          <div class="product_item_two">
            <div class="font_one">美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)</div>
            <div class="font_two">
              <span class="one">138.00</span>
              <span class="two">38.12元/斤</span>
            </div>
            <div class="font_three">
              <span class="three">互动:23(100%好评)</span>
              <span>售出:23</span>
            </div>
          </div>
        </li>
        <li class="product_item">
          <div class="product_item_one">
            <img src="./img/liangliang.jpg" >
          </div>
          <div class="product_item_two">
            <div class="font_one">美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)</div>
            <div class="font_two">
              <span class="one">138.00</span>
              <span class="two">38.12元/斤</span>
            </div>
            <div class="font_three">
              <span class="three">互动:23(100%好评)</span>
              <span>售出:23</span>
            </div>
          </div>
        </li>
        <li class="product_item">
          <div class="product_item_one">
            <img src="./img/liangliang.jpg" >
          </div>
          <div class="product_item_two">
            <div class="font_one">美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)</div>
            <div class="font_two">
              <span class="one">138.00</span>
              <span class="two">38.12元/斤</span>
            </div>
            <div class="font_three">
              <span class="three">互动:23(100%好评)</span>
              <span>售出:23</span>
            </div>
          </div>
        </li>
        <li class="product_item">
          <div class="product_item_one">
            <img src="./img/liangliang.jpg" >
          </div>
          <div class="product_item_two">
            <div class="font_one">美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)</div>
            <div class="font_two">
              <span class="one">138.00</span>
              <span class="two">38.12元/斤</span>
            </div>
            <div class="font_three">
              <span class="three">互动:23(100%好评)</span>
              <span>售出:23</span>
            </div>
          </div>
        </li>
        <li class="product_item">
          <div class="product_item_one">
            <img src="./img/liangliang.jpg" >
          </div>
          <div class="product_item_two">
            <div class="font_one">美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)</div>
            <div class="font_two">
              <span class="one">138.00</span>
              <span class="two">38.12元/斤</span>
            </div>
            <div class="font_three">
              <span class="three">互动:23(100%好评)</span>
              <span>售出:23</span>
            </div>
          </div>
        </li>
        <li class="product_item">
          <div class="product_item_one">
            <img src="./img/liangliang.jpg" >
          </div>
          <div class="product_item_two">
            <div class="font_one">美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)</div>
            <div class="font_two">
              <span class="one">138.00</span>
              <span class="two">38.12元/斤</span>
            </div>
            <div class="font_three">
              <span class="three">互动:23(100%好评)</span>
              <span>售出:23</span>
            </div>
          </div>
        </li>
        <li class="product_item">
          <div class="product_item_one">
            <img src="./img/liangliang.jpg" >
          </div>
          <div class="product_item_two">
            <div class="font_one">美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)</div>
            <div class="font_two">
              <span class="one">138.00</span>
              <span class="two">38.12元/斤</span>
            </div>
            <div class="font_three">
              <span class="three">互动:23(100%好评)</span>
              <span>售出:23</span>
            </div>
          </div>
        </li>
        <li class="product_item">
          <div class="product_item_one">
            <img src="./img/liangliang.jpg" >
          </div>
          <div class="product_item_two">
            <div class="font_one">美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)</div>
            <div class="font_two">
              <span class="one">138.00</span>
              <span class="two">38.12元/斤</span>
            </div>
            <div class="font_three">
              <span class="three">互动:23(100%好评)</span>
              <span>售出:23</span>
            </div>
          </div>
        </li>
        <li class="product_item">
          <div class="product_item_one">
            <img src="./img/liangliang.jpg" >
          </div>
          <div class="product_item_two">
            <div class="font_one">美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)</div>
            <div class="font_two">
              <span class="one">138.00</span>
              <span class="two">38.12元/斤</span>
            </div>
            <div class="font_three">
              <span class="three">互动:23(100%好评)</span>
              <span>售出:23</span>
            </div>
          </div>
        </li>
        <li class="product_item">
          <div class="product_item_one">
            <img src="./img/liangliang.jpg" >
          </div>
          <div class="product_item_two">
            <div class="font_one">美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)</div>
            <div class="font_two">
              <span class="one">138.00</span>
              <span class="two">38.12元/斤</span>
            </div>
            <div class="font_three">
              <span class="three">互动:23(100%好评)</span>
              <span>售出:23</span>
            </div>
          </div>
        </li>
        <li class="product_item">
          <div class="product_item_one">
            <img src="./img/liangliang.jpg" >
          </div>
          <div class="product_item_two">
            <div class="font_one">美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)</div>
            <div class="font_two">
              <span class="one">138.00</span>
              <span class="two">38.12元/斤</span>
            </div>
            <div class="font_three">
              <span class="three">互动:23(100%好评)</span>
              <span>售出:23</span>
            </div>
          </div>
        </li>
        <li class="product_item">
          <div class="product_item_one">
            <img src="./img/liangliang.jpg" >
          </div>
          <div class="product_item_two">
            <div class="font_one">美国原装进口 雅思ARTEMIS 中/大型犬配方全期犬粮 4磅(1.81kg)</div>
            <div class="font_two">
              <span class="one">138.00</span>
              <span class="two">38.12元/斤</span>
            </div>
            <div class="font_three">
              <span class="three">互动:23(100%好评)</span>
              <span>售出:23</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
    export default{

      mounted(){
        const foodDetails=this.$refs.foodDetails
        this.$nextTick(()=>{
          let foodDetailser =new BScroll(foodDetails,{
            click:true,
            scrollX: true,
          })

        })
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header
    overflow hidden
    .icon-qrcode:before {
      content: "\e938";
      font-size:20px
      float:right
      transform translateY(35%)
    }
    .icon-undo2:before {
      content: "\e967";
      font-size:20px
      float:left
      transform translateY(35%)
    }
    height 50px
    box-sizing border-box
    padding 5px
    text-align center
    line-height 40px
    .header_dog
      width 100%
      font-size 18px
  .main_image
      width 100%
      img
        width 100%


  .main_link
    width 100%
    .main_link_wrap
      display flex
      display -webkit-box-flex
      .main_link_item
        flex 1
        img
          width 100%




  .page_line_wraper_two
    width 100%
    margin-top 12px
    .page_line_two
      background #f3f4f5
      height 10px


  .hot
    height 230px
    .hot_footer
      display flex
      height 200px
      .hot_left
        height 200px
        width 42%
        img
          width 100%
          height 200px
      .hot_right
        height 200px
        width 58%
        img
          width 100%
          height 100px


  .page_line_wraper_three
    width 100%
    margin-top -30px
    .page_line_three
      background #f3f4f5
      height 10px
  .staple_image
    margin-top 2px
    margin-bottom 2px
    width 100%
    text-align center
    img
      width 50%
      max-height 73px
  .staple_image_one
    width 100%
    img
      width 100%

  .main_seckill_footer
    width 100%
    height 130px
    overflow hidden
    .foodList
      width 1205px
      height 100%
      white-space nowrap
      display flex
      .item
        width 85px
        height 85px
        text-align center
        font-size 10px
        a>img
          width 100%
        .foodDetail
          color red
          margin-top 3px
          margin-bottom 4px




  .product_classify
    display flex

    .product_classify_item
      flex 1
      text-align center
      border 1px solid #d9d9d9
      height 23px
      box-sizing border-box
      padding 5px
      font-size 12px
      margin 5px
      border-radius 10px

  .product_list
    .product_item
      padding-left 5px
      box-sizing border-box
      display flex
      .product_item_one
        border 1px solid #d9d9d9
        box-sizing border-box
        padding 5px
        width 35%
        img
          width 100%
      .product_item_two
        width 65%
        margin-left 5px
        box-sizing border-box
        padding-top 10px
        position relative
        .font_one
          font-size 12px
          line-height 16px
          margin-bottom 20px
        .font_two
            position absolute
            bottom 25px
          .one
            color #e35356
            font-size 15px
          .two
            color #666
            font-size 12px
        .font_three
            font-size 12px
            color #999
            position absolute
            bottom 10px
            .three
                display inline-block
                margin-right 5px





</style>
