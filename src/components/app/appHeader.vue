<template>
  <div>
    <van-nav-bar
      right-text="按钮"
      @click-right="onClickRight"
      :fixed="true"
      :placeholder="true"
      @click-left="onClickLeft"
    >
      <template slot="left">
        <van-icon name="arrow-left" color="#333" size="20" />
      </template>
      <template slot="title">
        <van-search
          v-model="searchKey"
          placeholder="搜索菜谱、食谱、食材"
          color="#333"
          @focus="isSou = true"
          @blur="isSou = false"
          @search="onSearch"
          show-action
        >
          <template #action>
            <div @click="onSearch">搜索</div>
          </template>
        </van-search>
        <van-icon
          name="friends-o"
          color="#333"
          size="20"
          class="toLogin"
          @click="toLogin"
        />
      </template>
      <template slot="right">
        <van-icon name="coupon-o" color="#333" size="20" />
      </template>
    </van-nav-bar>
    <div class="sou-main" v-if="isSou">
      <img src="../../assets/upload/sousou.png" alt="" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Toast, Search, Icon, Tab, Tabs } from "vant";

Vue.use(NavBar);

Vue.use(Search);
Vue.use(Icon);
export default {
  data() {
    return {
      searchKey: "",
      isSou: false,
    };
  },
  methods: {
    onSearch() {
      console.log(this.searchKey);
      if (this.searchKey != "") {
        let url = "/caipu?key=" + this.searchKey;
        this.$router.push(url);
        this.$router.go(0);
      }
    },
    onClickRight() {
      Toast("分类");
      this.$router.push("/fenlei");
    },
    onClickLeft() {
      // this.$router.back();

      this.$router.push("/home");
      this.$router.go(0);
      //刷新当前路由
      //组件内部强制刷新
    },
    toLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .van-search__action {
  padding: 0px;
}
::v-deep .van-cell__value {
  width: 170px;
}
.sou-main {
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: #fff;
  img {
    width: 60%;
    margin: 20px;
  }
}
.toLogin {
  position: absolute;
  top: 50%;
  margin-top: -10px;
  right: 50px;
  z-index: 10;
}
::v-deep .van-search {
  padding: 0px;
}
::v-deep .van-nav-bar__title {
  max-width: 80%;
  margin: 0px 0px 0px 30px;
}
::v-deep .van-nav-bar .van-icon {
  color: #666;
}
::v-deep .van-field__control {
  width: 200px;
}
::v-deep .van-nav-bar__left {
  padding-left: 10px;
}
</style>