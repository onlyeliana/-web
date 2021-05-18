<template>
  <div>
    <div class="notice">
      <h2>Easy Dinning 会做饭很酷 ~</h2>
      <div class="tips">
        <p>你关注的人的动态会出现在这里哦</p>
        <p>为你推荐了一些有趣的人，快关注他们吧</p>
      </div>
    </div>
    <cook-item v-for="item in features_list" :key="item.r.id" :cookInfo="item">
    </cook-item>
  </div>
</template>
<script>
import url from "@/url/url.js";
import Vue from "vue";
import { NoticeBar } from "vant";
import cookItem from "./cookItem";
Vue.use(NoticeBar);
export default {
  data() {
    return {
      features_list: [],
    };
  },
  components: {
    cookItem,
  },
  created() {
    (async () => {
      let res = await this.$http.get(url.recipeUrl, {
        params: {
          keyword: "蛋糕",
        },
      });
      console.log(res);
      if (res.state === "success") {
        console.log(res.result);
        res.result.list.forEach((item) => {
          this.features_list.push(item);
        });
      }
      // if ((res.state = "success")) {
      //   if (res.result) {
      //     let resArr = res.result.features_list.list;
      //     resArr.forEach((item) => {
      //       if (typeof item == "object" && item.r) {
      //         this.features_list.push(item);
      //       }
      //     });
      //   }
      // } else {
      //   return false;
      // }
    })();
  },
};
</script>
<style lang="scss" scoped>
.notice {
  box-sizing: border-box;
  padding: 15px;
  background: rgba(173, 236, 114, 0.1);
  h2 {
    font-size: 16px;
    line-height: 30px;
  }
  .tips {
    font-size: 14px;
    line-height: 25px;
    color: #999;
  }
}
</style>