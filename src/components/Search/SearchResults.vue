<template>
  <section class="container mx-auto px-4 py-12">
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-gray-dark mb-2">Search Results</h2>
      <p class="text-gray-600">
        <span v-if="searchQuery">Showing results for "<strong>{{ searchQuery }}</strong>"</span>
        <span v-else>Enter a search term to find products</span>
      </p>
      <p v-if="searchQuery" class="text-gray-500 mt-1">{{ totalResults }} product(s) found</p>
    </div>

    <!-- Search Results -->
    <div v-if="allResults.length > 0" class="space-y-8">
      <!-- Bikes Section -->
      <div v-if="bikes.length > 0">
        <h3 class="text-2xl font-bold text-gray-dark mb-4 pb-2 border-b border-gray-200">
          Bikes <span class="text-primary text-lg">({{ bikes.length }})</span>
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div v-for="bike in bikes" :key="bike.id" class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group flex flex-col">
            <div class="relative h-56 overflow-hidden cursor-pointer" @click="openModal(bike)">
              <img :src="bike.image" :alt="bike.name" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
              <div class="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-bold shadow">
                {{ bike.categoryName }}
              </div>
            </div>
            
            <div class="p-5 flex flex-col flex-grow">
              <h4 class="text-lg font-bold mb-2 text-gray-dark">{{ bike.name }}</h4>
              <p class="text-gray-500 text-sm mb-3 line-clamp-2 flex-grow">{{ bike.description }}</p>
              <div class="flex items-center justify-between mb-4">
                <span class="text-xl font-bold text-primary">${{ bike.price }}</span>
              </div>
              
              <div class="grid grid-cols-2 gap-2">
                <button @click="openModal(bike)" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded transition text-sm">
                  <i class="fas fa-eye mr-1"></i> View
                </button>
                <button @click="addToCart(bike)" class="bg-primary hover:bg-opacity-90 text-white font-semibold py-2 rounded transition text-sm">
                  <i class="fas fa-shopping-cart mr-1"></i> Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Accessories Section -->
      <div v-if="accessories.length > 0">
        <h3 class="text-2xl font-bold text-gray-dark mb-4 pb-2 border-b border-gray-200">
          Accessories <span class="text-primary text-lg">({{ accessories.length }})</span>
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div v-for="item in accessories" :key="item.id" class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group flex flex-col">
            <div class="relative h-56 overflow-hidden cursor-pointer" @click="openModal(item)">
              <img :src="item.image" :alt="item.name" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
              <div class="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-bold shadow">
                {{ item.categoryName }}
              </div>
            </div>
            
            <div class="p-5 flex flex-col flex-grow">
              <h4 class="text-lg font-bold mb-2 text-gray-dark">{{ item.name }}</h4>
              <p class="text-gray-500 text-sm mb-3 line-clamp-2 flex-grow">{{ item.description }}</p>
              <div class="flex items-center justify-between mb-4">
                <span class="text-xl font-bold text-primary">${{ item.price }}</span>
              </div>
              
              <div class="grid grid-cols-2 gap-2">
                <button @click="openModal(item)" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded transition text-sm">
                  <i class="fas fa-eye mr-1"></i> View
                </button>
                <button @click="addToCart(item)" class="bg-primary hover:bg-opacity-90 text-white font-semibold py-2 rounded transition text-sm">
                  <i class="fas fa-shopping-cart mr-1"></i> Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Clothing Section -->
      <div v-if="clothing.length > 0">
        <h3 class="text-2xl font-bold text-gray-dark mb-4 pb-2 border-b border-gray-200">
          Clothing <span class="text-primary text-lg">({{ clothing.length }})</span>
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div v-for="item in clothing" :key="item.id" class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group flex flex-col">
            <div class="relative h-56 overflow-hidden cursor-pointer" @click="openModal(item)">
              <img :src="item.image" :alt="item.name" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
              <div class="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-bold shadow">
                {{ item.categoryName }}
              </div>
            </div>
            
            <div class="p-5 flex flex-col flex-grow">
              <h4 class="text-lg font-bold mb-2 text-gray-dark">{{ item.name }}</h4>
              <p class="text-gray-500 text-sm mb-3 line-clamp-2 flex-grow">{{ item.description }}</p>
              <div class="flex items-center justify-between mb-4">
                <span class="text-xl font-bold text-primary">${{ item.price }}</span>
              </div>
              
              <div class="grid grid-cols-2 gap-2">
                <button @click="openModal(item)" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded transition text-sm">
                  <i class="fas fa-eye mr-1"></i> View
                </button>
                <button @click="addToCart(item)" class="bg-primary hover:bg-opacity-90 text-white font-semibold py-2 rounded transition text-sm">
                  <i class="fas fa-shopping-cart mr-1"></i> Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- No Results -->
    <div v-else-if="searchQuery" class="text-center py-20">
      <div class="text-6xl text-gray-300 mb-6">
        <i class="fas fa-search"></i>
      </div>
      <h3 class="text-2xl font-bold text-gray-dark mb-2">No Results Found</h3>
      <p class="text-gray-500 mb-8">Try searching with different keywords</p>
      <router-link to="/bikes" class="bg-primary hover:bg-opacity-90 text-white font-semibold px-8 py-3 rounded-full transition inline-block">
        Browse All Products
      </router-link>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-20">
      <div class="text-6xl text-gray-300 mb-6">
        <i class="fas fa-search"></i>
      </div>
      <h3 class="text-2xl font-bold text-gray-dark mb-2">Start Searching</h3>
      <p class="text-gray-500">Use the search bar above to find products</p>
    </div>

    <!-- Product Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" @click.self="closeModal">
      <div class="bg-white rounded-lg shadow-2xl max-w-4xl w-full overflow-hidden animate-fade-in-up relative">
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-red-500 z-10">
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 h-64 md:h-auto bg-gray-100">
            <img :src="selectedProduct.image" :alt="selectedProduct.name" class="w-full h-full object-cover">
          </div>
          
          <div class="md:w-1/2 p-8 flex flex-col justify-center">
            <span class="text-primary font-bold tracking-wider uppercase text-sm mb-2">{{ selectedProduct.categoryName }}</span>
            <h2 class="text-3xl font-bold text-gray-dark mb-4">{{ selectedProduct.name }}</h2>
            <p class="text-gray-600 mb-6 leading-relaxed">{{ selectedProduct.description }}</p>
            
            <div class="flex items-center mb-6">
              <span class="text-4xl font-bold text-primary mr-4">
                ${{ (selectedProduct.price * modalQuantity).toLocaleString() }}
              </span>
            </div>

            <div class="flex items-center mb-6">
              <span class="mr-4 font-semibold text-gray-700">Quantity:</span>
              <div class="flex items-center border border-gray-300 rounded-md">
                <button @click="decreaseModalQty" class="px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-600 font-bold border-r border-gray-300 transition">-</button>
                <input type="text" readonly :value="modalQuantity" class="w-12 text-center py-2 font-semibold text-gray-800 focus:outline-none bg-white">
                <button @click="increaseModalQty" class="px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-600 font-bold border-l border-gray-300 transition">+</button>
              </div>
            </div>

            <button @click="addToCartFromModal" class="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-4 rounded-full transition shadow-lg flex items-center justify-center">
              <i class="fas fa-shopping-cart mr-2"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { bikesData } from '../../data/bikes.js'
import { accessoriesData } from '../../data/accessories.js'
import { clothingData } from '../../data/clothing.js'

const route = useRoute()
const searchQuery = ref(route.query.q || '')
const showModal = ref(false)
const selectedProduct = ref({})
const modalQuantity = ref(1)

// Watch for route query changes
watch(() => route.query.q, (newQuery) => {
  searchQuery.value = newQuery || ''
})

// Search function
const searchProducts = (products, query) => {
  if (!query) return []
  const lowerQuery = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.categoryName.toLowerCase().includes(lowerQuery)
  )
}

// Computed search results
const bikes = computed(() => searchProducts(bikesData, searchQuery.value))
const accessories = computed(() => searchProducts(accessoriesData, searchQuery.value))
const clothing = computed(() => searchProducts(clothingData, searchQuery.value))

const allResults = computed(() => [...bikes.value, ...accessories.value, ...clothing.value])
const totalResults = computed(() => allResults.value.length)

// Modal functions
const openModal = (product) => {
  selectedProduct.value = product
  modalQuantity.value = 1
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  setTimeout(() => {
    selectedProduct.value = {}
    modalQuantity.value = 1
  }, 300)
}

const increaseModalQty = () => {
  modalQuantity.value++
}

const decreaseModalQty = () => {
  if (modalQuantity.value > 1) {
    modalQuantity.value--
  }
}

// Add to cart functions
const addToCart = (product, quantity = 1) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const existingItem = cart.find(item => item.id === product.id)
  
  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({
      ...product,
      quantity: quantity
    })
  }
  
  localStorage.setItem('cart', JSON.stringify(cart))
  window.dispatchEvent(new Event('cart-updated'))
  alert(`${product.name} added to cart!`)
}

const addToCartFromModal = () => {
  addToCart(selectedProduct.value, modalQuantity.value)
  closeModal()
}
</script>
