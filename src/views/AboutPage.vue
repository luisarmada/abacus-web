<template>
  <div class="about-page">
    <div class="expand-div" ref="expandDiv">
      <div class="content">
        <h1>About Page</h1>
        <p>This is the about page.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      isAnimating: false, // Animation state lock
    };
  },
  mounted() {
    const expandDiv = this.$refs.expandDiv;

    // Reset the height to 0px to start the animation
    expandDiv.style.height = "0px";

    // Prevent double animation during initial load
    this.isAnimating = true;

    // Trigger the animation to expand downwards
    requestAnimationFrame(() => {
      expandDiv.style.height = "100vh";
      setTimeout(() => {
        this.isAnimating = false; // Unlock animation after completion
      }, 1000); // Match transition duration
    });
  },
  beforeRouteLeave(to, from, next) {
    if (this.isAnimating) {
      // Wait until the current animation is complete before allowing navigation
      setTimeout(() => {
        next();
      }, 1000); // Match the CSS transition duration
      return;
    }

    const expandDiv = this.$refs.expandDiv;

    // Trigger collapse animation
    this.isAnimating = true;
    expandDiv.style.height = "0px";

    // Allow navigation after the collapse animation completes
    setTimeout(() => {
      this.isAnimating = false;
      next();
    }, 1000); // Match transition duration
  },
};
</script>

<style scoped>
.about-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Full viewport height */
  z-index: 5; /* Ensure it sits on top of the parallax but below the navbar */
  overflow: hidden;
}

/* The expanding div */
.expand-div {
  position: absolute;
  top: 0;
  left: 50%;
  width: 75%;
  transform: translate(-50%, 0%);
  height: 0; /* Start with height 0 */
  background-color: #23221E;
  overflow: hidden; /* Ensure no content shows outside the expanding div */
  transition: height 1s ease; /* Smooth expansion effect */
}

@media only screen and (max-width: 1024px) {
  /* Styles for mobile phones go here */
  .expand-div {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    transform: translate(-50%, 0%);
    height: 0; /* Start with height 0 */
    background-color: #23221E;
    overflow: hidden; /* Ensure no content shows outside the expanding div */
    transition: height 1s ease; /* Smooth expansion effect */
  }
}


/* Content inside the expanding div */
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white; /* Content text color */
}
</style>
