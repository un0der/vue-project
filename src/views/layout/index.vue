<template>
  <div style="height: 2000px;">
    <layoutfixed></layoutfixed>
    <layoutnav></layoutnav>
    <layoutheader></layoutheader>
    
      <!-- home和分类 -->
      <router-view></router-view>
    <layoutnfooter></layoutnfooter>
  </div>
</template>
<style scoped lang="scss">

</style>
<script lang="ts" setup>
import { onMounted } from 'vue';
import layoutfixed from './components/layoutfixed.vue';
import layoutheader from './components/layoutheader.vue';
import layoutnav from './components/layoutnav.vue';
import layoutnfooter from './components/layoutnfooter.vue';
import { useCategoryStore } from '@/stores/category';

const CategoryStore=useCategoryStore()
onMounted(()=>{
  CategoryStore.category()
})
</script>