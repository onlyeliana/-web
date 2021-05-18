<template>
  <div class="caipu-item" @click="toCookBook">
    <van-card>
      <template #thumb class="thumb">
        <img v-lazy="foodimg" width="150" height="118" />
      </template>
      <template #title>
        <div class="title">{{ foodname }}</div>
        <!-- <div class="title">{{getId()}}</div> -->
      </template>
      <template #desc>
        <div class="desc">
          <span>{{ cookrate }}</span
          >分 * {{ donenum }}
        </div>
      </template>
      <template #tags>
        <div class="tags-box">
          <span class="tags" v-if="honor">荣誉殿堂</span>
          <span class="owntag" v-if="hasowntag">{{ owntagcon }}</span>
        </div>
        <div class="headimg">
          <img v-lazy="userimg" alt />
        </div>
        <div class="author">{{ username }}</div>
      </template>
    </van-card>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs, Empty, NavBar, Lazyload } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);
Vue.use(Lazyload);
export default {
  data() {
    return {
      foodimg: "",
      foodname: "",
      username: "",
      userimg: "",
      cookrate: "",
      donenum: "",
      tag: [],
      foodid: 0,
      itemObj: {},
      honor: false,
      hasowntag: false,
      owntagcon: "",
    };
  },
  props: {
    ownObj: {},
  },
  methods: {
    toCookBook() {
      this.$router.push({
        path: "/cookbook",
        name: "cookbook",
        params: {
          foodid: this.foodid,
        },
      });
    },
  },
  watch: {
    ownObj: {
      deep: true,
      immediate: true,
      handler(newvalue, oldvalue) {
        newvalue = newvalue.r;
        this.itemObj = newvalue;
        this.foodimg = newvalue.img;
        this.foodname = newvalue.n;
        this.username = newvalue.a && newvalue.a.n;
        this.userimg = newvalue.a && newvalue.a.p;
        this.cookrate = newvalue.rate;
        this.donenum = newvalue.recommend_label;
        this.foodid = newvalue.id;
        this.tag = newvalue.recipe_list_tags;
      },
    },
    tag: {
      deep: true,
      immediate: true,
      handler(newvalue) {
        if (newvalue.length == 0) {
          this.hasowntag = false;
          this.honor = false;
        } else if (newvalue.length == 1) {
          this.hasowntag = true;
          this.honor = false;
        } else {
          this.honor = true;
          this.hasowntag = true;
          this.owntagcon = newvalue[1].text;
        }
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
  display: inline-block;
  background-color: #000;
  text-align: center;
  color: orange;
  margin: 0px 3px;
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