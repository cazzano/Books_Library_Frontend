<template>
  <div class="about-container">
    <div class="about-wrapper">
      <h1 class="about-title">About Us</h1>
      
      <!-- Founder Section -->
      <div class="profile-card founder-card">
        <div class="avatar-container">
          <div class="avatar founder-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" class="avatar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
        <div class="profile-content">
          <h2 class="profile-title">Founder</h2>
          <div class="quote-container handwritten-container">
            <div class="handwritten-quote">
              "We are bound to give Islamic content globally."
            </div>
            <!-- Decorative lines -->
            <div class="decorative-lines handwritten-lines">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
          <p class="profile-description">
            Our founder is dedicated to spreading authentic Islamic knowledge and resources to Muslims around the world.
            With a passion for education and community building, our platform aims to be a reliable source of Islamic content.
          </p>
        </div>
      </div>
      
      <!-- Developer Section -->
      <div class="profile-card developer-card">
        <div class="avatar-container order-swap">
          <div class="avatar developer-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" class="avatar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </div>
        <div class="profile-content">
          <h2 class="profile-title">Developer</h2>
          <div class="quote-container code-container">
            <div class="code-quote">
              <span class="code-keyword">const</span> <span class="code-variable">developerMission</span> = <span class="code-string">"I am passionate to make fascinating websites"</span>;
            </div>
            <!-- Code-like decoration -->
            <div class="decorative-lines code-lines">
              <div class="code-line" v-for="i in 10" :key="i">&lt;div class="w-full"&gt;Tailwind CSS&lt;/div&gt;</div>
            </div>
          </div>
          <p class="profile-description">
            Our developer brings technical expertise and creativity to build an engaging platform.
            Using modern web technologies like Vue.js and Tailwind CSS, they've created a seamless
            experience that makes accessing Islamic content easy and enjoyable.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
@import './about_response.css';
</style>
