// birds.js - Bird animation controls and functionality

export default {
  // Initialize birds with random properties
  initBirds() {
    return [
      {
        id: "bird-1",
        class: "bird bird-1",
        delay: Math.random() * 5,
        wingSpeed: 0.4 + Math.random() * 0.3,
        color: "blue",
      },
      {
        id: "bird-2",
        class: "bird bird-2 bird-red",
        delay: Math.random() * 5 + 2,
        wingSpeed: 0.4 + Math.random() * 0.3,
        color: "red",
      },
    ];
  },

  // Create SVG for bird
  createBirdSVG(bird) {
    // Different wing colors based on bird color
    const wingFill = bird.color === "red" ? "#F87171" : "#60A5FA";

    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g class="bird-container">
          <!-- Bird body -->
          <path class="bird-body" d="M12,4c-3.8,0-7,3.2-7,7c0,2.6,1.4,4.9,3.5,6.1L8,20c0,0,4-1,8,0l-0.5-2.9c2.1-1.2,3.5-3.5,3.5-6.1
            C19,7.2,15.8,4,12,4z"/>
          
          <!-- Left wing -->
          <path class="bird-wing" fill="${wingFill}" d="M6,10.5c0,0-2.5-1-3.5-2S1,6,1,6s1.1,0.4,2.5,1s3,1.2,3,1.2L6,10.5z"
            style="animation-delay: ${bird.delay}s; animation-duration: ${bird.wingSpeed}s"/>
          
          <!-- Right wing -->
          <path class="bird-wing" fill="${wingFill}" d="M18,10.5c0,0,2.5-1,3.5-2s1.5-2.5,1.5-2.5s-1.1,0.4-2.5,1s-3,1.2-3,1.2L18,10.5z"
            style="animation-delay: ${bird.delay}s; animation-duration: ${bird.wingSpeed}s"/>
          
          <!-- Eyes -->
          <circle class="bird-eye" cx="10" cy="9" r="0.8"/>
          <circle class="bird-eye" cx="14" cy="9" r="0.8"/>
          
          <!-- Beak -->
          <path class="bird-beak" d="M12,11l-2,1.5v1L12,14l2-0.5v-1L12,11z"/>
        </g>
      </svg>
    `;
  },

  // Update bird positions
  updateBirdPositions(birds, windowWidth) {
    // We're using CSS animations, so this function is available for any
    // dynamic adjustments we might want to add later

    // Example: Make birds fly faster on smaller screens
    if (windowWidth < 768) {
      document.documentElement.style.setProperty(
        "--bird-speed-multiplier",
        "0.8",
      );
    } else {
      document.documentElement.style.setProperty(
        "--bird-speed-multiplier",
        "1",
      );
    }

    return birds;
  },

  // Add event listeners
  setupInteractions(birds) {
    // Could add interactivity like birds reacting to cursor,
    // but kept minimal for performance

    // Listen for window resize to adjust animations
    window.addEventListener("resize", () => {
      this.updateBirdPositions(birds, window.innerWidth);
    });
  },

  // Cleanup function to remove event listeners when component unmounts
  cleanup() {
    window.removeEventListener("resize", this.updateBirdPositions);
  },
};
