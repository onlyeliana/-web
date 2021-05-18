import axios from 'axios'
//封装axios
//挂在vue 的原型对象上面
//这样所有的组件都可以直接访问不用每次都要导入axios
//同时可以对axios做一个初始化 

// axios.create({})
// axios.defaults()

import store from '../store/index'

//请求拦截
//token可以放在这里啊草
//请求拦截器 自动带着token过去 
//每次请求都会带着token只需要根据不同的请求地址和请求体数据不同进行不同的操作
axios.interceptors.request.use(config => {
  //请求配置
  //所有请求都会先拦一下奥
  if (store.state._token) {
    //如果有token就带个过去
    config.headers.authorization = store.state._token
  }
  return config
})

axios.interceptors.response.use(res => {
  return res.data || res
})

export default axios;

//相应拦截