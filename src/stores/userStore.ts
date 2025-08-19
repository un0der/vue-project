import { defineStore } from "pinia";
import { ref } from "vue";
import { LoginAPI } from '@/apis/user';
import { useCartStore } from './cartStore'
import { mergeCartAPI } from "@/apis/cart";
export const useUserStore = defineStore(
  'user',
  () => {
    const cartStore = useCartStore()

    const userInfo = ref<UserInfo>({});
    const getUserInfo = async ({ account, password }: LoginParams) => {
      const res = (await LoginAPI({ account, password })) as any;
      userInfo.value = res.result;
      await mergeCartAPI(cartStore.cartList.map((item) => {
        return {
          skuId: item.skuId,
          selected: item.selected,
          count: item.count
        }
      }))
      cartStore.updataCartList()
    };
    const clearUserInfo = () => {
      userInfo.value = {}
      cartStore.clearCart()
    }
    return { userInfo, getUserInfo, clearUserInfo };
  },
  {
    persist: true,
  }
);