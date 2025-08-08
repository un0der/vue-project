<script setup>
import homecategory from './components/homecategory.vue'
import homebanner from './components/homebanner.vue'
import homenew from './components/homenew.vue'
import homehot from './components/homehot.vue'
import homeproduct from './components/homeproduct.vue'
import homepanel from './components/homepanel.vue'

</script>

<template>
  <div class="container">
    <homecategory />
    <homebanner />
  </div>
  <homenew />
  <homehot />
  <homeproduct />
  <!-- <homepanel title="新鲜好物" subtitle="新鲜出炉 品质靠谱">
    <div>我是新鲜好玩</div>
  </homepanel> -->
   <homepanel title="人气推荐" subtitle="人气爆款 不容错过">
   <p>index哈哈哈</p>
   </homepanel>
</template>