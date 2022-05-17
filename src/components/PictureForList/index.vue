<template>
  <div class="picContainer">
    <img
      :src="picArr[index].url"
      class="picbody"
      @click="handlePreview(picArr[index].url)"
      lazy="true"
    />
    <el-button
      type="primary"
      icon="el-icon-arrow-left"
      @click="lastPic"
    ></el-button>
    <el-button
      type="primary"
      icon="el-icon-arrow-right"
      @click="nextPic"
    ></el-button>
    <el-dialog :visible.sync="dialogVisible">
      <div class="dialog">
      <el-button
        :visible.sync="dialogVisible"
        type="primary"
        icon="el-icon-arrow-left"
        class="picbutton"
        circle
        @click="lastPic"
      ></el-button>
      <img width="100%" :src="picArr[index].url" alt="" class="pic" />
      <el-button
        :visible.sync="dialogVisible"
        type="primary"
        icon="el-icon-arrow-right"
        class="picbutton"
        circle
        @click="nextPic"
      ></el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      dialogVisible: false,
      disabled: false,
    };
  },
  props: {
    picArr: {
      default: true,
    },
  },
  methods: {
    lastPic() {
      this.index--;
      if (this.index < 0) {
        console.log("<0");
        this.index = this.picArr.length - 1;
      }
      console.log("index:", this.index);
    },
    nextPic() {
      this.index++;
      if (this.index == this.picArr.length) {
        this.index = 0;
      }
      console.log("index:", this.index);
    },
    handlePreview(file) {
      this.dialogImageUrl = file;
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
.picContainer {
  height: 200px;
  width: 100%;
  object-fit: contain;
}
.picbody {
  height: 80%;
  width: 100%;
  object-fit: contain;
}
.dialog {
  display: flex;
  flex-flow: nowrap, row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 500px;
}
.pic {
  width: 70%;
  height: 70%;
  object-fit: contain;
}
.picbutton {
  align-self:center;
}
</style>