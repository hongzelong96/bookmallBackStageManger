<template>
  <div>
    <el-carousel height="500px" :autoplay="true" interval="10000">
      <el-carousel-item v-for="item in echarts" :key="item">
        <component :is="item" ></component>
      </el-carousel-item>
    </el-carousel>
    <!-- <component :is="echarts[currentIndex]" ></component> -->
  </div>
</template>

<script>
import china from "../Echarts/components/china.vue";
import MultipleY from "../Echarts/components/MultipleY.vue";
import wordcloudTry from "../Echarts/components/wordcloudTry.vue";

export default {
  components: { china, MultipleY, wordcloudTry },
  data() {
    return {
      echarts: ["china", "MultipleY", "wordcloudTry"],
      currentIndex: 2,
    };
  },
  methods: {
    next() {
      this.currentIndex++;
      console.log("index", this.currentIndex);
    },
  },
};
</script>

<style>
</style>