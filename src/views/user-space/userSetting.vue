<template>
  <!-- 先去写一个node吧 -->
  <div class="reg_main">
    <div class="exit">
      <span class="loginout" @click="exit">退出登录</span>
    </div>
    <div class="welcome">
      <div class="logo">
        <img
          src="../../assets/upload/Barrel-restaurant-logo-black.png"
          alt=""
        />
      </div>
      <div class="text">
        <img src="../../assets/upload//branch.png" alt="" class="text-pic" />
        <span>发现新的自己</span>
      </div>
    </div>
    <div class="reg-box">
      <form name="updataForm" @submit="onSubmit">
        <div class="showimg">
          <img :src="userinfo.headIcon" alt="" class="show" />
          <input type="file" @input="showimg" class="upimg" />
        </div>
        <div class="showname">
          <label for="" class="username">用户名</label>
          <input type="text" v-model="userinfo.username" class="upname" />
        </div>
        <button class="save">保存</button>
      </form>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Form, Field, Button, Toast } from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(Toast);
Vue.use(Button);

function getObjectURL(file) {
  var url = null;
  if (window.createObjectURL != undefined) {
    url = window.createObjectURL(file);
  } else if (window.URL != undefined) {
    url = window.URL.createObjectURL(file);
  } else if (window.webkitURL != undefined) {
    url = window.webkitURL.createObjectURL(file);
  }
  return url;
}

export default {
  data() {
    return {
      username: "",
      mobile: "",
      password: "",
      checkMobile: /^1[3-9]\d{9}$/,
      headimg: "",
      userinfo: {},
      file: "",
    };
  },
  created() {
    this.$store.commit("setHeader", false);
    this.$http
      .post("http://39.106.203.89:3100/backend/get_user_info")
      .then((res) => {
        // console.log(res);
        if (res.error_code != 0) {
          Toast("令牌过期，重新登录");
          this.$router.push("/login");
        } else {
          console.log(res.data);
          this.userinfo = res.data;
        }
      });
  },
  beforeDestroy() {
    this.$store.commit("setHeader", true);
  },
  methods: {
    exit: () => {
      localStorage.setItem("jwt", "");
      this.$router.go(0);
      this.$router.push("/login");
    },
    showimg(e) {
      e = e || window.event;
      this.userinfo.headIcon = getObjectURL(e.target.files[0]);
      this.file = e.target.files[0];
    },
    onSubmit(e) {
      e = e || window.event;
      e.preventDefault();
      var formdata = new FormData();
      if (this.file) {
        formdata.append("headIcon", this.file);
        formdata.append("username", this.userinfo.username);
        this.$http
          .post("http://39.106.203.89:3100/upload/updata", formdata)
          .then((res) => {
            console.log(res);
            if ((res.type = "success")) {
              Toast("更新成功");

              this.$router.push("/userSpace");
              this.$router.go(0);
            }
          });
      } else {
        Toast("未更新");
      }
    },
  },
};
</script>
<style  lang="scss">
.reg_main {
  width: 100%;
  height: 400px;
  margin-top: 80px;
  text-align: center;
  img {
    display: inline-block;
  }
  .exit {
    width: 100%;
    height: 20px;
    .loginout {
      float: right;
      color: #666;
      font-size: 14px;
      margin-right: 15px;
    }
  }
  .welcome {
    margin-bottom: 90px;
    .text {
      margin-top: 10px;
    }
    .text-pic {
      width: 50px;
    }
  }
}
.reg-box {
  font-size: #333;
  .save {
    width: 200px;
    height: 40px;
    border-radius: 20px;
    background: #666;
  }
  .showname {
    width: 200px;
    text-align: center;
    margin: 10px auto;
    .username {
      display: inline-block;
      margin: 10px 0px;
      font-size: 16px;
      font-weight: 600;
    }
    .upname {
      width: 100%;
      border-bottom: 1px solid #bbb;

      height: 30px;
      text-align: center;
      font-size: 18px;
    }
  }
  .showimg {
    width: 200px;
    height: 200px;
    background: pink;
    margin: 0px auto;
    position: relative;
    .show {
      width: 100%;
      height: 100%;
    }
    .upimg {
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
      top: 0;
      left: 0;
    }
  }
}
</style>