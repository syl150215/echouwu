<template>
  <div>
    <div v-show="mainShow" class="mainWraper">
      <div  id="header" >
        <div class="header_pic">
          <img src="./img/new_person.png">
        </div>
        <div class="header_nav">
          <div class="header_nav_wrap">
            <div class="header_local">
              <div @touchstart="mainShowChange(false)">
                <span>{{dog}}</span>
                <span>|</span>
                <span>{{place}}</span>
              </div>
            </div>
            <div class="header_search_wrap">
              <input class="header_search"
                     v-model="searchName"
                     placeholder="  搜索商品和品牌"
                     type="search">
              <span></span>
              <span class="header_dialog"></span>
            </div>
          </div>
        </div>
        <div class="header_bar" ref="headerScroll">
          <ul id="headerNavbar">
            <li>
              <router-link to="/main">
                <span>主页</span>
                <i class="line_active"></i>
              </router-link>
            </li>
            <li>
              <router-link to="/staple">
                <span>主粮</span>
                <i class="line_active"></i>
              </router-link>
            </li>
            <li>
              <router-link to="/medical">
                <span>医疗保健</span>
                <i class="line_active"></i>
              </router-link>
            </li>
            <li>
              <router-link to="/snakes">
                <span>零食玩具</span>
                <i class="line_active"></i>
              </router-link>
            </li>
            <li>
              <router-link to="/daily">
                <span>日用外出</span>
                <i class="line_active"></i>
              </router-link>
            </li>
            <li >
              <router-link to="/beautify">
                <span>美容香波</span>
                <i class="line_active"></i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div id="Firstmain"  ref="Firstmain">
        <div>
          <div class="banner">
            <mt-swipe :auto="4000" class="banner_mt-swipe">
              <mt-swipe-item class="banner_mt-swipe-item">
                <img src="./img/aiya.jpg" >
              </mt-swipe-item>
              <mt-swipe-item class="banner_mt-swipe-item">
                <img src="./img/daohang.jpg" >
              </mt-swipe-item>
              <mt-swipe-item class="banner_mt-swipe-item">
                <img src="./img/gouliang.jpg" >
              </mt-swipe-item>
              <mt-swipe-item class="banner_mt-swipe-item">
                <img src="./img/xinpin.png">
              </mt-swipe-item>
              <mt-swipe-item class="banner_mt-swipe-item">
                <img src="./img/zhineng.jpg" >
              </mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="main_slide">
            <a href="">
              <img src="./img/libao.gif" alt="">
            </a>
          </div>
          <div class="main_list">
            <div class="main_listOne">
              <div class="item">
                <a href="">
                  <img src="./img/Echongtuan.png" alt="">
                </a>
              </div>
              <div class="item">
                <a href="">
                  <img src="./img/pinpaitemai.png" alt="">
                </a>
              </div>
              <div class="item">
                <a>
                  <img src="./img/tiyan.png" alt="">
                </a>
              </div>
              <div class="item">
                <a href="">
                  <img src="./img/qingcang.png" alt="">
                </a>
              </div>
            </div>
            <div class="main_listOne">
              <div class="item">
                <a href="">
                  <img src="./img/chaopin.png" alt="">
                </a>
              </div>
              <div class="item">
                <a href="">
                  <img src="./img/xinwang.png" alt="">
                </a>
              </div>
              <div class="item">
                <a href="">
                  <img src="./img/zhoukai.jpg" alt="">
                </a>
              </div>
              <div class="item">
                <a href="">
                  <img src="./img/more.jpg" alt="">
                </a>
              </div>
            </div>

          </div>
          <div class="page_line_wraper">
            <div class="page_line"></div>
          </div>
          <div class="main_seckill">
            <div class="main_seckill_header_wraper">
              <div class="main_seckill_header">
                <div class="everyday">
                  <img class="everyday_image" src="./img/suprice.png" alt="">
                </div>
                <div class="last">距本场结束</div>
                <div class="count_down">&nbsp;&nbsp;
                  <span>00</span>
                  <span>:</span>
                  <span>11</span>
                  <span>:</span>
                  <span>29</span>
                </div>
                <div class="main_seckill_more">
                  <img src="./img/smallmore.png">
                </div>
              </div>
            </div>
            <div class="main_seckill_footer" ref="foodDetails">
              <ul class="foodList">
                <li class="item">
                  <a href="">
                    <img src="./img/changchang.jpg" alt="">
                    <div class="foodDetail">
                      <span>¥</span>
                      <span>15.00</span>
                    </div>
                    <p>省¥13.00</p>
                  </a>
                </li>
                <li class="item">
                  <a href="">
                    <img src="./img/jingzhigouliang.jpg" alt="">
                    <div class="foodDetail">
                      <span>¥</span>
                      <span>省¥3.25</span>
                    </div>
                    <p>省¥13.00</p>
                  </a>
                </li>
                <li class="item">
                  <a href="">
                    <img src="./img/kafei.jpg" alt="">
                    <div class="foodDetail">
                      <span>¥</span>
                      <span>75.00</span>
                    </div>
                    <p>省¥75.00</p>
                  </a>
                </li>
                <li class="item">
                  <a href="">
                    <img src="./img/miaoliang.jpg" alt="">
                    <div class="foodDetail">
                      <span>¥</span>
                      <span>4.45</span>
                    </div>
                    <p>省¥4.45</p>
                  </a>
                </li>
                <li class="item">
                  <a href="">
                    <img src="./img/naifen.jpg" alt="">
                    <div class="foodDetail">
                      <span>¥</span>
                      <span>119.00</span>
                    </div>
                    <p>省¥19.00</p>
                  </a>
                </li>
                <li class="item">
                  <a href="">
                    <img src="./img/qiaokeli.jpg" alt="">
                    <div class="foodDetail">
                      <span>¥</span>
                      <span>169</span>
                    </div>
                    <p>省¥39.00</p>
                  </a>
                </li>
                <li class="item">
                  <a href="">
                    <img src="./img/v3.jpg" alt="">
                    <div class="foodDetail">
                      <span>¥</span>
                      <span>1.00</span>
                    </div>
                    <p>省¥4.90</p>
                  </a>
                </li>
                <li class="item">
                  <a href="">
                    <img src="./img/xiangbo.jpg" alt="">
                    <div class="foodDetail">
                      <span>¥</span>
                      <span>16.90</span>
                    </div>
                    <p>省¥8.1</p>
                  </a>
                </li>
                <li class="item">
                  <a href="">
                    <img src="./img/weihua.jpg" alt="">
                    <div class="foodDetail">
                      <span>¥</span>
                      <span>18.90</span>
                    </div>
                    <p>省¥11.00</p>
                  </a>
                </li>
                <li class="item">
                  <a href="">
                    <img src="./img/naifen.jpg" alt="">
                    <div class="foodDetail">
                      <span>¥</span>
                      <span>68.90</span>
                    </div>
                    <p>省¥11.00</p>
                  </a>
                </li>
                <li class="item">
                  <a href="">
                    <img src="./img/qiaokeli.jpg" alt="">
                    <div class="foodDetail">
                      <span>¥</span>
                      <span>15.90</span>
                    </div>
                    <p>省¥18.10</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="page_line_wraper">
            <div class="page_line"></div>
          </div>
          <div class="hot">
            <div class="hot_header">
              <img src="./img/remenlanmu.jpg" >
            </div>
            <div class="hot_footer">
              <div class="hot_left">
                <img src="./img/xinwangketang.jpg" >
              </div>
              <div class="hot_right">
                <img src="./img/xinpinzoukan.jpg" >
                <img src="./img/chaopinshipin.jpg" >
              </div>
            </div>
          </div>
          <div class="page_line_wraper_two">
            <div class="page_line_two"></div>
          </div>
          <div class="products_show">
            <div class="product_video">
              <div class="chaopinMore">
                <img src="./img/chaoshipin.png" class="picOne">
                <img src="./img/smallmore.png" class="picMore" >
              </div>
              <div class="erha">
                <img src="./img/erha.jpg" >
              </div>
              <div class="product_discribe_wrap">
                <div class="product_discribe">
                  <div class="product_discribe_one">
                    神奇饮水除口臭
                  </div>
                  <div class="product_discribe_two">
                    <span class="eye_icon"></span>
                    <span>27174</span>
                    <span>|</span>
                    <span>01:13</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="page_line_wraper_three">
            <div class="page_line_three"></div>
          </div>
          <div class="products_show_one">
            <div class="product_video">
              <div class="chaopinMore">
                <img src="./img/tiyanguan.png" class="picOne">
                <img src="./img/smallmore.png" class="picMore" >
              </div>
              <div class="erha">
                <img src="./img/naodong.jpg" >
              </div>
            </div>
          </div>
          <div class="products_show_two">
            <div class="product_video">
              <div class="chaopinMore">
                <img src="./img/pinpaimai.png" class="picOne">
              </div>
            </div>
          </div>
          <div class="half_border"></div>
          <div class="products_detail" >
            <ul>
              <li class="products_detail_item">
                <div class="advertising_wrap">
                  <div class="advertising">博纳天纯</div>
                </div>
                <img src="./img/bona.jpg" >
              </li>
              <li class="products_detail_item">
                <div class="advertising_wrap">
                  <div class="advertising">海洋之星FISH4DOGS</div>
                </div>
                <img src="./img/haiyangzhixing.jpg" >
              </li>
              <li class="products_detail_item">
                <div class="advertising_wrap">
                  <div class="advertising">冠能</div>
                </div>
                <img src="./img/guanneng.jpg" >
              </li>
              <li class="products_detail_item">
                <div class="advertising_wrap">
                  <div class="advertising">丝倍亮</div>
                </div>
                <img src="./img/sibeiliang.jpg" >
              </li>
              <li class="products_detail_item">
                <div class="advertising_wrap">
                  <div class="advertising">荣耀马氏</div>
                </div>
                <img src="./img/mashi.jpg" >
              </li>
              <li class="products_detail_item">
                <div class="advertising_wrap">
                  <div class="advertising">优卡</div>
                </div>
                <img src="./img/youka.jpg" >
              </li>
              <li class="products_detail_item">
                <div class="advertising_wrap">
                  <div class="advertising">和世嘉</div>
                </div>
                <img src="./img/jiechi.jpg" >
              </li>
              <li class="products_detail_item">
                <div class="advertising_wrap">
                  <div class="advertising">爱普士妙鲜包</div>
                </div>
                <img src="./img/miaoxianbao.jpg" >
              </li>
              <li class="products_detail_item">
                <div class="advertising_wrap">
                  <div class="advertising">NexGard尼可信</div>
                </div>
                <img src="./img/nikexin.jpg" >
              </li>
            </ul>
          </div>
          <div class="page_line_wraper_four">
            <div class="page_line_two"></div>
          </div>
          <div class="donation_list">
            <div class="donation_pic">
              <div class="picOne" >
                <img src="./img/tagongyi.jpg"  >
              </div>
              <div class="picMore">
                <img src="./img/liaojie.png"   >
              </div>
            </div>
            <div class="donation_background">
              <img src="./img/gongyibeijing.jpg" >
              <p class="donationP1">截止今日，TA公益已联合E宠商城和</p>
              <p class="donationP2">累积捐赠857,272.44</p>
              <p class="donationP3">已合作7家公益组织，举办参与2场公益活动,助养</p>
              <p class="donationP4">34位领养人</p>
            </div>
            <div class="donation_detail">
              <div class="donation_title">
                <img src="./img/zanzhushang.png"  >
              </div>
              <div class="donation_detail_wrap" ref="donationTitle">
                <ul class="donation_detail_total">
                  <li class="donation_detail_item">
                    <div class="donation_image">
                      <img src="./img/yibeizi.jpg" >
                    </div>
                    <div class="donation_amount">
                      <span >已捐助¥186675.85</span>
                    </div>
                  </li>
                  <li class="donation_detail_item">
                    <div class="donation_image">
                      <img src="./img/chongE.png" >
                    </div>
                    <div class="donation_amount">
                      <span >已捐助¥167470.93</span>
                    </div>
                  </li>
                  <li class="donation_detail_item">
                    <div class="donation_image">
                      <img src="./img/haiyang.jpg" >
                    </div>
                    <div class="donation_amount">
                      <span >已捐助¥68115.64</span>
                    </div>
                  </li>
                  <li class="donation_detail_item">
                    <div class="donation_image">
                      <img src="./img/mag.jpg" >
                    </div>
                    <div class="donation_amount">
                      <span >已捐助¥60853.06</span>
                    </div>
                  </li>
                  <li class="donation_detail_item">
                    <div class="donation_image">
                      <img src="./img/leimigao.jpg" >
                    </div>
                    <div class="donation_amount">
                      <span >已捐助¥167470.93</span>
                    </div>
                  </li>
                  <li class="donation_detail_item">
                    <div class="donation_image">
                      <img src="./img/annamate.jpg" >
                    </div>
                    <div class="donation_amount">
                      <span >已捐助¥68115.64</span>
                    </div>
                  </li>
                  <li class="donation_detail_item">
                    <div class="donation_image">
                      <img src="./img/gudeng.jpg" >
                    </div>
                    <div class="donation_amount">
                      <span >已捐助¥60853.06</span>
                    </div>
                  </li>
                  <li class="donation_detail_item">
                    <div class="donation_image">
                      <img src="./img/lusi.jpg" >
                    </div>
                    <div class="donation_amount">
                      <span >已捐助¥52502.36</span>
                    </div>

                  </li>
                  <li class="donation_detail_item">
                    <div class="donation_image">
                      <img src="./img/heshijia.jpg" >
                    </div>
                    <div class="donation_amount">
                      <span >已捐助¥40371.84</span>
                    </div>
                  </li>
                  <li class="donation_detail_item">
                    <div class="donation_image">
                      <img src="./img/weisikang.jpg" >
                    </div>
                    <div class="donation_amount">
                      <span >已捐助¥40371.84</span>
                    </div>
                  </li>
                  <li class="donation_detail_item">
                    <div class="donation_image">
                      <img src="./img/plus.jpg" >
                    </div>
                    <div class="donation_amount">
                      <span >已捐助¥35332.55</span>
                    </div>
                  </li>
                  <li class="donation_detail_item">
                    <div class="donation_image">
                      <img src="./img/xinkang.jpg" >
                    </div>
                    <div class="donation_amount">
                      <span >已捐助¥33901.21</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="evaluate">
            <div class="picOne" >
              <img src="./img/koubei.png"  >
            </div>
            <div class="evaluate_wrap">
              <ul class="evaluate_wrap_small">
                <li class="evaluate_wrap_item">
                  <div class="evaluate_pic">
                    <img src="./img/xiaomao.jpg" >
                  </div>
                  <div class="evaluate_discribe">
                    <span class="evaluate_discribe_one">红*****ω</span>
                    <span class="evaluate_discribe_two">中华田园猫</span>
                  </div>
                  <div class="evaluate_long">
                    <p>
                      包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                    </p>
                  </div>
                </li>
                <li class="evaluate_wrap_item">
                  <div class="evaluate_pic">
                    <img src="./img/ermao.jpg" >
                  </div>
                  <div class="evaluate_discribe">
                    <span class="evaluate_discribe_one">自***人</span>
                    <span class="evaluate_discribe_two">萨摩耶</span>
                  </div>
                  <div class="evaluate_long">
                    <p>
                      物流挺给力，到货很快。包装也十分的棒，外面还有塑料薄膜包裹，非常好，一看就让人觉得质量绝对一级棒。客服真心不错，很耐心的给你讲解！就冲这个大大的好评，以后狗狗的东西直接来这里！ 再次祝e宠生意兴隆。
                    </p>
                  </div>
                </li>
                <li class="evaluate_wrap_item">
                  <div class="evaluate_pic">
                    <img src="./img/ergou.jpg" >
                  </div>
                  <div class="evaluate_discribe">
                    <span class="evaluate_discribe_one">殳**白</span>
                    <span class="evaluate_discribe_two">哈士奇</span>
                  </div>
                  <div class="evaluate_long">
                    <p>
                      不知不觉中这已经是第16次在E宠购物了，其实我家二妹才来了三个多月。二妹吃的，用的，玩的，包括生病的药全部是在E宠买的，看中的就是正品保障和一流的物流。印象最深的是618活动的时候因为订单量太大，有一个单子没有按时送到，我联系了客服，客服保证第二天送到，结果第二天晚上十一点多的时候E宠的工作人员开着自家的小轿车把货送到了我家楼下，兑现了承诺。希望E宠以后越来越好，继续做广大铲屎官的坚实后盾。
                    </p>
                  </div>
                </li>
                <li class="evaluate_wrap_item">
                  <div class="evaluate_pic">
                    <img src="./img/choumao.jpg" >
                  </div>
                  <div class="evaluate_discribe">
                    <span class="evaluate_discribe_one">奥****家</span>
                    <span class="evaluate_discribe_two">中华田园猫</span>
                  </div>
                  <div class="evaluate_long">
                    <p>
                      客服和物流都是特别的满意，以前曾经在天猫国际买，但是物流速度太慢了。e宠的速度快不说，东西绝对是真货，最重要的是，每次的减震避震都做的特别完美。开了水族站之后，以后家里宠物的东西全都e宠买了。
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="page_line_wraper_two">
            <div class="page_line_two"></div>
          </div>
          <div class="footer">
            <div class="footer_first">
              <span class="active">触屏版</span>
              <span>手机客户端</span>
              <span>关于我们</span>
              <span>联系我们</span>
            </div>
            <div class="footer_second">
              © wap.epet.com 版权：重庆易宠科技有限公司
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="shadeShow" class="shade">
      <div class="shadeTitle" @touchstart="mainShowChange(true)">
        <span class="icon-undo2"></span>
        <div>选择收货地区</div>
        <span class="icon-qrcode"></span>
      </div>
      <div class="dogChange">
        <button @touchstart.prevent="dogChange">猫猫站</button>
        <button @touchstart.prevent="dogChange">狗狗站</button>
        <button @touchstart.prevent="dogChange">水族站</button>
      </div>
      <div class="placeNow">
        当前默认地址:  {{placeNow}}
      </div>
      <div class="choosePlace">
        <ul>
          <li @touchstart="placeChange(place.level,place.sheng,place.di,$event)" :key="index" class="choosePlaceItem" v-for="(place,index) in placeList">{{place.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from "vue"
  import {Search,Swipe, SwipeItem} from "mint-ui"
  import BScroll from 'better-scroll'
  import axios from "axios"
  Vue.component(Search.name, Search,Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
  export default {
    data(){
      return {
        searchName:"",
        ceshi:50,
        mainShow:true,
        shadeShow:false,
        dog:"狗狗",
        place:"重庆",
        placeNow:"",
        placeList:[],
        number:0
      }
    },
    mounted(){
      const ulScroll=this.$refs.headerScroll
      const Firstmain=this.$refs.Firstmain
      const foodDetails=this.$refs.foodDetails
      const donationTitle=this.$refs.donationTitle
      let ulScroller=new BScroll(ulScroll,{
        click:true,
        scrollX: true,
      })
     this.$nextTick(()=>{
        console.log("111")
       let width=document.documentElement.clientWidth
       ulScroller.refresh()

       let Firstmainer=new BScroll(Firstmain,{
         click:true,
         scrollY: true,
       })
       let foodDetailser =new BScroll(foodDetails,{
         click:true,
         scrollX: true,
       })
       let donationTitler=new BScroll(donationTitle,{
         click:true,
         scrollX: true,
       })
     })

      //给所有的li绑定一个鼠标悬浮事件
      const headerNavbar=document.getElementById('headerNavbar')
      const headerNavbarChilds=headerNavbar.children
      ;[].slice.call(headerNavbarChilds).forEach(function(item){
        item.addEventListener("mouseover",function(){
          console.log("111")
        })

      })
    },
    methods:{
      mainShowChange(boolean){
        this.mainShow=boolean
        this.shadeShow=!boolean
        if(!boolean){
          console.log("已经进到发送的请求中")
          //表示显示遮罩层，先去发送请求，将第一级城市进行显示
          let level=1
          let url=`/api/wheel?level=${level}`
          axios.get(url)
            .then(response=>{
             let result=response.data
              //获取得到的result为一个json数组
              //对原数组进行处理
              this.placeList=result
            })
        }
      },
      dogChange(event){
        //当点击这个时候，进行切换，向后台发送请求，请求到对应狗狗站，猫猫站的相关数据，在这没有详做
        this.dog=event.target.textContent
        //同时切换状态,显示主页面
        this.mainShow=true
        this.shadeShow=false

      },
      placeChange(level,sheng,di,event){
        //这个可能会有两种情况，第一种是进入第二级城市，第二种是进入第三级城市

        //判断一下是
        if(this.number===3){
          this.placeNow=""
          this.number=0
       }
        console.log("已经进入第二级请求")
        console.log(level)
        //当当前level为1时，表示需要去找对应的市
        console.log(level,sheng,di)//1 "13" "00"
        if(level==1){
          let newLevel=level+1
          let url=`/api/wheel_sheng?sheng=${sheng}&level=${newLevel}`
          axios.get(url)
            .then(response=>{
              let result=response.data
              //获取得到的result为一个json数组
              //对原数组进行处理
              this.place=event.target.textContent
              this.placeList=result
              this.placeNow+=event.target.textContent
              this.number=this.number+1
            })
          //当level为2时，表示需要找对应的县
        }else if(level==2){
          console.log(level,sheng,di)
          let newLevel=level+1
          let url=`/api/wheel_di?di=${di}&level=${newLevel}&sheng=${sheng}`
          axios.get(url)
            .then(response=>{
              let result=response.data
              //获取得到的result为一个json数组
              //对原数组进行处理
              this.placeList=result
              this.placeNow+=event.target.textContent
              this.number=this.number+1
            })
        }else{
          //这个是当级别为3时，就直接跳转主页面
          this.placeNow+=event.target.textContent
          this.number=this.number+1
          this.mainShow=true
          this.shadeShow=false
        }
      }

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  /*@import "../common/stylus/stylus.styl"*/
  .mainWraper
    width 100%
    height 100%
    #header
      position fixed
      z-index 10
      background #fff
      /*height 142px*/
      width 100%
      .header_pic
        width 100%
        img
          width 100%
          /*height 55px*/
      .header_nav
        .header_nav_wrap
          padding 12px 10px
          display flex
          .header_local
            a
              font-size 14px
              color #333
          .header_search_wrap
            margin-left 5px
            width 220px
            height 25px
            .header_search
              background rgb(233,233,233)
              border-radius 4px
              height 25px
              margin-top  -3px
      .header_bar
        height 36px
        #headerNavbar
          float  left
          white-space nowrap
          li
            display inline-block
            width 74.5px
            a
              display inline-block
              width 100%
              text-align center
              span
                line-height 36px
                font-size 15px
                color #666
              .line_active
                opacity 0
                display block
                width 120%
                height 2px
                background #666
                position absolute
                bottom 1px
    #Firstmain
      padding-top 142px
      height 100%
      .banner
        width 100%
        height 160px
        .banner_mt-swipe
          .banner_mt-swipe-item
            width 100%
            img
              width 100%



      .main_slide
        height 120px
        width 100%
        img
          width 100%
      .main_list
        width 100%
        height 200px
        .main_listOne
          display flex
          .item
            flex 1
            text-align center
            img
              width 100%


      .page_line_wraper
        width 100%
        margin-top -23px
        .page_line
          background #f3f4f5
          height 10px


      .main_seckill
        height 190px
        margin-bottom 8px
        .main_seckill_header_wraper
          padding 10px 10px 2px 10px
          .main_seckill_header
            display flex
            .last
              font-size 13px
              margin-left 6px
            .everyday
              .everyday_image
                height 24px
                margin-left -14px

            .main_seckill_more
              margin-top -12px

              img
                margin-right -120px
                width 70px



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





      .hot
        height 230px
        .hot_header
          height 40px
          width 100%
          img
            width 100%
            height 100%

        .hot_footer
          display flex
          height 200px
          font-size 0
          .hot_left
            height 200px
            width 42%
            img
              width 100%
              height 200px

          .hot_right
            height 200px
            width 58%
            font-size 0
            img
              width 100%
              height 100px



      .page_line_wraper_two
          width 100%
          margin-top 12px
          .page_line_two
            background #f3f4f5
            height 10px
      .page_line_wraper_three
        width 100%
        margin-top 45px
        .page_line_three
          background #f3f4f5
          height 10px
      .products_show
        height 268px
        .chaopinMore
          height 53px
          width 100%
          position relative
          .picOne
            height 100%
            position absolute
            left 90px
          .picMore
            width 60px
            height 47.5px
            position absolute
            right 0
        .erha
          height 210px
          width 100%
          img
            width 100%
        .product_discribe_wrap
          height 58px
          width 100%
          .product_discribe
            padding 10px
            .product_discribe_one
              font-size 12px
              color #999
              text-align center
              margin-bottom 5px
            .product_discribe_two
              font-size 12px
              color #999
              text-align center
              margin-bottom 5px
      .products_show_one
        height 218px
        .chaopinMore
          height 53px
          width 100%
          position relative
          .picOne
            height 100%
            position absolute
            left 90px
          .picMore
            width 60px
            height 47.5px
            position absolute
            right 0
        .erha
          height 160px
          width 100%
          img
            width 100%
      .products_show_two
        height 53px
        .chaopinMore
          height 53px
          width 100%
          position relative
          .picOne
            height 100%
            position absolute
            left 90px



      .half_border
        position relative
        &::before
          display block
          content ""
          position absolute
          background #999
          top 0
          height 1px
          width 100%
          transform  scaleY(0.5)
      .products_detail
        .products_detail_item
          height 200px
          .advertising_wrap
            height 44px
            .advertising
              padding 10px
              font-size 14px
              line-height 44px
          img
            width 100%
            height 155px



      .page_line_wraper_four
        width 100%
        .page_line_two
          background #f3f4f5
          height 10px


      .donation_list
        height 261px
        width 100%
        .donation_pic
          height 45px
          width 100%
          display flex
          position relative
          .picOne
            height 100%
            position absolute
            left 90px
            img
              height 45px
          .picMore
            width 60px
            height 47.5px
            position absolute
            right 42px
            top 13px
            img
              height 14px
        .donation_background
          position relative
          img
            width 100%
          .donationP1
            position absolute
            top 45px
            left 55px
            z-index 10
            color #ffffff
          .donationP2
            position absolute
            top 66px
            left 96px
            z-index 10
            color #ffffff
          .donationP3
            position absolute
            top 86px
            z-index 10
            left 20px
            color #ffffff
          .donationP4
            position absolute
            top 108px
            z-index 10
            left 130px
            color #ffffff


        .donation_detail
          width 100%
          height 76px
          overflow hidden

          .donation_title
            z-index 100
            float left
            padding-top 10px
            padding-left 10px
            padding-right 10px
            img
             height 60px
          .donation_detail_wrap
            margin-right -72px
            float left
            width 299px
            overflow hidden
          .donation_detail_total
            overflow hidden
            width 1050px
            .donation_detail_item
              float left
              padding 2px
              height 76px
              font-size 12px
              color #999
              .donation_image
                img
                  height 40px
              .donation_amount
                margin-top 15px
                white-space nowrap
                text-overflow ellipsis
                overflow hidden
                width 90px
                span
                  width 100%
                  display inline-block
                  font-size 12px
                  color #999






      .evaluate

        .picOne
          height 45px
          text-align center
          img
            height 100%
        .evaluate_wrap
          width 100%
          .evaluate_wrap_small
            padding 0 5px
            box-sizing border-box
            width 100%
            overflow hidden
            .evaluate_wrap_item
              box-sizing border-box
              width 50%
              float left
              padding  0 12px
              height 254px
              padding-top 5px
              img
                width 100%
              .evaluate_discribe
                overflow hidden
                .evaluate_discribe_one
                  float left
                  font-size 12px
                  color #333
                .evaluate_discribe_two
                  float right
                  font-size 12px
                  color #333
              .evaluate_long
                height 60px
                overflow hidden
                font-size 13px
                color #999
                line-height 1.6
                margin-top 5px





      .footer
        margin-top 15px
        margin-bottom 10px
        .footer_first
          margin-bottom 10px
          font-size 14px
          text-align center
          .active
            color red
          span
            margin-left 4px
        .footer_second
          font-size 10px
          text-align center




  .shade
    .shadeTitle
      height 40px
      box-sizing border-box
      padding 10px 10px
      text-align center
      position relative
      .icon-undo2
        position absolute
        top 10px
        left 0
      .icon-undo2:before {
        content: "\e967";
      }
      .icon-qrcode
        position absolute
        top 10px
        right 0

      .icon-qrcode:before {
        content: "\e938";
      }
    .dogChange
      height 40px
      background #F5F5F5
      width 100%
      box-sizing border-box
      padding 5px 0
      display flex
      button
        display block
        box-sizing border-box
        margin 0 2%
        flex 1
        border-radius 10px
        background #B9B9B9
        font-size 13px
        color #666
        outline none
    .placeNow
      height 40px
      box-sizing border-box
      padding 5px
      font-size 14px
      background #FFE6D9
      line-height 26px
    .choosePlace
      width 100%
      height 100%
      .choosePlaceItem
        height 20px
        width 100%
        font-size 15px
        box-sizing border-box
        padding 5px 0

</style>
