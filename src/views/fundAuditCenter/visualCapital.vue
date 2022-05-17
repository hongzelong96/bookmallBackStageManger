<template>
  <div class="dContainer">
    <el-row :gutter="10">
      <el-col :span="6"><el-card><div class="grid-content-top"><data-set></data-set></div></el-card></el-col>
      <el-col :span="6"><el-card><div class="grid-content-top"><multiple-y></multiple-y></div></el-card></el-col>
      <el-col :span="6"><el-card><div class="grid-content-top"><stacked-line></stacked-line></div></el-card></el-col>
      <el-col :span="6"><el-card><div class="grid-content-top"><chart-try></chart-try></div></el-card></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12"><el-card><div class="grid-content"><china></china></div></el-card></el-col>
      <el-col :span="12"><el-card><div class="grid-content"><wordcloud-try></wordcloud-try></div></el-card></el-col>
    </el-row>
  </div>
</template>

<script>
import chartTry from "../../components/Echarts/components/chartTry.vue";
import china from "../../components/Echarts/components/china.vue";
import StackedHorizontalBar from "../../components/Echarts/components/StackedHorizontalBar.vue";
import WordcloudTry from "../../components/Echarts/components/wordcloudTry.vue";
import stackedLine from "../../components/Echarts/components/stackedLine.vue";
import DataSet from '../../components/Echarts/components/dataSet.vue';
import MultipleY from '../../components/Echarts/components/MultipleY.vue';


export default {
  components: { chartTry, china, StackedHorizontalBar, WordcloudTry, stackedLine, DataSet, MultipleY,},
  methods:{
      handlerShow(val){
          console.log("====>",val)
      }
  }
};
</script>

<style>
.grid-content-top{
    height: 275px;
}
.dContainer {
}
.grid-content{
    height: 490px;
}
</style>