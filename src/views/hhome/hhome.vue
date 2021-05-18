<template>
  <div class="home-main">
    <home-nav></home-nav>
    <!-- 因为这里有个问题就是我们每次刷新获取的数据都不一样不如就这样把 就是我们每个路由都是做一样的操作但是渲染的方式不一样也就是展示的不一样 htmlcss不一样 给人一种多个页面的错觉 -->
    <router-view></router-view>
    <button class="totop" @click.stop="ontotop" v-show="istotop">
      <van-icon class="iconfont icon-shousuoshangjiantou" size="25" />
    </button>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
import homeNav from "./hhomenav";
export default {
  data() {
    return {
      istotop: false,
    };
  },
  methods: {
    ontotop() {
      if (document.documentElement.scrollTop) {
        document.documentElement.scrollTop = 0;
      } else {
        document.body.scrollTop = 0;
      }
    },
  },
  components: {
    homeNav,
  },
  mounted() {
    //功能1 固定定位隐藏 v-show 判断一下
    //只要sccrolltop达到一定要求v-show改变
    //出现和隐藏
    window.addEventListener("scroll", () => {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.istotop = scrolltop > 600;
    });
  },
};
</script>
<style lang="scss" scoped>
.totop {
  position: fixed;
  bottom: 100px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
</style>