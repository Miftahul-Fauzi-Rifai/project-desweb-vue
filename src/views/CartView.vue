<template>
  <div class="cart-page bg-gray-50 min-h-screen pb-20">
    <CartHero />
    
    <CartList />
  </div>
</template>

<script setup>
// Import components
import CartHero from '../components/Cart/CartHero.vue'
import CartList from '../components/Cart/CartList.vue'
</script>