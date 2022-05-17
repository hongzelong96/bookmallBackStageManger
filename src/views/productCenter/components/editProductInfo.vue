<template>
  <el-form ref="infoForm" :model="value" :rules="rules" label-width="120px">
    <el-form-item label="书名" prop="name">
      <el-input v-model="value.name"></el-input>
    </el-form-item>
    <el-form-item label="作者" prop="author">
      <el-input v-model="value.author"></el-input>
    </el-form-item>
    <el-form-item label="价格" prop="price">
      <el-input style="width: 200px" v-model="value.price"></el-input>
      <span style="margin-left: 20px">元</span>
    </el-form-item>
    <el-form-item label="描述">
      <el-input type="textarea" v-model="value.description"></el-input
    ></el-form-item>
    <el-form-item label="入库数量" prop="storage">
      <el-input v-model="value.storage"></el-input>
    </el-form-item>
    <el-form-item label="类别分类" prop="category">
      <el-cascader
        v-model="value.categoryId"
        :options="value.productCateOptions"
        :props="{ expandTrigger: 'hover' }"
        @change="HandleChange"
      >
      </el-cascader
    ></el-form-item>
    <el-form-item>
      <el-button-group>
        <el-button type="primary" @click="HandlerNextPage('infoForm')"
          >下一页 添加商品图片<i class="el-icon-arrow-right el-icon--right"></i
        ></el-button>
      </el-button-group>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "editProductInfo",
  data() {
    return {
      rules: {
        name: [{ required: true, message: "请输入书本名称", trigger: "blur" }],
        author: [
          { required: true, message: "请输入作者名称", trigger: "blur" },
        ],
        price: [{ required: true, message: "请输入定价", trigger: "blur" }],
      },
      valdata:{},
    };
  },
  props: {
    value: Object,
    isUpdate: {
      type: Boolean,
      default: false,
    },
  },
  // watch:{
  //   value(newval){
  //     console.log("newval is",newval)
  //     this.valdata = newval
  //   }
  // },
  methods: {
    HandlerNextPage(infoForm) {
      this.$refs[infoForm].validate((valid) => {
        if (valid) {
          this.$emit("nextStep");
        } else {
          this.$message({
            message: "验证失败",
            type: "error",
            duration: 1000,
          });
          return false;
        }
      });
    },
    HandleChange() {},
  },
};
</script>