import request from '@/utils/request'

export function getBaseCategory() {
    return request({
        url: '/product/getBaseCategoryList',
        method: 'get',
    })
}