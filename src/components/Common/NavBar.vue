<template>
  <header class="bg-gray-dark sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center py-4 px-4">
      <!-- Logo -->
      <router-link to="/" class="flex items-center">
        <img src="/images/poji-store-logo.jpg" alt="POJI STORE" class="h-14 w-auto">
      </router-link>

      <!-- Hamburger menu (mobile) -->
      <div class="flex lg:hidden">
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <!-- Desktop Menu -->
      <nav class="hidden lg:flex md:flex-grow justify-center">
        <ul class="flex justify-center space-x-6 text-white">
          <li><router-link to="/" class="hover:text-secondary font-semibold transition">Home</router-link></li>
          
          <!-- Bikes Dropdown -->
          <li class="relative group">
            <a href="#" class="hover:text-secondary font-semibold flex items-center">
              Bikes
              <i class="fas fa-chevron-down ml-1 text-xs group-hover:rotate-180 transition-transform"></i>
            </a>
            <ul class="absolute left-0 bg-white text-black space-y-2 mt-1 p-2 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <li><a href="#" class="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">Mountain Bikes</a></li>
              <li><a href="#" class="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">Road Bikes</a></li>
              <li><a href="#" class="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">Electric Bikes</a></li>
            </ul>
          </li>

          <!-- Accessories Dropdown -->
          <li class="relative group">
            <a href="#" class="hover:text-secondary font-semibold flex items-center">
              Accessories
              <i class="fas fa-chevron-down ml-1 text-xs group-hover:rotate-180 transition-transform"></i>
            </a>
            <ul class="absolute left-0 bg-white text-black space-y-2 mt-1 p-2 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <li><a href="#" class="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">Helmets</a></li>
              <li><a href="#" class="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">Lights</a></li>
              <li><a href="#" class="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">Locks</a></li>
            </ul>
          </li>

          <li><a href="#" class="hover:text-secondary font-semibold transition">Apparel</a></li>
          <li><router-link to="/contact" class="hover:text-secondary font-semibold transition">Contact</router-link></li>
        </ul>
      </nav>

      <!-- Right section: Icons -->
      <div class="hidden lg:flex items-center space-x-4">
        <a href="#" class="text-white hover:text-secondary transition">
          <i class="fas fa-search text-lg"></i>
        </a>
        <a href="#" class="text-white hover:text-secondary transition">
          <i class="fas fa-shopping-cart text-lg"></i>
        </a>
        <a href="#" class="text-white hover:text-secondary transition">
          <i class="fas fa-user text-lg"></i>
        </a>
      </div>
    </div>

    <!-- Mobile Menu -->
    <nav v-if="mobileMenuOpen" class="lg:hidden bg-gray-dark px-4 pb-4">
      <ul class="space-y-3 text-white">
        <li><router-link to="/" class="block py-2 hover:text-secondary" @click="mobileMenuOpen = false">Home</router-link></li>
        <li><a href="#" class="block py-2 hover:text-secondary">Bikes</a></li>
        <li><a href="#" class="block py-2 hover:text-secondary">Accessories</a></li>
        <li><a href="#" class="block py-2 hover:text-secondary">Apparel</a></li>
        <li><router-link to="/contact" class="block py-2 hover:text-secondary" @click="mobileMenuOpen = false">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>
