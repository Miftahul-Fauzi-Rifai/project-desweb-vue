<template>
  <section class="bg-gray-900 text-white py-20 text-center">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 capitalize">{{ title }}</h1>
      <p class="text-lg text-gray-300">Lengkapi perjalanan bersepeda Anda dengan perlengkapan terbaik</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>