<template>
  <div class="footerbars">
    <van-tabbar
      v-model="active"
      active-color="#333"
      inactive-color="#999"
      @change="onChange"
      placeholder
    >
      <van-tabbar-item
        :dot="active == 0"
        v-if="!$store.state.hhome.hhomeFooterUpdata"
      >
        <span>首页</span>
        <van-icon class="iconfont icon-shouye" slot="icon" size="23" />
      </van-tabbar-item>
      <!-- 这个地方是在我的父亲里面点击了 那么我们需要告诉儿子我点击了 如何通知 这个比较麻烦 我觉得可以用vuex 因为不是普通的父子关系 props属性告诉的是hhome 在高速recommend -->
      <van-tabbar-item
        :dot="active == 0"
        v-if="$store.state.hhome.hhomeFooterUpdata"
        @click="updataRec"
      >
        <span>刷新</span>
        <van-icon name="replay" slot="icon" size="23" />
      </van-tabbar-item>
      <van-tabbar-item :dot="active == 1">
        <span>分类</span>
        <van-icon class="iconfont icon-fenlei" slot="icon" size="23" />
      </van-tabbar-item>
      <van-tabbar-item :dot="active == 2">
        <span>收藏夹</span>
        <van-icon class="iconfont icon-shoucang1" slot="icon" size="23" />
      </van-tabbar-item>
      <van-tabbar-item :dot="active == 3">
        <span>我的</span>
        <van-icon class="iconfont icon-wode" slot="icon" size="23" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem, Icon } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);

export default {
  data() {
    return {
      //对active进行一个初始化
      active: 0,
      routeList: ["/hhome", "/fenlei", "/star", "/userSpace"],
    };
  },
  methods: {
    onChange() {
      this.$router.push(this.routeList[this.active]);
    },
    updataRec() {
      this.$router.go(0);
    },
  },
  created() {
    //this vue
    this.routeList.forEach((item, index) => {
      if (this.$route.path.indexOf(item) != -1) {
        this.active = index;
        return false;
      }
    });
  },
};
</script>
<style lang="scss" scoped>
::v-deep .van-info--dot {
  top: 5px;
  right: 5px;
  background-color: #ffb31a;
}
</style>