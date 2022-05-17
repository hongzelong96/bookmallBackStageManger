<template>
  <scroll-bar>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#FFFFFF"
    >
      <sider-bar-item :routes="routes"></sider-bar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from "vuex";
import SiderBarItem from "./SiderBarItem";
import ScrollBar from "@/components/ScrollBar";

export default {
  name: "SideBar",
  components: {
    ScrollBar,
    SiderBarItem,
  },
  computed: {
    ...mapGetters(["sidebar", "routers"]),
    routes() {
      // return this.$router.options.routes
      return this.routers
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  
};
</script>

<style>
</style>