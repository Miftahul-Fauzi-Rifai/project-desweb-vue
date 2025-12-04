<template>
  <div class="clothing-page bg-gray-50 min-h-screen pb-20">
    <ClothingHero :title="pageTitle" />
    <ClothingCatalog />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Import Components
import ClothingHero from '../components/Clothing/HeroSectionClothing.vue'
import ClothingCatalog from '../components/Clothing/CatalogClothing.vue'

const route = useRoute()

const pageTitle = computed(() => {
  const category = route.params.category
  if (!category) return 'Clothing Collection'
  return category.charAt(0).toUpperCase() + category.slice(1) + ' Collection'
})
</script>