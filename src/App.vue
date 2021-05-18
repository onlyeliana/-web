<template>
  <div id="app">
    <app-header v-if="$store.state.isHeader"></app-header>
    <router-view> </router-view>
    <app-footer v-if="$store.state.isFooter"></app-footer>
  </div>
</template>
<script>
import appHeader from "./components/app/appHeader";
import appFooter from "./components/app/appFooter";

export default {
  components: {
    appHeader,
    appFooter,
  },
};
</script>
<style lang="scss">
@import "http://at.alicdn.com/t/font_1709417_kg7iv0dznzb.css";
@import "./assets/css/_base.scss";
</style>
