//入口文件
//组件时由于fouter-view不断的销毁创建销毁创建
//main这个文件是每次进入 都会执行一次
//刷新执行一次 单页面复用
//index.html只创建一次 然后不断的变化router-view的显示内容

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './api/http'

Vue.config.productionTip = false
//new Vue之前可以对原型对象进行各种配置
Vue.prototype.test = 'test数据'
Vue.prototype.$http = http;


//router store 实例对象 runtimeonly  el  template  render函数和$mount（'#app'）
//这个地方将token进行一个初始会啊
//如果localstorage的token存在直接赋给vuex 这样每次都可以通过vuex中的token取请求数据啦

//vuex的token赋值

let jwt = localStorage.getItem('jwt')
  ; (async function () {
    if (jwt) {
      store.commit('setToken', jwt)
      //jwt存在同时会去把我们取来的数据进行vuex获取，全局的属性在这里获得我觉的可以
      await store.dispatch('asyncSetUser')
    }
  }())

//挂载内部执行的就是说把实例对象挂在原型对象上面 prototype Vue.prototype  
//顶层都是 
//挂在原型对象上的属性和方法 所以说实例对象
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
