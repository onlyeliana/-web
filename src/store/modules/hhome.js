export default {
  //开启命名空间
  namespaced: true,
  state: {
    //默认为false
    hhomeFooterUpdata: false,
  },
  acitons: {},
  mutations: {
    //提供一个方法修改这个值
    onhhomeFooterUpdata(state, arg) {
      state.hhomeFooterUpdata = arg;
    }
  },
  getters: {}
}