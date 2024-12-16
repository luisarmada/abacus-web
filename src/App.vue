
<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="/images/dragon_red_logo.png" alt="Logo" />
      </div>
      <div class="navbar-menu">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/sponsors">Sponsors</router-link>
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
  font-weight: 1000;
  align-items: center;
  background-color: #32312C;
  padding: 0px 4%;
  height: 62px;
  color: white;

  /* Add shadow beneath the navbar */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3); /* Subtle shadow */
  z-index: 10; /* Ensure navbar is above other content */
  position: relative; /* For stacking context */
}

/* Logo container */
.navbar-logo img {
  margin-top: 5px;
  height: 56px;
  width: auto;
  margin-right: 20px; /* Space between logo and menu items */
  user-select: none; 
  pointer-events: none; 
  -webkit-user-drag: none;
}

/* Menu container */
.navbar-menu {
  display: flex;
  gap: 20px; /* Space between links */
  margin-top: 2px;
  align-items: center;
}

/* Navbar links */
.navbar a {
  text-decoration: none;
  color: white; /* Normal link color */
  font-size: 16px;
  transition: color 0.3s ease;
}

.navbar a:visited {
  color: white; /* Match normal link color */
}

.navbar a:hover {
  color: #ddd; /* Lighter color on hover */
}
</style>
