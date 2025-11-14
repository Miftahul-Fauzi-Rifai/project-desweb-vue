<template>
  <div id="app" class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-grow">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/Common/NavBar.vue'
import Footer from './components/Common/Footer.vue'
</script>

<style>
/* Global styles can be added here if needed */
</style>
