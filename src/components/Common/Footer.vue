<template>
  <footer class="bg-gray-dark text-white">
    <div class="container mx-auto px-4 py-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Shop</h3>
          <ul class="space-y-2">
            <li><router-link to="/bikes" class="hover:text-secondary transition">Bikes</router-link></li>
            <li><router-link to="/accessories" class="hover:text-secondary transition">Accessories</router-link></li>
            <li><router-link to="/clothing" class="hover:text-secondary transition">Clothing</router-link></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Pages</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="hover:text-secondary transition">Home</router-link></li>
            <li><router-link to="/bikes" class="hover:text-secondary transition">Bikes</router-link></li>
            <li><router-link to="/accessories" class="hover:text-secondary transition">Accessories</router-link></li>
            <li><router-link to="/clothing" class="hover:text-secondary transition">Clothing</router-link></li>
            <li><router-link to="/contact" class="hover:text-secondary transition">Contact</router-link></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Account</h3>
          <ul class="space-y-2">
            <li><router-link to="/cart" class="hover:text-secondary transition">Cart</router-link></li>
            <li><router-link to="/user" class="hover:text-secondary transition">My Profile</router-link></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
          <ul class="space-y-2">
            <li class="flex items-center">
              <i class="fab fa-facebook w-4 h-4 mr-2 text-secondary"></i>
              <a href="https://www.facebook.com/" target="_blank" class="hover:text-secondary transition">Facebook</a>
            </li>
            <li class="flex items-center">
              <i class="fab fa-instagram w-4 h-4 mr-2 text-secondary"></i>
              <a href="https://www.instagram.com/" target="_blank" class="hover:text-secondary transition">Instagram</a>
            </li>
            <li class="flex items-center">
              <i class="fab fa-twitter w-4 h-4 mr-2 text-secondary"></i>
              <a href="https://twitter.com/" target="_blank" class="hover:text-secondary transition">Twitter</a>
            </li>
            <li class="flex items-center">
              <i class="fab fa-youtube w-4 h-4 mr-2 text-secondary"></i>
              <a href="https://www.youtube.com/" target="_blank" class="hover:text-secondary transition">YouTube</a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-2">
          <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
          <img src="/images/poji-store-logo.jpg" alt="POJI STORE" class="h-14 mb-4">
          <p class="mb-2">123 Bike Street, Cycling City</p>
          <p class="text-xl font-bold my-2">Phone: (123) 456-7890</p>
          <a href="mailto:info@bikestore.com" class="text-secondary hover:underline">Email: info@bikestore.com</a>
        </div>
      </div>
    </div>

    <div class="py-6 border-t border-gray-600">
      <div class="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div class="w-full lg:w-3/4 text-center lg:text-left mb-4 lg:mb-0">
          <p class="mb-2 font-bold">&copy; 2024 BikeStore. All rights reserved.</p>
          <ul class="flex justify-center lg:justify-start space-x-4">
            <li><a href="#" class="hover:text-secondary transition">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-secondary transition">Terms of Service</a></li>
            <li><a href="#" class="hover:text-secondary transition">FAQ</a></li>
          </ul>
        </div>
        <div class="w-full lg:w-1/4 text-center lg:text-right">
          <p class="text-sm text-gray-300">Made with ❤️ for cyclists</p>
        </div>
      </div>
    </div>
  </footer>
</template>