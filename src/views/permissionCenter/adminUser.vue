<template>
  <div>
    <div v-show="showDetail2" class="searchContainer">
      <div style = "width:70%">
        <el-input class="input" placeholder="关键词"></el-input>
      </div>
      <el-button type="primary" round> 搜索</el-button>
    </div>
    <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__zoomOutDown">
    <div v-show="showDetail2" class="listContainer" style="min-width: 1500px">
      <template v-for="(item, index) in userdata">
        <el-card :key="index" class="cardContianer">
          <div class="cardLayout">
            <div class="ImgLayout">
              <img :src="item.img" class="user-avator" />
              <div class="word">
                <span>{{ item.name }}</span>
                <span>{{ item.statu == "online" ? "在线" : "离线" }}</span>
                <svg-icon :icon-class="item.statu" sizeStyle='normal'></svg-icon>
              </div>
            </div>
            <div style="width: 50%; margin-left: 73px; margin-top: 10px">
              <p>最近登录时间：{{ item.lastLgTime }}</p>
              <p>访问权限:{{ item.permission }}</p>
              <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                  更多<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item divided command="a"
                    >查看详情</el-dropdown-item
                  >
                  <el-dropdown-item divided command="b"
                    >修改权限</el-dropdown-item
                  >
                  <el-dropdown-item divided command="c">登出</el-dropdown-item>
                  <el-dropdown-item divided command="d">删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </el-card>
      </template>
    </div>
    </transition>
    <transition enter-active-class="animate__animated animate__zoomIn animate__delay-1s	" leave-active-class="animate__animated animate__zoomOut">
    <div v-show="showDetail" class="detailContainer">
      <el-card>
        <el-form :model="StaffDetail">
          <img src="../../../static/avatar-hong.png" class="user-avator" />
          <el-form-item label="员工姓名">{{StaffDetail.name}}</el-form-item>
          <el-form-item label="工作时长">{{StaffDetail.workingHours}}</el-form-item>
          <el-form-item label="在线时长">{{StaffDetail.onlineTime}}</el-form-item>
          <el-form-item label="是否在线">{{StaffDetail.IsOnline}}</el-form-item>
          <el-form-item label="权限">{{StaffDetail.permission}}</el-form-item>
        </el-form>
        <el-button @click="handleBack">返回</el-button>
      </el-card>
    </div>
    </transition>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>{{ dialogDetail.message }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      StaffDetail:{name:"paul_hong",workingHours:"8小时",onlineTime:"7小时",IsOnline:"在线",permission:"admin权限"},
      dialogVisible: false,
      showDetail:false,
      showDetail2:true,
      userdata: [
        {
          name: " paul_hong",
          statu: "online",
          img: "../static/avatar-hong.png",
          lastLgTime: "2022-2-5",
          permission: ["admin"],
        },
        {
          name: "小黄",
          statu: "offline",
          img: "../static/avatar.png",
          lastLgTime: "2022-2-3",
          permission: ["admin"],
        },
        {
          name: "小青",
          statu: "online",
          img: "../static/avatar.png",
          lastLgTime: "2022-2-0",
          permission: ["developer"],
        },
        {
          name: "小王",
          statu: "online",
          img: "../static/avatar-4.png",
          lastLgTime: "2022-1-31",
          permission: ["developer"],
        },
        {
          name: "小杨",
          statu: "offline",
          img: "../static/avatar-5.png",
          lastLgTime: "2022-1-31",
          permission: ["developer"],
        },
        {
          name: "小紫",
          statu: "online",
          img: "../static/avatar-6.png",
          lastLgTime: "2022-1-31",
          permission: ["operator"],
        },
        {
          name: "小朱",
          statu: "online",
          img: "../static/avatar-7.png",
          lastLgTime: "2022-1-28",
          permission: ["operator"],
        },
        {
          name: "小唐",
          statu: "offline",
          img: "../static/avatar-8.png",
          lastLgTime: "2022-1-28",
          permission: ["operator"],
        },
        {
          name: "小沈",
          statu: "online",
          img: "../static/avatar-9.png",
          lastLgTime: "2022-1-22",
          permission: ["operator"],
        },
        {
          name: "小龚",
          statu: "online",
          img: "../static/avatar-4.png",
          lastLgTime: "2022-1-22",
          permission: ["operator"],
        },
        {
          name: "小龚",
          statu: "online",
          img: "../static/avatar-7.png",
          lastLgTime: "2022-1-22",
          permission: ["operator"],
        },
      ],
      dialogDetail: {
        message: "",
      },
    };
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case "c":
          this.dialogVisible = true;
          this.dialogDetail.message = "是否强制使其登出？";
          break;
        case "d":
          this.dialogVisible = true;
          this.dialogDetail.message = "是否删除该用户？";
          break;
        case "a":
          this.showDetail = true
          this.showDetail2 = false
      }
    },
    handleClose() {},
    handleBack(){
      this.showDetail = false
      this.showDetail2 = true
    }
  },
};
</script>
<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}
.listContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: flex-start;
  margin-left:100px;
}
.cardLayout {
  display: flex;
  flex-flow: row wrap;
}
.cardContianer {
  width: 30%;
  margin: 15px;
}
.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.searchContainer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 20px;
}
.word {
  margin-left: 12px;
}
.input {
  width: 60%;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.detailContainer{
  width: 100%;
  height: 100%;
}
</style>