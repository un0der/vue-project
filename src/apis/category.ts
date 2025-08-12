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


