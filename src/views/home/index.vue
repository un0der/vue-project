<script setup>
import homecategory from './components/homecategory.vue'
import homebanner from './components/homebanner.vue'
import homenew from './components/homenew.vue'
import homehot from './components/homehot.vue'
import homeproduct from './components/homeproduct.vue'
</script>

<template>
  <div class="container">
    <homecategory />
    <homebanner />
  </div>
  <homenew />
  <homehot />
  <homeproduct />
</template>