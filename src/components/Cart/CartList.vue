<template>
  <section class="container mx-auto px-4 py-12">
    
    <div v-if="cartItems.length > 0" class="flex flex-col lg:flex-row gap-8">
      
      <div class="lg:w-2/3">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-100 border-b font-semibold text-gray-600">
            <div class="col-span-6">Produk</div>
            <div class="col-span-2 text-center">Harga</div>
            <div class="col-span-2 text-center">Jumlah</div>
            <div class="col-span-2 text-center">Total</div>
          </div>

          <div v-for="item in cartItems" :key="item.id" class="p-4 border-b last:border-b-0">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              
              <div class="col-span-12 md:col-span-6 flex items-center gap-4">
                <div class="w-20 h-20 flex-shrink-0 bg-gray-200 rounded overflow-hidden">
                  <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
                </div>
                <div>
                  <h3 class="font-bold text-gray-dark">{{ item.name }}</h3>
                  <p class="text-sm text-gray-500">{{ item.categoryName }}</p> <button @click="removeItem(item.id)" class="text-red-500 text-sm hover:underline mt-1 flex items-center">
                    <i class="fas fa-trash-alt mr-1"></i> Hapus
                  </button>
                </div>
              </div>

              <div class="col-span-12 md:col-span-2 md:text-center font-medium">
                <span class="md:hidden text-gray-500 mr-2">Harga:</span>
                ${{ item.price }}
              </div>

              <div class="col-span-12 md:col-span-2 flex justify-start md:justify-center">
                <div class="flex items-center border rounded">
                  <button @click="decreaseQty(item)" class="px-3 py-1 hover:bg-gray-100 transition">-</button>
                  <input type="text" readonly :value="item.quantity" class="w-10 text-center border-x py-1 focus:outline-none text-gray-dark">
                  <button @click="increaseQty(item)" class="px-3 py-1 hover:bg-gray-100 transition">+</button>
                </div>
              </div>

              <div class="col-span-12 md:col-span-2 md:text-center font-bold text-primary">
                <span class="md:hidden text-gray-500 mr-2">Total:</span>
                ${{ item.price * item.quantity }}
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="lg:w-1/3">
        <div class="bg-white rounded-lg shadow-lg p-6 sticky top-24">
          <h2 class="text-xl font-bold mb-6 border-b pb-4">Ringkasan Pesanan</h2>
          
          <div class="flex justify-between mb-3">
            <span class="text-gray-600">Subtotal</span>
            <span class="font-semibold">${{ subtotal }}</span>
          </div>
          <div class="flex justify-between mb-3">
            <span class="text-gray-600">Ongkos Kirim</span>
            <span class="font-semibold text-green-600">${{ shipping }}</span>
          </div>
          <div class="flex justify-between mb-6">
            <span class="text-gray-600">Pajak (10%)</span>
            <span class="font-semibold">${{ tax }}</span>
          </div>
          
          <div class="flex justify-between mb-8 pt-4 border-t border-gray-200">
            <span class="text-xl font-bold text-gray-dark">Total Bayar</span>
            <span class="text-2xl font-bold text-primary">${{ total }}</span>
          </div>

          <button class="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-3 rounded-full transition shadow-lg mb-4" @click="checkout">
            Checkout Sekarang
          </button>
          
          <router-link to="/bikes" class="block text-center text-gray-500 hover:text-gray-dark text-sm transition">
            <i class="fas fa-arrow-left mr-1"></i> Lanjut Belanja
          </router-link>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-20 bg-white rounded-lg shadow-lg">
      <div class="text-6xl text-gray-300 mb-6">
        <i class="fas fa-shopping-cart"></i>
      </div>
      <h2 class="text-2xl font-bold text-gray-dark mb-2">Keranjang Anda Kosong</h2>
      <p class="text-gray-500 mb-8">Belum ada barang yang ditambahkan.</p>
      <router-link to="/bikes" class="bg-primary hover:bg-opacity-90 text-white font-semibold px-8 py-3 rounded-full transition">
        Mulai Belanja
      </router-link>
    </div>

  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

// 1. Hapus Data Dummy -> Ganti dengan ref kosong
const cartItems = ref([])

// 2. Ambil data dari localStorage saat komponen dimuat
onMounted(() => {
  const storedCart = localStorage.getItem('cart')
  if (storedCart) {
    cartItems.value = JSON.parse(storedCart)
  }
})

// 3. Fungsi Helper untuk Update localStorage setiap ada perubahan
const updateStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cartItems.value))
  // Opsional: Dispatch event custom agar komponen lain (misal Navbar) tahu ada perubahan
  window.dispatchEvent(new Event('cart-updated'))
}

// --- Logic Modifikasi Data ---

const increaseQty = (item) => {
  item.quantity++
  updateStorage() // Simpan perubahan
}

const decreaseQty = (item) => {
  if (item.quantity > 1) {
    item.quantity--
    updateStorage() // Simpan perubahan
  }
}

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id)
  updateStorage() // Simpan perubahan
}

// --- Logic Perhitungan Harga ---

const subtotal = computed(() => {
  return cartItems.value.reduce((acc, item) => acc + (item.price * item.quantity), 0)
})

const shipping = computed(() => {
  if (subtotal.value === 0) return 0
  return subtotal.value > 5000 ? 0 : 50 // Gratis ongkir jika > $5000
})

const tax = computed(() => {
  return Math.round(subtotal.value * 0.1) // Pajak 10%
})

const total = computed(() => {
  return subtotal.value + shipping.value + tax.value
})

// --- Fungsi Checkout ---
const checkout = () => {
  if(confirm('Lanjutkan ke pembayaran?')) {
    // Buat order baru
    const newOrder = {
      id: 'ORD-' + Date.now(),
      date: new Date().toLocaleDateString('id-ID', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
      items: JSON.parse(JSON.stringify(cartItems.value)), // Clone items
      subtotal: subtotal.value,
      shipping: shipping.value,
      tax: tax.value,
      total: total.value,
      status: 'Processing'
    }
    
    // Simpan ke localStorage orders
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]')
    existingOrders.unshift(newOrder) // Tambah di awal array
    localStorage.setItem('orders', JSON.stringify(existingOrders))
    
    // Kosongkan keranjang
    cartItems.value = []
    updateStorage()
    
    // Tampilkan notifikasi sukses tanpa redirect
    alert('Terima kasih! Pesanan Anda sedang diproses. Silakan buka halaman Profil untuk melihat pesanan Anda.')
  }
}
</script>