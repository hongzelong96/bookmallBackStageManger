import request from "@/utils/axios";

export function login(data) {
    return request({
        url: '/userlogin',
        method: 'post',
        data: data
    })
}
export function getInfo(params){
  return request({
    url:'/getUserInfo',
    method: 'post',
    data:params
  })
}

export function logout(params) {
    return request({
      url: '/userLogout',
      method: 'get',
      params: params
    })
  }