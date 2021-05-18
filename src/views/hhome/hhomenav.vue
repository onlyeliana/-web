<template>
  <div class="hhomenav">
    <van-tabs
      v-model="active"
      line-width="30"
      :fixed="true"
      placeholder
      @click="onClick"
    >
      <van-tab title="关注"></van-tab>
      <van-tab title="推荐"></van-tab>
      <van-tab title="笔记">内容 3</van-tab>
      <van-tab title="视频">内容 4</van-tab>
      <van-tab title="活动">内容 3</van-tab>
      <van-tab title="母婴">内容 4</van-tab>
      <van-tab title="安佳烘焙">内容 3</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      active: 0,
      urlRoutes: [
        "/follow",
        "/recommend",
        "/recommend",
        "/recommend",
        "/recommend",
        "/recommend",
        "/recommend",
      ],
    };
  },
  created() {
    let path = this.$route.path;
    this.urlRoutes.forEach((item, index) => {
      if (path.indexOf(item) != -1) {
        this.active = index;
        return false;
      }
    });
  },
  methods: {
    onClick(index, title) {
      console.log(index);
      console.log(this.urlRoutes[index]);
      this.$router.push("/hhome" + this.urlRoutes[index]);
      if (index >= 2) {
        this.$router.go(0);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .van-tab--active {
  color: #444;
  font-size: 18px;
  font-weight: 800;
}
::v-deep .van-tabs__line {
  background-color: #ffb31a;
}
.hhomenav {
  margin-bottom: 10px;
}
</style>