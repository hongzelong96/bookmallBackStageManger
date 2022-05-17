<template>
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets" style="margin-top: 5px"></i>
      <span style="margin-top: 5px">数据列表</span>
      <el-button class="btn-add" @click="handleAddProductCate()" size="mini">
        添加
      </el-button>
    </el-card>
    <div class="table-container">
      <el-table
        ref="productCateTable"
        style="width: 100%"
        :data="tableData"
        row-key="name"
        border
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      >
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="分类名称" align="center">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="级别" width="100" align="center">
          <template slot-scope="scope">{{
            scope.row.parentId ===0?scope.row.parentId:scope.row.id
          }}</template>
        </el-table-column>
        <el-table-column label="商品数量" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.productCount }}</template>
        </el-table-column>
        <el-table-column label="数量单位" width="100" align="center">
          本
        </el-table-column>
        <el-table-column label="操作" width="300" align="center">
          <template slot-scope="scope">
            <el-button 
            size="mini"
            @click="handleProductList(scope.row)">
              查看商品
            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="handleUpdate(scope.row)">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {getCategoryPageData, getProductPic} from"../../api/product"

export default {
  name: "",
  data() {
    return {
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        pageNum: 1,
        pageSize: 5,
      },
      parentId: 0,
      tableData:[],
    };
  },
  mounted(){
    getCategoryPageData().then(res=>this.getCategoryList(res))
  },
  methods:{
    handleAddProductCate(){},
    //查看商品按钮
    handleProductList(index){
      this.$router.push({path:'/productCenter/productList',query:{categoryId:index.id}})
    },
    getCategoryList(res) {
      this.tableData = [];
      let array = res.categoryList;
      for (let i = 0; i < array.length; i++) {
        if (array[i].parentId == 0) {
          let str = array[i].name;
          let val = array[i].id;
          let item = { name: str, productCount:Math.round(Math.random()*10)*100 ,id: val, children: [] };
          this.tableData.push(item);
          for (let j = 0; j < array.length; j++) {
            if (array[j].parentId == array[i].id) {
              let strC = array[j].name;
              let valC = array[j].id;
              let itemC = { name: strC,productCount:Math.round(Math.random()*10)*40, id: valC };
              item.children.push(itemC);
            }
          }
        }
      }
      console.log("fixedCategoryArray", this.tableData);
    },
  }
};
</script>

<style scoped>
</style>
