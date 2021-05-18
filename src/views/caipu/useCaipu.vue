<template>
  <div class="caipu-box-main">
    <div>
      {{ ownList.secondary_keywords }}
    </div>
    <van-tabs>
      <div v-for="item in ownList.secondary_keywords" :key="item">
        <van-tab :title="item" />
      </div>
    </van-tabs>
    <van-card>
      <template #thumb class="thumb">
        <img
          src="https://cp1.douguo.com/upload/caiku/8/8/0/260x220_88abe3bcf16331749877132629ad3970.jpg"
          width="150"
          height="118"
        />
      </template>
      <template #title>
        <div class="title">可乐鸡翅</div>
        <!-- <div class="title">{{getId()}}</div> -->
      </template>
      <template #desc>
        <div class="desc">4.7分 * 6354人学做</div>
      </template>
      <template #tags>
        <div class="tags">荣誉殿堂</div>
        <div class="headimg">
          <img
            src="https://i1.douguo.com/upload/photo/b/d/7/70_u02369349224948172948.jpeg"
            alt
          />
        </div>
        <div class="author">乐得厨房</div>
      </template>
    </van-card>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Tab, Tabs } from "vant";
import { Card } from "vant";

Vue.use(Card);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);

export default {
  data() {
    return {
      active: 0,
      ownList: [],
      ownArr: [],
    };
  },
  props: {
    currentList: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
  watch: {
    currentList: {
      deep: true,
      handler(newvalue) {
        this.ownList = this.currentList;
        this.ownArr = this.currentList.list;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.van-card__thumb {
  width: 140px;
  height: 118px;
  margin-right: 20px;
}
.title {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
}
.tags {
  border-radius: 8px 8px;
  width: 60px;
  height: 20px;
  line-height: 20px;
  background-color: #000;
  text-align: center;
  color: orange;
}
.desc {
  /* font-weight: bold; */
  margin-bottom: 10px;
}
.headimg {
  margin-top: 10px;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  float: left;
  /* overflow: hidden; */
  text-align: center;
}
.headimg img {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: inline-block;
  margin-right: 10px;
}
.author {
  color: grey;
  margin-top: 15px;
  float: left;
}
</style>