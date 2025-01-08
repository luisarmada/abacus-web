<template>
  <div id="app">
    <nav class="navbar">
      <!-- Logo on the left -->
      <div class="navbar-logo">
        <img src="/images/dragon_red_logo.png" alt="Logo" />
      </div>

      <!-- Navbar links (hidden in mobile view) -->
      <div class="navbar-menu" :class="{ 'navbar-menu-open': isMenuOpen }">
        <router-link to="/" @click="closeMenu">Home</router-link>
        <router-link to="/about" @click="closeMenu">About</router-link>
        <router-link to="/sponsors" @click="closeMenu">Sponsors</router-link>
        <router-link to="/connect" @click="closeMenu">Connect</router-link>
      </div>

      <!-- Hamburger menu button (mobile view) -->
      <div class="navbar-hamburger" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </nav>

    <ParallaxLanding />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import ParallaxLanding from './components/ParallaxLanding.vue';

export default {
  name: "App",
  components: {
    ParallaxLanding,
  },
  data() {
    return {
      isMenuOpen: false, // Track the state of the hamburger menu
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle the menu visibility
    },
    closeMenu() {
      this.isMenuOpen = false; // Close the menu when a link is clicked
    },
  },
};
</script>

<style>
/* Reset styles */
body, ul {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FAF9F6;
  width: 100%;
  height: 100%;
}

/* Navbar styles */
.navbar {
  display: flex;
  align-items: center;
  background-color: #32312C;
  padding: 0px 4%;
  height: 62px;
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3); /* Subtle shadow */
  z-index: 10;
  position: relative;
}

/* Logo container */
.navbar-logo img {
  margin-top: 5px;
  height: 56px;
  width: auto;
  margin-right: 20px;
  user-select: none;
  pointer-events: none;
  -webkit-user-drag: none;
}

/* Menu container (desktop view) */
.navbar-menu {
  display: flex;
  gap: 20px;
  margin-top: 2px;
  align-items: center;
}

/* Navbar links */
.navbar a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  transition: color 0.3s ease;
}

.navbar a:visited {
  color: white;
}

.navbar a:hover {
  color: #ddd;
}

/* Hamburger button (hidden by default, shown on mobile) */
.navbar-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 20; /* Ensure it stays on top of other content */
}

.navbar-hamburger .bar {
  width: 25px;
  height: 3px;
  background-color: white;
  border-radius: 3px;
}

/* Mobile view styles */
@media (max-width: 1024px) {
  /* Hide the navbar links in mobile view */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space between logo and hamburger */
  background-color: #32312C;
  padding: 0px 4%;
  height: 62px;
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3); /* Subtle shadow */
  z-index: 10;
  position: relative;
}
  .navbar-menu {
    display: none;
    flex-direction: column;
    gap: 10px;
    background-color: #32312C;
    position: absolute;
    top: 62px;
    right: 1%; 
    width: 150px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
    z-index: 20;
  }

  /* Show menu when open */
  .navbar-menu-open {
    display: flex;
  }

  /* Show hamburger button in mobile view */
  .navbar-hamburger {
    display: flex;
  }
}
</style>
