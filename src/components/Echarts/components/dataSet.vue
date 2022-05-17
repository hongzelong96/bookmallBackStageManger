<template>
  <div ref="myEcharts" class="commentContainer"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "dataSet",
  data() {
    return {
      myEcharts: "",
      dataOption: {
        dataset: {
          source: [
            ["score", "总数", "product"],
            [89.3, 58212, "10岁以下"],
            [57.1, 78254, "10-15岁"],
            [74.4, 41032, "15-20岁"],
            [50.1, 12755, "20-30岁"],
            [89.7, 20145, "30-40岁"],
            [68.1, 79146, "40-50岁"],
            [19.6, 91852, "50-60岁"],
            [10.6, 101852, "60-70岁"],
            [32.7, 20112, "70-80岁"],
          ],
        },
        grid: { containLabel: true },
        xAxis: { name: "总数" },
        yAxis: { type: "category" },
        visualMap: {
          orient: "horizontal",
          left: "center",
          min: 10,
          max: 100,
          text: ["人数低", "人数高"],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ["#43aefc", "#faefa0", "#ff947f"],
          },
        },
        series: [
          {
            type: "bar",
            encode: {
              // Map the "amount" column to X axis.
              x: "总数",
              // Map the "product" column to Y axis
              y: "product",
            },
          },
        ],
      },
    };
  },
  methods: {
    drawEcharts() {
      this.myEcharts = echarts.init(this.$refs.myEcharts);
      this.myEcharts.setOption(this.dataOption);
    },
  },
  mounted() {
    //   this.drawEcharts();
    this.$nextTick(function () {
      this.drawEcharts();
    });
  },
};
</script>

<style scoped>
.commentContainer {
  background: #fff;
  padding: 0px;
  height: 100%;
  overflow: hidden;
  text-align: center;
}
</style>