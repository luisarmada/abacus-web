<template>
    <div class="connect-page">
      <div class="expand-div" ref="expandDiv">
        <div class="content">
          <h1>Connect with us!</h1>
          <p>Make sure to follow us on all our socials to stay up-to-date on all our upcoming events. You can also network with our current and past exec members and grow your connections!</p>
          <div  class="image-gallery">
            <div
              class="image-item"
              v-for="image in galleryImages"
              :key="image.id"
              @click="openInstagram(image.instagram)"
            >
            <img 
                :src="image.src" 
                :alt="image.alt" 
                :style="{ 'object-position': image.objectPosition }" 
              />
              <div class="overlay">
                <div class="overlay-text">
                  <i class="fab fa-instagram"></i> {{ image.instagram }}
                </div>
              </div>
              <div class="caption">
                <p class="exec-name">{{ image.name }}</p>
                <p class="exec-role">{{ image.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ConnectPage",
    data() {
      return {
        isAnimating: false,
        galleryImages: [
            {
                id: 1,
                src: "/images/2425exec/michael.jpeg",
                alt: "Image 1",
                name: "Michael Lee",
                role: "President",
                instagram: "@michael__leee",
                objectPosition: "bottom"
            },
            {
            id: 2,
            src: "/images/2425exec/lulu.jpeg",
            alt: "Image 2",
            name: "Lulu Chen",
            role: "Vice President & Welfare",
            instagram: "@_luluchenn",
            },
            {
            id: 3,
            src: "/images/2425exec/macywucy.jpeg",
            alt: "Image 3",
            name: "Macy Wu",
            role: "Publicity Officer",
            instagram: "@macy_wuuuuuu",
            },
            {
            id: 4,
            src: "/images/2425exec/chloeho.jpeg",
            alt: "Image 3",
            name: "Chloe Ho",
            role: "Publicity Officer",
            instagram: "@chloeeh.xo",
            },
            {
            id: 5,
            src: "/images/2425exec/chloebang.jpeg",
            alt: "Image 3",
            name: "Chloe Bang",
            role: "Treasurer",
            instagram: "@chloebang_",
            },
            {
            id: 6,
            src: "/images/2425exec/sophiecheung.jpeg",
            alt: "Image 3",
            name: "Sophie Cheung",
            role: "Secretary",
            instagram: "@chung.sophie",
            objectPosition: "bottom"
            },
            {
            id: 7,
            src: "/images/2425exec/cece.jpeg",
            alt: "Image 3",
            name: "Cecilia De La Cruz",
            role: "Events Officer",
            instagram: "@cecidzh",
            },
            {
            id: 8,
            src: "/images/2425exec/ashleywei.jpeg",
            alt: "Image 3",
            name: "Ashely Wei",
            role: "Social Secretary",
            instagram: "@ashely_wqy",
            },
            {
            id: 9,
            src: "/images/2425exec/judy.jpeg",
            alt: "Image 3",
            name: "Judy Chen",
            role: "Social Secretary",
            instagram: "@judy_chen4321",
            },
        ],
      };
    },
    methods: {
      openGoogleMaps(address) {
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        window.open(url, "_blank");
      },
      openInstagram(handle) {
      const instagramUrl = `https://www.instagram.com/${handle.replace("@", "")}`;
      window.open(instagramUrl, "_blank");
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
  .connect-page {
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
    padding-left: 50px;
    padding-right: 50px;
  }
  

.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.image-item {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  width: 200px; /* Fixed width */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Allow caption below the image */
  align-items: center;
}

.image-item img {
  width: 100%; /* Ensure image fills the container */
  height: 180px; /* Fixed height for the image */
  object-fit: cover; /* Maintain aspect ratio and fill container */
}

.image-item .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 180px; /* Match the image height */
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1rem;
}

.image-item .overlay .overlay-text {
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.image-item:hover .overlay {
  opacity: 1;
}

.caption {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px 10px; /* Padding for better spacing */
  width: 100%; /* Match the width of the image */
  box-sizing: border-box; /* Include padding in width */
}

.exec-name {
  font-weight: bold;
  font-size: 16px;
  margin: 5px 0; /* Add spacing between name and role */
}

.exec-role {
  font-size: 14px;
  margin: 0;
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
  