<template>
  <li class="rec-item">
    <div class="cooka">
      <div class="cooka-user">
        <img v-lazy="userimg" />
        <span class="user-name">{{ username }}</span>
      </div>
      <div class="cooka-food">
        <router-link :to="{ name: 'cookbook', params: { foodid: cookid } }">
          <div class="food-big-pic">
            <img alt="" v-lazy="cookimg" />
          </div>
        </router-link>
        <div class="food-info">
          <div class="food-star">
            <span class="star-num">
              <span class="num">{{ recommend_label.slice(0, 1) }}</span>
              人收藏
            </span>
            <van-icon name="star" size="20" v-if="isStar" @click="delStar" />
            <van-icon name="star-o" size="20" v-if="!isStar" @click="addStar" />
          </div>
          <div class="food-desc">
            {{ cookdesc }}
          </div>
        </div>
        <div class="food-review">
          <div class="review-count">共143条评论</div>

          <div class="review-text">
            <span>崔凯：</span>
            <span>耶斯莫拉馋死了今晚试试做这个</span>
          </div>
          <div class="review-text">
            <span>张丽颖：</span>
            <span>就你？bug生成器?</span>
          </div>
          <div class="review-text">
            <span>李文欣：</span>
            <span>你会开炉子吗小崔？</span>
          </div>
          <div class="review-text">
            <span>刘鑫：</span>
            <span>小崔加油我支持你我爱你</span>
          </div>
          <div class="review-text">
            <span>白慧强：</span>
            <span>小崔后援男团+10086</span>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
import Vue from "vue";
import { Icon, Lazyload, Toast } from "vant";
Vue.use(Lazyload);
Vue.use(Icon);
export default {
  data() {
    return {
      cookid: "",
      userid: "",
      username: "",
      userimg: "",
      cookimg: "",
      recommend_label: "",
      cookdesc: "",
      isStar: false,
    };
  },
  created() {
    this.$http
      .post("http://39.106.203.89:3100/backend/get_user_info")
      .then((res) => {
        if (res.error_code != 0) {
          return;
        } else {
          let starlist = res.data.starlist;
          if (starlist.includes(this.cookid)) {
            this.isStar = true;
          } else {
            this.isStar = false;
          }
        }
      });
  },
  methods: {
    addStar() {
      this.$http
        .post("http://39.106.203.89:3100/backend/add_star", {
          cookId: this.cookid,
        })
        .then((res) => {
          console.log(res);

          if (res.error_code == 0) {
            Toast("收藏成功");
            this.isStar = true;
          } else if (res.error_code == 1) {
            Toast("已经收藏过啦 去收藏夹看看吧");
          } else {
            Toast("请先登录");
          }

          this.$store.dispatch("asyncSetUser");
        });
    },
    delStar() {
      this.$http
        .post("http://39.106.203.89:3100/backend/del_star", {
          cookId: this.cookid,
        })
        .then((res) => {
          if (res.error_code === 0) {
            Toast("删除成功");
            this.isStar = false;
          }
        });
    },
  },
  props: {
    cookInfo: {
      type: Object,
      required: true,
    },
  },
  created() {
    console.log(this.cookInfo);
    let data = this.cookInfo.r;
    this.cookid = data.id;
    this.userid = data.a.id;
    this.username = data.a.n;
    this.userimg = data.a.p;
    this.cookimg = data.img;
    this.recommend_label = data.recommend_label;
    this.cookdesc = data.n;
  },
  watch: {
    cookInfo: {
      deep: true,
      handler: function (newvalue, oldvalue) {
        console.log(newvalue);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.rec-item {
  .cooka {
    line-height: 24px;
    color: #333;
    padding: 20px 0px;

    display: block;
    width: 100%;
  }
  .cooka-user {
    height: 50px;
    padding: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
      width: 35px;
      height: 35px;
      display: inline-block;
      margin-right: 10px;
      border-radius: 50%;
    }
    .user-name {
      font-size: 17px;
      line-height: 35px;
      color: #333;
      word-wrap: break-word;
      flex: 1;
    }
  }
  .cooka-food {
    .food-big-pic {
      img {
        width: 100%;
      }
    }
    .food-info {
      padding: 0px 15px;
      .food-star {
        display: flex;
        font-size: 16px;
        justify-content: space-between;
        align-items: center;
        color: #000;
        font-weight: 600;
        font-size: 14px;
        line-height: 30px;
      }
      .food-desc {
        font-size: 15px;
        line-height: 26px;
        color: #333;
        height: 50px;
        display: -webkit-box;
        //设置排列方式
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
    .food-review {
      padding: 0px 15px;
      .review-count {
        font-size: 14px;
        color: #999;
      }
      .review-text {
        font-size: 14px;
        color: #555;
        line-height: 17px;
      }
    }
  }
}
</style>