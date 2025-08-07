import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout';

export const useCategoryStore = defineStore('category', () => {
  const categorylist = ref([])

  const category = async () => {
    //await 会等待 Promise 完成，并将 Promise 解析后的结果赋值给 res
    //所以 res 是 API 调用成功后返回的实际数据，而不是 Promise 对象
    const res = await getCategoryAPI()
    categorylist.value = res.result
    return res
  }
  //虽然 res 是实际数据，但 category() 函数本身仍然返回一个 Promise


  return { category, categorylist }
})