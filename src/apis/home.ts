import instance from "@/utils/https";
export function getBannerAPI() {
  return instance.get('home/banner')
}

export const findNewAPI = () => {
  return instance.get('home/new')
}
export const getHotAPI = () => {
  return instance.get('home/hot')
}
export const getGoodsAPI = () => {
  return instance.get('home/goods')
}