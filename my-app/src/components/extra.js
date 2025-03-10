export default {
  name: "Home",
  data() {
    return {
      // Removed isDrawerOpen
    };
  },
  methods: {
    // Removed toggleDrawer method
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
        zIndex: zIndex,
      };
    },
    getRandomLandedLeafStyle(page) {
      const top = 20 + Math.random() * 60;
      const left =
        page === "left" ? 20 + Math.random() * 60 : 20 + Math.random() * 60;
      const rotation = Math.random() * 360;
      const delay = Math.random() * 5;
      const duration = 2 + Math.random() * 3;

      return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `rotate(${rotation}deg) scale(0.7)`,
        animation: `leafAppear ${duration}s ease-in-out ${delay}s infinite`,
      };
    },
    getRandomLeafColor() {
      const colors = [
        "text-red-500",
        "text-yellow-500",
        "text-orange-500",
        "text-red-600",
        "text-yellow-600",
        "text-orange-600",
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
        transition: "transform 10s ease-in-out",
        animation: `bgLeafFloat ${30 + Math.random() * 20}s ease-in-out ${Math.random() * 10}s infinite`,
      };
    },
    getRandomBgLeafColor() {
      const colors = [
        "text-red-400",
        "text-green-400",
        "text-blue-400",
        "text-purple-400",
        "text-pink-400",
        "text-indigo-400",
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    },
    getRandomSize() {
      return 50 + Math.random() * 100;
    },
  },
};
