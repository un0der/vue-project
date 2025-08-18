import { defineStore } from "pinia";
import { computed, ref } from "vue";

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
  const singleCheck = (i, selected) => {
    const item = cartList.value.find((item) => i.skuId === item.skuId)
    if (item) { item.selected = selected }
  }
  const allcount = computed(() => cartList.value.reduce((total, current) => { return total + current.count }, 0))
  const allprice = computed(() => cartList.value.reduce((total, current) => { return total + current.count * current.price }, 0))
  return ({ cartList, addCart, delCart, allcount, allprice, singleCheck })
}, {
  persist: true,
}
)