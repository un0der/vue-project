import instance from "@/utils/https";
export function getDetailAPI(id: any) {
  return instance.get('/goods', { params: { id } })
}