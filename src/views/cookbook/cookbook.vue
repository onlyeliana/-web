<template>
  <div>
    <div>
      <img :src="obj.original_photo_path" class="img" />
    </div>
    <div class="title">{{ obj.title }}</div>
    <div class="spans">
      <span>浏览 {{ obj.views_count_text }} . </span>
      <span>收藏 {{ obj.favo_counts_text }} . </span>
      <span>学做 {{ obj.first_level_comment_count }} </span>
    </div>
    <div class="dg-collect" @click="addStar">将做法收藏</div>

    <div class="author">
      <span><img :src="obj.author_photo" class="span_img" /></span>
      <span class="mingzi"> {{ obj.author }} </span>
      <span class="guanzhu">关注</span>
    </div>
    <div class="text-17d">{{ obj.cookstory }}</div>
    <div class="fenxi">
      <span>营养分析</span>
      <span>查看详情</span>
    </div>
    <div class="lis">
      <ul>
        <li><img src="@/assets/upload/1.png" class="imgs" /></li>
        <li><span class="span1"></span> 脂肪</li>
        <li><span class="span2"></span> 蛋白质</li>
        <li><span class="span3"></span> 碳水化合物</li>
      </ul>
    </div>
    <div class="qingdan"><span>食物清单</span><span>加入采购清单</span></div>
    <div v-for="item in list" :key="item.title">
      <span class="yelwo"> {{ item.title }} </span>
      <span class="right"> {{ item.note }} </span>
    </div>
    <div class="buzhou">
      <div>烹饪步骤</div>
      <div v-for="item in arr" :key="item.position">
        <div class="ziti">步骤 ：{{ item.position }}</div>
        <div>{{ item.content }}</div>
        <div>
          <img :src="item.image" width="340" height="190" class="button" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "@/url/url";
import { Toast } from "vant";
export default {
  methods: {
    addStar() {
      this.$http
        .post("http://39.106.203.89:3100/backend/add_star", {
          cookId: this.foodid,
        })
        .then((res) => {
          console.log(res);

          if (res.error_code == 0) {
            Toast("收藏成功");
            this.$store.dispatch("asyncSetUser");
            return;
          } else if (res.error_code == 1) {
            Toast("已经收藏过啦 去收藏夹看看吧");
            this.$store.dispatch("asyncSetUser");
            return;
          }
          Toast("请先登录");
        });
    },
  },
  data() {
    return {
      obj: {},
      arr: [],
      list: [],
      foodid: 0,
    };
  },
  created() {
    // $route 用来获取路由信息
    this.foodid = this.$route.params.foodid;
    console.log(this.foodid);
    this.$http.get(url.xiangqingUrl + "?id=" + this.foodid).then((ret) => {
      if (ret.state == "fail") {
        this.router.push("/ppp");
      }
      if (ret.result.recipe) {
        this.obj = ret.result.recipe;
        console.log(ret);
        this.obj.cookstep.forEach((item) => {
          this.arr.push(item);
        });
        this.obj.major.forEach((item) => {
          this.list.push(item);
        });
      }
    });
  },
};
</script>
<style scoped>
.imgs {
  width: 70px;
  height: 70px;
  position: relative;
  top: 74px;
  left: -90px;
}
.mingzi {
  position: relative;
  top: -10px;
  left: 5px;
  font-size: 17px;
}
.author {
  margin-top: 35px;
}
.img {
  width: 100%;
  height: 250px;
}
.guanzhu {
  float: right;
  width: 80px;
  height: 20px;
  background: orange;
  border-radius: 10px;
  text-align: center;
  line-height: 20px;
  font-size: 10px;
  margin-right: 10px;
}
.ziti {
  font-weight: bold;
  margin: 10px 0 10px 0;
}
.button {
  margin: 10px 0 10px 0;
}
.title {
  font-size: 20px;
  line-height: 34px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}
.spans {
  color: #666666;
  font-weight: 600;
  font-size: 14px;
  margin-left: 100px;
}
.dg-collect {
  width: 92.7%;
  margin-bottom: 24px;
  color: #fff;
  background: #ffb31a;
  line-height: 40px;
  font-size: 15px;
  border-radius: 50px;
  margin: 20px auto;
  text-align: center;
}

.span_img {
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  margin-left: 10px;
}
.text-17d {
  width: 345px;
  margin: auto;
  margin-top: 10px;
  font-size: 17px;
  line-height: 28px;
  color: #333;
  word-wrap: break-word;
}
.fenxi {
  margin-top: 50px;
  margin-left: 30px;
}
.fenxi span:nth-child(2) {
  float: right;
  margin-right: 20px;
  color: yellowgreen;
}
.fenxi span:nth-child(1) {
  font-size: 19px;
  line-height: 20px;
  color: #333;
  font-weight: bold;
}
.lis {
  margin-left: 150px;
  margin-top: -50px;
}
.span1 {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50%;
  margin-right: 30px;
}
.span2 {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: yellowgreen;
  border-radius: 50%;
  margin-right: 30px;
}
.span3 {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: yellow;
  border-radius: 50%;
  margin-right: 30px;
}
.qingdan {
  margin-top: 30px;
  margin-left: 20px;
}
.qingdan span:nth-child(2) {
  float: right;
  margin-right: 20px;
  color: yellowgreen;
}
.qingdan span:nth-child(1) {
  font-size: 19px;
  line-height: 20px;
  color: #333;
  font-weight: bold;
}
.buzhou {
  margin-top: 30px;
  font-size: 19px;
  line-height: 20px;
  color: #333;
  margin-left: 20px;
}
.yelwo {
  color: yellowgreen;
  font-size: 17px;
  line-height: 32px;
  margin-left: 70px;
}
.right {
  float: right;
  margin-right: 90px;
  font-size: 17px;
  line-height: 32px;
}
</style>