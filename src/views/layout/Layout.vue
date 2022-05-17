<template>
  <div class="app-wrapper" :class="classObj">
    <side-bar class="sidebar-container"></side-bar>
    <div class="main-container">
      <nav-bar></nav-bar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { NavBar, SideBar, appMain } from "./components";
import ResizeHandle from "./mixin/ResizeHandle";
export default {
  name: "layout",
  components: {
    NavBar,
    SideBar,
    appMain,
  },
  mixins: [ResizeHandle],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile",
      };
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>