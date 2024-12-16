<template>
    <div>
      <div class="parallax-container">
        <div class="parallax-layer" v-for="layer in layers" :key="layer.id" :data-depth="layer.depth" :style="{ backgroundImage: `url(${layer.image})` }"></div>
  
        <img id="ctext" src="/images/chinese_callig.png" alt="Chinese Calligraphy">
        <!-- <img id="seal" src="/images/red_seal.webp" alt="Red Seal"> -->
        <img id="abalogo" src="/images/ABACUSLOGO_w.png" alt="ABACUS Logo">
        
  
        <!-- <div class="h_buttons2">
          <img src="/images/instagram_logo.png" alt="Instagram">
          <img src="/images/facebook_logo.png" alt="Facebook">
          <img src="/images/warwicksu_logo.png" alt="Warwick SU">
          <img src="/images/discord_logo.png" alt="Discord">
          <img src="/images/linkedin_logo.png" alt="LinkedIn">
        </div> -->
  
        <!-- <div class="centered_menu">
          <div class="h_buttons">
            <a href="#" class="myButton">About ABACUS</a>
            <a href="#" class="myButton">Upcoming Events</a>
            <a href="#" class="myButton">Meet the Exec</a>
            <a href="#" class="myButton">Our Sponsors</a>
          </div>
        </div> -->

      </div>
    </div>
  </template>
  
<script>
export default {
  name: "ParallaxLanding",
  data() {
    return {
      layers: [
        { id: 1, depth: 0.2, image: "/images/layer_8.png" },
        { id: 2, depth: 0.2, image: "/images/clouds_layer_8.png" },
        { id: 3, depth: 0.3, image: "/images/layer_7.png" },
        { id: 4, depth: 0.2, image: "/images/clouds_layer_7.png" },
        { id: 5, depth: 0.4, image: "/images/layer_6.png" },
        { id: 6, depth: 0.2, image: "/images/clouds_layer_6.png" },
        { id: 7, depth: 0.5, image: "/images/layer_5.png" },
        { id: 8, depth: 0.2, image: "/images/clouds_layer_5.png" },
        { id: 9, depth: 0.6, image: "/images/layer_4.png" },
        { id: 10, depth: 0.2, image: "/images/clouds_layer_4.png" },
        { id: 11, depth: 0.7, image: "/images/layer_3.png" },
        { id: 12, depth: 0.2, image: "/images/clouds_layer_3.png" },
        { id: 13, depth: 0.8, image: "/images/layer_2.png" },
        { id: 14, depth: 0.2, image: "/images/clouds_layer_2.png" },
        { id: 15, depth: 1.0, image: "/images/layer_1.png" },
      ],
      parallaxOffset: 0, // Default offset, dynamically calculated
    };
  },
  methods: {
    /**
     * Dynamically calculates the parallax offset based on the window width.
     * Interpolates between -800 (for large screens) and 0 (for small screens).
     */
    calculateParallaxOffset() {
      const minWidth = 375; // Minimum width (phone size)
      const maxWidth = 1400; // Maximum width (14-inch display)
      const currentWidth = window.innerWidth;

      // Clamp the current width to ensure it's within min and max
      const clampedWidth = Math.max(minWidth, Math.min(currentWidth, maxWidth));

      // Linear interpolation to calculate parallax offset
      const offset = (((clampedWidth - minWidth) / (maxWidth - minWidth)) * -800);

      this.parallaxOffset = offset;
    },
  },
  mounted() {
    const layers = document.querySelectorAll(".parallax-layer");
    let targetX = 0;
    let centerX = window.innerWidth / 2;

    // Initialize the parallax offset based on the current window size
    this.calculateParallaxOffset();

    const updateWindowCenter = () => {
      centerX = window.innerWidth / 2;
      this.calculateParallaxOffset(); // Recalculate the offset on resize
    };

    document.addEventListener("mousemove", (event) => {
      targetX = event.clientX - centerX;
    });

    window.addEventListener("resize", updateWindowCenter);

    const updateParallax = () => {
      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth);
        const layerTargetX = (targetX + this.parallaxOffset) * depth * 0.2;

        if (layer.currentX === undefined) layer.currentX = 0;

        layer.currentX += (layerTargetX - layer.currentX) * 0.02;
        layer.style.transform = `translateX(${layer.currentX}px)`;
      });

      requestAnimationFrame(updateParallax);
    };

    updateWindowCenter();
    updateParallax();
  },
};
</script>

  
<style>
body {
    margin: 0;
    background-color: #D7CAA9;
    overflow-x: hidden;
}
.parallax-container {
    position: relative;
    width: 100vw;
    height: 100vh;

    overflow: hidden;
}
.parallax-layer {
    position: absolute;
    top: 0;
    left: -100%;
    width: 300%;
    height: 100%;
    background-repeat: repeat-x;
    background-size: auto 100%;
    transform-origin: center;
    image-rendering: pixelated;
}
#abalogo {
    position: absolute;
    z-index: 3;
    top: 50px;
    left: 50%;
    transform: translate(-54%, 0%);
    width: 33%;
    min-width: 400px;
    user-select: none; 
    pointer-events: none; 
    -webkit-user-drag: none;
}
#ctext {
    position: absolute;
    z-index: 10;
    left: 4%;
    transform: translate(-7px, 0);
    top: 0px;
    width: 90px;
    height: auto;
    user-select: none; 
    pointer-events: none; 
    -webkit-user-drag: none;
}
@media only screen and (max-width: 1024px) {
    #ctext {
        display: none;
    }
    #abalogo {
        position: absolute;
        z-index: 3;
        top: 50px;
        left: 50%;
        transform: translate(-52%, 0%);
        width: 60%;
        max-width: 400px;
        user-select: none; 
        pointer-events: none; 
        -webkit-user-drag: none;
    }
}

#seal {
    position: absolute;
    z-index: 10;
    left: 48px;
    top: -10px;
    width: 110px;
    height: auto;
    user-select: none; 
    pointer-events: none; 
    -webkit-user-drag: none;
}
  
  .myButton {
    background-color: #32312C;
    border-radius: 14px;
    border: 2.5px solid #D7CAA9;
    display: inline-block;
    cursor: pointer;
    color: #D7CAA9;
    font-family: "Merriweather Sans", sans-serif;
    font-size: 20px;
    font-weight: bold;
    padding: 16px 31px;
    text-decoration: none;
  }
  .myButton:hover {
    background-color: #3C3B36;
  }
  .myButton:active {
    position: relative;
    top: 1px;
  }
  .centered_menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 20px;
    top: 72%;
    width: 100%;
  }
  .h_buttons {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
  .h_buttons2 {
    position: absolute;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    top: 48%;
    height: 33%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  </style>
  