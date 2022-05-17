//import一些登录接口
import { getToken,setToken,removeToken } from "@/utils/auth.js";
import { login,getInfo,logout } from "@/api/login";
import { clipPointsByRect } from "echarts/lib/util/graphic";

const user = {
    state: {
      token: getToken('Token'),
      name: '',
      avatar: '',
      roles: []
    },
  
    mutations: {
      SET_TOKEN: (state, token) => {
        state.token = token
      },
      SET_NAME: (state, name) => {
        state.name = name
      },
      SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
      },
      SET_ROLES: (state, roles) => {
        state.roles = roles
      }
    },
  
    actions: {
      // 登录
      Login({ commit }, userInfo) {
        userInfo.username = userInfo.username.trim()
        return new Promise((resolve, reject) => {
          login(userInfo).then(response => {
            console.log("login====>response",response)
            setToken(response.Token[0])
            commit('SET_TOKEN', response.Token[0])
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
      },
      // 获取用户信息
      GetInfo({ commit, state },token) {
        return new Promise((resolve, reject) => {
          getInfo(token).then(response => {
            // console.log('getinfo=======>',response)
            let req = response.userlist[0]
            let roles = new Array();
            roles = req.roles.split(',');
            if (roles && roles.length > 0) { // 验证返回的roles是否是一个非空数组
              commit('SET_ROLES',roles)
            } else {
              reject('getInfo: roles must be a non-null array !')
            }
            commit('SET_NAME', req.name)
            commit('SET_AVATAR', req.avatar)
            resolve(response)
          }).catch(error => {
            reject(error)
          })
        })
      },
  
      // 登出
      LogOut({ commit, state }) {
        return new Promise((resolve, reject) => {    
          logout(state.token).then(() => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            removeToken()
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
      },
  
      // 前端 登出
      FedLogOut({ commit }) {
        return new Promise(resolve => {
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        })
      }
    }
  }


export default user;