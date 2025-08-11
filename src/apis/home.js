import instance from "@/utils/https";
export function getBannerAPI(params = {}) {
  const { distributionSite = '1' } = params
  return instance.get('home/banner', {
    params: {
      distributionSite
    }
  })
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