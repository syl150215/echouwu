/**
 * 这个是入口文件
 */
import Vue from "vue"
import app from "./components/app.vue"
import router from "./router"
import MintUI from 'mint-ui'
Vue.use(MintUI)
new Vue ({
  el:"#app",
  render:h=>h(app),
  router
})
