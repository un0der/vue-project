import instance from "@/utils/https";
export function getDetailAPI(id: any) {
  return instance.get('/goods', { params: { id } })
}
/**
 * 获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */
interface HotGoodsParams {
  id: any;
  type: any;
  limit?: any;
}
export const getHotGoodsAPI = ({ id, type, limit = 3 }: HotGoodsParams) => {
  return instance({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}