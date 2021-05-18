<template>
  <!-- 先去写一个node吧 -->
  <div class="reg_main">
    <div class="welcome">
      <div class="logo">
        <img
          src="../../assets/upload/Barrel-restaurant-logo-black.png"
          alt=""
        />
      </div>
      <div class="text">
        <img src="../../assets/upload//branch.png" alt="" class="text-pic" />
        <span>欢迎你来</span>
      </div>
    </div>
    <div class="reg-box">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="mobile"
          name="mobile"
          label="手机号"
          placeholder="手机号"
          :rules="[
            {
              pattern: checkMobile,
              required: true,
              message: '手机号格式不正确',
            },
          ]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >注册</van-button
          >
        </div>
      </van-form>
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
export default {
  data() {
    return {
      username: "",
      mobile: "",
      password: "",
      checkMobile: /^1[3-9]\d{9}$/,
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      this.$http
        .post("http://39.106.203.89:3100/backend/register", values)
        .then((res) => {
          console.log(res);
          if (res.type == "error") {
            Toast("该手机号已被注册");
          } else if (res.type == "success") {
            console.log("注册成功");
            this.$router.push("/login");
          }
        });
    },
  },
  created() {
    this.$store.commit("setHeader", false);
    console.log("register create");
  },
  beforeDestroy() {
    this.$store.commit("setHeader", true);
  },
};
</script>
<style  lang="scss">
.reg_main {
  width: 100%;
  height: 400px;
  margin-top: 15vh;
  text-align: center;
  img {
    display: inline-block;
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
.van-button--info {
  background-color: #ffb31a;
  border-color: #ffb31a;
}
</style>