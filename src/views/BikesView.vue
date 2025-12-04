<template>
  <div class="bikes-page bg-gray-50 min-h-screen pb-20">
    
    <BikeHero :title="pageTitle" />
    
    <BikeCatalog />

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import BikeHero from '../components/Bikes/HeroSectionBikes.vue'
import BikeCatalog from '../components/Bikes/CatalogBikes.vue'

const route = useRoute()

const pageTitle = computed(() => {
  const category = route.params.category

  if (!category) return 'All Bikes Collection'
  
  return category.replace(/-/g, ' ') + ' Collection'
})
</script>