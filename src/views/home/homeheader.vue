<template>
  <div class="header">
    <div class="container-fluid">
      <h3 class="logo">
        <router-link to="/hhome">
          <img src="../../assets/img/logo2.png" alt="" />
          <img
            src="../../assets/upload/Barrel-restaurant-logo-white.png"
            alt=""
            class="en-logo"
          />
        </router-link>
      </h3>
      <van-icon name="smile-o" size="29" />
    </div>
    <div class="tp-mask-wrap">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <p>
              <span class="p1">美食易</span>
              <span class="p2">让美食变得更简单</span>
              <span class="p3">EASY FOOD EASY LIFE</span>

              <router-link to="/hhome" class="tohome"
                >加入我们开启新生活</router-link
              >
            </p>
          </div>
          <div class="swiper-slide">
            <p>
              <span class="p1">海量菜谱等你来选</span>
              <span class="p3">EASY FOOD EASY LIFE</span>

              <router-link to="/fenlei" class="tohome">前往分类</router-link>
            </p>
          </div>
          <div class="swiper-slide">
            <p>
              <span class="p1">食易社区</span>
              <span class="p2">食易社区发现新朋友</span>
              <span class="p3">EASY FOOD EASY LIFE</span>

              <router-link to="/register" class="tohome">食易社区</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import "swiper/swiper-bundle.min.css";
import Vue from "vue";
//创建组件对象
import { Icon } from "vant";
import Swiper from "swiper";
//使用组件
//全局组件

Vue.use(Icon);
export default {
  //created ajax数据 闪动
  //数据 处理
  //mounted挂在
  mounted() {
    //开启严格模式
    //module模块化自动开启严格模式
    var swiper = new Swiper(".swiper-container", {
      direction: "vertical",
      followFinger: false,
      speed: 800,
      mousewheel: true,
      on: {
        init: function (swiper) {
          let slide = this.slides.eq(0);
          slide.addClass("ani-slide");
        },
        transitionStart: function () {
          for (var i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i);
            slide.removeClass("ani-slide");
          }
        },
        transitionEnd: function () {
          let slide = this.slides.eq(this.activeIndex);
          slide.addClass("ani-slide");
        },
      },
    });
  },
};
</script>
<style lang="scss" scoped>
@import "../../../node_modules/swiper/swiper.scss";
.swiper-wrapper {
  transition-delay: 0.3s;
}
.swiper-container {
  width: 100%;
  height: 731px;
  min-height: 731px;
  margin: 0px auto;
}
.swiper-slide {
  width: 100%;
  min-height: 731px;
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;

  > p {
    margin-top: -120px;
  }
}
.tohome {
  display: inline-block;
  margin-top: 100px;
  z-index: 8;
  white-space: nowrap;
  font-size: 15px;
  line-height: 15px;
  font-weight: 400;
  color: rgb(255, 255, 255);
  font-family: Cabin;
  background-color: rgb(198, 159, 124);
  border-color: rgb(0, 0, 0);
  border-radius: 30px;
  outline: none;
  box-shadow: rgb(153 153 153) 0px 0px 0px 0px;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  visibility: inherit;
  transition: none 0s ease 0s;
  text-align: inherit;
  margin: 0px;
  padding: 17px 43px;
  letter-spacing: 0px;
  min-height: 0px;
  min-width: 0px;
  max-height: none;
  max-width: none;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transform-origin: 50% 50% 0px;
  border-width: 0px;
}
.swiper-slide:nth-child(1) {
  background-image: url("../../assets/upload/barmen-coctail.jpg");
  background-size: cover;
  background-position: center;
  .tohome {
    display: inline-block;
    margin-top: 100px;
    z-index: 8;
    white-space: nowrap;
    font-size: 15px;
    line-height: 15px;
    font-weight: 400;
    color: rgb(255, 255, 255);
    font-family: Cabin;
    background-color: rgb(198, 159, 124);
    border-color: rgb(0, 0, 0);
    border-radius: 30px;
    outline: none;
    box-shadow: rgb(153 153 153) 0px 0px 0px 0px;
    box-sizing: border-box;
    cursor: pointer;
    text-decoration: none;
    visibility: inherit;
    transition: none 0s ease 0s;
    text-align: inherit;
    margin: 0px;
    padding: 17px 43px;
    letter-spacing: 0px;
    min-height: 0px;
    min-width: 0px;
    max-height: none;
    max-width: none;
    opacity: 1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform-origin: 50% 50% 0px;
    border-width: 0px;
  }
  p {
    .p2 {
      z-index: 6;
      min-width: 373px;
      max-width: 373px;
      white-space: normal;
      font-size: 20px;
      line-height: 43px;
      font-weight: 400;
      color: rgb(255, 255, 255);
      letter-spacing: 0px;
      font-family: "Sorts Mill Goudy";
      visibility: inherit;
      transition: none 0s ease 0s;
      text-align: center;
      border-width: 0px;
      margin: 0px;
      padding: 0px;
      min-height: 0px;
      max-height: none;
      opacity: 1;
    }
    .p1 {
      z-index: 6;
      min-width: 373px;
      max-width: 373px;
      white-space: normal;
      font-size: 39px;
      line-height: 43px;
      font-weight: 400;
      color: rgb(255, 255, 255);
      letter-spacing: 0px;
      font-family: "Sorts Mill Goudy";
      visibility: inherit;
      transition: none 0s ease 0s;
      text-align: center;
      border-width: 0px;
      margin: 0px;
      padding: 0px;
      min-height: 0px;
      max-height: none;
      opacity: 1;
    }
    .p3 {
      display: block;
      z-index: 6;
      min-width: 373px;
      max-width: 373px;
      white-space: normal;
      font-size: 20px;
      line-height: 43px;
      font-weight: 400;
      color: rgb(255, 255, 255);
      letter-spacing: 0px;
      font-family: "Sorts Mill Goudy";
      visibility: inherit;
      transition: none 0s ease 0s;
      text-align: center;
      border-width: 0px;
      margin: 0px;
      padding: 0px;
      min-height: 0px;
      max-height: none;
      opacity: 1;
    }
  }
}
.swiper-slide:nth-child(2) {
  background-image: url("../../assets/upload/brooke-lark.jpg");
  background-size: 100% 100%;
  .p2 {
    display: block;
    z-index: 6;
    min-width: 373px;
    max-width: 373px;
    white-space: normal;
    font-size: 20px;
    line-height: 43px;
    font-weight: 400;
    color: rgb(90, 182, 37);
    letter-spacing: 0px;
    font-family: "Sorts Mill Goudy";
    visibility: inherit;
    transition: none 0s ease 0s;
    text-align: center;
    border-width: 0px;
    margin: 0px;
    padding: 0px;
    min-height: 0px;
    max-height: none;
    opacity: 1;
  }
  .p1 {
    z-index: 6;
    min-width: 373px;
    max-width: 373px;
    white-space: normal;
    font-size: 39px;
    line-height: 43px;
    font-weight: 400;
    color: rgb(255, 255, 255);
    letter-spacing: 0px;
    font-family: "Sorts Mill Goudy";
    visibility: inherit;
    transition: none 0s ease 0s;
    text-align: center;
    border-width: 0px;
    margin: 0px;
    padding: 0px;
    min-height: 0px;
    max-height: none;
    opacity: 1;
  }
  .p3 {
    display: block;
    z-index: 6;
    min-width: 373px;
    max-width: 373px;
    white-space: normal;
    font-size: 20px;
    line-height: 43px;
    font-weight: 400;
    color: rgb(255, 255, 255);
    letter-spacing: 0px;
    font-family: "Sorts Mill Goudy";
    visibility: inherit;
    transition: none 0s ease 0s;
    text-align: center;
    border-width: 0px;
    margin: 0px;
    padding: 0px;
    min-height: 0px;
    max-height: none;
    opacity: 1;
  }
}
.swiper-slide:nth-child(3) {
  background-image: url("../../assets/upload/g3.jpg");
  background-size: cover;

  .p2 {
    display: block;
    z-index: 6;
    min-width: 373px;
    max-width: 373px;
    white-space: normal;
    font-size: 20px;
    line-height: 43px;
    font-weight: 400;
    color: rgb(220, 233, 213);
    letter-spacing: 0px;
    font-family: "Sorts Mill Goudy";
    visibility: inherit;
    transition: none 0s ease 0s;
    text-align: center;
    border-width: 0px;
    margin: 0px;
    padding: 0px;
    min-height: 0px;
    max-height: none;
    opacity: 1;
  }
  .p1 {
    z-index: 6;
    min-width: 373px;
    max-width: 373px;
    white-space: normal;
    font-size: 39px;
    line-height: 43px;
    font-weight: 400;
    color: rgb(255, 255, 255);
    letter-spacing: 0px;
    font-family: "Sorts Mill Goudy";
    visibility: inherit;
    transition: none 0s ease 0s;
    text-align: center;
    border-width: 0px;
    margin: 0px;
    padding: 0px;
    min-height: 0px;
    max-height: none;
    opacity: 1;
  }
  .p3 {
    display: block;
    z-index: 6;
    min-width: 373px;
    max-width: 373px;
    white-space: normal;
    font-size: 20px;
    line-height: 43px;
    font-weight: 400;
    color: rgb(230, 218, 218);
    letter-spacing: 0px;
    font-family: "Sorts Mill Goudy";
    visibility: inherit;
    transition: none 0s ease 0s;
    text-align: center;
    border-width: 0px;
    margin: 0px;
    padding: 0px;
    min-height: 0px;
    max-height: none;
    opacity: 1;
  }
}
.swiper-slide p {
  transform: translateX(-200px);
  opacity: 0;
  transition: all 0.4s;
}
.ani-slide p {
  transform: translateX(0);
  opacity: 1;
}
.container-fluid {
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 30px;
  font-family: "Cabin";
  font-size: 14px;
  line-height: 1.7;
  transition: top 0.3s ease;
  color: #2a2f35;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 1);
  z-index: 1000;
  .logo {
    img {
      height: 80px;
    }
    .en-logo {
      height: 100%;
    }
  }
}
.tp-mask-wrap {
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
}
</style>