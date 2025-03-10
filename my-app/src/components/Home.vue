<template>
  <div class="bg-gradient-to-b from-red-100 via-green-100 to-blue-200 min-h-screen flex flex-col items-center justify-between p-4 relative overflow-hidden">
    <!-- Hamburger Menu - Only visible on mobile when drawer is closed -->
    <button 
      v-if="!isDrawerOpen"
      class="hamburger-menu md:hidden fixed top-4 right-4 z-50 bg-white bg-opacity-70 rounded-lg p-2 shadow-md"
      @click="toggleDrawer"
      aria-label="Menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
           class="text-green-600">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
    
    <!-- Mobile Navigation Drawer -->
    <div 
      class="mobile-drawer fixed top-0 right-0 h-full w-64 bg-white bg-opacity-90 shadow-lg z-40 transform transition-transform duration-300 ease-in-out"
      :class="{ 'translate-x-0': isDrawerOpen, 'translate-x-full': !isDrawerOpen }">
      
      <!-- Drawer Header -->
      <div class="flex justify-between items-center p-4 border-b border-gray-200">
        <h3 class="text-xl font-bold text-green-600 font-arabic">دین اسلام</h3>
        <button @click="toggleDrawer" class="text-gray-600" aria-label="Close menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <!-- Drawer Navigation -->
      <nav class="p-4">
        <ul class="space-y-4">
          <li>
            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-green-100 transition-colors duration-200">
              <i class="fas fa-home mr-3 text-green-600"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-green-100 transition-colors duration-200">
              <i class="fas fa-book mr-3 text-green-600"></i>
              <span>Books</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-green-100 transition-colors duration-200">
              <i class="fas fa-info-circle mr-3 text-green-600"></i>
              <span>About Us</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-green-100 transition-colors duration-200">
              <i class="fas fa-envelope mr-3 text-green-600"></i>
              <span>Contact Us</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-green-100 transition-colors duration-200">
              <i class="fas fa-mosque mr-3 text-green-600"></i>
              <span>Prayer Times</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-green-100 transition-colors duration-200">
              <i class="fas fa-quran mr-3 text-green-600"></i>
              <span>Quran</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    
    <!-- Overlay that appears when drawer is open -->
    <div 
      v-if="isDrawerOpen" 
      class="fixed inset-0 bg-black bg-opacity-50 z-30"
      @click="toggleDrawer"></div>
      
    <!-- Background maple leaf pattern with transparency -->
    <div class="background-maple-pattern absolute inset-0 z-0 opacity-20">
      <div v-for="n in 20" :key="`bg-maple-${n}`" class="absolute" :style="getRandomBackgroundLeafStyle()">
        <svg viewBox="0 0 100 100" :width="getRandomSize()" :height="getRandomSize()" fill="currentColor" :class="getRandomBgLeafColor()">
          <path d="M33.6,4.9c0,0,13.4,13.4,10.4,29.7c8.9-12.5,25.4-22.1,25.4-22.1s1.8,15.4-6.7,28.6c15.2-6.4,31.2-3.5,31.2-3.5
          s-9.4,14.9-24.5,18.8c15.8,2.7,26.5,13.8,26.5,13.8s-16.4,5.3-31.2-0.5c13,9.8,17.4,24.8,17.4,24.8s-17.7-3.2-28.3-14.6
          c5.4,14.7,2.4,30,2.4,30s-14-9.3-18.3-24.5c-2.9,15.7-13.9,26.3-13.9,26.3s-5.4-16.3,0.4-31c-9.9,12.9-24.9,17.2-24.9,17.2
          s3.1-17.6,14.6-28.1c-14.7,5.3-30,2.3-30,2.3s9.4-13.9,24.5-18.2c-15.8-3-26.4-14-26.4-14s16.3-5.2,31.1,0.4
          c-13-9.8-17.3-24.7-17.3-24.7s17.7,3.1,28.2,14.4c-5.3-14.7-2.3-29.9-2.3-29.9S29.3-10.4,33.6,4.9z"/>
        </svg>
      </div>
    </div>
    
    <!-- Content container with z-index to appear above the background pattern -->
    <div class="relative z-10 w-full flex flex-col items-center">
      <!-- Redesigned Header with Maple Leaf Decorations -->
      <div class="flex items-center justify-center mb-8 relative">
        <div class="maple-leaf-decoration left-leaf">
          <svg viewBox="0 0 100 100" width="40" height="40" fill="currentColor" class="text-green-600">
            <path d="M33.6,4.9c0,0,13.4,13.4,10.4,29.7c8.9-12.5,25.4-22.1,25.4-22.1s1.8,15.4-6.7,28.6c15.2-6.4,31.2-3.5,31.2-3.5
            s-9.4,14.9-24.5,18.8c15.8,2.7,26.5,13.8,26.5,13.8s-16.4,5.3-31.2-0.5c13,9.8,17.4,24.8,17.4,24.8s-17.7-3.2-28.3-14.6
            c5.4,14.7,2.4,30,2.4,30s-14-9.3-18.3-24.5c-2.9,15.7-13.9,26.3-13.9,26.3s-5.4-16.3,0.4-31c-9.9,12.9-24.9,17.2-24.9,17.2
            s3.1-17.6,14.6-28.1c-14.7,5.3-30,2.3-30,2.3s9.4-13.9,24.5-18.2c-15.8-3-26.4-14-26.4-14s16.3-5.2,31.1,0.4
            c-13-9.8-17.3-24.7-17.3-24.7s17.7,3.1,28.2,14.4c-5.3-14.7-2.3-29.9-2.3-29.9S29.3-10.4,33.6,4.9z"/>
          </svg>
        </div>
        
        <!-- Increased horizontal padding and added background for better visibility -->
        <h1 class="text-4xl font-arabic text-center text-green-600 px-10 py-2 relative z-10 bg-white bg-opacity-70 rounded-lg shadow-sm">دین اسلام</h1>
        
        <div class="maple-leaf-decoration right-leaf">
          <svg viewBox="0 0 100 100" width="40" height="40" fill="currentColor" class="text-green-600">
            <path d="M33.6,4.9c0,0,13.4,13.4,10.4,29.7c8.9-12.5,25.4-22.1,25.4-22.1s1.8,15.4-6.7,28.6c15.2-6.4,31.2-3.5,31.2-3.5
            s-9.4,14.9-24.5,18.8c15.8,2.7,26.5,13.8,26.5,13.8s-16.4,5.3-31.2-0.5c13,9.8,17.4,24.8,17.4,24.8s-17.7-3.2-28.3-14.6
            c5.4,14.7,2.4,30,2.4,30s-14-9.3-18.3-24.5c-2.9,15.7-13.9,26.3-13.9,26.3s-5.4-16.3,0.4-31c-9.9,12.9-24.9,17.2-24.9,17.2
            s3.1-17.6,14.6-28.1c-14.7,5.3-30,2.3-30,2.3s9.4-13.9,24.5-18.2c-15.8-3-26.4-14-26.4-14s16.3-5.2,31.1,0.4
            c-13-9.8-17.3-24.7-17.3-24.7s17.7,3.1,28.2,14.4c-5.3-14.7-2.3-29.9-2.3-29.9S29.3-10.4,33.6,4.9z"/>
          </svg>
        </div>
      </div>
      
      <!-- Book and maple leaves container -->
      <div class="relative w-full max-w-2xl h-[500px]">
        <!-- Falling maple leaves with proper shape -->
        <div v-for="n in 15" :key="n" class="absolute maple-leaf" :style="getRandomLeafStyle()">
          <svg width="30" height="30" viewBox="0 0 100 100" fill="currentColor" :class="getRandomLeafColor()">
            <path d="M33.6,4.9c0,0,13.4,13.4,10.4,29.7c8.9-12.5,25.4-22.1,25.4-22.1s1.8,15.4-6.7,28.6c15.2-6.4,31.2-3.5,31.2-3.5
            s-9.4,14.9-24.5,18.8c15.8,2.7,26.5,13.8,26.5,13.8s-16.4,5.3-31.2-0.5c13,9.8,17.4,24.8,17.4,24.8s-17.7-3.2-28.3-14.6
            c5.4,14.7,2.4,30,2.4,30s-14-9.3-18.3-24.5c-2.9,15.7-13.9,26.3-13.9,26.3s-5.4-16.3,0.4-31c-9.9,12.9-24.9,17.2-24.9,17.2
            s3.1-17.6,14.6-28.1c-14.7,5.3-30,2.3-30,2.3s9.4-13.9,24.5-18.2c-15.8-3-26.4-14-26.4-14s16.3-5.2,31.1,0.4
            c-13-9.8-17.3-24.7-17.3-24.7s17.7,3.1,28.2,14.4c-5.3-14.7-2.3-29.9-2.3-29.9S29.3-10.4,33.6,4.9z"/>
          </svg>
        </div>
        
        <!-- The book -->
        <div class="book absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <!-- Left page -->
          <div class="page left-page">
            <div class="page-content flex flex-col items-center justify-center p-6">
              <span class="text-xl font-serif mb-4 text-blue-600">Quran-Ul-kareem</span>
              <div class="sparkling-stars">
                <span class="star star-green" v-for="n in 5" :key="`left-${n}`"></span>
              </div>
              
              <!-- Leaves landing on left page with proper maple leaf shape -->
              <div v-for="n in 3" :key="`landed-left-${n}`" class="absolute landed-leaf" :style="getRandomLandedLeafStyle('left')">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor" :class="getRandomLeafColor()">
                  <path d="M33.6,4.9c0,0,13.4,13.4,10.4,29.7c8.9-12.5,25.4-22.1,25.4-22.1s1.8,15.4-6.7,28.6c15.2-6.4,31.2-3.5,31.2-3.5
                  s-9.4,14.9-24.5,18.8c15.8,2.7,26.5,13.8,26.5,13.8s-16.4,5.3-31.2-0.5c13,9.8,17.4,24.8,17.4,24.8s-17.7-3.2-28.3-14.6
                  c5.4,14.7,2.4,30,2.4,30s-14-9.3-18.3-24.5c-2.9,15.7-13.9,26.3-13.9,26.3s-5.4-16.3,0.4-31c-9.9,12.9-24.9,17.2-24.9,17.2
                  s3.1-17.6,14.6-28.1c-14.7,5.3-30,2.3-30,2.3s9.4-13.9,24.5-18.2c-15.8-3-26.4-14-26.4-14s16.3-5.2,31.1,0.4
                  c-13-9.8-17.3-24.7-17.3-24.7s17.7,3.1,28.2,14.4c-5.3-14.7-2.3-29.9-2.3-29.9S29.3-10.4,33.6,4.9z"/>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Right page -->
          <div class="page right-page">
            <div class="page-content flex flex-col items-center justify-center p-6">
              <span class="text-xl font-arabic text-red-600">قرآن کریم</span>
              <div class="sparkling-stars">
                <span class="star star-blue" v-for="n in 5" :key="`right-${n}`"></span>
              </div>
              
              <!-- Leaves landing on right page with proper maple leaf shape -->
              <div v-for="n in 3" :key="`landed-right-${n}`" class="absolute landed-leaf" :style="getRandomLandedLeafStyle('right')">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor" :class="getRandomLeafColor()">
                  <path d="M33.6,4.9c0,0,13.4,13.4,10.4,29.7c8.9-12.5,25.4-22.1,25.4-22.1s1.8,15.4-6.7,28.6c15.2-6.4,31.2-3.5,31.2-3.5
                  s-9.4,14.9-24.5,18.8c15.8,2.7,26.5,13.8,26.5,13.8s-16.4,5.3-31.2-0.5c13,9.8,17.4,24.8,17.4,24.8s-17.7-3.2-28.3-14.6
                  c5.4,14.7,2.4,30,2.4,30s-14-9.3-18.3-24.5c-2.9,15.7-13.9,26.3-13.9,26.3s-5.4-16.3,0.4-31c-9.9,12.9-24.9,17.2-24.9,17.2
                  s3.1-17.6,14.6-28.1c-14.7,5.3-30,2.3-30,2.3s9.4-13.9,24.5-18.2c-15.8-3-26.4-14-26.4-14s16.3-5.2,31.1,0.4
                  c-13-9.8-17.3-24.7-17.3-24.7s17.7,3.1,28.2,14.4c-5.3-14.7-2.3-29.9-2.3-29.9S29.3-10.4,33.6,4.9z"/>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Book spine -->
          <div class="book-spine"></div>
        </div>
        
        <!-- Added background for the bottom text as well -->
        <h2 class="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xl text-green-600 font-arabic bg-white bg-opacity-70 px-4 py-1 rounded-lg">تحيا اسلام</h2>
     </div>

<div class="handwritten-quote-container mt-12 mb-8 w-full flex justify-center">
  <div class="handwritten-quote relative bg-white bg-opacity-70 p-4 rounded-lg shadow-md transform rotate-1">
    <!-- Quotation marks -->
    <span class="absolute -top-3 -left-2 text-4xl text-purple-700 font-serif">"</span>
    
    <!-- Handwritten text with animation -->
    <p class="handwritten-text text-purple-800 text-xl mx-6 my-2">
      We are giving the best 
      <span class="font-semibold underline">Islamic Content</span>
    </p>
    
    <!-- Closing quotation mark -->
    <span class="absolute -bottom-6 -right-2 text-4xl text-purple-700 font-serif">"</span>
    
    <!-- Small decorative maple leaves around the quote -->
    <div class="absolute -top-4 -right-4 transform rotate-45">
      <svg viewBox="0 0 100 100" width="25" height="25" fill="currentColor" class="text-green-500">
        <path d="M33.6,4.9c0,0,13.4,13.4,10.4,29.7c8.9-12.5,25.4-22.1,25.4-22.1s1.8,15.4-6.7,28.6c15.2-6.4,31.2-3.5,31.2-3.5s-9.4,14.9-24.5,18.8c15.8,2.7,26.5,13.8,26.5,13.8s-16.4,5.3-31.2-0.5c13,9.8,17.4,24.8,17.4,24.8s-17.7-3.2-28.3-14.6c5.4,14.7,2.4,30,2.4,30s-14-9.3-18.3-24.5c-2.9,15.7-13.9,26.3-13.9,26.3s-5.4-16.3,0.4-31c-9.9,12.9-24.9,17.2-24.9,17.2s3.1-17.6,14.6-28.1c-14.7,5.3-30,2.3-30,2.3s9.4-13.9,24.5-18.2c-15.8-3-26.4-14-26.4-14s16.3-5.2,31.1,0.4c-13-9.8-17.3-24.7-17.3-24.7s17.7,3.1,28.2,14.4c-5.3-14.7-2.3-29.9-2.3-29.9S29.3-10.4,33.6,4.9z"/>
      </svg>
    </div>
    
    <div class="absolute -bottom-4 -left-4 transform -rotate-15">
      <svg viewBox="0 0 100 100" width="25" height="25" fill="currentColor" class="text-red-500">
        <path d="M33.6,4.9c0,0,13.4,13.4,10.4,29.7c8.9-12.5,25.4-22.1,25.4-22.1s1.8,15.4-6.7,28.6c15.2-6.4,31.2-3.5,31.2-3.5s-9.4,14.9-24.5,18.8c15.8,2.7,26.5,13.8,26.5,13.8s-16.4,5.3-31.2-0.5c13,9.8,17.4,24.8,17.4,24.8s-17.7-3.2-28.3-14.6c5.4,14.7,2.4,30,2.4,30s-14-9.3-18.3-24.5c-2.9,15.7-13.9,26.3-13.9,26.3s-5.4-16.3,0.4-31c-9.9,12.9-24.9,17.2-24.9,17.2s3.1-17.6,14.6-28.1c-14.7,5.3-30,2.3-30,2.3s9.4-13.9,24.5-18.2c-15.8-3-26.4-14-26.4-14s16.3-5.2,31.1,0.4c-13-9.8-17.3-24.7-17.3-24.7s17.7,3.1,28.2,14.4c-5.3-14.7-2.3-29.9-2.3-29.9S29.3-10.4,33.6,4.9z"/>
      </svg>
    </div>
  </div>
</div>



    </div>
    
    <!-- Navigation Buttons moved to bottom with Font Awesome icons -->
    <div class="flex flex-wrap justify-center gap-5 mb-8 mt-auto z-10 relative">
      <button class="curved-button books-button rapid-jiggle">
        <i class="fas fa-book mr-2"></i>
        <span class="button-text">Books</span>
      </button>
      
      <button class="curved-button about-button rapid-jiggle" ref="aboutButton" @click="handleAboutClick">
        <i class="fas fa-info-circle mr-2"></i>
        <span class="button-text">About Us</span>
      </button>
      
      <button class="curved-button contact-button rapid-jiggle">
        <i class="fas fa-envelope mr-2"></i>
        <span class="button-text">Contact Us</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      isDrawerOpen: false
    }
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
      
      // Prevent body scrolling when drawer is open
      if (this.isDrawerOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    handleAboutClick() {
      // Add your about page navigation logic here
      // For example: this.$router.push('/about');
    },
    getRandomLeafStyle() {
      const startLeft = Math.random() * 100;
      const fallDuration = 7 + Math.random() * 15;
      const spinDuration = 3 + Math.random() * 5;
      const delay = Math.random() * 10;
      const size = 0.5 + Math.random() * 0.7;
      const zIndex = Math.floor(Math.random() * 5) + 10;
      
      return {
        left: `${startLeft}%`,
        top: `-50px`,
        animation: `fall ${fallDuration}s linear ${delay}s infinite, 
                   spin ${spinDuration}s linear ${delay}s infinite,
                   sway ${spinDuration}s ease-in-out ${delay}s infinite`,
        transform: `scale(${size})`,
        zIndex: zIndex
      };
    },
    getRandomLandedLeafStyle(page) {
      const top = 20 + Math.random() * 60;
      const left = page === 'left' ? 20 + Math.random() * 60 : 20 + Math.random() * 60;
      const rotation = Math.random() * 360;
      const delay = Math.random() * 5;
      const duration = 2 + Math.random() * 3;
      
      return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `rotate(${rotation}deg) scale(0.7)`,
        animation: `leafAppear ${duration}s ease-in-out ${delay}s infinite`
      };
    },
    getRandomLeafColor() {
      const colors = [
        'text-red-500',
        'text-yellow-500', 
        'text-orange-500', 
        'text-red-600',
        'text-yellow-600', 
        'text-orange-600'  
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    },
    // Methods for background maple leaves
    getRandomBackgroundLeafStyle() {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const rotation = Math.random() * 360;
      
      return {
        left: `${left}%`,
        top: `${top}%`,
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 10s ease-in-out',
        animation: `bgLeafFloat ${30 + Math.random() * 20}s ease-in-out ${Math.random() * 10}s infinite`
      };
    },
    getRandomBgLeafColor() {
      const colors = [
        'text-red-400',
        'text-green-400',
        'text-blue-400',
        'text-purple-400',
        'text-pink-400',
        'text-indigo-400'
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    },
    getRandomSize() {
      return 50 + Math.random() * 100;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&display=swap');

/* Background maple leaf floating animation */
@keyframes bgLeafFloat {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-15px) rotate(15deg);
  }
  50% {
    transform: translateY(0) rotate(0deg);
  }
  75% {
    transform: translateY(15px) rotate(-15deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}

/* Mobile drawer styles */
.mobile-drawer {
  height: 100vh;
  overflow-y: auto;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' opacity='0.05'%3E%3Cpath d='M33.6,4.9c0,0,13.4,13.4,10.4,29.7c8.9-12.5,25.4-22.1,25.4-22.1s1.8,15.4-6.7,28.6c15.2-6.4,31.2-3.5,31.2-3.5s-9.4,14.9-24.5,18.8c15.8,2.7,26.5,13.8,26.5,13.8s-16.4,5.3-31.2-0.5c13,9.8,17.4,24.8,17.4,24.8s-17.7-3.2-28.3-14.6c5.4,14.7,2.4,30,2.4,30s-14-9.3-18.3-24.5c-2.9,15.7-13.9,26.3-13.9,26.3s-5.4-16.3,0.4-31c-9.9,12.9-24.9,17.2-24.9,17.2s3.1-17.6,14.6-28.1c-14.7,5.3-30,2.3-30,2.3s9.4-13.9,24.5-18.2c-15.8-3-26.4-14-26.4-14s16.3-5.2,31.1,0.4c-13-9.8-17.3-24.7-17.3-24.7s17.7,3.1,28.2,14.4c-5.3-14.7-2.3-29.9-2.3-29.9S29.3-10.4,33.6,4.9z'/%3E%3C/svg%3E");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hamburger-menu {
  transition: transform 0.2s ease;
}

.hamburger-menu:hover {
  transform: scale(1.1);
}


.handwritten-quote {
  border: 1px solid #e2e8f0;
  max-width: 400px;
}

.handwritten-text {
  font-family: 'Caveat', cursive;
  line-height: 1.4;
  letter-spacing: 0.5px;
  position: relative;
}

.handwritten-text::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(109, 40, 217, 0.2);
}

/* Responsive styles for the handwritten quote */
@media (max-width: 768px) {
  .handwritten-quote-container {
    margin-top: 45px;
  }
  
  .handwritten-quote {
    max-width: 320px;
    transform: rotate(0.5deg);
  }
  
  .handwritten-text {
    font-size: 1.1rem;
  }
}

@media (max-width: 640px) {
  .handwritten-quote-container {
    margin-top: 55px;
  }
  
  .handwritten-quote {
    max-width: 280px;
  }
  
  .handwritten-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .handwritten-quote-container {
    margin-top: 60px;
  }
  
  .handwritten-quote {
    padding: 10px;
    max-width: 250px;
  }
}


</style>

<style src="./button_mod.css"></style>
<style src="./home.css"></style>
<style src="./buttons.css"></style>
<style src="./responsive.css"></style>
