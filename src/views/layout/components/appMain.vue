<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <!-- <router-view :key="key"></router-view> -->
      <div>
      <keep-alive><router-view v-if="$route.meta.keepAlive"></router-view></keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
    name:'appMain',
}
</script>

<style>

</style>