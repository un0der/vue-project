import instance from "@/utils/https";
//
export const getCheckInfoAPI = () => {
  return instance.get("/member/order/pre")
}
export const createOrderAPI = (data) => {
  return instance.post("/member/order", data)
}