/**
 这个文件是用来注册路由的
 */
import Vue from "vue"
import VueRouter from "vue-router"
import beautify from "../components/beautify/beautify.vue"
import daily from "../components/daily/daily.vue"
import main from "../components/main/main.vue"
import medical from "../components/medical/medical.vue"
import register from "../components/register/register.vue"
import shopping from "../components/shopping/shopping.vue"
import snakes from "../components/snakes/snakes.vue"
import sort from "../components/sort/sort.vue"
import staple from "../components/staple/staple.vue"
import mainFirst from "../components/mainFirst/mainFirst.vue"
import brand from "../components/brand/brand.vue"
import sortDetail from "../components/sortDetail/sortdetail.vue"
import recommend from "../components/recommend/recommend.vue"
import book from "../components/book/book.vue"
import importer from "../components/import/import.vue"
import domestic from "../components/domestic/domestic.vue"
import recipe from "../components/recipe/recipe.vue"
import single from "../components/Single/single.vue"
import frogetPassword from "../components/frogetPassword/frogerPassword.vue"
import registerUsername from "../components/register_username/register_username.vue"
Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:"/",
      redirect:"/main"
    },
    {
      path:"/beautify",
      component:beautify
    },
    {
      path:"/daily",
      component:daily
    },
    {
      path:"/main",
      component:main,
      children:[
        {
          path:"/",
          redirect:"/mainFirst"
        },
        {
          path:"/sort",
          component:sort,
          children:[
            {
              path:"/",
              redirect:"/sortDetail"
            },
            {
              path:"/brand",
              component:brand
            },
            {
              path:"/sortDetail",
              component:sortDetail,
              children:[
                {
                  path:"/",
                  redirect:"/recommend"
                },
                {
                  path:"/recommend",
                  component:recommend
                },
                {
                  path:"/book",
                  component:book
                }
              ]

            }
          ]
        },
        {
          path:"/mainFirst",
          component:mainFirst
        }
      ]
    },
    {
      path:"/medical",
      component:medical
    },
    {
      path:"/register",
      component:register,
    },
    {
      path:"/shopping",
      component:shopping
    },
    {
      path:"/snakes",
      component:snakes
    },
    {
      path:"/staple",
      component:staple,
      children:[
        {
          path:"/",
          redirect:"/importer"
        },
        {
          path:"/importer",
          component:importer
        },
        {
          path:"/domestic",
          component:domestic
        },
        {
          path:"/recipe",
          component:recipe
        },
        {
          path:"/single",
          component:single
        }
      ]
    },
    {
      path:"/frogetPassword",
      component:frogetPassword
    },
    {
      path:"/registerUsername",
      component:registerUsername
    }
  ]
})
