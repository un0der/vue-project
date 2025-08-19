import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./userStore";
import { findNewCartListAPI, inserCartAPI, delCartAPI } from "@/apis/cart";
export const useCartStore = defineStore('cart', () => {
  const cartList = ref<CartItem[]>([])
  const useStore = useUserStore()
  const isLogin = computed(() => useStore.userInfo.token)
  //更新
  const updataCartList = async () => {
    const res = await findNewCartListAPI() as any
    cartList.value = res.result
  }
  //添加
  const addCart = async (goods) => {
    if (isLogin.value) {
      const { skuId, count } = goods
      await inserCartAPI({ skuId, count })
      updataCartList()
    }
    else {
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) { item.count++ }
      else { cartList.value.push(goods) }
    }

  }
  //删除
  const delCart = async (skuId) => {
    if (isLogin.value) {
      await delCartAPI([skuId])
      updataCartList()
    }
    else {
      cartList.value = cartList.value.filter((item) => { return skuId !== item.skuId })
    }

  }
  //清除购物车
  const clearCart = () => {
    cartList.value = []
  }
  //单选框
  const singleCheck = (i, selected) => {
    const item = cartList.value.find((item) => i.skuId === item.skuId)
    if (item) { item.selected = selected }
  }
  //全选
  const checkAll = (selected) => { cartList.value.forEach((item) => item.selected = selected) }
  const isAll = computed(() => cartList.value.every((item) => item.selected))
  //总价
  const allcount = computed(() => cartList.value.reduce((total, current) => { return total + current.count }, 0))
  const allprice = computed(() => cartList.value.reduce((total, current) => { return total + current.count * current.price }, 0))
  //选中总价
  const selectedCount = computed(() => cartList.value.filter((item) => item.selected).reduce((total, current) => { return total + current.count }, 0))
  const selectedPrice = computed(() => cartList.value.filter((item) => item.selected).reduce((total, current) => { return total + current.count * current.price }, 0))
  return ({ cartList, addCart, delCart, allcount, allprice, singleCheck, isAll, checkAll, selectedCount, selectedPrice, clearCart, updataCartList })
}, {
  persist: true,
}
)