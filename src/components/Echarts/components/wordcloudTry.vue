<template>
  <div ref="echart" class="commentContainer" ></div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
export default {
  data() {
    return {
      charts: "",
      name:"热搜作者",
      opinionData: [
        { value: 420, name: "宋尹燮" },
        { value: 1200, name: "渡边淳一" },
        { value: 780, name: "古斯塔夫·勒庞" },
        { value: 2350, name: "古斯塔夫·勒庞" },
        { value: 1548, name: "顾保孜" },
        { value: 1025, name: "雪儿·海蒂" },
        { value: 161, name: "张卉妍" },
        { value: 5201, name: "劳伦斯" },
        { value: 750, name: "米兰·昆德拉   " },
        { value: 189, name: "西蒙娜·德·波伏娃" },
        { value: 999, name: "小仲马" },
        { value: 52, name: "莫言" },
        { value: 40, name: "鲁迅" },
        { value: 105, name: "刘慈欣" },
        { value: 3, name: "莫兰迪" },
        { value: 3, name: "大冰" },
        { value: 800, name: "李开复" },
        { value: 579, name: "莫纳" },
        { value: 263, name: "地卢克" },
        { value: 953, name: "甘于" },
        { value: 218, name: "魈" },
      ],
    };
  },
  methods: {
    drawWordCould() {
      this.charts = echarts.init(this.$refs.echart);
      this.charts.setOption({
        series: [
          {
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 10,
            //用来调整字的大小范围
            sizeRange: [14, 60],
            rotationRange: [0, 0],
            textStyle: {
              normal: {
                color: function () {
                  return (
                    "rgb(" +
                    Math.round(Math.random() * 255) +
                    ", " +
                    Math.round(Math.random() * 255) +
                    ", " +
                    Math.round(Math.random() * 255) +
                    ")"
                  );
                },
              },
            },
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            width: "200%",
            height: "200%",
            //数据
            data: this.opinionData,
          },
        ],
      });
    },
  },
  mounted(){
      this.$nextTick(function(){
        this.drawWordCould();
      })
  }
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