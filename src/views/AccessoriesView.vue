<template>
  <div class="accessories-page bg-gray-50 min-h-screen pb-20">
    
    <AccessoryHero :title="pageTitle" />
    
    <AccessoryCatalog />

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import AccessoryHero from '../components/Accessories/HeroSectionAccessories.vue'
import AccessoryCatalog from '../components/Accessories/CatalogAccessories.vue'

const route = useRoute()

const pageTitle = computed(() => {
  const category = route.params.category
  if (!category) return 'Accessories Collection'
  
  return category.charAt(0).toUpperCase() + category.slice(1) + ' Collection'
})
</script>