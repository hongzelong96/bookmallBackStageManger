<template>
  <div>
    <el-form ref="form" :model="value" label-width="120px">
      <el-upload
        class="upload-demo"
        action="http://localhost:3000/uploadPic"
        :on-preview="handlePreview"
        :before-remove="beforeRemove"
        :on-remove="handleRemove"
        :file-list="value.PicList"
        :on-success="handleSuccess"
        :data="picture_id"
        list-type="picture-card"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-form-item>
        <el-button-group>
          <el-button
            type="primary"
            icon="el-icon-arrow-left"
            @click="HandlerBack"
            >返回 商品信息</el-button
          >
          <el-button type="primary" @click="HandlerUpdate"
            >修改提交<i class="el-icon-arrow-right el-icon--right"></i
          ></el-button>
        </el-button-group>
      </el-form-item>
    </el-form>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>
<script>
import { delePic } from "@/api/product";
export default {
  name: "editProductPic",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
    };
  },
  props: {
    value: Object,
    isUpdate: {
      type: Boolean,
      default: false,
    },
    picId:String
  },
  computed:{
    picture_id:function(){
      return {'pictureId':this.picId}
    }
  },
  methods: {
    HandlerBack() {
      this.$emit("LastStep");
    },
    HandlerUpdate() {
      this.$emit("finishUpdate");
    },
    beforeRemove(file, fileList) {
      return this.$confirm("确定删除此图片");
    },
    handleRemove(file, fileList) {
      delePic(file.url).then((res) => {
        if ((res.msg = "delete success")) {
          this.$message({
            message: "删除成功",
            type: "success",
          });
        } else {
          this.$message.error("删除失败！");
        }
      });
    },
    handlePreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleSuccess(file) {
      console.log(file);
    },
  },
};
</script>