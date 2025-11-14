<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Category 1 -->
        <div class="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64">
          <img src="/images/cat-image1.jpg" alt="Bikes" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
          <div class="absolute inset-0 bg-black bg-opacity-40"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 class="text-3xl font-bold mb-4">Bikes</h2>
            <a href="#" class="bg-primary hover:bg-white hover:text-primary border border-white text-white font-semibold px-6 py-2 rounded-full transition">Shop Now</a>
          </div>
        </div>

        <!-- Category 2 -->
        <div class="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64">
          <img src="/images/cat-image4.jpg" alt="Apparel" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
          <div class="absolute inset-0 bg-black bg-opacity-40"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 class="text-3xl font-bold mb-4">Cycling Apparel</h2>
            <a href="#" class="bg-primary hover:bg-white hover:text-primary border border-white text-white font-semibold px-6 py-2 rounded-full transition">Shop Now</a>
          </div>
        </div>

        <!-- Category 3 -->
        <div class="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64">
          <img src="/images/cat-image5.jpg" alt="Gear" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
          <div class="absolute inset-0 bg-black bg-opacity-40"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 class="text-3xl font-bold mb-4">Cycling Gear</h2>
            <a href="#" class="bg-primary hover:bg-white hover:text-primary border border-white text-white font-semibold px-6 py-2 rounded-full transition">Shop Now</a>
          </div>
        </div>
      </div>

      <!-- Popular Products -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold mb-8 text-center">Popular Products</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Product 1 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src="/images/products/1.jpg" alt="Specialized Turbo Levo SL" class="w-full h-64 object-cover">
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">Turbo Levo SL Comp Carbon</h3>
              <p class="text-gray-txt text-sm mb-3">Electric Mountain Bike</p>
              <div class="flex items-center mb-4">
                <span class="text-xl font-bold text-primary">$8,500</span>
                <span class="text-sm line-through text-gray-txt ml-2">$9,200</span>
              </div>
              <button class="w-full bg-primary hover:bg-transparent hover:border-primary border border-transparent text-white hover:text-primary font-semibold py-2 px-4 rounded-full transition">Add to Cart</button>
            </div>
          </div>

          <!-- Product 2 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src="/images/products/2.jpg" alt="Specialized Roubaix Expert" class="w-full h-64 object-cover">
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">Roubaix Expert (2026)</h3>
              <p class="text-gray-txt text-sm mb-3">Endurance Road Bike</p>
              <div class="flex items-center mb-4">
                <span class="text-xl font-bold text-primary">$6,500</span>
                <span class="text-sm line-through text-gray-txt ml-2">$7,000</span>
              </div>
              <button class="w-full bg-primary hover:bg-transparent hover:border-primary border border-transparent text-white hover:text-primary font-semibold py-2 px-4 rounded-full transition">Add to Cart</button>
            </div>
          </div>

          <!-- Product 3 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src="/images/products/3.jpg" alt="S-Works Prevail 3 Helmet" class="w-full h-64 object-cover">
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">S-Works Prevail 3</h3>
              <p class="text-gray-txt text-sm mb-3">Road Bike Helmet</p>
              <div class="flex items-center mb-4">
                <span class="text-xl font-bold text-primary">$275</span>
                <span class="text-sm line-through text-gray-txt ml-2">$325</span>
              </div>
              <button class="w-full bg-primary hover:bg-transparent hover:border-primary border border-transparent text-white hover:text-primary font-semibold py-2 px-4 rounded-full transition">Add to Cart</button>
            </div>
          </div>

          <!-- Product 4 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src="/images/products/4.jpg" alt="Men's Prime Jersey" class="w-full h-64 object-cover">
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">Men's Prime Short Sleeve Jersey</h3>
              <p class="text-gray-txt text-sm mb-3">Road Bike Jerseys</p>
              <div class="flex items-center mb-4">
                <span class="text-xl font-bold text-primary">$90</span>
                <span class="text-sm line-through text-gray-txt ml-2">$120</span>
              </div>
              <button class="w-full bg-primary hover:bg-transparent hover:border-primary border border-transparent text-white hover:text-primary font-semibold py-2 px-4 rounded-full transition">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Brands Section -->
      <div class="mt-16">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our <span class="text-primary">Top Brands</span></h2>
          <p class="text-gray-txt text-sm">Premium cycling brands you can trust</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div class="bg-gray-100 p-6 rounded-lg flex items-center justify-center h-24 hover:shadow-lg transition">
            <span class="font-bold text-gray-dark text-lg">Trek</span>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg flex items-center justify-center h-24 hover:shadow-lg transition">
            <span class="font-bold text-gray-dark text-lg">Giant</span>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg flex items-center justify-center h-24 hover:shadow-lg transition">
            <span class="font-bold text-gray-dark text-lg">Specialized</span>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg flex items-center justify-center h-24 hover:shadow-lg transition">
            <span class="font-bold text-gray-dark text-lg">Cannondale</span>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg flex items-center justify-center h-24 hover:shadow-lg transition">
            <span class="font-bold text-gray-dark text-lg">Scott</span>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg flex items-center justify-center h-24 hover:shadow-lg transition">
            <span class="font-bold text-gray-dark text-lg">Bianchi</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
