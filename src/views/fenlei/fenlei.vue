<template>
  <div class="main">
    <div class="nav-left">
      <van-sidebar v-model="activeKey" @change="onChange">
        <div v-for="item in alldataArr" :key="item.name">
          <van-sidebar-item :title="item.name" />
        </div>
      </van-sidebar>
    </div>
    <div class="container">
      <div class="content">
        <div class="content-box">
          <uselist :currentlist="currentObj"></uselist>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Sidebar, SidebarItem, Grid, GridItem } from "vant";
import uselist from "./uselist";
import url from "@/url/url";
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Grid);
Vue.use(GridItem);
export default {
  data() {
    return {
      activeKey: 0,
      alldataArr: [],
      currentObj: {},
    };
  },
  methods: {
    onChange(index) {
      this.currentObj = this.alldataArr[index];
    },
  },
  created() {
    this.$store.commit("setFooter", false);
    this.$http.get(url.fenleiUrl).then((res) => {
      console.log(res);
      if (res.result) {
        if (res.result.cs) {
          let dataArr = res.result.cs;
          dataArr.filter((item) => {
            return item.name && item.cs;
          });
          this.alldataArr = dataArr;
          this.currentObj = dataArr[0];
        }
      }
    });
  },
  beforeDestroy() {
    this.$store.commit("setFooter", true);
  },
  components: {
    uselist,
  },
};
</script>
<style lang="scss" scoped>
::v-deep .van-sidebar-item--select::before {
  right: 10px;
  left: auto;
  background: orange;
}
::v-deep .van-sidebar {
  width: 100%;
}
::v-deep .van-grid-item__content {
  padding: 6px 0px;
  font-size: 14px;
  border-radius: 10px;
  overflow: hidden;
}
.nav-left {
  overflow: auto;
  position: fixed;
  top: 50px;
  bottom: 0;
  width: 120px;
}
.container {
  top: 50px;
  bottom: 0;
  position: fixed;
  left: 120px;
  right: 0;
  overflow: auto;
  // .content{

  // }
}
</style>