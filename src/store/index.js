import Vue from 'vue'
import Vuex from 'vuex'

//store里面 

//存放全局的数据和方法
//对全局的数据操作
//actions异步请求全局的数据
//全局数据全局操作 这里定义
//注意模块化
import hhome from './modules/hhome'
import http from '../api/http'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isHeader: true,
    isFooter: true,
    _token: '',
    userInfo: {},
    starlist: [],
  },
  mutations: {
    setHeader(state, arg) {
      state.isHeader = arg
    },
    setFooter(state, arg) {
      state.isFooter = arg
    },
    setToken(state, arg) {
      state._token = arg;
      localStorage.setItem('jwt', arg)
    },
    setUser(state, arg) {
      state.userInfo = arg
      state.starlist = arg.starlist;
    }
  },
  //我觉得这个地方可以取请求一下用户的数据放在vuex里面 全局使用的数据放在vuex
  //使用action异步执行
  //对state进行处理
  //这里不需要带着token了因为每次请求都自动带着token过去
  //这里是只要有token在main里面发送请求设置全局的用户信息
  actions: {
    asyncSetUser(context) {
      http.post('http://39.106.203.89:3100/backend/get_user_info')
        .then(res => {
          if (res.error_code != 0) {
            return
          } else {
            context.commit('setUser', res.data)
          }
        })
    }
  },
  modules: {
    hhome: hhome,
  }
})
