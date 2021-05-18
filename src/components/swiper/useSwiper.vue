<template>
  <div class="swiper-container">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <slot></slot>
    </van-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
// import Swiper from "swiper";
// import "swiper/swiper-bundle.css";
export default {
  props: {
    hasScrollbar: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    console.log(this.hasScrollbar);
  },
};
</script>
<style lang="scss">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 100%;
  }
}
// @import "../../../node_modules/swiper/swiper-bundle.css";
// .swiper-container {
//   width: 100%;
//   height: 100%;
// }

// .swiper-slide {
//   text-align: center;
//   font-size: 18px;
//   background: #fff;

//   /* Center slide text vertically */
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: -webkit-flex;
//   display: flex;
//   -webkit-box-pack: center;
//   -ms-flex-pack: center;
//   -webkit-justify-content: center;
//   justify-content: center;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   -webkit-align-items: center;
//   align-items: center;
// }
</style>