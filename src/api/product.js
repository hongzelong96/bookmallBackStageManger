import request from '@/utils/axios'

export function getBookList(params) {
    return request({
      url: '/getBooklistByPageInBM',
      method: 'get',
      params: params
  })
}

export function getBookListByName(params){
  return request({
    url:'/getBooklistByName',
    method:'get',
    params:params
  })
}
export function getBookListByAuthor(params){
  return request({
    url:'/getBooklistByAuthor',
    method:'get',
    params:params
  })
}
export function getBookDetail(params){
  return request({
    url:'/getBookDetailInBM',
    method:'get',
    params:params
  })
}

export function updateBookDetail(data){
  return request({
    url:'/updateBookDetail',
    method:'post',
    data:{"data":data}
  })
}

export function getBookListBySth(params){
  return request({
    url:'/getBookListBySth',
    method:"get",
    params:params
  })
}

export function getCategoryPageData(){
  return request({
    url:"/getCategoryPageData",
    method:"get"
  })
}
export function getProductPic(params){
  return request({
    url:'/getPic',
    method:'get',
    params:params
  })
}

export function delePic(params){
  return request({
    url:'/delePic',
    method:'get',
    params:{url:params}
  })
}
export function insertBookDetail(params){
  return request({
    url:'/insertBookDetail',
    method:'post',
    data:params
  })
}
export function getBookListByCategory(params){
  return request({
    url:'/getBooklistByCategoryInBM',
    method:'post',
    data:params
  })
}

export function deletBook(params){
  return request({
    url:'/deletBook',
    method:'get',
    params:params
  })
}