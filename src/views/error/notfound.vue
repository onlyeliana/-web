<template>
  <div class="content">
    <van-empty description="sorry 小易没有找到您要的东西 ~~" />
  </div>
</template>
<script>
import Vue from "vue";
import { Empty } from "vant";

Vue.use(Empty);
export default {};
</script>
<style scoped>
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 400px;
  height: 400px;
  text-align: center;
}
</style>