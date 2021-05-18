<template>
  <div class="star-list">
    <div class="staritem" v-for="item in $store.state.starlist" :key="item">
      <staritem :currentid="item"></staritem>
    </div>
  </div>
</template>
<script>
import staritem from "./staritem";

export default {
  components: {
    staritem: staritem,
  },
};
</script>
<style scoped>
.star-list {
  margin: 10px 0px;
}
</style>