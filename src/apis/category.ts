import instance from "@/utils/https";
export function getCategoryAPI(id: number) {
  return instance.get('/category', { params: { id } })//实际请求的 URL 会是/category?id=123
}



