<template>
  <section class="container mx-auto px-4 py-12">
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      <router-link to="/clothing" 
        class="px-6 py-2 rounded-full border transition"
        :class="!currentCategory ? 'bg-primary text-white border-primary' : 'bg-white text-gray-dark border-gray-300 hover:border-primary'"
      >
        All Clothing
      </router-link>
      <router-link to="/clothing/jerseys" 
        class="px-6 py-2 rounded-full border transition"
        :class="currentCategory === 'jerseys' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-dark border-gray-300 hover:border-primary'"
      >
        Jerseys
      </router-link>
      <router-link to="/clothing/shorts" 
        class="px-6 py-2 rounded-full border transition"
        :class="currentCategory === 'shorts' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-dark border-gray-300 hover:border-primary'"
      >
        Shorts
      </router-link>
      <router-link to="/clothing/gloves" 
        class="px-6 py-2 rounded-full border transition"
        :class="currentCategory === 'gloves' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-dark border-gray-300 hover:border-primary'"
      >
        Gloves
      </router-link>
    </div>

    <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <div v-for="item in filteredProducts" :key="item.id" class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group flex flex-col">
        <div class="relative h-64 overflow-hidden cursor-pointer" @click="openModal(item)">
          <img :src="item.image" :alt="item.name" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
          <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow">
            {{ item.categoryName }}
          </div>
        </div>
        
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="text-xl font-bold mb-2 text-gray-dark">{{ item.name }}</h3>
          <p class="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">{{ item.description }}</p>
          <div class="flex items-center justify-between mb-6">
            <span class="text-2xl font-bold text-primary">${{ item.price }}</span>
            <span v-if="item.oldPrice" class="text-sm line-through text-gray-400">${{ item.oldPrice }}</span>
          </div>
          
          <div class="grid grid-cols-2 gap-3 mt-auto">
            <button @click="openModal(item)" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded transition text-sm">
              <i class="fas fa-eye mr-1"></i> View
            </button>
            <button @click="addToCart(item, 1)" class="bg-primary hover:bg-opacity-90 text-white font-semibold py-2 rounded transition text-sm flex justify-center items-center">
              <i class="fas fa-shopping-cart mr-1"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-20">
      <h3 class="text-2xl font-bold text-gray-400">No clothing found in this category.</h3>
    </div>

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
              <span v-if="selectedProduct.oldPrice" class="text-xl line-through text-gray-400">
                ${{ (selectedProduct.oldPrice * modalQuantity).toLocaleString() }}
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

            <div class="space-y-3">
              <button @click="addToCart(selectedProduct, modalQuantity)" class="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-4 rounded-lg transition flex items-center justify-center text-lg">
                <i class="fas fa-shopping-cart mr-2"></i> Add to Cart
              </button>
              <button @click="closeModal" class="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-3 rounded-lg transition">
                Close Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentCategory = computed(() => route.params.category)

// --- State Modal ---
const showModal = ref(false)
const selectedProduct = ref({})
const modalQuantity = ref(1)

const openModal = (item) => {
  selectedProduct.value = item
  modalQuantity.value = 1
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  document.body.style.overflow = 'auto'
}

// --- Logic Quantity di Modal ---
const increaseModalQty = () => {
  modalQuantity.value++
}

const decreaseModalQty = () => {
  if (modalQuantity.value > 1) {
    modalQuantity.value--
  }
}

// --- Logic Add to Cart ---
const addToCart = (product, qty = 1) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || []
  const existingItem = cart.find(item => item.id === product.id)

  if (existingItem) {
    existingItem.quantity += qty
  } else {
    cart.push({ ...product, quantity: qty })
  }

  localStorage.setItem('cart', JSON.stringify(cart))
  
  // Update Navbar
  window.dispatchEvent(new Event('cart-updated'))

  // Alert
  const totalPrice = product.price * qty;
  alert(`${qty} x ${product.name} (Total: $${totalPrice}) telah ditambahkan ke keranjang!`)
  
  if (showModal.value) closeModal()
}

// Data Dummy Clothing (ID diperbarui jadi 200-an agar unik)
const products = ref([
  // Jerseys
  { id: 201, name: 'Pro Aero Jersey', category: 'jerseys', categoryName: 'Jersey', price: 120, oldPrice: 150, image: '/images/products/4.jpg', description: 'Aerodynamic race jersey for maximum speed. Breathable fabric keeps you cool during intense rides.' },
  { id: 202, name: 'Classic Merino', category: 'jerseys', categoryName: 'Jersey', price: 95, image: '/images/cat-image4.jpg', description: 'Comfortable wool blend for long rides. Natural odor resistance and temperature regulation.' },
  
  // Shorts
  { id: 203, name: 'Endurance Bib', category: 'shorts', categoryName: 'Shorts', price: 180, image: '/images/cat-image4.jpg', description: 'Long distance comfort with premium padding. High compression fabric for muscle support.' },
  { id: 204, name: 'Trail Baggy Shorts', category: 'shorts', categoryName: 'Shorts', price: 85, image: '/images/cat-image4.jpg', description: 'Durable shorts with pockets for MTB. Relaxed fit allows for knee pads.' },

  // Gloves
  { id: 205, name: 'Aero Gloves', category: 'gloves', categoryName: 'Gloves', price: 45, image: '/images/cat-image4.jpg', description: 'Minimalist gloves for better grip. Lightweight mesh back for ventilation.' },
  { id: 206, name: 'Winter Thermal', category: 'gloves', categoryName: 'Gloves', price: 60, image: '/images/cat-image4.jpg', description: 'Keep your hands warm in cold weather. Windproof and water-resistant materials.' },
])

// Logika Filter
const filteredProducts = computed(() => {
  if (!currentCategory.value) {
    return products.value
  }
  return products.value.filter(product => product.category === currentCategory.value)
})
</script>

<style scoped>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up { animation: fadeInUp 0.3s ease-out; }
</style>