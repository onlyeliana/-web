<template>
  <div class="top">
    <div class="left" @click="toCookBook">
      <img :src="obj.image" class="img" />
    </div>
    <div class="right">
      <span class="tit" @click="toCookBook"> {{ obj.title }} </span>
      <p class="starcount" @click="toCookBook">
        {{ obj.favo_counts }} 人刚刚收藏过
      </p>
      <span><img :src="obj.author_photo" class="span_img" /> </span>
      <span class="dibu">{{ obj.author }}</span>
      <span class="delet" @click="delStar">删除收藏</span>
    </div>
  </div>
</template>
<script>
import url from "@/url/url.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      obj: {},
      arr: [],
      list: [],
    };
  },
  props: {
    currentid: 0,
    currentObj: {},
  },
  methods: {
    toCookBook() {
      this.$router.push({
        name: "cookbook",
        params: {
          foodid: this.currentid,
        },
      });
    },
    delStar() {
      this.$http
        .post("http://39.106.203.89:3100/backend/del_star", {
          cookId: this.currentid,
        })
        .then((res) => {
          console.log(res);
          if (res.error_code === 0) {
            Toast("删除成功");
            this.$router.go(0);
          }
        });
    },
  },
  created() {
    console.log(this.currentid);
    this.$http.get(url.xiangqingUrl + "?id=" + this.currentid).then((ret) => {
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
<style lang="scss" scoped>
.top {
  margin: 15px 0px;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  height: 160px;
}
.delet {
  float: right;
  color: #666;
  margin-top: 13px;
  padding: 5px 10px;
  margin-right: 20px;
  background: #ffb31a;
  border-radius: 8px;

  font-size: 11px;
}
.img {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.left {
  position: relative;
  width: 160px;
  height: 130px;
  float: left;
  margin: 0px 5px;
  overflow: hidden;
  border-radius: 10px;
}
.right {
  flex: 1;
  .tit {
    font-size: 15px;
    width: 100%;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .starcount {
    font-size: 11px;
    color: #333;
  }
}
.span_img {
  display: inline-block;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-top: 10px;
}
.dibu {
  position: relative;
  top: -4px;
  left: 10px;
  font-size: 12px;
  color: gray;
}
</style>