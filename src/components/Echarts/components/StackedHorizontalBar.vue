<template>
  <div ref="echart" class="commentContainer" ></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      charts: "",
      name: "年龄段购买类型占比",
      option: {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ["儿童", "少年", "青年", "中年", "老年"],
        },
        series: [
          {
            name: "文化教育",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 302, 301, 334, 390, 330, 320],
          },
          {
            name: "艺术",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "科学",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "历史地理",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [150, 212, 201, 154, 190, 330, 410],
          },
          {
            name: "交通运输",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320],
          },
          {
            name: "工业技术",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320],
          },
          {
            name: "综合性图书",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320],
          },
        ]
        }
    }
  },
  methods: {
    drawEchart() {
      this.charts = echarts.init(this.$refs.echart);
      this.charts.setOption(this.option)
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.drawEchart();
    });
  },
};
</script>
<style scoped>
.commentContainer {
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
  height: 220px;
  max-height: 220px;
  overflow: hidden;
  border-radius: 6px;
  justify-content: space-between;
}
</style>