<template>
  <section class="data_section" ref="data_section">
    <el-row :gutter="10" class="row_list">
      <el-col :span="8">
        <div class="row_left row_base">
          <el-col :span="12">
            <div class="pay saleBgcolor data_list rflex">
              <div class="leftItem cflex wflex">
                <p class="investor">{{ $t("index.DaliySelled") }}</p>
                <p class="number">
                  68<span class="perTitle">({{ $t("index.Million") }})</span>
                </p>
              </div>
              <div class="rightItem">
                <icon-svg icon-class="iconfukuan" />
              </div>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="pay taxBgcolor data_list rflex">
              <div class="leftItem cflex wflex">
                <p class="investor">{{ $t("index.DaliyProfit") }}</p>
                <p class="number">
                  30<span class="perTitle">({{ $t("index.Million") }})</span>
                </p>
              </div>
              <div class="rightItem">
                <icon-svg icon-class="iconpay3" />
              </div>
            </div>
          </el-col>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="row_right row_base">
          <el-col :span="6">
            <div class="extenedBgcolor data_list rflex">
              <div class="leftItem cflex wflex">
                <p class="investor">{{ $t("index.OutOfStorage") }}</p>
                <p class="number">
                  686<span class="perTitle"
                    >({{ $t("index.storageNum") }})</span
                  >
                </p>
                <p class="cardText">Decreased by 10%</p>
              </div>
              <div class="rightItem">
                <icon-svg icon-class="iconpay2" />
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="likeBgcolor data_list rflex">
              <div class="leftItem cflex wflex">
                <p class="investor">{{ $t("index.StorageRemnant") }}</p>
                <p class="number">
                  1276<span class="perTitle"
                    >({{ $t("index.storageNum") }})</span
                  >
                </p>
                <p class="cardText">Decreased by 50%</p>
              </div>
              <div class="rightItem">
                <icon-svg icon-class="iconpay1" />
              </div>
            </div>
          </el-col>

          <el-col :span="6">
            <div class="linkBgColor data_list rflex">
              <div class="leftItem cflex wflex">
                <p class="investor">{{ $t("index.GoodReputation") }}</p>
                <p class="number">
                  82367<span class="perTitle">({{ $t("index.num") }})</span>
                </p>
                <p class="cardText">Decreased by 30%</p>
              </div>
              <div class="rightItem">
                <icon-svg icon-class="iconpay" />
              </div>
            </div>
          </el-col>

          <el-col :span="6">
            <div class="keleBgColor data_list rflex">
              <div class="leftItem cflex wflex">
                <p class="investor">{{ $t("index.BadReputation") }}</p>
                <p class="number">
                  827373<span class="perTitle">({{ $t("index.num") }})</span>
                </p>
                <p class="cardText">Decreased by 80%</p>
              </div>
              <div class="rightItem">
                <icon-svg icon-class="iconfufei0" />
              </div>
            </div>
          </el-col>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="row_list">
      <el-col :span="13">
        <sales-table></sales-table>
      </el-col>
      <el-col :span="11">
        <comment-list></comment-list>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="row_list">
      <el-col :span="8">
        <chartTry></chartTry>
      </el-col>
      <el-col :span="8">
        <wordCloudTry></wordCloudTry>
      </el-col>
      <el-col :span="8">
        <stackedHorizontalBar></stackedHorizontalBar>
      </el-col>
    </el-row>
    <el-row>
      <china></china>
    </el-row>
  </section>
</template>

<script>
import salesTable from "./components/salesTable"; // 销售数据表格
import commentList from "./components/commentList"; // 用户评论列表
import chartTry from "./components/chartTry.vue"; //尝试
import wordCloudTry from "./components/wordcloudTry.vue"; //云词尝试
import stackedHorizontalBar from "./components/StackedHorizontalBar.vue"; 
import china from "./components/china.vue";//地图尝试 
export default {
  data() {
    return {};
  },
  components: {
    salesTable,
    commentList,
    chartTry,
    wordCloudTry,
    stackedHorizontalBar,
    china
  },
};
</script>

<style lang="less" scoped>
.data_section {
  margin: 20px;
  border-radius: 2px;
  .row_list {
    margin-bottom: 20px;
    .row_base {
      padding: 10px;
      box-sizing: border-box;
      background: #fff;
      border-radius: 6px;
      height: 120px;
    }
  }
  .data_list {
    text-align: center;
    font-size: 14px;
    border-radius: 6px;
    padding: 10px;
    color: #fff;
    height: 80px;
    .leftItem {
      align-items: start;
      justify-content: space-between;
      text-align: left;
    }
    .rightItem {
      width: 62px;
      display: flex;
      align-items: center;
      justify-content: center;
      .svg-icon {
        font-size: 30px;
      }
    }
    .number {
      font-size: 22px;
      font-weight: bold;
      .perTitle {
        font-size: 13px;
        margin-left: 5px;
      }
    }
  }
  .pay {
    .leftItem {
      justify-content: space-around;
    }
  }
}
</style>
