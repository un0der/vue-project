import instance from "@/utils/https";
//加入购物车
export const inserCartAPI = ({ skuId, count }) => {
  return instance.post('/member/cart', { skuId, count })
}
//获取最新购物车列表
export const findNewCartListAPI = () => {
  return instance.get("/member/cart")
}
//删除
export const delCartAPI = (ids) => {
  return instance.delete('/member/cart', { data: { ids } })
}
//合并
export const mergeCartAPI = (data) => {
  return instance.post('/member/cart/merge', data)
}
