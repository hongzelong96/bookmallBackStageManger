<template>
  <div class="background">
    <el-card class="login-form-layout">
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
        <!-- input登录用户名 -->
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名"
            name="username"
            type="text"
            v-model="loginForm.username"
          >
            <span slot="prefix">
              <svg-icon icon-class="login-user" class="color-main" sizeStyle='normal' ></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <!-- input登录密码 -->
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            name="password"
            :type="pwdType"
            v-model="loginForm.password"
            @keyup.enter.native="handleLogin"
          >
            <span slot="prefix">
              <svg-icon icon-class="login-pw" class="color-main" sizeStyle='normal'></svg-icon>
            </span>
            <span slot="suffix" v-show="pwdshow" @click="showPwd">
              <svg-icon icon-class="pwInvisible" class="color-main" sizeStyle='normal'></svg-icon>
            </span>
            <span slot="suffix" v-show="!pwdshow" @click="showPwd">
              <svg-icon icon-class="pwVisible" class="color-main" sizeStyle='normal'></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item style="margin-bottom: 60px; text-align: center">
          <el-button
            style="width: 45%"
            type="primary"
            :loading="loading"
            @click.native.prevent="handleLogin"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { isvalidUsername } from "@/utils/validate";
export default {
  name: "login",
  data() {
    const validatausername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error("密码小于3位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: '',
        password: '',
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validatausername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePass },
        ],
      },
      pwdshow:false,
      loading: false,
      pwdType: "password",
      dialogVisible: false,
      supportDialogVisible: false,
    }
  },
  methods:{
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
        this.pwdshow = true;
      } else {
        this.pwdType = "password";
        this.pwdshow = false
      }
    },
    handleLogin() {
      console.log("login")
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          console.log("valid name and pw")
          this.$store.dispatch('Login',this.loginForm).then(()=>{
            this.loading =false;
            this.$router.push({path:'/'})
          }).catch((err)=>{
            console.log("err in handleLogin",err)
            this.loading =false
          })
        }
        else{
        console.log('参数验证不合法！')
        return false
        }
      })
    }
  }
}
</script>

<style>
body{
  margin: 0;
}
.background{
      background: linear-gradient(140deg,rgb(41,128,185) 0%,rgb(48,65,86) 100%) no-repeat;
    /* width: 300px; */
    position:absolute;        
    bottom:0;        
    top:0;        
    left:0;       
    right:0;
}
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409eff;
}

.login-title {
  text-align: center;
}

.login-center-layout {
  background: #409eff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
</style>