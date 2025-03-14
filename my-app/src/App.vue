<template>
  <div
    class="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800 font-arabic"
  >
    <!-- Navbar with modernized Islamic-inspired styling -->
    <div
      class="navbar bg-gradient-to-r from-emerald-800 to-emerald-700 text-white shadow-lg sticky top-0 z-10"
    >
      <div class="container mx-auto">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">
            <span class="text-2xl mr-2">☪️</span>
            <span class="font-arabic">Al-Baraka</span>
          </a>
        </div>
        <div class="flex-none">
          <!-- Mobile menu toggle button -->
          <button @click="toggleMobileMenu" class="menu-toggle lg:hidden">
            <i class="fas" :class="mobileMenuActive ? 'fa-times' : 'fa-bars'"></i>
          </button>
          
          <ul class="menu menu-horizontal px-1 gap-2" :class="{ 'mobile-active': mobileMenuActive }">
            <li>
              <router-link
                to="/"
                class="btn btn-home btn-sm bg-emerald-700 hover:bg-emerald-600 border-none text-white flex items-center gap-2 rounded-lg transition-all duration-300"
              >
                <i class="fas fa-home"></i> Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/books"
                class="btn btn-home btn-sm bg-emerald-700 hover:bg-emerald-600 border-none text-white flex items-center gap-2 rounded-lg transition-all duration-300"
              >
                <i class="fas fa-book"></i> Books
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="btn btn-about btn-sm bg-blue-700 hover:bg-blue-600 border-none text-white flex items-center gap-2 rounded-lg transition-all duration-300"
              >
                <i class="fas fa-info-circle"></i> About
              </router-link>
            </li>

            <li>
              <router-link
                to="/contact"
                class="btn btn-about btn-sm bg-blue-700 hover:bg-blue-600 border-none text-white flex items-center gap-2 rounded-lg transition-all duration-300"
              >
                <i class="fas fa-envelope"></i> Contact
              </router-link>
            </li>



         </ul>
        </div>
      </div>
    </div>

    <!-- Mobile drawer navigation - only shown when activated -->
    <div 
      class="mobile-drawer" 
      :class="{ 'mobile-drawer-active': mobileMenuActive }"
      @click.self="closeMobileMenu"
    >
      <div class="mobile-drawer-content">
        <div class="flex justify-between items-center p-4 bg-emerald-800 text-white">
          <span class="text-xl font-arabic">Al-Baraka Menu</span>
          <button @click="toggleMobileMenu" class="text-white">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
        <ul class="menu p-4 bg-white">
          <li class="mb-2">
            <router-link
              to="/"
              @click="closeMobileMenu"
              class="btn btn-home w-full bg-emerald-700 hover:bg-emerald-600 border-none text-white flex items-center gap-2 rounded-lg transition-all duration-300"
            >
              <i class="fas fa-home"></i> Home
            </router-link>
          </li>
          <li class="mb-2">
            <router-link
              to="/books"
              @click="closeMobileMenu"
              class="btn btn-home w-full bg-emerald-700 hover:bg-emerald-600 border-none text-white flex items-center gap-2 rounded-lg transition-all duration-300"
            >
              <i class="fas fa-book"></i> Books
            </router-link>
          </li>
          <li class="mb-2">
            <router-link
              to="/about"
              @click="closeMobileMenu"
              class="btn btn-about w-full bg-blue-700 hover:bg-blue-600 border-none text-white flex items-center gap-2 rounded-lg transition-all duration-300"
            >
              <i class="fas fa-info-circle"></i> About
            </router-link>
          </li>

    <li class="mb-2">
            <router-link
              to="/contact"
              @click="closeMobileMenu"
              class="btn btn-about w-full bg-blue-700 hover:bg-blue-600 border-none text-white flex items-center gap-2 rounded-lg transition-all duration-300"
            >
              <i class="fas fa-envelope"></i> Contact
            </router-link>
          </li>




        </ul>
      </div>
    </div>

    <!-- Modernized decorative divider with subtle pattern -->
    <div class="w-full h-2 bg-emerald-800 relative overflow-hidden">
      <div class="absolute inset-0 bg-pattern opacity-30"></div>
    </div>

    <!-- Main content area with modern shadow and subtle animation -->
    <div class="flex-grow container mx-auto px-4 py-8">
      <div
        class="bg-white rounded-xl p-6 border border-blue-200 shadow-xl transition-all duration-500 hover:shadow-2xl"
      >
        <div class="border-2 border-emerald-500 border-dashed p-8 rounded-lg">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <!-- Modernized decorative divider -->
    <div class="w-full h-2 bg-blue-800 relative overflow-hidden">
      <div class="absolute inset-0 bg-pattern opacity-30"></div>
    </div>

    <!-- Footer with modern Islamic styling -->
    <footer
      class="footer footer-center p-10 bg-gradient-to-r from-blue-900 to-blue-800 text-white"
    >
      <div class="grid grid-flow-col gap-8">
        <a
          class="link link-hover flex flex-col items-center transition-transform duration-300 hover:scale-110"
        >
          <i class="fas fa-mosque text-2xl mb-2 text-emerald-400"></i>
          <span>About us</span>
        </a>
        <a
          class="link link-hover flex flex-col items-center transition-transform duration-300 hover:scale-110"
        >
          <i class="fas fa-scroll text-2xl mb-2 text-emerald-400"></i>
          <span>Services</span>
        </a>
        <a
          class="link link-hover flex flex-col items-center transition-transform duration-300 hover:scale-110"
        >
          <i class="fas fa-handshake text-2xl mb-2 text-emerald-400"></i>
          <span>Contact</span>
        </a>
        <a
          class="link link-hover flex flex-col items-center transition-transform duration-300 hover:scale-110"
        >
          <i class="fas fa-balance-scale text-2xl mb-2 text-emerald-400"></i>
          <span>Privacy</span>
        </a>
      </div>
      <div>
        <div class="grid grid-flow-col gap-6">
          <a
            class="btn social-btn btn-circle bg-red-700 hover:bg-red-600 border-none transition-all duration-300 hover:scale-110"
          >
            <i class="fab fa-twitter text-xl"></i>
          </a>
          <a
            class="btn social-btn btn-circle bg-emerald-700 hover:bg-emerald-600 border-none transition-all duration-300 hover:scale-110"
          >
            <i class="fab fa-youtube text-xl"></i>
          </a>
          <a
            class="btn social-btn btn-circle bg-blue-700 hover:bg-blue-600 border-none transition-all duration-300 hover:scale-110"
          >
            <i class="fab fa-facebook text-xl"></i>
          </a>
        </div>
      </div>
      <div class="mt-4">
        <div class="text-center">
          <p class="text-2xl mb-2 font-arabic">بسم الله الرحمن الرحيم</p>
          <p class="opacity-75">Made with dedication and respect</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      mobileMenuActive: false
    }
  },
metaInfo() {
    return {
      title: 'Al-Baraka - Islamic Knowledge Resource',
      titleTemplate: '%s | Al-Baraka',
      meta: [
        { vmid: 'description', name: 'description', content: 'Al-Baraka - Islamic knowledge and resources for spiritual guidance and education' }
      ]
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuActive = !this.mobileMenuActive;
      // Prevent body scrolling when drawer is open
      document.body.style.overflow = this.mobileMenuActive ? 'hidden' : '';
    },
    closeMobileMenu() {
      this.mobileMenuActive = false;
      document.body.style.overflow = '';
    }
  },
  mounted() {
    // Load Font Awesome from CDN if not already loaded
    if (!document.getElementById("font-awesome-css")) {
      const link = document.createElement("link");
      link.id = "font-awesome-css";
      link.rel = "stylesheet";
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";
      document.head.appendChild(link);
    }

    // Load Arabic-inspired font if not already loaded
    if (!document.getElementById("arabic-font")) {
      const link = document.createElement("link");
      link.id = "arabic-font";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Scheherazade+New&display=swap";
      document.head.appendChild(link);
    }
    
    // Load responsive CSS
    if (!document.getElementById("responsive-css")) {
      const link = document.createElement("link");
      link.id = "responsive-css";
      link.rel = "stylesheet";
      link.href = "/responsive.css"; // Make sure this path is correct
      document.head.appendChild(link);
    }
    
    // Close mobile menu when window resizes to larger screen
    window.addEventListener('resize', () => {
      if (window.innerWidth > 767 && this.mobileMenuActive) {
        this.closeMobileMenu();
      }
    });
    
    // Close mobile menu with escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.mobileMenuActive) {
        this.closeMobileMenu();
      }
    });
  }
};
</script>

  


<style>
/* Button click animation with more visible circles */
.btn {
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.4); /* More visible background */
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 10;
}

.btn:active::before {
  animation: pulse 0.8s ease-out; /* Slightly longer animation */
}

@keyframes pulse {
  0% {
    width: 0;
    height: 0;
    opacity: 0.8; /* Higher initial opacity */
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}

/* Enhanced colorful radiating lines on click */
.btn:active::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.9; /* Higher opacity */
  animation: fadeLines 1s ease-out forwards;
  z-index: 11;
}

/* Improved colorful lines for each button with larger size and higher contrast */
.btn-home:active::after {
  background-image:
    radial-gradient(
      circle,
      transparent 10%,
      rgba(76, 175, 80, 0.9) 15%,
      transparent 20%
    ),
    radial-gradient(
      circle,
      transparent 20%,
      rgba(33, 150, 243, 0.9) 25%,
      transparent 30%
    ),
    radial-gradient(
      circle,
      transparent 30%,
      rgba(255, 193, 7, 0.9) 35%,
      transparent 40%
    ),
    radial-gradient(
      circle,
      transparent 40%,
      rgba(233, 30, 99, 0.9) 45%,
      transparent 50%
    );
  background-size: 200% 200%; /* Smaller initial size to make expansion more visible */
}

.btn-about:active::after {
  background-image:
    radial-gradient(
      circle,
      transparent 10%,
      rgba(33, 150, 243, 0.9) 15%,
      transparent 20%
    ),
    radial-gradient(
      circle,
      transparent 20%,
      rgba(76, 175, 80, 0.9) 25%,
      transparent 30%
    ),
    radial-gradient(
      circle,
      transparent 30%,
      rgba(255, 87, 34, 0.9) 35%,
      transparent 40%
    ),
    radial-gradient(
      circle,
      transparent 40%,
      rgba(255, 193, 7, 0.9) 45%,
      transparent 50%
    );
  background-size: 200% 200%;
}

.btn-contact:active::after {
  background-image:
    radial-gradient(
      circle,
      transparent 10%,
      rgba(233, 30, 99, 0.9) 15%,
      transparent 20%
    ),
    radial-gradient(
      circle,
      transparent 20%,
      rgba(255, 193, 7, 0.9) 25%,
      transparent 30%
    ),
    radial-gradient(
      circle,
      transparent 30%,
      rgba(33, 150, 243, 0.9) 35%,
      transparent 40%
    ),
    radial-gradient(
      circle,
      transparent 40%,
      rgba(76, 175, 80, 0.9) 45%,
      transparent 50%
    );
  background-size: 200% 200%;
}

.social-btn:active::after {
  background-image:
    radial-gradient(
      circle,
      transparent 10%,
      rgba(255, 255, 255, 0.9) 15%,
      transparent 20%
    ),
    radial-gradient(
      circle,
      transparent 20%,
      rgba(255, 215, 0, 0.9) 25%,
      transparent 30%
    ),
    radial-gradient(
      circle,
      transparent 30%,
      rgba(0, 255, 255, 0.9) 35%,
      transparent 40%
    ),
    radial-gradient(
      circle,
      transparent 40%,
      rgba(255, 105, 180, 0.9) 45%,
      transparent 50%
    );
  background-size: 200% 200%;
}

@keyframes fadeLines {
  0% {
    background-size: 100% 100%;
    opacity: 0.9;
  }
  50% {
    background-size: 250% 250%;
    opacity: 0.8;
  }
  100% {
    background-size: 400% 400%;
    opacity: 0;
  }
}

/* Add a subtle border highlight on active state for extra visibility */
.btn:active {
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
}

/* Mobile menu toggle button style */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.3s ease;
}

.menu-toggle:hover {
  transform: scale(1.1);
}

/* Hamburger menu icon transition */
.menu-toggle .fa-bars,
.menu-toggle .fa-times {
  transition: all 0.3s ease;
}

/* Mobile drawer navigation */
.mobile-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 30;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.mobile-drawer-active {
  visibility: visible;
  opacity: 1;
}

.mobile-drawer-content {
  position: fixed;
  top: 0;
  right: -280px;
  width: 280px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease;
  overflow-y: auto;
  z-index: 31;
}

.mobile-drawer-active .mobile-drawer-content {
  right: 0;
}

/* Mobile-specific styles */
@media (max-width: 767px) {
  .menu-toggle {
    display: block;
  }
  
  .navbar .menu-horizontal {
    display: none;
  }
  
  .navbar .menu-horizontal.mobile-active {
    display: flex;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #065f46; /* emerald-800 */
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    z-index: 20;
  }
  
  .navbar .menu-horizontal li {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  
  .navbar .menu-horizontal li a {
    width: 100%;
    justify-content: center;
  }
}

/* Responsive adjustments for content area */
@media (max-width: 640px) {
  .flex-grow.container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  .bg-white {
    padding: 1rem;
  }
  
  .border-dashed {
    padding: 1rem;
  }
  
  /* Footer responsive adjustments */
  .footer .grid-flow-col {
    grid-auto-flow: row;
    gap: 1.5rem;
  }
  
  .footer.p-10 {
    padding: 2rem 1rem;
  }
}

/* Font size responsiveness */
@media (max-width: 480px) {
  .text-2xl {
    font-size: 1.25rem;
  }
  
  .text-xl {
    font-size: 1.1rem;
  }
  
  /* Social buttons responsive spacing */
  .footer .grid-flow-col.gap-6 {
    gap: 0.5rem;
  }
}

/* Ensure images don't overflow */
img {
  max-width: 100%;
  height: auto;
}

/* Add smooth transition for mobile drawer */
@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@keyframes slideOut {
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
}
</style>
