<template>
  <div>
    <div v-if="whichDevice() === true">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card shadow="hover" class="mgb20" style="height: 252px">
            <div class="user-info">
              <img :src="avatar" class="user-avator" alt />
              <div class="user-info-cont">
                <div class="user-info-name">{{ name }}</div>
                <div>权限：{{ roles }}</div>
              </div>
            </div>
            <div class="user-info-list">
              欢迎登录：{{ name }}
              <span>{{ getdate() }}</span>
            </div>
            <div class="user-info-list">
              上次登录地点：
              <span></span>
            </div>
          </el-card>
          <el-card shadow="hover" style="height: 252px">
            <template #header>
              <div class="clearfix">
                <span>访客留存比</span>
              </div>
            </template>
            访客点击
            <el-progress :percentage="71.3" color="#42b983"></el-progress
            >浏览详情
            <el-progress :percentage="24.1" color="#f1e05a"></el-progress>收藏
            <el-progress :percentage="13.7"></el-progress>下单
            <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
          </el-card>
        </el-col>
        <el-col :span="16">
          <el-row :gutter="20" class="mgb20">
            <el-col :span="8">
              <!-- 今日访问数量 -->
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <div class="grid-content grid-con-1">
                  <i class="el-icon-user-solid grid-con-icon"></i>
                  <div class="grid-cont-right">
                    <div class="grid-num">1234</div>
                    <div>今日用户访问量</div>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <!-- 未处理订单 -->
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <div class="grid-content grid-con-2">
                  <i class="el-icon-message-solid grid-con-icon"></i>
                  <div class="grid-cont-right">
                    <div class="grid-num">321</div>
                    <div>未处理订单量</div>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <!-- 客户消息 -->
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <div class="grid-content grid-con-3">
                  <i class="el-icon-s-goods grid-con-icon"></i>
                  <div class="grid-cont-right">
                    <div class="grid-num">150</div>
                    <div>客户消息数量</div>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <!-- 待办事项 -->
          <el-card shadow="hover" style="height: 403px">
            <template #header>
              <div class="clearfix">
                <span>待办事项</span>
                <el-button style="float: right; padding: 3px 0" type="text"
                  >添加</el-button
                >
              </div>
            </template>

            <el-table :show-header="false" :data="todoList" style="width: 100%">
              <el-table-column width="40">
                <template #default="scope">
                  <el-checkbox v-model="scope.row.status"></el-checkbox>
                </template>
              </el-table-column>
              <el-table-column>
                <template #default="scope">
                  <div
                    class="todo-item"
                    :class="{
                      'todo-item-del': scope.row.status,
                    }"
                  >
                    {{ scope.row.title }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column width="60">
                <template>
                  <i class="el-icon-edit" @click="editTodo()"></i>
                  <i class="el-icon-delete" @click="deleteTodo"></i>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="clearfix">
            <el-card shadow="hover" style="height: 500px">
              <my-carousel></my-carousel>
            </el-card>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="clearfix">
            <el-card shadow="hover" style="height: 500px">
              <template #header>
                <div class="clearfix">
                  <span>日志更新</span>
                </div>
              </template>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>

    <!--手机端-->
    <div v-else>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-card shadow="hover" class="mgb20" style="height: 252px">
            <div class="user-info">
              <img src="@/assets/logo.png" class="user-avator" alt />
              <div class="user-info-cont">
                <div class="user-info-name">{{ name }}</div>
                <div>{{ role }}</div>
              </div>
            </div>
            <div class="user-info-list">
              欢迎登录：{{ name }}
              <span>{{ getdate() }}</span>
            </div>
            <div class="user-info-list">
              上次登录地点：
              <span></span>
            </div>
          </el-card>
          <el-card shadow="hover" style="height: 252px">
            <template #header>
              <div class="clearfix">
                <span>访客留存比</span>
              </div>
            </template>
            访客点击
            <el-progress :percentage="71.3" color="#42b983"></el-progress
            >浏览详情
            <el-progress :percentage="24.1" color="#f1e05a"></el-progress>收藏
            <el-progress :percentage="13.7"></el-progress>下单
            <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-row :gutter="20" class="mgb20">
            <el-col :span="8">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <div class="grid-content grid-con-1">
                  <i class="el-icon-user-solid grid-con-icon"></i>
                  <div class="grid-cont-right">
                    <div class="grid-num">1234</div>
                    <div>今日用户访问量</div>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <div class="grid-content grid-con-2">
                  <i class="el-icon-message-solid grid-con-icon"></i>
                  <div class="grid-cont-right">
                    <div class="grid-num">321</div>
                    <div>未处理订单量</div>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <div class="grid-content grid-con-3">
                  <i class="el-icon-s-goods grid-con-icon"></i>
                  <div class="grid-cont-right">
                    <div class="grid-num">150</div>
                    <div>客户消息数量</div>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-card shadow="hover" style="height: 403px">
            <template #header>
              <div class="clearfix">
                <span>待办事项</span>
                <el-button style="float: right; padding: 3px 0" type="text"
                  >添加</el-button
                >
              </div>
            </template>

            <el-table :show-header="false" :data="todoList" style="width: 100%">
              <el-table-column width="40">
                <template #default="scope">
                  <el-checkbox v-model="scope.row.status"></el-checkbox>
                </template>
              </el-table-column>
              <el-table-column>
                <template #default="scope">
                  <div
                    class="todo-item"
                    :class="{
                      'todo-item-del': scope.row.status,
                    }"
                  >
                    {{ scope.row.title }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column width="60">
                <template>
                  <i class="el-icon-edit" @click="editTodo()"></i>
                  <i class="el-icon-delete" @click="deleteTodo"></i>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-card shadow="hover">
            <multiple-y />
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-card shadow="hover">
            <china />
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import wordcloudTry from "../../components/Echarts/components/china.vue";
import China from "../../components/Echarts/components/china.vue";
import MultipleY from "../../components/Echarts/components/MultipleY.vue";
import MyCarousel from "../../components/Echarts/MyCarousel.vue";
export default {
  components: { MultipleY, China, wordcloudTry, MyCarousel },
  methods: {
    getdate() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();

      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + " 年 " + month + " 月 " + strDate + " 日 ";
      return currentdate;
    },
    editTodo() {
      console.log("edit");
    },
    deleteTodo() {
      console.log("deee");
    },
    whichDevice() {
      if (this.$store.getters.device === "mobile") {
        console.log("isMobile");
        return false;
      }
      console.log("ISdesktop");
      return true;
    },
  },
  mounted() {
    this.whichDevice();
  },
  computed: {
    ...mapGetters(["device", "name", "roles", "avatar"]),
  },
  data() {
    return {
      todoList: [
        {
          title: "修复几个bug",
          status: false,
        },
        {
          title: "处理退还订单",
          status: false,
        },
        {
          title: "催促出库",
          status: false,
        },
        {
          title: "完成周期报表",
          status: false,
        },
        {
          title: "添加上几个bug",
          status: true,
        },
        {
          title: "早点睡觉",
          status: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}

.schart {
  width: 100%;
  height: 600px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
