import request from '@/utils/axios'

export function getPromotionList(){
    return request({
        url:'/getPromotionList',
        method:'get',
    })
}