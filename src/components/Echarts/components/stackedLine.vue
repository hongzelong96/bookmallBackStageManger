<template>
  <div ref="myEcharts" class="commentContainer"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "stackedLine",
  data() {
    return {
      myEcharts: "",
      dataOption: {
        title: {
          text: "",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["健康", "军事", "哲学", "宗教", "政治", "文化"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["10月", "11月", "12月", "1月", "2月", "3月"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "健康",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
            itmeStyle:{color:'#000000'}
          },
          {
            name: "军事",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "哲学",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "宗教",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "政治",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
          {
            name: "文化",
            type: "line",
            stack: "Total",
            data: [450, 260, 901, 1280, 750, 980, 402],
          },
        ],
      },
    };
  },
  methods: {
    drawEcharts() {
      this.myEcharts = echarts.init(this.$refs.myEcharts);
      this.myEcharts.setOption(this.dataOption)
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