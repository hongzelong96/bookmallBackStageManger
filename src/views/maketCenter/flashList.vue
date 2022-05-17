<template>
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-input style="width:150px" placeholder="活动名搜索">   
        </el-input>
        <el-button
          style="float: right"
          type="primary"
          @click="handleSearchList()"
          size="small"
        >
          查询搜索
        </el-button>
        <el-button
          style="float: right; margin-right: 15px"
          @click="handleResetSearch()"
          size="small"
        >
          重置
        </el-button>
      </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <el-button
        size="mini"
        class="btn-add"
        @click="handleAdd()"
        style="margin-left: 20px"
        >添加活动</el-button
      >
    </el-card>
    <div class="table-container">
      <el-table
        ref="flashTable"
        :data="tableData"
        style="width: 100%"
        v-loading="listLoading"
        border
      >
        <el-table-column
          type="selection"
          width="60"
          align="center"
        ></el-table-column>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="活动标题" align="center">
          <template slot-scope="scope">{{ scope.row.title }}</template>
        </el-table-column>
        <el-table-column label="活动开始时间" width="140" align="center">
          <template slot-scope="scope">{{scope.row.startTime}}</template>
        </el-table-column>
        <el-table-column label="活动结束时间" width="140" align="center">
          <template slot-scope="scope">{{scope.row.endTime}}</template>
        </el-table-column>
        <!--<el-table-column label="开始时间" width="140" align="center">
          <template slot-scope="scope">{{
            scope.row.startDate | formatDate
          }}</template>
        </el-table-column>
        <el-table-column label="结束时间" width="140" align="center">
          <template slot-scope="scope">{{
            scope.row.endDate | formatDate
          }}</template>
        </el-table-column>-->
        <el-table-column label="上线/下线" width="200" align="center">
          <template slot-scope="scope">
            <el-switch
              @change="handleStatusChange(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.status">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleSelectSession(scope.$index, scope.row)"
              >设置商品
            </el-button>
            <el-button
              size="mini"
              type="text"
              @click="handleUpdate(scope.$index, scope.row)"
            >
              编辑
            </el-button>
            <el-button
              size="mini"
              type="text"
              @click="handleDelete(scope.$index, scope.row)"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="添加活动" :visible.sync="dialogVisible" width="40%">
      <el-form
        :model="flashPromotion"
        ref="flashPromotionForm"
        label-width="150px"
        size="small"
      >
        <el-form-item label="活动标题：">
          <el-input
            v-model="flashPromotion.title"
            style="width: 250px"
          ></el-input>
        </el-form-item>
        <el-form-item label="开始时间：">
          <el-date-picker
            v-model="flashPromotion.startTime"
            type="date"
            placeholder="请选择时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间：">
          <el-date-picker
            v-model="flashPromotion.endTime"
            type="date"
            placeholder="请选择时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="上线/下线">
          <el-radio-group v-model="flashPromotion.status">
            <el-radio :label="1">上线</el-radio>
            <el-radio :label="0">下线</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="handleDialogConfirm()" size="small"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {getPromotionList} from '@/api/promotion'
import {formatDate,timeFormatter} from'@/utils/date'

const defaultFlashPromotion = {
    id: null,
    title: null,
    ad:null,
    startTime: null,
    endTime: null,
    threshold:null,
    usrableRange:null,
    status: 0,
  };
export default {
  data() {
    return {
        tableData:[
            

        ],
        listLoading:true,
        listQuery:{
            keyword:''
        },
        flashPromotion:Object.assign({},defaultFlashPromotion),
        dialogVisible: false,
        isEdit:false
    };
  },
  computed:{
      status(){
          var day2 = new Date();
          day2.setTime(day2.getTime());
          console.log("是啊金：",day2)
          return day2
      }
  },
  mounted(){
      getPromotionList().then(res => {
          this.tableData = res.PromotionList
          console.log(this.tableData)
          this.listLoading=false
          })
  },
  methods:{
      handleAdd(){},
      handleStatus(startTime,endTime){
      },
      handleSelectSession(index,row){
          this.$router.push({path: '/maketCenter/flashSession',query:{id:index}})
      },
      handleUpdate(index,row){
          this.dialogVisible = true
          this.isEdit = true
          this.flashPromotion = Object.assign({},row)
      },
      handleDelete(index, row){
          this.$message({
          message: '删除成功',
          type: 'success'
        });
      },
      handleStatusChange(index,row){
      }
  }
};
</script>

<style>
</style>