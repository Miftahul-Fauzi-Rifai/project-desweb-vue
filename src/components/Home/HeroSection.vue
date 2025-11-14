<template>
  <section class="relative h-[500px] md:h-[600px] bg-gray-900">
    <div class="swiper hero-swiper h-full">
      <div class="swiper-wrapper">
        <!-- Slide 1 -->
        <div class="swiper-slide relative">
          <img src="/images/main-slider/5.jpg" alt="Mountain Bikes" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-40"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 class="text-4xl md:text-6xl font-bold mb-4">Mountain Bikes</h2>
            <p class="text-lg md:text-2xl mb-6">Conquer any terrain with our premium mountain bikes</p>
            <a href="#" class="bg-primary hover:bg-opacity-90 text-white font-semibold px-8 py-3 rounded-full transition">Shop Now</a>
          </div>
        </div>
        
        <!-- Slide 2 -->
        <div class="swiper-slide relative">
          <img src="/images/main-slider/2.jpg" alt="Road Bikes" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-40"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 class="text-4xl md:text-6xl font-bold mb-4">Road Bikes</h2>
            <p class="text-lg md:text-2xl mb-6">Speed and performance for the ultimate ride</p>
            <a href="#" class="bg-white hover:bg-opacity-90 text-gray-dark font-semibold px-8 py-3 rounded-full transition">Explore Collection</a>
          </div>
        </div>
        
        <!-- Slide 3 -->
        <div class="swiper-slide relative">
          <img src="/images/main-slider/4.jpg" alt="Accessories" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-40"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 class="text-4xl md:text-6xl font-bold mb-4">Folding Bikes</h2>
            <p class="text-lg md:text-2xl mb-6">Compact and portable bikes for urban commuting</p>
            <a href="#" class="bg-primary hover:bg-opacity-90 text-white font-semibold px-8 py-3 rounded-full transition">Shop Folding Bikes</a>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

onMounted(() => {
  new Swiper('.hero-swiper', {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
})
</script>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  color: white;
}

.swiper-pagination-bullet-active {
  background-color: #FF6B6B;
}
</style>
