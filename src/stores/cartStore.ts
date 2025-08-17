import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cart', () => {
  const cartList = ref<CartItem[]>([])

  const addCart = (goods) => {
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if (item) { item.count++ }
    else { cartList.value.push(goods) }
  }
  const delCart = (skuId) => {
    cartList.value = cartList.value.filter((item) => { return skuId !== item.skuId })
  }
  return ({ cartList, addCart, delCart })
}, {
  persist: true,
}
)