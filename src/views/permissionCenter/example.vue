<template>
  <div>
    <div>{{value}}</div>
    <el-input v-model="value"></el-input>
    <example-child :fromFvalue="value" @getCdata="getCdata"></example-child>
  </div>
</template>

<script>
import exampleChild from "../../components/exampleChild.vue";
export default {
  data() {
    return {
      value:'初始数据来自父亲'
    };
  },
  components: {
    exampleChild,
  },
  methods: {
    getCdata(v){
      this.value = v
    }
  },
};
</script>

<style>
</style>