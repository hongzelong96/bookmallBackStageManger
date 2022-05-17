<template>
  <div ref="echart" class="commentContainer"></div>
</template>
<script>
import * as echarts from "echarts";
const colors = ['#d7d7d7', '#43aefc', '#ff947f'];
export default {
  name: "",
  data() {
    return {
      charts: "",
    };
  },
  methods: {
    drawPie() {
      this.charts = echarts.init(this.$refs.echart);
      this.charts.setOption({
        color: colors,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        grid: {
          right: "20%",
        },
        toolbox: {
          feature: {
            restore: { show: false },
            saveAsImage: { show: false },
          },
        },
        legend: {
          data: ["用户访问", "用户购买", "访购比"],
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            // prettier-ignore
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "用户访问",
            position: "right",
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0],
              },
            },
            axisLabel: {
              formatter: "{value} 人",
            },
          },
          {
            type: "value",
            name: "用户购买",
            position: "right",
            alignTicks: true,
            offset: 80,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[1],
              },
            },
            axisLabel: {
              formatter: "{value} case",
            },
          },
          {
            type: "value",
            name: "访购比",
            position: "left",
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[2],
              },
            },
            axisLabel: {
              formatter: "{value}%",
            },
          },
        ],
        series: [
          {
            name: "用户访问",
            type: "bar",
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
              3.3,
            ],
          },
          {
            name: "用户购买",
            type: "bar",
            yAxisIndex: 1,
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
              2.3,
            ],
          },
          {
            name: "访购比",
            type: "line",
            yAxisIndex: 2,
            data: [
              2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
            ],
          },
        ],
      });
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.drawPie();
    });
  },
};
</script>

<style scoped>
.commentContainer {
  background: #fff;
  padding: 10px;
  height: 100%;
  overflow: hidden;
  text-align: center;
}
</style>