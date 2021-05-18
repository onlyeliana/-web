<template>
  <!-- 先去写一个node吧 -->
  <div class="reg_main">
    <div class="toRegister">
      还没有账号？前往
      <router-link to="/register">注册</router-link>
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
        <span>你回来啦</span>
      </div>
    </div>
    <div class="reg-box">
      <van-form @submit="onSubmit">
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
            >登录</van-button
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
      mobile: "",
      password: "",
      checkMobile: /^1[3-9]\d{9}$/,
    };
  },
  methods: {
    async onSubmit(values) {
      console.log("submit", values);
      const res = await this.$http.post(
        "http://39.106.203.89:3100/backend/login",
        values
      );

      console.log(res);
      if (res.error_code != 0) {
        Toast("账户或密码错误");
      } else {
        if (res["_token"]) {
          this.$store.commit("setToken", res["_token"]);
        }
        Toast("登录成功");
        this.$store.dispatch("asyncSetUser");
        if (this.$route.query.shouldGo) {
          let shouldGo = this.$route.query.shouldGo;

          this.$router.replace(shouldGo);
          return;
        }
        this.$router.replace("/userSpace");
      }
    },
  },
  created() {
    this.$store.commit("setHeader", false);
  },
  beforeDestroy() {
    this.$store.commit("setHeader", true);
    console.log(" login distroy");
  },
};
</script>
<style  lang="scss">
.toRegister {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 14px;
  color: #999;
  text-align: left;
}
.reg_main {
  width: 100%;
  height: 400px;
  margin-top: 15vh;
  text-align: center;
  img {
    display: inline-block;
  }
  .welcome {
    margin-top: 10vh;
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