<template>
  <div class="mainContainer">
    <el-row gutter="30">
      <el-col :span="14">
        <div class="top-content">
          <div>
            <img class="avatar" :src="avatar" />
            <div class="userinfo">
              <p style="font-size: 35px; margin-bottom: 0">{{ name }}</p>
              <p style="font-size: 20px">前端开发</p>
              <hr style="width: 200px" />
              <div class="contentIcon">
                <svg-icon
                  icon-class="活动中心"
                  class="I-color"
                  sizeStyle="big"
                  style="color: white"
                ></svg-icon>
                <svg-icon
                  icon-class="预警"
                  class="I-color"
                  sizeStyle="big"
                  style="color: white"
                ></svg-icon>
                <svg-icon
                  icon-class="系统设置"
                  class="I-color"
                  sizeStyle="big"
                  style="color: white"
                ></svg-icon>
                <svg-icon
                  icon-class="店铺管理"
                  class="I-color"
                  sizeStyle="big"
                  style="color: white"
                ></svg-icon>
              </div>
            </div>
          </div>
          <div class="top-bottom">
            人生就是由欲望不满足而痛苦和满足之后无趣这两者所构成。你满心期待着未来的某个快乐，未必理智认知到了它是短暂的而不会持久。人的一生的本质是痛苦，快乐只是昙花一现。
          </div>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="top-content bg-purple-dark">
          <div class="top-right-top">工作动态</div>
          <div class="top-right-middle">latest developments</div>
          <div class="top-right-bottom">
            <div v-for="(item, i) in tablelist" :key="i">
              <user-developer
                :name="item.name"
                :updateTime="item.updateTime"
                :behavior="item.behavior"
              ></user-developer>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row gutter="30">
      <el-col :span="12">
        <div class="bottom-content bg-purple">
          <el-steps direction="vertical" :active="1">
            <el-step title="任务一"></el-step>
            <el-step title="任务二"></el-step>
            <el-step title="任务三"></el-step>
            <el-step title="任务四"></el-step>
            <el-step title="任务五"></el-step>
            <el-step
              title="任务六"
              description="这是一段很长很长很长的描述性文字"
            ></el-step>
          </el-steps>
        </div>
      </el-col>
      <el-col :span="4">
        <el-row>
          <div class="Athird-content bg-purple">
            <img
              src="../../../static/爱心.png"
              style="width: 70px; height: 70px; margin-top: -10px"
            />
            <div style="font-size: 20px; margin-bottom: 10px">新提醒</div>
            <div style="font-size: 18px">500+</div>
          </div>
        </el-row>
        <el-row>
          <div class="Athird-content bg-purple">
            <img
              src="../../../static/已读邮件.png"
              style="width: 70px; height: 70px; margin-top: -10px"
            />
            <div style="font-size: 20px; margin-bottom: 10px">新邮件</div>
            <div style="font-size: 18px">40+</div>
          </div>
        </el-row>
        <el-row>
          <div class="Athird-content bg-purple">
            <img
              src="../../../static/公告.png"
              style="width: 70px; height: 70px; margin-top: -10px"
            />
            <div style="font-size: 20px; margin-bottom: 10px">新公告</div>
            <div style="font-size: 18px">87+</div>
          </div>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row>
          <div class="bg-purple Echartcontent">
            <line-race></line-race>
            <img />
          </div>
        </el-row>
        <el-row>
          <div class="bg-purple content last">
            <p style="font-size: 20px">最近联系</p>
            <div
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding-left: 25px;
                max-height: 50px;
                align-item: center;
              "
            >
              <div>
                <img class="itemIage" src="../../../static/avatar.png" />
                <img class="itemIage" src="../../../static/avatar-4.png" />
                <img class="itemIage" src="../../../static/avatar-3.png" />
                <img class="itemIage" src="../../../static/avatar-4.png" />
                <img class="itemIage" src="../../../static/avatar-3.png" />
                <img class="itemIage" src="../../../static/avatar-4.png" />
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                "
              >
                <p style="margin: 0px">284+ 同事</p>
                <button style="border-radius: 12px; border: 2px solid #ffffff">
                  查看更多
                </button>
              </div>
            </div>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import userDeveloper from "../../components/userDeveloper/index.vue";
import lineRace from "../../components/Echarts/components/lineRace.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      tablelist: [
        { name: "名字", updateTime: "15分钟以前", behavior: "删库并且跑路了" },
        {
          name: "名字2",
          updateTime: "30分钟以前",
          behavior: "删库并且跑路了2",
        },
        {
          name: "名字3",
          updateTime: "45分钟以前",
          behavior:
            "删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3",
        },
        {
          name: "名字3",
          updateTime: "45分钟以前",
          behavior:
            "3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了33删库并且跑路了3删库并且跑路了33删库并且跑路了3删库并且跑路了33删库并且跑路了3删库并且跑路了33删库并且跑路了3删库并且跑路了33删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3",
        },
        {
          name: "名字3",
          updateTime: "45分钟以前",
          behavior:
            "3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3",
        },
        {
          name: "名字3",
          updateTime: "45分钟以前",
          behavior:
            "删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3删库并且跑路了3",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["name", "roles", "avatar"]),
  },
  components: {
    userDeveloper,
    lineRace,
  },
};
</script>

<style scoped>
.mainContainer {
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 40px;
}
.top-content {
  display: flex;
  flex-direction: column;
  align-content: center;
  background: #4d53e0;
  border-radius: 15px;
  height: 450px;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 30px;
}
.top-bottom {
  width: 700px;
  margin-top: 35px;
  margin-left: 80px;
  color: white;
}
.avatar {
  display: block;
  height: 250px;
  width: 250px;
  position: absolute;
  left: 150px;
  border-radius: 125px;
}
.userinfo {
  color: white;
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 170px;
  height: 250px;
}
.top-right-top {
  width: 100%;
  margin: 0px 0px 10px 0px;
}
.top-right-middle {
  width: 100%;
  margin: 0px 0px 10px 0px;
}
.top-right-bottom {
  flex: 1;
  width: 100%;
  overflow-y: scroll;
}
.content {
  height: 170px;
  border-radius: 25px;
}
.contentIcon {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.bottom-content {
  border-radius: 15px;
  padding: 20px;
  height: 600px;
}
.Athird-content {
  border-radius: 15px;
  height: 185px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.Echartcontent {
  height: 400px;
  width: 100%;
  border-radius: 25px;
}

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.I-color {
  color: red;
}
.last {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
}
.itemIage {
  width: 50px;
  height: 50px;
  margin-left: -25px;
  border-radius: 50px;
}
.itemIage:hover {
  width: 55px;
  height: 55px;
  margin-left: -25px;
  border-radius: 50px;
}
</style>