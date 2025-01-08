<template>
    <div>
      <div class="parallax-container">
        <!-- Parallax Layers -->
        <div
          class="parallax-layer"
          v-for="(layer, index) in layers"
          :key="layer.id"
          :data-depth="layer.depth"
          :style="{
            backgroundImage: `url(${layer.image})`,
            animationDelay: `${index * 0.04}s`
          }"
        ></div>
  
        <!-- Chinese Calligraphy Reveal -->
        <img
          id="ctext"
          src="/images/chinese_callig.png"
          alt="Chinese Calligraphy"
          class="ctext-animation"
        />
  
        <!-- ABACUS Logo with Full Rotation -->
        <img
          id="abalogo"
          src="/images/ABACUSLOGO_w.png"
          alt="ABACUS Logo"
          class="logo-animation"
        />
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
    background-color: #d7caa9;
    overflow-x: hidden;
  }
  
  .parallax-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  
  /* Parallax Layers - Pop Up Animation */
  .parallax-layer {
    position: absolute;
    top: 0;
    left: -100%;
    width: 300%;
    height: 100%;
    background-repeat: repeat-x;
    background-size: auto 100%;
    background-position-y: bottom -300px;
    animation: pop-up 0.8s ease-out forwards;
  }
  

@keyframes pop-up {
  from {
    background-position-y: bottom -300px;
  }
  to {
    background-position-y: bottom 0px;
  }
}

  
  /* ABACUS Logo Animation */
  #abalogo {
    position: absolute;
    z-index: 3;
    top: 50px;
    left: 50%;
    transform: translate(-50%, 0%) scale(0) rotate(720deg);
    opacity: 0;
    width: 33%;
    min-width: 400px;
    max-width: 800px;
    user-select: none;
    pointer-events: none;
    animation: fade-in-scale-rotate 1.5s ease forwards 0s;
  }
  
  @keyframes fade-in-scale-rotate {
    from {
      transform: translate(-50%, 0%) scale(0) rotate(-360deg);
      opacity: 0;
    }
    to {
      transform: translate(-50%, 0%) scale(1) rotate(0deg);
      opacity: 1;
    }
  }
  
  /* Chinese Calligraphy Reveal Animation */
  #ctext {
    position: absolute;
    z-index: 10;
    left: 4%;
    top: 0;
    width: 90px;
    height: 0; /* Start with height 0 */
    overflow: hidden;
    user-select: none;
    pointer-events: none;
    animation: reveal-height 1s ease forwards 0.5s;
  }
  
  @keyframes reveal-height {
    from {
      height: 0;
    }
    to {
      height: 460px; /* Reveals to the full height of the image */
    }
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
    }
  }
  </style>
  