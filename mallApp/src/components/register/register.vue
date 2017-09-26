<template>
 <div>
   <!--这个表示的是登录界面，当用户没有进行登录时候，显示这个界面-->
   <div v-show="unUsername">
     <div class="register_wrap" v-show="registerWrapShow">
       <div class="register_header">
         <div class="register_discribe" >
           <span class="register" @click="registerPhone()">注册</span>
         </div>
         <div class="register_pic">
           <img src="./img/logo.png" >
         </div>
         <div class="register_link">
           <span class="register_link_one" @touchstart="publicLogin(true)">普通登录</span>
           <span class="register_link_one" @touchstart="publicLogin(false)">手机动态密码登          录</span>
         </div>
       </div>
       <div class="router_detail">
         <div v-show="login" class="router_detail_login" >
           <div class="username">
             <span class="icon-user"></span>
             <input type="text" ref="publicSubmitOne" placeholder="手机号/邮箱/用户名" class="text_input">
           </div>
           <div class="password">
             <span class="icon-lock"></span>
             <input type="password" placeholder="输入密码" ref="publicSubmitTwo" class="text_password">
           </div>
           <div class="submit_register">
             <div class="forgetPas">
               <span>忘记密码</span>
             </div>
             <input class="login_button"  type="submit" value="下一步" :class="{active:flag,unactive:!flag}"  @touchstart="publicSubmit()">
             <div class="discribe">APP专享:E宠团5折包邮,首单满99送99</div>
           </div>
         </div>
         <div v-show="phoneMessage" class="router_detail_phoneMessage">
           <div class="username">
             <span class="icon-mobile"></span>
             <input type="text" v-model="telePhone"  placeholder="手机号/邮箱/用户名"                  class="text_input">
           </div>
           <div class="password">
             <span class="icon-lock"></span>
             <input type="text" v-model="picNumber" placeholder="请输入图片内容" class="text_password"                    @change="pic_code">
             <div class="imageChange password_imgUrl" >
               <img :src="imgUrl" @touchstart="picChange" ref="image" >
             </div>
           </div>
           <div class="password_active">
             <span class="icon-lock"></span>
             <input type="password" @change="messageChange"  placeholder="动态密码" class="text_password">
             <button class="verification" @touchstart="getPassword">获取短信验证码</button>
           </div>
           <div class="submit_register">
             <div class="forgetPas">
               <span>忘记密码</span>
             </div>
             <input class="login_button" @touchstart="phoneMessageSubmit()"  type="submit" value="下一步" :class="{active:flag, unactive:!flag}"  >
             <div class="discribe">APP专享:E宠团5折包邮,首单满99送99</div>
           </div>
         </div>
       </div>
     </div>
     <div class="register_detail" v-show="registerDetailShow">
       <div class="callback" @touchstart="register_hidden" >
         <span class="icon-undo2"></span>
       </div>
       <div class="phoneRegister">
         <span class="icon-mobile"></span>
         <input type="tel" v-model="telePhone" placeholder="请输入手机号"       class="phoneRegister_import">
         <div class="submit">
           <input  type="submit" value="下一步" :class="{active:telePhone,unactive:!telePhone}" :style="{disabled:telePhone}" @click.prevent="submit">
         </div>
       </div>
     </div>
     <div class="login_detail"  v-show="loginDetailShow" >
       <div class="check One">
         <span class="icon-mobile"></span>
         <input type="tel"  :placeholder="telePhone" class="phoneRegister_import" readonly="readonly">
       </div>
       <div class="check Two">
         <span class="icon-image"></span>
         <input type="text" v-model="picNumber"  placeholder="图片验证码" class="phoneRegister_import" @change="pic_code">
         <div class="imageChange" >
           <img :src="imgUrl" @touchstart="picChange" ref="image" >
         </div>
       </div>
       <div class="check Three">
         <span class="icon-mail"></span>
         <input type="number" v-model="message"   placeholder="验证码" class="phoneRegister_import" @change="messageChange">

         <button class="verification" @touchstart="getPassword">获取短信验证码</button>

       </div>
       <div class="check Four">
         <span class="icon-user"></span>
         <input type="text"  ref="nickName" placeholder="你的昵称/用户名" class="phoneRegister_import" >
       </div>
       <div class="check Five">
         <span class="icon-lock"></span>
         <input type="password" ref="password" placeholder="请设置密码" class="phoneRegister_import" >
       </div>
       <div class="check Six">
         <span class="icon-lock"></span>
         <input type="password" ref="rePassword"  placeholder="请确认密码" class="phoneRegister_import" >
       </div>
       <div class="submit">
         <input  type="submit" value="下一步" :class="{active:flag,unactive:!flag}"  @click.prevent="totalSubmit">
       </div>
     </div>
     <div ></div>
   </div>
   <!--这个表示的是用户中心，当用户已经登录后，显示这个页面-->
   <div v-show="username" class="Usercenter">
     <div class="Usercenter_back">
       <router-link to="/main">
         <span class="icon-undo2"></span>
       </router-link>
     </div>
     <div>{{username}}</div>
     假装这是用户中心
     <button @click="removeUsername()">退出</button>
   </div>
 </div>
</template>
<script>
  import { Toast } from 'mint-ui'
  import axios from "axios"
 export default{
   data(){
     return {
       registerWrapShow:true,
       registerDetailShow:false,
       loginDetailShow:false,
       login:false,
       phoneMessage:true,
       telePhone:null,
       imgUrl:"./static/img/3RCU.png",
       picNumber:null,
       message:null,
       flag:true,
       messageRadom:null,
       username:"",
       toUrl:""
     }
   },
    computed:{
     unUsername(){
       return  !this.username
     },
    },
   watch:{
     username:(value)=>(
       this.username=value
     )
   },
   methods:{
     registerPhone(){
       //这个事件的处理逻辑就是，让注册的遮罩层进行显示，其他页面隐藏
       this.registerWrapShow=false
       this.registerDetailShow=true
     },

     register_hidden(){
       this.registerDetailShow=false
       this.registerWrapShow=true
     },

     //这个方法是用来验证手机号是否存在
     submit(){
        //创建一个正则表达式
       let phoneReg=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
       //获取输入的手机号，与正则表达式进行匹配
       let regTest=phoneReg.test(this.telePhone)
       console.log(regTest,this.telePhone)


       //在发送短信验证的时候，为什么不把随机数发送给后台

       let url=`/api/registerphone?phoneNumber=${this.telePhone}`
       if(regTest){
         //发送请求
         axios.get(url)
           .then(response=>{
             //返回值，根据返回值判断 是否存在，存在将telePhone存在session中
             let result=response.data
             console.log(result)//false
             if(result===true){
               //表示为可以注册，
               sessionStorage.setItem("phone",this.telePhone)
               this.telePhone=sessionStorage.getItem('phone')
               this.registerDetailShow=false
               this.loginDetailShow=true
             }else{
               Toast({
                 message: '该手机已存在，请直接登录',
                 position: 'middle',
                 duration: 1000
               });
             }
           })
       }else{
         Toast({
           message: '手机格式不正确',
           position: 'middle',
           duration: 1000
         });
       }
     },

     picChange(){
        const image=this.$refs.image
        const imgAtt=image.getAttribute("src")
       //发请求，获取下一张图片
       axios.get('/api/picture',{
         params:{
           pictureURL:imgAtt
         }
       })
         .then(response=>{
           let result=response.data
           console.log(result)
           this.imgUrl=result
         })
     },

     //点击此按钮进行发送短信验证
     getPassword(event){
       //当进入到该事件的时候，将该Button变为disabled的，弄一个定时器。1分钟之后可用
       this.messageRadom=Math.random()
       if(!event.target.disabled){
         //将发给后台，后台进行存储，后台将该数据在2分钟之后删除，让后台去发请求,将手机号带过去
         let url=`/api/message?phoneNumber=${this.telePhone}&random=${this.messageRadom}`
         axios.get(url)
           .then(response=>{
             let result=response.data
           })
       }
       event.target.style.disabled=true
       if(event.target.disabled){
         Toast({
           message: '1分钟只能不能重新发送',
           position: 'middle',
           duration: 1000
         });

       }
       setTimeout(()=>{
         event.target.style.disabled=false
       },1000*60)

     },

     messageChange(){
       //这个是针对短信验证的事件，进行局部更新
       //发送请求
       console.log(this.message)
       let url=`/api/messageRegister?messageCode=${this.message}&phone=${this.telePhone}&random=${this.messageRadom}`
       axios.get(url)
         .then(response=>{
           let result=response.data
           console.log(result===false,result)
           if(result===false){
             Toast({
               message: '短信验证码不正确，请重新输入',
               position: 'middle',
               duration: 1000
             })
             //就让总提交的按钮变成不可用
             this.flag=false
           }else{
             this.flag=true
           }
         })
     },

     pic_code(){
       //这个是用于图片信息进行验证
       //还需要携带当前的src属性
       console.log(this.picNumber,this.imgUrl)
       let url=`/api/imgRegister?messageCode=${this.picNumber}&imgurl=${this.imgUrl}`
       axios.get(url)
         .then(response=>{
           let result=response.data
           if(result===false){
             Toast({
               message: '图片验证码不正确',
               position: 'middle',
               duration: 1000
             })
             this.flag=false
           }else{
             this.flag=true
           }
         })
     },

     totalSubmit(){
       //这一步，将用户输入的信息进行汇总，发送请求去后台进行验证，将正确的信息返回，保存到内存中
       let nickName=this.$refs.nickName.value
       console.log(nickName)
       if(!nickName){
         Toast({
           message: '昵称不能为空',
           position: 'middle',
           duration: 1000
         })
         this.flag=false
       }
       let password=this.$refs.password.value
       console.log(password)
       if(!password){
         Toast({
           message: '密码不能为空',
           position: 'middle',
           duration: 1000
         })
         this.flag=false
       }
       let rePassword=this.$refs.rePassword.value
       console.log(rePassword)
       if(!rePassword){
         Toast({
           message: '确认密码不能为空',
           position: 'middle',
           duration: 1000
         })
         this.flag=false
       }
       let telephone=this.telePhone
       if(this.flag){
         //发送请求，
         let url=`/api/registerTotal?nickName=${nickName}&password=${password}&rePassword=${rePassword}&telephone=${telephone}`
         axios.get(url)
           .then(response=>{
             let result=response.data
             if(result===""){
               //表示成功，跳转登录页面
               this.registerWrapShow=true
               this.loginDetailShow=false
             }else{
               Toast({
                 message:result,
                 position: 'middle',
                 duration: 1000
               })
               this.flag=false
             }
           })
       }
     },

     //普通登录与手机登录切换
     publicLogin(boolean){
       this.login=boolean
       this.phoneMessage=!boolean
     },

     //通过动态输入图片验证码登录的验证
     phoneMessageSubmit(){
       //将根据标识flag来进行判断，当flag为true 的时候才可以进行登录
       if(this.flag){
         //将输入的信息更具数据类型进行判断，是用户名还是手机号
         let url=""
         let usermessage=this.telePhone
         let newUsername=parseInt(usermessage)
         typeof(newUsername)==="number"?url=`/api/login_check?telephone=${usermessage}`:url=`/api/login_check?username=${usermessage}`
         axios.get(url)
           .then(response=>{
             //当数据返回，如果存在，就进行跳转用户中心
               let result=response.data
               console.log(result)
               if(result){
                 //跳转用户中心，直接修改username的值

                 sessionStorage.setItem("username",usermessage)
                 this.username=sessionStorage.getItem("username")
               }else{
                 Toast({
                   message: '用户名错误，请重新输入',
                   position: 'middle',
                   duration: 2000
                 })
               }
           })

       }
     },

     //通过普通登录用户名密码登录的,进行验证
     publicSubmit(){
       //获取用户输入的用户名和密码，进行验证
       let username=this.$refs.publicSubmitOne.value
       console.log(username)//15910285967
       let newUsername=parseInt(username)
       let password=this.$refs.publicSubmitTwo.value
       let url=""
       console.log(typeof(newUsername))//从输入框中进行获取值时，得到的都是string
       typeof(newUsername)==="number"?url=`/api/public_check?telephone=${username}&password=${password}`:url=`/api/public_check?username=${username}&password=${password}`
       axios.get(url)
         .then(response=>{
           let result=response.data
           //根据相应判断用户是否存在
           console.log(result)
           if(typeof(result)==="boolean"){
             //表示登录成功
             console.log(username)
             sessionStorage.setItem("username",username)
             this.username=sessionStorage.getItem("username")
           }else {
             Toast({
               message: result,
               position: 'middle',
               duration: 2000
             })
           }
         })
     },

     //该事件用在usercenter中，登出操作
     removeUsername(){
       sessionStorage.removeItem("username")
       this.username=""
     }
   }
 }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .Usercenter
    .Usercenter_back
      width 100%
      .icon-undo2:before {
        content: "\e967";
      }
  .register_wrap
    width 100%
    .register_header
      background-image url("./img/background.png")
      background-size  100%
      .register_discribe
        height 50px
        font-size 18px
        color write
        box-sizing border-box
        padding 14px 10px
        .register
          float right
          color #ffffff

      .register_pic
        margin-top 10px
        margin-bottom 20px
        text-align center
        width 100%
        img
          width 23%
      .register_link
        width 100%
        display flex
        background rgba(255,255,255,0.3)
        .register_link_one
          display inline-block
          line-height 44px
          height 44px
          flex 1
          text-align center
          color #ffffff
    .router_detail
      width 100%
      /*height 97px*/
      box-sizing border-box
      padding 20px
      .submit_register
        height 80px
        width 100%
        box-sizing border-box
        padding 0 10px
        .discribe
          text-align center
          margin-top 10px
          font-size 12px
        .login_button
          width 90%
          margin 0 5%
          height 25px
          border-radius  10px
          margin-top 10px
          background #2EC975
        .forgetPas
          height 20px
          width 100%
          span
            float right
            font-size 15px
      .password_imgUrl
          height 30px
          width 20%
          float right
          margin-top 1px
          margin-right 15px
        img
          width 100%

      .username
        position relative
        margin-bottom 30px
        color #666
      &:after
        display block
        height 1px
        width 100%
        content ""
        background #999
        transform scaleY(0.5)
        position absolute
        bottom -14px
      .text_input
        outline: medium
        color:#999;
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
        .pic_change
          width 30%
          display inline-block
          float right
          background red
          height 30px
          margin-top -8px

      .password_active
        position relative
        margin-bottom 30px
        color #666
        border none
        .icon-lock
          &:before
            content "\e98f"
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



  .register_detail
    box-sizing border-box
    padding 10px
    .callback
      height 30px
      width 10%
      .icon-undo2:before {
        content: "\e967";
      }
    .phoneRegister
      height 30px
      width 100%
      .phoneRegister_import
        outline none

      .submit
        width 80%
        height 30px

        text-align center
        margin   20px auto 0
        line-height 30px
        .active
          background red
          border-radius 10px
        .unactive
          background #D7D7D7
          border-radius 10px
        input
          color #fff
          width 100%
          outline none
      .icon-mobile
        &:before
          content "\e958"



  .login_detail
    width 100%
    box-sizing border-box
    padding-left 10px
    .submit
      width 80%
      height 30px
      text-align center
      margin   50px auto 0
      line-height 30px
      .active
        background red
        border-radius 10px
      .unactive
        background #D7D7D7
        border-radius 10px
      input
        color #fff
        width 100%
        outline none

    .check
      position relative
      width 100%
      height 60px
      box-sizing border-box
      padding 20px 0
      line-height 60px
      .phoneRegister_import
        outline none
      &:after
        display block
        height 1px
        width 100%
        content ""
        background #999
        transform scaleY(0.5)
        position absolute
        bottom -14px


    .One
      .icon-mobile:before {
        content: "\e958";
      }
    .Two
      .imageChange
        height 30px
        width 20%
        float right

        margin-top 5px
        margin-right 15px
        img
          width 100%

      .icon-image:before {
        content: "\e90d";
      }
    .Three

      .icon-mail:before {
        content: "\ea83";
      }
      .verification
        height 30px
        width 35%
        border-radius 20px
        text-align center
        line-height 25px
        float right
        background orangered
        margin-top 10px
        margin-right 15px
        font-size 14px

    .Four
      .icon-user:before {
        content: "\e971";
      }
    .Five
      .icon-lock:before {
        content: "\e98f";
      }
    .Six
      .icon-lock:before {
        content: "\e98f";
      }
</style>
