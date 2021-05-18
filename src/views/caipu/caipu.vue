<template>
  <div>
    <van-tabs line-width="30px">
      <van-tab title="菜谱"> </van-tab>
    </van-tabs>
    <div class="caipu-box">
      <div class="caipu-box-main">
        <van-tabs>
          <div v-for="item in currentList.secondary_keywords" :key="item">
            <van-tab :title="item" />
          </div>
        </van-tabs>
        <div class="banner">
          <img :src="getBanner" alt="" />
        </div>
        <div class="caipu-list">
          <div v-for="item in currentArr" :key="item.id">
            <caipu-item :ownObj="item"></caipu-item>
          </div>
        </div>
      </div>
    </div>
    <div class="empty-box" v-if="empty">
      <van-empty
        description="sorry 小易没有找到您要的菜谱 今日流行马卡龙 试试搜一下呀 ~~"
      />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs, Empty, NavBar } from "vant";
import caipuItem from "./caipuitem";
import url from "@/url/url";
Vue.use(Empty);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);
export default {
  data() {
    return {
      // value: "",
      // active: 0,
      currentList: {},
      currentArr: [],
      keyword: "",
      empty: false,
    };
  },
  computed: {
    getBanner() {
      try {
        if (this.currentList.mdsp.dsp.i) {
          return this.currentList.mdsp.dsp.i;
        }
      } catch (err) {
        return "https://i1.douguo.com/upload//recipe/8/7/d/874c55da8378234f64d29dc6453faced.png";
      }
    },
  },
  created() {
    //可以设置title
    // document.title= '菜谱'
    this.$store.commit("setFooter", false);
    console.log(this.$route);
    if (this.$route.query.key) {
      this.keyword = this.$route.query.key;
      this.$http
        .get(url.recipeUrl, {
          params: {
            keyword: this.keyword,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.state == "success") {
            if (res.result) {
              if (res.result.list.length === 0) {
                this.empty = true;
              } else {
                this.currentList = res.result;
                this.currentArr = res.result.list;
                console.log(this.currentArr);
              }
            }
          } else {
            this.empty = true;
          }
        })
        .catch((err) => {
          console.log(err);
          this.empty = true;
        });
    }
  },
  beforeDestroy() {
    this.$store.commit("setFooter", true);
  },
  methods: {},
  components: {
    caipuItem,
  },
};
</script>


<style scoped lang="scss" >
.banner {
  img {
    width: 100%;
  }
}

.empty-box {
  position: absolute;
  top: 120px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: #fff;
}
/*  scoped 就是进行 css 的私有化  */
/*  缺点： 就是不太好更改样式  */
</style>