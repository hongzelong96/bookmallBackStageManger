<template>
  <div ref="echart" class="commentContainer"></div>
</template>

<script>
import * as echarts from "echarts";
import china from "./china.js";
export default {
  data() {
    return {
      chinachart: "",
      dataOption: {
        title: {
          text: "省份购买热力图",
          left: "right",
        },
        tooltip: {
          trigger: "item",
          showDelay: 0,
          transitionDuration: 0.2,
          formatter: function (params) {
            const value = (params.value + "").split(".");
            const valueStr = value[0].replace(
              /(\d{1,3})(?=(?:\d{3})+(?!\d))/g,
              "$1,"
            );
            return params.seriesName + "<br/>" + params.name + ": " + valueStr;
          },
        },
        visualMap: {
          left: "right",
          min: 0,
          max: 9999,
          inRange: {
            color: [
              "#313695",
              "#4575b4",
              "#74add1",
              "#abd9e9",
              "#e0f3f8",
              "#ffffbf",
              "#fee090",
              "#fdae61",
              "#f46d43",
              "#d73027",
              "#a50026",
            ],
          },
          calculable: true,
        },
        toolbox: {
          show: true,
          //orient: 'vertical',
          left: "left",
          top: "top",
          feature: {
          },
        },
        series: [
          {
            name: "购买量",
            type: "map",
            roam: true,
            map: "china",
            emphasis: {
              label: {
                show: true,
              },
            },
            data: [
              { name: "广东省", value: 20 },
              { name: "安徽省", value: 5012 },
              { name: "海南省", value: 1725 },
              { name: "上海市", value: 2314 },
              { name: "台湾省", value: 3124 },
              { name: "福建省", value: 4241 },
              { name: "贵州省", value: 9972 },
              { name: "吉林省", value: 6277 },
              { name: "湖南省", value: 324 },
              { name: "广西壮族自治区", value: 427 },
              { name: "江苏省", value: 724 },
              { name: "山西省", value: 1572 },
              { name: "浙江省", value: 972 },
              { name: "四川省", value: 4520 },
              { name: "北京市", value: 721 },
              { name: "香港特别行政区", value: 4101 },
              { name: "澳门特别行政区", value: 233 },
            ],
          },
        ],
      },
    };
  },
  methods: {
    drawchina() {
      this.chinachart = echarts.init(this.$refs.echart);
      echarts.registerMap("china", china);
      this.chinachart.setOption(this.dataOption);
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.drawchina();
    });
  },
};
</script>
<style scoped>
.commentContainer {
  background: #fff;
  padding: 0px;
  height: 100%;
  /* max-height: 220px;  */
  overflow: hidden;
  /* border-radius: 6px; */
}
</style>