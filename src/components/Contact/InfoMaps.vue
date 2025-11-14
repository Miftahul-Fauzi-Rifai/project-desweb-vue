<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-bold mb-6">Send us a Message</h2>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label class="block text-gray-700 font-semibold mb-2">Name</label>
              <input 
                type="text" 
                v-model="form.name"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
                placeholder="Your name"
                required
              >
            </div>
            
            <div>
              <label class="block text-gray-700 font-semibold mb-2">Email</label>
              <input 
                type="email" 
                v-model="form.email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
                placeholder="your.email@example.com"
                required
              >
            </div>
            
            <div>
              <label class="block text-gray-700 font-semibold mb-2">Phone</label>
              <input 
                type="tel" 
                v-model="form.phone"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
                placeholder="+1 (123) 456-7890"
              >
            </div>
            
            <div>
              <label class="block text-gray-700 font-semibold mb-2">Subject</label>
              <input 
                type="text" 
                v-model="form.subject"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
                placeholder="How can we help?"
                required
              >
            </div>
            
            <div>
              <label class="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea 
                v-model="form.message"
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary resize-none"
                placeholder="Tell us more about your inquiry..."
                required
              ></textarea>
            </div>
            
            <button 
              type="submit"
              class="w-full bg-primary hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-full transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Information & Map -->
        <div>
          <h2 class="text-2xl font-bold mb-6">Get in Touch</h2>
          <div class="space-y-6">
            <!-- Address -->
            <div class="flex items-start space-x-4">
              <div class="bg-primary text-white p-3 rounded-full">
                <i class="fas fa-map-marker-alt text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">Visit Us</h3>
                <p class="text-gray-txt">123 Bike Street, Cycling City<br>Indonesia 12345</p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start space-x-4">
              <div class="bg-primary text-white p-3 rounded-full">
                <i class="fas fa-phone text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">Call Us</h3>
                <p class="text-gray-txt">Phone: (123) 456-7890<br>Mobile: (098) 765-4321</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start space-x-4">
              <div class="bg-primary text-white p-3 rounded-full">
                <i class="fas fa-envelope text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">Email Us</h3>
                <p class="text-gray-txt">info@bikestore.com<br>support@bikestore.com</p>
              </div>
            </div>

            <!-- Hours -->
            <div class="flex items-start space-x-4">
              <div class="bg-primary text-white p-3 rounded-full">
                <i class="fas fa-clock text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">Working Hours</h3>
                <p class="text-gray-txt">Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 10:00 AM - 4:00 PM<br>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <!-- Map -->
          <div class="mt-8 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1606.3943581000374!2d116.88102996962688!3d-1.250660163799775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1763087729827!5m2!1sid!2sid"
              width="100%" 
              height="350" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-16 max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div class="space-y-4">
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="font-semibold text-lg mb-2">What are your shipping options?</h3>
            <p class="text-gray-txt">We offer standard shipping (5-7 business days) and express shipping (2-3 business days) for all orders. Free shipping on orders over $500.</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="font-semibold text-lg mb-2">Do you offer bike assembly service?</h3>
            <p class="text-gray-txt">Yes! We offer professional bike assembly for an additional fee. Our expert technicians ensure your bike is perfectly assembled and tuned.</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="font-semibold text-lg mb-2">What is your return policy?</h3>
            <p class="text-gray-txt">We accept returns within 30 days of purchase. Items must be unused and in original packaging. See our full return policy for details.</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="font-semibold text-lg mb-2">Do you offer warranties?</h3>
            <p class="text-gray-txt">All our bikes come with manufacturer warranties. Additional extended warranty options are available at checkout.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  alert('Thank you for your message! We will get back to you soon.')
  // Reset form
  form.name = ''
  form.email = ''
  form.phone = ''
  form.subject = ''
  form.message = ''
}
</script>
