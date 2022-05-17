<template>
  <el-card class="form-container" shadow="never">
    <el-steps :active="active" finish-status="success" align-center>
      <el-step title="填写商品信息"></el-step>
      <el-step title="上传商品图片"></el-step>
    </el-steps>

    <edit-product-info
      v-show="Status[0]"
      v-model="productParam"
      :isUpdate="isUpdate"
      @nextStep="nextStep"
    ></edit-product-info>
    <edit-product-pic
      v-show="Status[1]"
      v-model="productParam"
      :picId="productParam.pictureId"
      :isUpdate="isUpdate"
      @LastStep="LastStep"
      @finishUpdate="handlerUpdate"
    ></edit-product-pic>
  </el-card>
</template>
<script>
import {
  getBookDetail,
  getCategoryPageData,
  getProductPic,
  updateBookDetail,
  insertBookDetail,
} from "@/api/product.js";
import editProductInfo from "./editProductInfo.vue";
import editProductPic from "./editProductPic.vue";
let productParam = {
  id: "",
  name: "",
  description: "",
  storage: 0,
  author: "",
  price: 0,
  hot: 0,
  public: 0,
  categoryId: 0,
  pictureId: '0',
  productCateOptions: [],
  categoryId: 0,
  PicList: [],
};

export default {
  name: "editProduct",
  data() {
    return {
      active: 0,
      productParam: Object.assign({}, productParam),
      Status: [true, false],
      hasUpdate:false
    };
  },
  components: {
    editProductInfo,
    editProductPic,
  },
  props: {
    isUpdate: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isUpdate(newval) {
      console.log("is update", newval);
    },
    $route(to, from) {
      console.log("to", to, "from", from);
    },
  },
  created() {
    if (this.isUpdate) {
      let params = { BookId: this.$route.query.id };
      getBookDetail(params)
        .then((res) => this.matchData(res))
        .then(() => getCategoryPageData())
        .then((res) => this.getCategoryList(res))
        .then(() => getProductPic({ BookId: this.productParam.pictureId }))
        .then((res) => this.getPicArray(res))
        .catch((err) => console.log(err));
    } else {
      getCategoryPageData().then((res) => this.getCategoryList(res));
    }
  },
  methods: {
    hideAll() {
      for (let i = 0; i < this.Status.length; i++) {
        this.Status[i] = false;
      }
      //console.log("hide all");
    },
    matchData(res) {
      let getRes = res.bookDetail[0];
      //console.log("res get from server", getRes);
      this.productParam.pictureId = getRes.pictureId;
      this.productParam.id = getRes.id;
      this.productParam.name = getRes.name;
      this.productParam.description = getRes.description;
      this.productParam.storage = getRes.storage;
      this.productParam.author = getRes.author;
      this.productParam.price = getRes.price;
      this.productParam.hot = getRes.hot;
      this.productParam.public = getRes.public;
      this.productParam.categoryId = getRes.categoryId;
      //console.log("fixed Detail:", this.productParam);
    },
    getCategoryList(res) {
      this.productParam.productCateOptions = [];
      let array = res.categoryList;
      for (let i = 0; i < array.length; i++) {
        if (array[i].parentId == 0) {
          let str = array[i].name;
          let val = array[i].id;
          let item = { label: str, value: val, children: [] };
          this.productParam.productCateOptions.push(item);
          for (let j = 0; j < array.length; j++) {
            if (array[j].parentId == array[i].id) {
              let strC = array[j].name;
              let valC = array[j].id;
              let itemC = { label: strC, value: valC };
              item.children.push(itemC);
            }
          }
        }
      }
      //console.log("fixedCategoryArray", this.productParam.productCateOptions);
    },
    getPicArray(res) {
      this.productParam.PicList = res.picArray;
      //console.log("picList", this.productParam.PicList);
    },
    nextStep() {
      if (this.isUpdate) {
        //console.log(this.productParam);
        updateBookDetail(this.productParam).then(() =>
          this.$message({
            message: "修改成功",
            type: "success",
          }),
          this.hasUpdate = true
        );
      } else {
        insertBookDetail(this.productParam)
          .then((res) => {
            this.productParam.pictureId = res.id;
            console.log("新的一本书pictureid",this.productParam.pictureId)
          })
          .then(() => {
            this.$message({
              message: "修改成功",
              type: "success",
            });
          });
      }
      if (this.active < this.Status.length - 1) {
        this.active++;
        this.hideAll();
        this.Status[this.active] = true;
        //console.log("changesuccess");
      }
    },
    LastStep() {
      if (this.active > 0) {
        this.active--;
        this.hideAll();
        this.Status[this.active] = true;
      }
    },
    handlerUpdate() {
      this.hasUpdate = true
      this.$router.push({
        path: "/productCenter/productList",
        query: {hasUpdate:this.hasUpdate}
      });
    },
  },
};
</script>

<style>
</style>