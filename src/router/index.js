import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//路由规则对象
//路由模块化
//引入组件
import notfound from '@/views/error/notfound.vue'
//引入路由规则的各个模块
import homeRoute from './modules/home'
import userSpace from './modules/user-space'
import fenleiRoute from './modules/fenlei'
import cookbookRoute from './modules/cookbook'
import caipuRoute from './modules/caipu'
import store from '@/store/index.js'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  ...homeRoute,
  ...fenleiRoute,
  ...caipuRoute,
  ...cookbookRoute,
  ...userSpace,
  {
    path: '*',
    component: notfound
  }
]

let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (path) {
  originPush.call(this, path).catch(err => err)
}
import { Toast } from 'vant'
Vue.use(Toast)
const router = new VueRouter({
  //更改模式 hash history
  mode: 'history',
  //基于
  base: process.env.BASE_URL,
  //路由规则 数组 对象
  routes
})
var loginStatus = false;
router.beforeEach((to, from, next) => {
  let toPath = to.path
  console.log(to);
  if (toPath.indexOf('user') != -1 || toPath.indexOf('star') != -1) {
    console.log(store.state._token);
    if (store.state._token) {
      // if (!store.state.userInfo.mobile) {
      //   Toast('令牌过期 重新登录')
      //   router.replace({
      //     path: '/login', query: {
      //       shouldGo: toPath
      //     }
      //   })
      // } else {
      //   next()
      // }
      next()
    } else {
      router.replace({
        path: '/login', query: {
          shouldGo: toPath
        }
      })
    }
  } else {
    next()
  }
})
export default router
