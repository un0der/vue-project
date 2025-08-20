import instance from "@/utils/https";
/*
params: {
  orderState:0,
  page:1,
  pageSize:2
}
*/
export const getUSerOrder = (params) => {
  return instance.get('/member/order', { params })
}