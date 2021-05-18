<template>
  <div class="rec-main">
    <div class="rec-banner">
      <use-swiper :hasScrollbar="true" :key="swipertest">
        <van-swipe-item class="swiper-slide">
          <img src="../../assets/upload/desert-apple-1600x800.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item class="swiper-slide">
          <img src="../../assets/upload/barmen-coctail-1600x800.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item class="swiper-slide">
          <img src="../../assets/upload/salad-1600x800.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item class="swiper-slide">
          <img src="../../assets/upload/salad-wine-1600x800.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item class="swiper-slide">
          <img
            src="../../assets/upload/mussels-blacktable-1600x800.jpg"
            alt=""
          />
        </van-swipe-item>
        <van-swipe-item class="swiper-slide">
          <img
            src="../../assets/upload/glass-orange-coctail-1-1600x800.jpg"
            alt=""
          />
        </van-swipe-item>
        <van-swipe-item class="swiper-slide">
          <img src="../../assets/upload/pumpkin-soup-1600x800.jpg" alt="" />
        </van-swipe-item>
      </use-swiper>
    </div>
    <div class="rec-content">
      <!-- 我们这里点击刷新只让我们这个子组件刷新 -->
      <!-- 子组件强制刷欣 会执行他的created方法 就会重新请求数据 -->
      <!-- 太好了这里go（0）  只让我们的这个子组件刷欣 -->
      <ul class="rec-list">
        <!-- <li
          v-for="item in features_list"
          :cookInfo="item"
          :key="item.r.id"
        ></li> -->
        <cook-item
          v-for="item in features_list"
          :cookInfo="item"
          :key="item.r.id"
        >
        </cook-item>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import url from "@/url/url.js";
import useSwiper from "@/components/swiper/useSwiper";

import { Icon } from "vant";
import cookItem from "./cookItem";

Vue.use(SwipeItem);
Vue.use(Icon);
export default {
  data() {
    return {
      dataArr: [],
      swipertest: false,
      features_list: [],
    };
  },
  components: {
    useSwiper,
    cookItem,
  },
  methods: {
    render(start) {
      for (var i = start; i < start + 10; i++) {
        if (this.dataArr[i]) {
          this.features_list.push(this.dataArr[i]);
        }
      }
    },
  },
  created() {
    this.$store.commit("hhome/onhhomeFooterUpdata", true);
    (async () => {
      let res = await this.$http.get(url.homeUrl);

      if ((res.state = "success")) {
        if (res.result) {
          let resArr = res.result.features_list.list;
          resArr.forEach((item) => {
            if (typeof item == "object" && item && !(item instanceof Array)) {
              if (item.r) {
                this.dataArr.push(item);
              }
            }
          });
        }
        console.log(this.dataArr);
        this.render(0);
      } else {
        return false;
      }
    })();

    //   (async function () {
    //    let res = await this.$http.get(url.homeUrl)
    //       if ((res.state = "success")) {
    //         if (res.result) {
    //           let resArr = res.result.features_list.list;
    //           resArr.forEach((item) => {
    //             console.log(item);
    //             this.features_list.push(item);
    //           });
    //         }
    //       } else {
    //         return;
    //       }
    //       console.log(this.features_list);
    //   })()
    // );
  },
  mounted() {
    this.swipertest = true;
    window.addEventListener("scroll", () => {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrolltop > 5000) {
        if (this.features_list.length < this.dataArr.length) {
          this.render(10);
        } else {
          return false;
        }
      }
    });
  },
  beforeDestroy() {
    this.$store.commit("hhome/onhhomeFooterUpdata", false);
  },
};
</script>
<style lang="scss" scoped>
.swiper-slide {
  img {
    width: 100%;
  }
}
</style>