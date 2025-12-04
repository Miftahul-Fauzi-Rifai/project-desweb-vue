<template>
  <section class="container mx-auto px-4 py-12">
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      <router-link to="/bikes" 
        class="px-6 py-2 rounded-full border transition"
        :class="!currentCategory ? 'bg-primary text-white border-primary' : 'bg-white text-gray-dark border-gray-300 hover:border-primary'"
      >
        All Bikes
      </router-link>
      <router-link to="/bikes/mountain-bikes" 
        class="px-6 py-2 rounded-full border transition"
        :class="currentCategory === 'mountain-bikes' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-dark border-gray-300 hover:border-primary'"
      >
        Mountain
      </router-link>
      <router-link to="/bikes/road-bikes" 
        class="px-6 py-2 rounded-full border transition"
        :class="currentCategory === 'road-bikes' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-dark border-gray-300 hover:border-primary'"
      >
        Road
      </router-link>
      <router-link to="/bikes/electric-bikes" 
        class="px-6 py-2 rounded-full border transition"
        :class="currentCategory === 'electric-bikes' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-dark border-gray-300 hover:border-primary'"
      >
        Electric
      </router-link>
      <router-link to="/bikes/folding-bikes" 
        class="px-6 py-2 rounded-full border transition"
        :class="currentCategory === 'folding-bikes' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-dark border-gray-300 hover:border-primary'"
      >
        Folding
      </router-link>
    </div>

    <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <div v-for="bike in filteredProducts" :key="bike.id" class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group flex flex-col">
        <div class="relative h-64 overflow-hidden cursor-pointer" @click="openModal(bike)">
          <img :src="bike.image" :alt="bike.name" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
          <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow">
            {{ bike.categoryName }}
          </div>
        </div>
        
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="text-xl font-bold mb-2 text-gray-dark">{{ bike.name }}</h3>
          <p class="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">{{ bike.description }}</p>
          <div class="flex items-center justify-between mb-6">
            <span class="text-2xl font-bold text-primary">${{ bike.price }}</span>
            <span v-if="bike.oldPrice" class="text-sm line-through text-gray-400">${{ bike.oldPrice }}</span>
          </div>
          
          <div class="grid grid-cols-2 gap-3 mt-auto">
            <button @click="openModal(bike)" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded transition text-sm">
              <i class="fas fa-eye mr-1"></i> View
            </button>
            <button @click="addToCart(bike, 1)" class="bg-primary hover:bg-opacity-90 text-white font-semibold py-2 rounded transition text-sm flex justify-center items-center">
              <i class="fas fa-shopping-cart mr-1"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-20">
      <h3 class="text-2xl font-bold text-gray-400">No bikes found in this category.</h3>
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

const openModal = (product) => {
  selectedProduct.value = product
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
  
  window.dispatchEvent(new Event('cart-updated'))

  // Alert menampilkan total harga item yang baru ditambahkan
  const totalPrice = product.price * qty;
  alert(`${qty} x ${product.name} (Total: $${totalPrice}) telah ditambahkan ke keranjang!`)
  
  if (showModal.value) closeModal()
}

// Data Dummy
const products = ref([
  { id: 1, name: 'Trail Blazer X1', category: 'mountain-bikes', categoryName: 'Mountain', price: 2500, oldPrice: 2800, image: '/images/main-slider/5.jpg', description: 'Full suspension mountain bike ready for the roughest trails. Equipped with high-end suspension and durable tires.' },
  { id: 2, name: 'Alpine Peak 5', category: 'mountain-bikes', categoryName: 'Mountain', price: 1800, image: '/images/products/1.jpg', description: 'Hardtail MTB perfect for cross-country adventures. Lightweight aluminum frame with responsive handling.' },
  { id: 3, name: 'Speedster Carbon', category: 'road-bikes', categoryName: 'Road', price: 3200, image: '/images/main-slider/2.jpg', description: 'Lightweight carbon frame for maximum speed on asphalt. Aerodynamic design for professional racers.' },
  { id: 4, name: 'Roubaix Endurance', category: 'road-bikes', categoryName: 'Road', price: 4500, oldPrice: 5000, image: '/images/products/2.jpg', description: 'Designed for comfort on long-distance rides. Features shock absorption technology.' },
  { id: 5, name: 'City Volt E-1', category: 'electric-bikes', categoryName: 'Electric', price: 2100, image: '/images/cat-image1.jpg', description: 'Commute effortlessly with this powerful e-bike. Long-lasting battery and pedal assist.' },
  { id: 6, name: 'Brompton C Line', category: 'folding-bikes', categoryName: 'Folding', price: 1600, image: '/images/main-slider/4.jpg', description: 'The classic folding bike, perfect for city living. Folds in seconds to fit under your desk.' },
  { id: 7, name: 'Urban Fold Pro', category: 'folding-bikes', categoryName: 'Folding', price: 850, oldPrice: 950, image: '/images/main-slider/4.jpg', description: 'Compact, lightweight, and easy to carry anywhere. Great value for urban commuters.' },
])

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