<template>
  <header class="bg-gray-dark sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center py-4 px-4">
      <router-link to="/" class="flex items-center">
        <img src="/images/poji-store-logo.jpg" alt="POJI STORE" class="h-14 w-auto">
      </router-link>

      <div class="flex items-center space-x-5 lg:hidden">
        
        <button @click="mobileSearchOpen = !mobileSearchOpen" class="text-white hover:text-secondary">
          <i class="fas fa-search text-xl"></i>
        </button>
        
        <router-link to="/cart" class="text-white hover:text-secondary relative">
          <i class="fas fa-shopping-cart text-xl"></i>
          <span v-if="cartCount > 0" class="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-gray-dark">
            {{ cartCount }}
          </span>
        </router-link>

        <router-link to="/user" class="text-white hover:text-secondary">
          <i class="fas fa-user text-xl"></i>
        </router-link>

        <router-link to="/tentangsaya" class="text-white hover:text-secondary">
          <i class="fas fa-user text-xl"></i>
        </router-link>

        <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-white focus:outline-none">
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <nav class="hidden lg:flex md:flex-grow justify-center">
        <ul class="flex justify-center space-x-6 text-white">
          <li><router-link to="/" class="hover:text-secondary font-semibold transition">Home</router-link></li>
          
          <li class="relative group">
            <router-link to="/bikes" class="hover:text-secondary font-semibold flex items-center">
              Bikes <i class="fas fa-chevron-down ml-1 text-xs group-hover:rotate-180 transition-transform"></i>
            </router-link>
            <ul class="absolute left-0 bg-white text-black space-y-2 mt-1 p-2 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 min-w-[180px]">
              <li><router-link to="/bikes/mountain-bikes" class="block px-4 py-2 hover:bg-primary hover:text-white rounded">Mountain Bikes</router-link></li>
              <li><router-link to="/bikes/road-bikes" class="block px-4 py-2 hover:bg-primary hover:text-white rounded">Road Bikes</router-link></li>
              <li><router-link to="/bikes/electric-bikes" class="block px-4 py-2 hover:bg-primary hover:text-white rounded">Electric Bikes</router-link></li>
              <li><router-link to="/bikes/folding-bikes" class="block px-4 py-2 hover:bg-primary hover:text-white rounded">Folding Bikes</router-link></li>
            </ul>
          </li>
          
          <li class="relative group">
            <router-link to="/accessories" class="hover:text-secondary font-semibold flex items-center">
              Accessories <i class="fas fa-chevron-down ml-1 text-xs group-hover:rotate-180 transition-transform"></i>
            </router-link>
            <ul class="absolute left-0 bg-white text-black space-y-2 mt-1 p-2 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 min-w-[180px]">
              <li><router-link to="/accessories/helmets" class="block px-4 py-2 hover:bg-primary hover:text-white rounded">Helmets</router-link></li>
              <li><router-link to="/accessories/lights" class="block px-4 py-2 hover:bg-primary hover:text-white rounded">Lights</router-link></li>
              <li><router-link to="/accessories/locks" class="block px-4 py-2 hover:bg-primary hover:text-white rounded">Locks</router-link></li>
            </ul>
          </li>

          <li class="relative group">
            <router-link to="/clothing" class="hover:text-secondary font-semibold flex items-center">
              Clothing <i class="fas fa-chevron-down ml-1 text-xs group-hover:rotate-180 transition-transform"></i>
            </router-link>
            <ul class="absolute left-0 bg-white text-black space-y-2 mt-1 p-2 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 min-w-[180px]">
              <li><router-link to="/clothing/jerseys" class="block px-4 py-2 hover:bg-primary hover:text-white rounded">Jerseys</router-link></li>
              <li><router-link to="/clothing/shorts" class="block px-4 py-2 hover:bg-primary hover:text-white rounded">Shorts</router-link></li>
              <li><router-link to="/clothing/gloves" class="block px-4 py-2 hover:bg-primary hover:text-white rounded">Gloves</router-link></li>
            </ul>
          </li>

          <li><router-link to="/contact" class="hover:text-secondary font-semibold transition">Contact</router-link></li>
        </ul>
      </nav>

      <div class="hidden lg:flex items-center space-x-4">
        <!-- Search Expandable -->
        <div class="relative">
          <button 
            v-if="!searchOpen" 
            @click="searchOpen = true" 
            class="text-white hover:text-secondary transition"
          >
            <i class="fas fa-search text-lg"></i>
          </button>
          <div v-else class="flex items-center">
            <input 
              ref="searchInput"
              v-model="searchQuery"
              @keyup.enter="performSearch"
              type="text" 
              placeholder="Search products..." 
              class="w-64 px-4 py-2 rounded-l-full border-2 border-primary focus:outline-none focus:border-secondary text-gray-dark"
            >
            <button 
              @click="performSearch" 
              class="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-r-full border-2 border-primary transition"
            >
              <i class="fas fa-search"></i>
            </button>
            <button 
              @click="closeSearch" 
              class="ml-2 text-white hover:text-red-500 transition"
            >
              <i class="fas fa-times text-lg"></i>
            </button>
          </div>
        </div>
        
        <router-link to="/cart" class="text-white hover:text-secondary transition relative group">
          <i class="fas fa-shopping-cart text-lg"></i>
          <span v-if="cartCount > 0" class="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-gray-dark">
            {{ cartCount }}
          </span>
        </router-link>

        <router-link to="/user" class="text-white hover:text-secondary transition">
          <i class="fas fa-user text-lg"></i>
        </router-link>

        <router-link to="/tentangsaya" class="text-white hover:text-secondary transition">
          <i class="fas fa-user text-lg"></i>
        </router-link>
      </div>
    </div>

    <div v-show="mobileMenuOpen" class="lg:hidden bg-gray-dark border-t border-gray-700">
      <ul class="flex flex-col text-white p-4 space-y-2">
        
        <li>
          <router-link to="/" class="block py-2 hover:text-secondary border-b border-gray-700" @click="mobileMenuOpen = false">
            Home
          </router-link>
        </li>
        
        <li>
          <div class="flex justify-between items-center border-b border-gray-700 py-2">
            <router-link to="/bikes" class="flex-grow hover:text-secondary" @click="mobileMenuOpen = false">Bikes</router-link>
            <button @click="toggleMobileSubmenu('bikes')" class="p-2 focus:outline-none">
              <i class="fas" :class="activeMobileMenu === 'bikes' ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
            </button>
          </div>
          <ul v-show="activeMobileMenu === 'bikes'" class="bg-gray-800 px-4 py-2 space-y-2 rounded mt-1">
            <li><router-link to="/bikes/mountain-bikes" class="block text-sm text-gray-300 hover:text-white" @click="mobileMenuOpen = false">Mountain Bikes</router-link></li>
            <li><router-link to="/bikes/road-bikes" class="block text-sm text-gray-300 hover:text-white" @click="mobileMenuOpen = false">Road Bikes</router-link></li>
            <li><router-link to="/bikes/electric-bikes" class="block text-sm text-gray-300 hover:text-white" @click="mobileMenuOpen = false">Electric Bikes</router-link></li>
            <li><router-link to="/bikes/folding-bikes" class="block text-sm text-gray-300 hover:text-white" @click="mobileMenuOpen = false">Folding Bikes</router-link></li>
          </ul>
        </li>

        <li>
          <div class="flex justify-between items-center border-b border-gray-700 py-2">
            <router-link to="/accessories" class="flex-grow hover:text-secondary" @click="mobileMenuOpen = false">Accessories</router-link>
            <button @click="toggleMobileSubmenu('accessories')" class="p-2 focus:outline-none">
              <i class="fas" :class="activeMobileMenu === 'accessories' ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
            </button>
          </div>
          <ul v-show="activeMobileMenu === 'accessories'" class="bg-gray-800 px-4 py-2 space-y-2 rounded mt-1">
            <li><router-link to="/accessories/helmets" class="block text-sm text-gray-300 hover:text-white" @click="mobileMenuOpen = false">Helmets</router-link></li>
            <li><router-link to="/accessories/lights" class="block text-sm text-gray-300 hover:text-white" @click="mobileMenuOpen = false">Lights</router-link></li>
            <li><router-link to="/accessories/locks" class="block text-sm text-gray-300 hover:text-white" @click="mobileMenuOpen = false">Locks</router-link></li>
          </ul>
        </li>

        <li>
          <div class="flex justify-between items-center border-b border-gray-700 py-2">
            <router-link to="/clothing" class="flex-grow hover:text-secondary" @click="mobileMenuOpen = false">Clothing</router-link>
            <button @click="toggleMobileSubmenu('clothing')" class="p-2 focus:outline-none">
              <i class="fas" :class="activeMobileMenu === 'clothing' ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
            </button>
          </div>
          <ul v-show="activeMobileMenu === 'clothing'" class="bg-gray-800 px-4 py-2 space-y-2 rounded mt-1">
            <li><router-link to="/clothing/jerseys" class="block text-sm text-gray-300 hover:text-white" @click="mobileMenuOpen = false">Jerseys</router-link></li>
            <li><router-link to="/clothing/shorts" class="block text-sm text-gray-300 hover:text-white" @click="mobileMenuOpen = false">Shorts</router-link></li>
            <li><router-link to="/clothing/gloves" class="block text-sm text-gray-300 hover:text-white" @click="mobileMenuOpen = false">Gloves</router-link></li>
          </ul>
        </li>

        <li>
          <router-link to="/contact" class="block py-2 hover:text-secondary border-b border-gray-700" @click="mobileMenuOpen = false">
            Contact
          </router-link>
        </li>

        <li>
          <router-link to="/user" class="block py-2 hover:text-secondary" @click="mobileMenuOpen = false">
            My Profile
          </router-link>

          <router-link to="/tentangsaya" class="block py-2 hover:text-secondary" @click="mobileMenuOpen = false">
            Tentang Saya
          </router-link>
        </li>

      </ul>
    </div>

    <!-- Mobile Search Bar -->
    <div v-show="mobileSearchOpen" class="lg:hidden bg-gray-700 border-t border-gray-600 p-4">
      <div class="flex items-center">
        <input 
          v-model="mobileSearchQuery"
          @keyup.enter="performMobileSearch"
          type="text" 
          placeholder="Search products..." 
          class="flex-1 px-4 py-2 rounded-l-full border-2 border-primary focus:outline-none focus:border-secondary text-gray-dark"
        >
        <button 
          @click="performMobileSearch" 
          class="bg-primary hover:bg-opacity-90 text-white px-6 py-2 rounded-r-full border-2 border-primary transition"
        >
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const mobileMenuOpen = ref(false)
const activeMobileMenu = ref(null)
const cartCount = ref(0)

// Search state
const searchOpen = ref(false)
const searchQuery = ref('')
const searchInput = ref(null)
const mobileSearchOpen = ref(false)
const mobileSearchQuery = ref('')

const toggleMobileSubmenu = (menuName) => {
  if (activeMobileMenu.value === menuName) {
    activeMobileMenu.value = null
  } else {
    activeMobileMenu.value = menuName
  }
}

const updateCartCount = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  cartCount.value = cart.reduce((acc, item) => acc + item.quantity, 0)
}

// Desktop search functions
const performSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: searchQuery.value.trim() } })
    closeSearch()
  }
}

const closeSearch = () => {
  searchOpen.value = false
  searchQuery.value = ''
}

// Mobile search functions
const performMobileSearch = () => {
  if (mobileSearchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: mobileSearchQuery.value.trim() } })
    mobileSearchOpen.value = false
    mobileSearchQuery.value = ''
  }
}

// Watch searchOpen to focus input when opened
const watchSearchOpen = async () => {
  if (searchOpen.value) {
    await nextTick()
    searchInput.value?.focus()
  }
}

// Use a reactive effect to watch searchOpen
const unwatchSearchOpen = () => {
  const stopWatch = () => {
    if (searchOpen.value) {
      watchSearchOpen()
    }
  }
  return stopWatch
}

onMounted(() => {
  updateCartCount()
  window.addEventListener('cart-updated', updateCartCount)
  window.addEventListener('storage', updateCartCount)
  
  // Watch for searchOpen changes
  const interval = setInterval(() => {
    if (searchOpen.value && searchInput.value) {
      searchInput.value.focus()
    }
  }, 100)
  
  onUnmounted(() => {
    clearInterval(interval)
  })
})

onUnmounted(() => {
  window.removeEventListener('cart-updated', updateCartCount)
  window.removeEventListener('storage', updateCartCount)
})
</script>