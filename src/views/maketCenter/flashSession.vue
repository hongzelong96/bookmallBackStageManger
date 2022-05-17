<template>
   
  <div class="app-container">
    <el-card shadow="never" class="operate-container">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
    </el-card>
    <div class="table-container">
      <el-table
        ref="selectSessionTable"
        :data="list"
        style="width: 100%"
        v-loading="listLoading"
        border
      >
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="商品名" align="center">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="货号" align="center">
          <template slot-scope="scope">{{ scope.row.id *100 }}</template>
        </el-table-column>
        <el-table-column label="商品价格" align="center">
          <template slot-scope="scope">{{ scope.row.price }}</template>
        </el-table-column>
        <el-table-column label="商品库存" align="center">
          <template slot-scope="scope">{{ scope.row.storage }}</template>
        </el-table-column>
        <el-table-column label="活动数量" align="center">
          <template slot-scope="scope">
            {{ scope.row.storage /20 }}
          </template>
        </el-table-column>
        <el-table-column lable="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="handleDetail()">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import {getBookList} from "@/api/product.js"
  export default {
    name: 'selectSessionList',
    data() {
      return {
        list: null,
        listLoading: false
      }
    },
    created() {
      this.getList();
    },
    methods: {
      handleDetail(index,row){
        this.$message({
          message:'点击跳转详情页面',
          type:'success'
        })
      },
      getList() {
        let params ={
          pageindex:this.$route.query.id,
          pagesize:5
        }
        getBookList(params).then(res=>this.list = res.booklist)
      }
    }
}
</script>
<style scoped>
.operate-container {
  margin-top: 0;
}
</style>

