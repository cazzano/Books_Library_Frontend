<template>
  <div class="min-h-screen bg-slate-50 py-16">
    <div class="container mx-auto px-4 max-w-5xl">
      <h1 class="text-4xl font-bold text-center mb-16 text-emerald-800">About Us</h1>
      
      <!-- Founder Section -->
      <div class="bg-white rounded-lg shadow-lg p-8 mb-16 flex flex-col md:flex-row items-center gap-8">
        <div class="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 flex items-center justify-center">
          <!-- Replaced placeholder with a div that has a user icon -->
          <div class="text-gray-400 text-6xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
        <div class="flex-grow">
          <h2 class="text-2xl font-bold text-emerald-700 mb-4">Founder</h2>
          <div class="bg-amber-50 p-6 rounded-md relative">
            <div class="handwritten-quote italic text-lg text-emerald-900">
              "We are bound to give Islamic content globally."
            </div>
            <!-- Decorative lines that look like paper -->
            <div class="absolute inset-0 pointer-events-none">
              <div v-for="i in 5" :key="i" class="w-full h-px bg-amber-200" :style="`top: ${i * 35}px`"></div>
            </div>
          </div>
          <p class="mt-4 text-gray-700">
            Our founder is dedicated to spreading authentic Islamic knowledge and resources to Muslims around the world.
            With a passion for education and community building, our platform aims to be a reliable source of Islamic content.
          </p>
        </div>
      </div>
      
      <!-- Developer Section -->
      <div class="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row-reverse items-center gap-8">
        <div class="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 flex items-center justify-center">
          <!-- Replaced placeholder with a div that has a code icon -->
          <div class="text-gray-400 text-6xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </div>
        <div class="flex-grow">
          <h2 class="text-2xl font-bold text-emerald-700 mb-4">Developer</h2>
          <div class="bg-slate-800 p-6 rounded-md font-mono text-green-400 relative overflow-hidden">
            <div class="code-quote">
              <span class="text-blue-400">const</span> <span class="text-yellow-400">developerMission</span> = <span class="text-orange-400">"I am passionate to make fascinating websites"</span>;
            </div>
            <!-- Code-like decoration -->
            <div class="absolute inset-0 pointer-events-none opacity-10">
              <div v-for="i in 10" :key="i" class="text-xs text-white overflow-hidden whitespace-nowrap">
                &lt;div class="w-full"&gt;Tailwind CSS&lt;/div&gt;
              </div>
            </div>
          </div>
          <p class="mt-4 text-gray-700">
            Our developer brings technical expertise and creativity to build an engaging platform.
            Using modern web technologies like Vue.js and Tailwind CSS, they've created a seamless
            experience that makes accessing Islamic content easy and enjoyable.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.handwritten-quote {
  font-family: 'Segoe Script', 'Brush Script MT', cursive;
  line-height: 1.8;
  position: relative;
  z-index: 10;
}

.code-quote {
  line-height: 1.6;
  position: relative;
  z-index: 10;
}
</style>
