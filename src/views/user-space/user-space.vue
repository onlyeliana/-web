<template>
  <div>
    <div class="my">
      <div class="my-logo">
        <img :src="$store.state.userInfo.headIcon" alt="" width="40" />
      </div>
      <div class="my-yu">
        <h2>{{ $store.state.userInfo.username }}</h2>
        <div @click="setting">补全资料+500经验值</div>
      </div>
    </div>
    <div class="content">
      <van-grid :column-num="5">
        <van-grid-item text="0" />
        <van-grid-item text="0" />
        <van-grid-item text="0" />
        <van-grid-item text="0" />
        <van-grid-item text="20" />
        <van-grid-item text="关注" />
        <van-grid-item text="粉丝" />
        <van-grid-item text="被收藏" />
        <van-grid-item text="被学做" />
        <van-grid-item text="经验值" />
      </van-grid>
    </div>
    <div class="context">
      <div>
        <div class="iconfont icon-food"></div>
        <div>膳食管理</div>
      </div>
      <div>
        <div class="iconfont icon-hongbao"></div>
        <div>签到领钱</div>
      </div>
      <div>
        <div class="iconfont icon-dingdan"></div>
        <div>订单</div>
      </div>
      <div>
        <div class="iconfont icon-book"></div>
        <div>电子书</div>
      </div>
      <div>
        <div class="iconfont icon-zuijinliulan"></div>
        <div>最近浏览</div>
      </div>
      <div>
        <div class="iconfont icon-chufang"></div>
        <div>厨具管理</div>
      </div>
      <div>
        <div class="iconfont icon-qianbao"></div>
        <div>钱包</div>
      </div>
      <div>
        <div class="iconfont icon-youhuiquan"></div>
        <div>优惠券</div>
      </div>
      <div>
        <div class="iconfont icon-icon_caigou"></div>
        <div>采购清单</div>
      </div>
      <div>
        <div class="iconfont icon-caogao"></div>
        <div>草稿箱</div>
      </div>
    </div>
    <div class="footer">
      <van-tabs @click="onClick" color="orange">
        <van-tab title="菜谱">
          <h3 class="caipuneirong">要发布点内容才配的上我吃货的名声</h3>
        </van-tab>
        <van-tab title="笔记" class="">
          <van-cell :value="date" @click="show = true" />
          <van-calendar v-model="show" @confirm="onConfirm" />
          <van-calendar
            title="日历"
            :poppable="false"
            :show-confirm="false"
            color="orange"
            :style="{ height: '500px' }"
          />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import {
  NavBar,
  Icon,
  Card,
  Grid,
  GridItem,
  Tab,
  Tabs,
  Calendar,
  Cell,
} from "vant";
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Card);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Calendar);
Vue.use(Cell);
export default {
  data() {
    return {
      username: "我是大花猫",
      headIcon: "",
      dengji: 10,
      date: "",
      show: false,
    };
  },
  methods: {
    onClick(name, title) {
      console.log(name, title);
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    go() {
      this.$router.push("she");
    },
    to() {
      this.$router.push("xi");
    },
    setting() {
      this.$router.push("/userSetting");
    },
  },
};
</script>
<style  lang="scss">
@import "http://at.alicdn.com/t/font_2476905_l308x5ne1c.css";
* {
  margin: 0;
  padding: 0;
}
$color: rgba(0, 0, 0, 0.7);
.xiaoxi {
  margin-right: 20px;
}
.my {
  margin-top: 30px;
  width: 100%;
  height: 90px;
  > .my-logo {
    img {
      width: 100%;
      height: 100%;
    }
    width: 80px;
    height: 80px;
    line-height: 100px;
    text-align: center;
    border-radius: 50%;
    overflow: hidden;
    margin: 0px 30px;
    float: left;
  }
  > .my-yu {
    float: left;
    > h2 {
      color: $color;
    }
    > div {
      width: 200px;
      height: 30px;
      color: $color;
      text-align: center;
      line-height: 30px;
      background-color: orange;
      border-radius: 60px;
      margin-top: 10px;
    }
  }
  .van-grid-item__content::after {
    border: 0;
  }
}
.context {
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  > div {
    width: 20%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    > .iconfont {
      font-size: 23px;
      margin: 5px 0;
    }
  }
}
// padding: 10px 0px;
.caipuneirong {
  padding-top: 10px;
  font-weight: 400;
  font-size: 16px;
}

.footer {
  width: 90%;
  margin: 0 auto;
  > h2 {
    margin-top: 10px;
  }
}
</style>