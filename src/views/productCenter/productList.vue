<template>
  <div>
    <el-card shadow="never">
      <div>
        <i></i>
        <span>筛选搜索</span>
        <el-form :model="form">
          <el-form-item label="搜索方式：">
            <el-select
              v-model="searchQuery.searchway"
              placeholder="关键词"
              clearable
              style="width:20px,margin-bottom:15px"
            >
              <el-option
                v-for="item in sreachOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-input
              style="width: 30%"
              v-model="searchQuery.searchInfo"
              @keypress.native.enter="handleSearch()"
            ></el-input>
            <el-button
              style="float: right"
              type="primary"
              size="small"
              @click="handleSearch()"
            >
              查询
            </el-button>
            <el-button
              style="float: right; margin-right: 15px"
              size="small"
              @click="handleReset()"
              >默认列表</el-button
            >
            <el-button
              style="float: right; margin-right: 15px"
              size="small"
              @click="handleClean()"
            >
              重置条件
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <div style="min-width: 1425px">
      <el-table
        :data="tableData"
        v-loading="loading"
        border
        stripe
        highlight-current-row
        height="700px"
        style="width: 100%;minwidth"
        ref="mytable"
      >
        <el-table-column
          prop="img"
          label="img"
          width="200"
          align="center"
          v-show="showPic"
        >
          <template width="90" slot-scope="scope">
            <picture-for-list :picArr="scope.row.pictureArr"></picture-for-list>
          </template>
        </el-table-column>
        <el-table-column property="id" label="id" width="80" align="center">
        </el-table-column>
        <el-table-column
          property="name"
          label="书名"
          width="150"
          align="center"
        >
        </el-table-column>
        <el-table-column
          property="author"
          label="作者"
          width="150"
          align="center"
        >
        </el-table-column>
        <el-table-column
          property="storage"
          label="库存"
          width="80"
          align="center"
        >
        </el-table-column>
        <el-table-column
          property="price"
          label="价格"
          width="200"
          align="center"
        >
        </el-table-column>
        <el-table-column
          property="label"
          label="标签"
          width="150"
          align="center"
        >
          <template slot-scope="scope">
            <p>
              <el-switch v-model="scope.row.hot" active-text="热销">
              </el-switch>
            </p>
            <p>
              <el-switch v-model="scope.row.public" active-text="上架">
              </el-switch>
            </p>
          </template>
        </el-table-column>
        <el-table-column property="description" label="描述" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center" width="150">
          <template slot-scope="scope">
            <div>
              <el-button @click="HandlerUpdate(scope.row.id)">修改 </el-button>
              <el-button @click="HandlerDelet(scope.row.id)"> 删除 </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="paginations.pageIndex"
          :page-sizes="paginations.pageSizes"
          :page-size="paginations.pageSize"
          :layout="paginations.layout"
          :total="listTotal"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getBookList,
  getBookListByName,
  getBookListByAuthor,
  getBookListBySth,
  getBookListByCategory,
  deletBook,
} from "@/api/product";
import pictureForList from "@/components/PictureForList";
export default {
  components: {
    pictureForList,
  },
  name: "productList",
  data() {
    return {
      paginations: {
        pageIndex: 1, // 当前位于哪页
        pageSize: 10, // 1页显示多少条
        pageSizes: [10, 15, 20, 30], //每页显示多少条
        layout: "total, sizes, prev, pager, next, jumper", // 翻页属性
      },
      resdata: [],
      tableData: [],
      loading: true,
      listTotal: 0,
      showPic: true,
      form: {},
      isHot: true,
      isPublic: true,
      currentSearchType: "none",
      sreachOption: [
        {
          value: "name",
          label: "书名搜索",
        },
        {
          value: "author",
          label: "作者名搜索",
        },
      ],
      searchQuery: {
        searchway: "",
        searchInfo: "",
      },
      scrollTop: 0,
    };
  },
  created(){
    if (this.$route.query.categoryId) {
      console.log("req bycategoryId");
      this.searchQuery.searchInfo = this.$route.query.categoryId;
      let params = {
        pageindex: this.paginations.pageIndex - 1,
        pagesize: this.paginations.pageSize,
        searchInfo: this.$route.query.categoryId,
      };
      this.currentSearchType = "category";
      this.handleReq(params, "category");
    } else {
      console.log("normal req");
      let params = {
        pageindex: this.paginations.pageIndex - 1,
        pagesize: this.paginations.pageSize,
      };
      this.handleReq(params, "none");
    }
  },
  mounted() {
    this.$refs.mytable.bodyWrapper.addEventListener(
      "scroll",
      (res) => {
        let height = res.target;
        this.scrollTop = height.scrollTop;
      },
      false
    );
  },
  beforeDestroy() {
    console.log("beforeDestory");
    this.$refs.table.bodyWrapper.removeEventListener(
      "scroll",
      (res) => {
        let height = res.target;
        this.scrollTop = height.scrollTop;
      },
      false
    );
  },
  activated() {
    if (this.$route.query.update) {
      console.log("成功更新", this.$route.query);
    }
    // setTimeout(() => {
    //   var scrollTop = this.$el.querySelector(".el-table__body-wrapper");
    //   scrollTop.scrollTop = this.$store.getters.scroll_top;
    // }, 10);
    this.$nextTick(function(){
      console.log("!!!!")
      var scrollTop = this.$el.querySelector(".el-table__body-wrapper");
      scrollTop.scrollTop = this.$store.getters.scroll_top;
      console.log("scrollTop.scrollTop",scrollTop.scrollTop)
    })
  },
  watch: {
    resdata(newval) {
      this.tableData = newval;
    },
  },
  beforeRouteLeave(to, from, next) {
    if (to.path == "/productCenter/updateProduct") {
      from.meta.keepAlive = true;
      this.$store.commit("SAVE_SCROLL", this.scrollTop);
    } else {
      from.meta.keepAlive = false;
    }
    next();
  },
  methods: {
    //处理请求
    handleReq(params, type) {
      this.loading = true;
      switch (type) {
        case "name":
          getBookListByName(params)
            .then((res) => this.handleRes(res))
            .catch((error) => {
              console.log(error);
            });
          break;
        case "author":
          getBookListByAuthor(params)
            .then((res) => this.handleRes(res))
            .catch((error) => {
              console.log(error);
            });
          break;
        case "none":
          getBookList(params)
            .then((res) => this.handleRes(res))
            .catch((error) => {
              console.log(error);
            });
          break;
        case "default":
          getBookListBySth(params)
            .then((res) => this.handleRes(res))
            .catch((error) => {
              console.log(error);
            });
          break;
        case "category":
          getBookListByCategory(params)
            .then((res) => this.handleRes(res))
            .catch((error) => {
              console.log(error);
            });
      }
    },
    //处理请求结果
    handleRes(res) {
      //console.log("res===>", res);
      this.listTotal = res.count;
      this.resdata = res.booklist;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    //查询按钮
    handleSearch() {
      if (
        this.searchQuery.searchway != "默认" &&
        this.searchQuery.searchInfo == ""
      ) {
        this.$message.error("搜索条件和关键词不能为空！！！");
      } else {
        this.paginations.pageIndex = 1;
        let params = {
          pageindex: this.paginations.pageIndex - 1,
          pagesize: this.paginations.pageSize,
          searchway: this.searchQuery.searchway,
          searchInfo: this.searchQuery.searchInfo,
        };
        this.handleReq(params, this.searchQuery.searchway);
        this.currentSearchType = this.searchQuery.searchway;
      }
    },
    //跳转到修改页面
    HandlerUpdate(id) {
      this.$router.push({ path: "updateProduct", query: { id: id } });
    },
    //默认队列
    handleReset() {
      let params = {
        pageindex: this.paginations.pageIndex - 1,
        pagesize: this.paginations.pageSize,
      };
      this.handleReq(params, "none");
      this.currentSearchType = "none";
    },
    //重置条件
    handleClean() {
      this.searchQuery.searchway = "";
      this.searchQuery.searchInfo = "";
    },
    //改变一页显示多少
    handleSizeChange(val) {
      this.paginations.pageSize = val;
      this.paginations.pageIndex = 1;
      let params = {
        pageindex: this.paginations.pageIndex - 1,
        pagesize: this.paginations.pageSize,
        searchway: this.searchQuery.searchway,
        searchInfo: this.searchQuery.searchInfo,
      };
      this.handleReq(params, this.currentSearchType);
    },
    //改变页面
    handleCurrentChange(val) {
      this.paginations.pageIndex = val;
      let params = {
        pageindex: this.paginations.pageIndex - 1,
        pagesize: this.paginations.pageSize,
        searchway: this.searchQuery.searchway,
        searchInfo: this.searchQuery.searchInfo,
      };
      this.handleReq(params, this.currentSearchType);
    },
    //删除按钮
    HandlerDelet(val) {
      deletBook({ id: val }).then((res) => {
        if (res.msg.includes("success")) {
          this.$message({
            message: "删除成功",
            type: "success",
          });
        }
        console.log(res.msg.includes("success"));
        var index = -1;
        for (var i in this.tableData) {
          if (this.tableData[i]["id"] == val) {
            index = i;
            break;
          }
        }
        if (index != -1) {
          this.tableData.splice(index, 1);
        }
      });
    },
  },
};
</script>

<style scpoed>
</style>


