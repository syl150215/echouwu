require('./check-versions')()

let config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

let opn = require('opn')
let path = require('path')
let express = require('express')
let webpack = require('webpack')
let proxyMiddleware = require('http-proxy-middleware')
let webpackConfig = require('./webpack.dev.conf')



// default port where dev server listens for incoming traffic
let port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
let autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
let proxyTable = config.dev.proxyTable

let app = express()
let compiler = webpack(webpackConfig)



//发送短信验证，需要引入的东西
const md5 = require('blueimp-md5')
const moment = require('moment')
const Base64 = require('js-base64').Base64;
const request = require('request');

//生成6位的随机数
function randomCode(length) {
  const chars = ['0','1','2','3','4','5','6','7','8','9'];
  let result = ""; //统一改名: alt + shift + R
  for(let i = 0; i < length ; i ++) {
    let index = Math.ceil(Math.random()*9);
    result += chars[index];
  }
  console.log('验证码: ', result)
  return result;
}


//引入mongoose 建立数据库
let mongoose=require("mongoose")
//第二步，让mongoose与数据库进行连接，创建数据库
mongoose.connect("mongodb://127.0.0.1/register",{useMongoClient: true})

mongoose.connection.once("open",function(){
     console.log("数据库已经连接")
})
//创建一个schma 对象
let Schema=mongoose.Schema
//根据schma对象，创建对应的实例，比如注册 我需要对用户名，手机号在数据库中进行核实
let registerSchema=new Schema({
  username:String,
  phoneNumber:Number,
  password:Number
})

//第三步，根据schema对象创建对应的model对象，model对象相当于数据库中的集合，通过Model来操作文档
let registerModel=mongoose.model("registerModel",registerSchema)

//在创建一个schma 对象，用来存储手机号和验证码的
let messageSchema=new Schema({
  phone:String,
  messageCode:Number,
  random:Number,
})

//在创建一个model集合，用来操作messageSchema
let messageModel=mongoose.model("messageModel",messageSchema)

//创建一个schema对象，用来保存短信验证图片，及对应的数字
let imgSchema=new Schema({
  imgTotals:String,
  codeTotal:String,
  imgIndex:Number
})
//创建一个model 用来操作对应的schema
let imgModel=mongoose.model("imgModel",imgSchema)

//创建一个集合，用来存储用户信息
let registerTotalSchema=new Schema({
  username:String,
  telePhone:Number,
  password:Number,
})

//创建一个model 用来进行操作文档
let registerTotalModel=mongoose.model("registerTotalModel",registerTotalSchema)

//在服务器端创建一个路由，用来处理对注册的操作，进行增删改查数据库
let router=express.Router()

//注册时，验证手机号是否存在
router.get("/registerphone",function(req,res){
  //对req中的请求参数进行分析
  let phoneNumber=req.query.phoneNumber
  //将获取到的phoneNumber，去数据库中进行查找，根据结果进行返回
  registerTotalModel.findOne({telePhone:phoneNumber},(error,doc)=>{
    console.log(doc)
    if(!doc){
      //表示该手机号不存在，可以注册
      res.send(true)
    }else{
      res.send(false)
    }
  })

})

//创建一个路由，可以用来进行验证码图片更换
router.get("/picture",function(req,res){

  //需要从req中获取的是src属性值
  let imgUrl=req.query.pictureURL
  //先进行判断，如果集合中没有该文档就添加
  imgModel.findOne({imgTotals:imgUrl},function(error,doc){
    if(!doc){
      imgModel.create([
        {
          "imgTotals":"./static/img/3RCU.png",
          "codeTotal":"3RCU",
          "imgIndex":1
        },
        {
          "imgTotals":"./static/img/6L6G.png",
          "codeTotal":"6L6G",
          "imgIndex":2
        },{
          "imgTotals":"./static/img/BWPX.png",
          "codeTotal":"BWPX",
          "imgIndex":3
        },{
          "imgTotals":"./static/img/CCBW.png",
          "codeTotal":"CCBW",
          "imgIndex":4
        },{
          "imgTotals":"./static/img/E668.png",
          "codeTotal":"E668",
          "imgIndex":5
        },{
          "imgTotals":"./static/img/ESCE.png",
          "codeTotal":"ESCE",
          "imgIndex":6
        },{
          "imgTotals":"./static/img/N7BP.png",
          "codeTotal":"N78P",
          "imgIndex":7
        },{
          "imgTotals":"./static/img/R9S7.png",
          "codeTotal":"R9S7",
          "imgIndex":8
        },{
          "imgTotals":"./static/img/TB7A.png",
          "codeTotal":"TB7A",
          "imgIndex":9
        },{
          "imgTotals":"./static/img/YEDN.png",
          "codeTotal":"YEDN",
          "imgIndex":10
        }
      ],function(error){
        console.log(error)
      })

    }
  })

  //当需要更改读片的时候，需要给客户端返回的是src属性
  //从数据中进行获取当前图片的index
  let nextImg=0
  setTimeout(function(){
    imgModel.findOne({imgTotals:imgUrl},function(error,doc){
      console.log(doc)
      let imgindexs=doc.imgIndex
      if(imgindexs===10){
        imgindexs=1
        nextImg=imgindexs
      }else{
         nextImg=imgindexs+1
        console.log(nextImg)
      }
      console.log(nextImg)
      imgModel.findOne({imgIndex:nextImg},function(error,doc){
        console.log(doc)
        let newUrl=doc.imgTotals
        res.send(newUrl)
      })
    })
  },100)


})

//创建一个路由专门用于给手机发送短信验证码的
router.get("/message",function(req,res){
  let phoneNumber=req.query.phoneNumber
  let random=req.query.random
  console.log(phoneNumber)

  //给容联云通讯发送请求，向手机发送短信验证
  function sendCode(phone, code, callback) {
    let ACCOUNT_SID = '8a216da85ea31fdd015eb8dc797306aa';
    let AUTH_TOKEN = 'faf353a8a67241e5b0d2c9446c34a075';
    let Rest_URL = 'https://app.cloopen.com:8883';
    let AppID = '8a216da85ea31fdd015eb8dc7ad106b1';
    let sigParameter = '';
    let time = moment().format('YYYYMMDDHHmmss');
    sigParameter = md5(ACCOUNT_SID+AUTH_TOKEN+time);
    let url = Rest_URL+'/2013-12-26/Accounts/'+ACCOUNT_SID+'/SMS/TemplateSMS?sig='+sigParameter;

    let body = {
      to : phone,
      appId : AppID,
      templateId : '1',
      "datas":[code,"1"]
    }
    let authorization = ACCOUNT_SID + ':' + time;
    authorization = Base64.encode(authorization);
    let headers = {
      'Accept' :'application/json',
      'Content-Type' :'application/json;charset=utf-8',
      'Content-Length': JSON.stringify(body).length+'',
      'Authorization' : authorization
    }
    request({
      method : 'POST',
      url : url,
      headers : headers,
      body : body,
      json : true
    }, function (error, response, body) {
      console.log(error, response, body);
      callback(body.statusCode==='000000');
      //callback(true);
    });
  }
  exports.sendCode = sendCode;
  const code = randomCode(6)

  sendCode(phoneNumber, code, function (success) {
    console.log(success);
    //当发送请求成功后，将该code与手机号存储在数据库中
    messageModel.create({
      phone:phoneNumber,
      messageCode:code,
      random:random
    },function(error){
      console.log(error)
    })
  })

  res.send("请求发送成功")
})

//用来进行验证用户输入的图片验证码是否正确的
router.get("/imgRegister",function(req,res){
    let messageCode=req.query.messageCode
    let imgurl=req.query.imgurl
  imgModel.findOne({imgTotals:imgurl},function(error,doc){
      if(doc.codeTotal===messageCode){
        res.send(true)
      }else{
        res.send(false)
      }
  })
})

//用来验证用户，短信验证码是否正确的
router.get("/messageRegister",function(req,res){

  let messageCode=req.query.messageCode
  let phone=req.query.phone
  let random=req.query.random
  console.log(random)
  console.log(messageCode)
  messageModel.findOne({random:random},function(error,doc){
    console.log(doc.messageCode)
    console.log(doc.messageCode==messageCode)
    if(doc){
      if(doc.messageCode==messageCode){
        res.send(true)
      }else{
        res.send(false)
      }
    }

  })
})

//用来验证用户的注册信息的
router.get("/registerTotal",function(req,res){
  let alertMessage=""
  let username=req.query.nickName
  let password=req.query.password
  let rePassword=req.query.rePassword
  let telephone=req.query.telephone
  if(password!==rePassword){
    alertMessage+="两次密码不正确，请重新输入"
  }
  registerTotalModel.findOne({username:username},function(error,doc){
    if(doc){
      alertMessage+="用户名已存在"
    }
  })
  if(alertMessage===""){
    registerTotalModel.create({
      username:username,
      password:password,
      telePhone:telephone,
    },function(error){console.log(error)})
  }
  res.send(alertMessage)

})

//用来验证 动态获取验证码进行用户登录信息的
router.get('/login_check',function(req,res){
  //根据用户输入的用户名密码进行验证
  let username=req.query.username
  let telePhone=req.query.telephone
  if(username){
    registerTotalModel.findOne({username:username},function(error,doc){
      //如果查到了相关信息进一步确认密码
      doc?res.send(true): res.send(false)
    })
  }else{
    registerTotalModel.findOne({telePhone:telePhone},function(error,doc){
      //如果查到了相关信息进一步确认密码
      doc?res.send(true): res.send(false)
    })
  }

})

//用来进行普通用户登录注册验证的
router.get("/public_check",function(req,res){
  console.log(req.query)//{username:15910285967,password:123123}
  let username=req.query.username//undefined
  let telephone=req.query.telephone//undefined
  let password=req.query.password//123123
  console.log(username,telephone,password)
  if(username){
    registerTotalModel.findOne({username:username},function(error,doc){
      console.log(doc)
      //如果查到了相关信息进一步确认密码
      doc?(doc.password==password?res.send(true):res.send("密码输入有误")):(res.send("用户不存在"))
    })
  }else{
    registerTotalModel.findOne({telePhone:telephone},function(error,doc){
      console.log(doc)
      //如果查到了相关信息进一步确认密码
      doc?(doc.password==password?res.send(true):res.send("密码输入有误")):(res.send("用户不存在"))
    })
  }
})

//启动路由
app.use("/api",router)













let devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

let hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
let staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

let uri = 'http://localhost:' + port

let _resolve
let readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

let server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
