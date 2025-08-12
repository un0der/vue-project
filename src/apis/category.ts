import instance from "@/utils/https";
export function getCategoryAPI(id: any) {
  return instance.get('/category', { params: { id } })//实际请求的 URL 会是/category?id=123
}
export const getCategoryFilterAPI = (id: any) => {
  return instance({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data: any) => {
  return instance({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}


