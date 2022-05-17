<template>
  <div ref="echart" class="commentContainer"></div>
</template>
<script>
import * as echarts from "echarts";

export default {
  name: "",
  data() {
    return {
      charts: "",
      opinion: [
        "文化教育",
        "艺术",
        "科学",
        "历史地理",
        "交通运输",
        "工业技术",
        "综合性图书",
      ],
      opinionData: [
        { value: 420, name: "文化教育" ,itemStyle:{color:'#43aefc'} },
        { value: 1200, name: "艺术" ,itemStyle:{color:'#0e69b0'}},
        { value: 780, name: "科学" ,itemStyle:{color:'#89fef6'}},
        { value: 2350, name: "历史地理" ,itemStyle:{color:'#74bdf1'}},
        { value: 1548, name: "交通运输" ,itemStyle:{color:'#faefa0'}},
        { value: 1025, name: "工业技术" ,itemStyle:{color:'#697993'}},
        { value: 1548, name: "综合性图书" ,itemStyle:{color:'#d7d7d7'}},
      ],
    };
  },
  methods: {
    drawPie() {
      this.charts = echarts.init(this.$refs.echart);
      this.charts.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/>{b}:{c} ({d}%)",
        },
        legend: {
          // orient: "vertical",
          x: "left",
          data: this.opinion,
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              normal: {
                shadowBlur: 200,
                shadowColor: "rgba(0, 0, 0, 0)",
              },
            },
            label: {
              normal: {
                show: false,
                position: "center",
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "15",
                  fontWeight: "blod",
                },
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: this.opinionData,
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
  padding: 0px;
  height: 100%;
  /* max-height: 220px; */
}
</style>