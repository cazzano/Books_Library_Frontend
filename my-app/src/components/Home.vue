<template>
  <div class="bg-gradient-to-b from-red-100 via-green-100 to-blue-200 min-h-screen flex flex-col items-center justify-between p-4 relative overflow-hidden">
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

<script src="./extra.js"></script>
<style src="./extra.css"></style>
<style src="./button_mod.css"></style>
<style src="./home.css"></style>
<style src="./buttons.css"></style>
<style src="./responsive.css"></style>
