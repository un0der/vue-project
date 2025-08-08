<script setup>

import homepanel from './homepanel.vue';
import {findNewAPI} from "@/apis/home.js"
import { ref, onMounted } from 'vue';
const newlist=ref([])
const getnewlist=async ()=>{
  const res=await findNewAPI()
  newlist.value=res.result
  return res
}
onMounted(()=>{
  getnewlist()
})

</script>

<template>
  <homepanel title="新鲜好物" subtitle="新鲜出炉 品质靠谱">
    <ul class="goods-list">
    <li v-for="item in newlist" :key="item.id">
      <RouterLink to="/">
        <img :src="item.picture" alt="" />
        <p class="name">{{ item.name }}</p>
        <p class="price">&yen;{{ item.price }}</p>
      </RouterLink>
    </li>
  </ul>
  </homepanel>
</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>