<template>
  <div class="homeMain">
    <homeheader></homeheader>
  </div>
</template>
<script>
import homeheader from "./homeheader";
export default {
  components: {
    homeheader,
  },
  created() {
    this.$store.commit("setHeader", false);
    this.$store.commit("setFooter", false);
  },
  destroyed() {
    this.$store.commit("setHeader", true);
    this.$store.commit("setFooter", true);
  },
};
</script>
<style scoped lang="scss">
</style>