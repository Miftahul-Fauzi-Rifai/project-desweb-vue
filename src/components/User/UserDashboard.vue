<template>
  <!-- Toast Notification -->
  <div 
    v-if="showToast" 
    class="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce"
  >
    {{ toastMessage }}
  </div>

  <div class="flex flex-col lg:flex-row gap-8">
    
    <div class="lg:w-1/4">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="p-6 text-center border-b">
          <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
            <img src="https://via.placeholder.com/150" alt="User Avatar" class="w-full h-full object-cover">
          </div>
          <h2 class="text-xl font-bold text-gray-dark">John Doe</h2>
          <p class="text-gray-500 text-sm">john.doe@example.com</p>
        </div>
        <nav class="flex flex-col">
          <button 
            @click="activeTab = 'profile'"
            :class="activeTab === 'profile' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'"
            class="px-6 py-4 text-left font-medium transition flex items-center border-b border-gray-100 last:border-b-0"
          >
            <i class="fas fa-user mr-3 w-5 text-center"></i> My Profile
          </button>
          <button 
            @click="activeTab = 'orders'"
            :class="activeTab === 'orders' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'"
            class="px-6 py-4 text-left font-medium transition flex items-center border-b border-gray-100 last:border-b-0"
          >
            <i class="fas fa-box mr-3 w-5 text-center"></i> My Orders
          </button>
          <button 
            @click="activeTab = 'settings'"
            :class="activeTab === 'settings' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'"
            class="px-6 py-4 text-left font-medium transition flex items-center border-b border-gray-100 last:border-b-0"
          >
            <i class="fas fa-cog mr-3 w-5 text-center"></i> Settings
          </button>
          <button class="px-6 py-4 text-left font-medium text-red-500 hover:bg-red-50 transition flex items-center" @click="logout">
            <i class="fas fa-sign-out-alt mr-3 w-5 text-center"></i> Logout
          </button>
        </nav>
      </div>
    </div>

    <div class="lg:w-3/4">
      <div class="bg-white rounded-lg shadow-lg p-8 min-h-[400px]">
        
        <div v-if="activeTab === 'profile'">
          <h2 class="text-2xl font-bold mb-6 text-gray-dark border-b pb-4">Personal Information</h2>
          <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-600 mb-2 font-medium">First Name</label>
              <input type="text" value="John" class="w-full border border-gray-300 rounded px-4 py-2 focus:border-primary focus:outline-none">
            </div>
            <div>
              <label class="block text-gray-600 mb-2 font-medium">Last Name</label>
              <input type="text" value="Doe" class="w-full border border-gray-300 rounded px-4 py-2 focus:border-primary focus:outline-none">
            </div>
            <div>
              <label class="block text-gray-600 mb-2 font-medium">Email Address</label>
              <input type="email" value="john.doe@example.com" class="w-full border border-gray-300 rounded px-4 py-2 focus:border-primary focus:outline-none">
            </div>
            <div>
              <label class="block text-gray-600 mb-2 font-medium">Phone Number</label>
              <input type="tel" value="+1 234 567 890" class="w-full border border-gray-300 rounded px-4 py-2 focus:border-primary focus:outline-none">
            </div>
            <div class="md:col-span-2">
              <button type="button" @click="saveProfile" class="bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-6 rounded transition">Save Changes</button>
            </div>
          </form>
        </div>

        <div v-if="activeTab === 'orders'">
          <h2 class="text-2xl font-bold mb-6 text-gray-dark border-b pb-4">Order History</h2>
          
          <div v-if="orders.length === 0" class="text-center py-12">
            <div class="text-5xl text-gray-300 mb-4">
              <i class="fas fa-box-open"></i>
            </div>
            <p class="text-gray-500 mb-4">You haven't placed any orders yet.</p>
            <router-link to="/bikes" class="bg-primary hover:bg-opacity-90 text-white font-semibold px-6 py-2 rounded-full transition inline-block">
              Start Shopping
            </router-link>
          </div>

          <div v-else class="space-y-6">
            <div v-for="order in orders" :key="order.id" class="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <!-- Order Header -->
              <div class="bg-gray-50 p-4 border-b flex flex-wrap justify-between items-center gap-4">
                <div>
                  <h3 class="font-bold text-gray-dark">{{ order.id }}</h3>
                  <p class="text-sm text-gray-500">{{ order.date }}</p>
                </div>
                <div class="flex items-center gap-4">
                  <span 
                    :class="{
                      'bg-yellow-100 text-yellow-700': order.status === 'Processing',
                      'bg-blue-100 text-blue-700': order.status === 'Shipped',
                      'bg-green-100 text-green-700': order.status === 'Delivered'
                    }"
                    class="px-3 py-1 rounded-full text-sm font-bold"
                  >
                    {{ order.status }}
                  </span>
                  <button 
                    @click="toggleOrderDetails(order.id)" 
                    class="text-primary hover:underline font-medium flex items-center gap-2"
                  >
                    {{ expandedOrders.includes(order.id) ? 'Hide Details' : 'View Details' }}
                    <i :class="expandedOrders.includes(order.id) ? 'fa-chevron-up' : 'fa-chevron-down'" class="fas"></i>
                  </button>
                </div>
              </div>

              <!-- Order Summary -->
              <div class="p-4 bg-white">
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <p class="text-gray-600 text-sm mb-1">Total Items</p>
                    <p class="font-bold text-gray-dark">{{ getTotalItems(order) }} item(s)</p>
                  </div>
                  <div class="text-right">
                    <p class="text-gray-600 text-sm mb-1">Total Amount</p>
                    <p class="font-bold text-primary text-xl">${{ order.total }}</p>
                  </div>
                </div>

                <!-- Items List (Expandable) -->
                <div v-if="expandedOrders.includes(order.id)" class="border-t pt-4 space-y-3">
                  <h4 class="font-bold text-gray-dark mb-3">Order Items:</h4>
                  <div v-for="item in order.items" :key="item.id" class="flex gap-4 p-3 bg-gray-50 rounded">
                    <div class="w-16 h-16 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                      <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1">
                      <h5 class="font-bold text-gray-dark">{{ item.name }}</h5>
                      <p class="text-sm text-gray-500">{{ item.categoryName }}</p>
                      <div class="flex justify-between items-center mt-2">
                        <span class="text-sm text-gray-600">Qty: {{ item.quantity }}</span>
                        <span class="font-bold text-gray-dark">${{ item.price }} × {{ item.quantity }} = ${{ item.price * item.quantity }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Order Breakdown -->
                  <div class="border-t pt-4 mt-4 space-y-2">
                    <div class="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>${{ order.subtotal }}</span>
                    </div>
                    <div class="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>${{ order.shipping }}</span>
                    </div>
                    <div class="flex justify-between text-gray-600">
                      <span>Tax (10%)</span>
                      <span>${{ order.tax }}</span>
                    </div>
                    <div class="flex justify-between font-bold text-lg text-gray-dark border-t pt-2">
                      <span>Total</span>
                      <span class="text-primary">${{ order.total }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 'settings'">
          <h2 class="text-2xl font-bold mb-6 text-gray-dark border-b pb-4">Account Settings</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 border rounded bg-gray-50">
              <div>
                <h3 class="font-bold text-gray-dark">Email Notifications</h3>
                <p class="text-sm text-gray-500">Receive updates about your orders and promotions.</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="emailNotifications" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div class="flex items-center justify-between p-4 border rounded bg-gray-50">
              <div>
                <h3 class="font-bold text-gray-dark">Two-Factor Authentication</h3>
                <p class="text-sm text-gray-500">Add an extra layer of security to your account.</p>
              </div>
              <button 
                @click="toggleTwoFactor" 
                :class="twoFactorEnabled ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-opacity-90'"
                class="text-white font-bold px-4 py-2 rounded transition"
              >
                {{ twoFactorEnabled ? 'Disable' : 'Enable' }}
              </button>
            </div>

            <!-- Change Password Modal Trigger -->
            <div class="flex items-center justify-between p-4 border rounded bg-gray-50">
              <div>
                <h3 class="font-bold text-gray-dark">Change Password</h3>
                <p class="text-sm text-gray-500">Update your password regularly for better security.</p>
              </div>
              <button 
                @click="showPasswordModal = true" 
                class="bg-primary hover:bg-opacity-90 text-white font-bold px-4 py-2 rounded transition"
              >
                Update
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Password Change Modal -->
  <div v-if="showPasswordModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-bold text-gray-dark">Change Password</h3>
        <button @click="showPasswordModal = false" class="text-gray-400 hover:text-gray-600">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>
      
      <form @submit.prevent="updatePassword" class="space-y-4">
        <div>
          <label class="block text-gray-600 mb-2 font-medium">Current Password</label>
          <input 
            type="password" 
            v-model="passwordForm.current"
            class="w-full border border-gray-300 rounded px-4 py-2 focus:border-primary focus:outline-none"
            required
          >
        </div>
        <div>
          <label class="block text-gray-600 mb-2 font-medium">New Password</label>
          <input 
            type="password" 
            v-model="passwordForm.new"
            class="w-full border border-gray-300 rounded px-4 py-2 focus:border-primary focus:outline-none"
            required
            minlength="6"
          >
        </div>
        <div>
          <label class="block text-gray-600 mb-2 font-medium">Confirm New Password</label>
          <input 
            type="password" 
            v-model="passwordForm.confirm"
            class="w-full border border-gray-300 rounded px-4 py-2 focus:border-primary focus:outline-none"
            required
            minlength="6"
          >
        </div>
        
        <div class="flex gap-3 pt-4">
          <button 
            type="button" 
            @click="showPasswordModal = false"
            class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded transition"
          >
            Cancel
          </button>
          <button 
            type="submit"
            class="flex-1 bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded transition"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const activeTab = ref('profile')
const orders = ref([])
const showToast = ref(false)
const toastMessage = ref('')
const expandedOrders = ref([])

// Settings state
const emailNotifications = ref(true)
const twoFactorEnabled = ref(false)
const showPasswordModal = ref(false)
const passwordForm = ref({
  current: '',
  new: '',
  confirm: ''
})

// Load orders from localStorage
onMounted(() => {
  loadOrders()
  
  // Listen for new orders
  window.addEventListener('storage', loadOrders)
})

const loadOrders = () => {
  const storedOrders = localStorage.getItem('orders')
  if (storedOrders) {
    orders.value = JSON.parse(storedOrders)
  }
}

// Toast notification helper
const showNotification = (message) => {
  toastMessage.value = message
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

// Toggle order details
const toggleOrderDetails = (orderId) => {
  const index = expandedOrders.value.indexOf(orderId)
  if (index > -1) {
    expandedOrders.value.splice(index, 1)
  } else {
    expandedOrders.value.push(orderId)
  }
}

// Button actions with feedback
const saveProfile = () => {
  showNotification('✓ Profile updated successfully!')
}

const toggleTwoFactor = () => {
  twoFactorEnabled.value = !twoFactorEnabled.value
  if (twoFactorEnabled.value) {
    showNotification('✓ Two-Factor Authentication enabled!')
  } else {
    showNotification('✓ Two-Factor Authentication disabled!')
  }
}

const updatePassword = () => {
  // Validasi password
  if (passwordForm.value.new !== passwordForm.value.confirm) {
    alert('New password and confirmation do not match!')
    return
  }
  
  if (passwordForm.value.new.length < 6) {
    alert('Password must be at least 6 characters!')
    return
  }
  
  // Simulasi update password
  showNotification('✓ Password updated successfully!')
  showPasswordModal.value = false
  
  // Reset form
  passwordForm.value = {
    current: '',
    new: '',
    confirm: ''
  }
}

const logout = () => {
  if (confirm('Are you sure you want to logout?')) {
    showNotification('Logging out...')
    setTimeout(() => {
      window.location.href = '/'
    }, 1000)
  }
}

// Menghitung total items berdasarkan quantity
const getTotalItems = (order) => {
  return order.items.reduce((total, item) => total + item.quantity, 0)
}
</script>