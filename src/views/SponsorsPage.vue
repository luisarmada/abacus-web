<template>
  <div class="sponsors-page">
    <div class="expand-div" ref="expandDiv">
      <div class="content">
        <h1>Our Sponsors</h1>
        <p>Explore our amazing sponsors and the discounts they provide to our members!</p>

        <!-- Sponsors Grid -->
        <div class="sponsors-gallery">
          <div
            class="sponsor-item"
            v-for="sponsor in sponsors"
            :key="sponsor.id"
            @click="openGoogleMaps(sponsor.address)"
          >
            <img :src="sponsor.logo" :alt="sponsor.name" />
            <div class="overlay">
              <p class="address">{{ sponsor.address }}</p>
            </div>
            <div class="caption">
              <p class="name">{{ sponsor.name }}</p>
              <p class="discount">{{ sponsor.discount }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SponsorsPage",
  data() {
    return {
      isAnimating: false,
      sponsors: [
        {
          id: 1,
          logo: "https://via.placeholder.com/300x150", // Placeholder logo
          name: "To Pho",
          address: "123 Main St, Cityville",
          discount: "10% Off for Members, 15% Off for Exec",
        },
        {
          id: 2,
          logo: "https://via.placeholder.com/300x150",
          name: "Noodle King",
          address: "456 Market St, Townsville",
          discount: "10% Off",
        },
        {
          id: 3,
          logo: "https://via.placeholder.com/300x150",
          name: "Xiongqi",
          address: "789 Broadway, Metropolis",
          discount: "10% Off (+ free drinks)",
        },
        {
          id: 4,
          logo: "https://via.placeholder.com/300x150",
          name: "Alley Food & Mood",
          address: "789 Broadway, Metropolis",
          discount: "10% Off",
        },
        {
          id: 5,
          logo: "https://via.placeholder.com/300x150",
          name: "China Red",
          address: "789 Broadway, Metropolis",
          discount: "10% Off",
        },
        {
          id: 6,
          logo: "https://via.placeholder.com/300x150",
          name: "I-Tea",
          address: "789 Broadway, Metropolis",
          discount: "15% Off",
        },
        {
          id: 7,
          logo: "https://via.placeholder.com/300x150",
          name: "ALS GONGCHA",
          address: "789 Broadway, Metropolis",
          discount: "10% Off every visit",
        },
        {
          id: 8,
          logo: "https://via.placeholder.com/300x150",
          name: "Jinseon",
          address: "789 Broadway, Metropolis",
          discount: "10% Off Cash Payments",
        },
        {
          id: 9,
          logo: "https://via.placeholder.com/300x150",
          name: "T4",
          address: "789 Broadway, Metropolis",
          discount: "10% Off of 10 drinks",
        },
        {
          id: 10,
          logo: "https://via.placeholder.com/300x150",
          name: "Ji Chicken",
          address: "789 Broadway, Metropolis",
          discount: "10% Off every visit",
        },
        // Add more sponsors as needed
      ],
    };
  },
  methods: {
    openGoogleMaps(address) {
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
      window.open(url, "_blank");
    },
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
.sponsors-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 5;
  overflow: hidden;
}

.expand-div {
  position: absolute;
  top: 0;
  left: 50%;
  width: 75%;
  padding-top: 70px;
  transform: translate(-50%, 0%);
  height: 100vh;
  background-color: #23221e;
  overflow: hidden;
  transition: height 1s ease;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.content {
  text-align: center;
  color: white;
  padding-bottom: 50px;
}

.content p{
  font-size: 1.1em;
}

.sponsors-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
  gap: 20px;
  margin: 20px;
  padding: 20px;
}

.sponsor-item {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.sponsor-item:hover {
  transform: scale(1.05); /* Slight zoom on hover */
}

.sponsor-item img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  display: block;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.sponsor-item:hover .overlay {
  opacity: 1; /* Show overlay on hover */
}

.overlay .address {
  font-size: 14px;
  text-align: center;
}

.caption {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 0 0 10px 10px;
}

.caption .name {
  font-size: 17px;
  font-weight: bold;
}

.caption .discount {
  font-size: 15px;
  font-weight: 500;
}

@media only screen and (max-width: 1024px) {
  .expand-div {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    transform: translate(-50%, 0%);
    height: 100vh;
    background-color: #23221e;
    padding-top: 70px;
    overflow: hidden;
    transition: height 1s ease;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
}
</style>
