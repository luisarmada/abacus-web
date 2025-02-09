<template>
  <div class="about-page">
    <div class="expand-div" ref="expandDiv">
      <!-- Buttons at the top --> 

        <!-- Content 3: Image Gallery -->
        <div class="scrollable-content">
          <h1>Connect with us!</h1>
          <p>Make sure to follow us on all our socials to stay up-to-date on all our upcoming events. You can also network with our current and past exec members and grow your connections!</p>
          
          <h1>24/25 Exec</h1> 
          <div class="image-gallery">
            <div
              class="image-item"
              v-for="image in twentyfourtwentyfive"
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
                  <i class="fab fa-instagram"></i>LinkedIn
                </div>
              </div>
              <div class="caption">
                <p class="exec-name">{{ image.name }}</p>
                <p class="exec-role">{{ image.role }}</p>
              </div>
            </div>
          </div>
          
          <h1>23/24 Exec</h1> 
          <div class="image-gallery">
            <div
              class="image-item"
              v-for="image in twentythreetwentyfour"
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
                  <i class="fab fa-instagram"></i>LinkedIn
                </div>
              </div>
              <div class="caption">
                <p class="exec-name">{{ image.name }}</p>
                <p class="exec-role">{{ image.role }}</p>
              </div>
            </div>
          </div>

          <h1>22/23 Exec</h1> 
          <div class="image-gallery">
            <div
              class="image-item"
              v-for="image in twentytwotwentythree"
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
                  <i class="fab fa-instagram"></i> LinkedIn
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
import Flickity from "flickity";
import "flickity/css/flickity.css";

export default {
  name: "AboutPage",
  data() {
    return {
      isAnimating: false,
      activeContent: 1,
      youtubeUrl: "https://www.youtube.com/embed/r-jA1YD5VyA?si=XqWpCyfvlk71q_qc&amp;controls=0&amp;autoplay=1&amp;mute=1",
      twentyfourtwentyfive: [
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
        {
          id: 10,
          src: "/images/2425exec/vicki.jpeg",
          alt: "Image 3",
          name: "Vicky Zhou",
          role: "Social Secretary",
          instagram: "@vicki.zhou_",
        },
        {
          id: 11,
          src: "/images/2425exec/danielsong.jpeg",
          alt: "Image 3",
          name: "Daniel Song",
          role: "Sports Officer",
          instagram: "@soohyun_152",
        },
        {
          id: 12,
          src: "/images/2425exec/sheree.jpeg",
          alt: "Image 3",
          name: "Sheree Zhang",
          role: "Sponsorships Officer",
          instagram: "@sheree_mmao",
        },
        {
          id: 13,
          src: "/images/2425exec/shahnaz.jpeg",
          alt: "Image 3",
          name: "Shahnaz Rahman",
          role: "Tour Secretary",
          instagram: "@shanazr.__",
        },
        {
          id: 14,
          src: "/images/2425exec/amber.jpeg",
          alt: "Image 3",
          name: "Amber Yeung",
          role: "Ball Secretary",
          instagram: "@amberyeunng",
        },
        {
          id: 15,
          src: "/images/2425exec/jerry.jpeg",
          alt: "Image 3",
          name: "Jerry Tsui",
          role: "Marketing Frep",
          instagram: "@tsui.jerry",
        },
        {
          id: 16,
          src: "/images/2425exec/will.jpeg",
          alt: "Image 3",
          name: "Will Sumner",
          role: "Events Frep",
          instagram: "@willsumner",
          objectPosition: "top"
        },
      ],
      twentythreetwentyfour: [
        {
          id: 1,
          src: "/images/2324exec/malcolm.jpg",
          alt: "Image 1",
          name: "Malcolm Low",
          role: "President",
          instagram: "@michael__leee",
          objectPosition: "top"
        },
        {
          id: 2,
          src: "/images/2324exec/leanne.jpg",
          alt: "Image 2",
          name: "Leanne Stewart",
          role: "Vice President & Welfare",
          instagram: "@_luluchenn",
        },
        {
          id: 3,
          src: "/images/2324exec/susan.jpg",
          alt: "Image 3",
          name: "Susan Huang",
          role: "Publicity Officer",
          instagram: "@macy_wuuuuuu",
        },
        {
          id: 4,
          src: "/images/2324exec/marguerite.jpg",
          alt: "Image 3",
          name: "Marguerite Hua",
          role: "Publicity Officer",
          instagram: "@chloeeh.xo",
        },
        {
          id: 5,
          src: "/images/2324exec/Dalen.jpg",
          alt: "Image 3",
          name: "Dalen Lim",
          role: "Treasurer",
          instagram: "@chloebang_",
        },
        {
          id: 6,
          src: "/images/2324exec/yuran.jpg",
          alt: "Image 3",
          name: "Yuran Xiao",
          role: "Secretary",
          instagram: "@chung.sophie",
          objectPosition: "bottom"
        },
        {
          id: 8,
          src: "/images/2324exec/Calvin.jpg",
          alt: "Image 3",
          name: "Calvin Trinh",
          role: "Social Secretary",
          instagram: "@ashely_wqy",
        },
      ],
      twentytwotwentythree: [
        {
          id: 1,
          src: "/images/2223exec/ryan.jpg",
          alt: "Image 1",
          name: "Ryan Su",
          role: "President",
          instagram: "@michael__leee",
          objectPosition: "bottom"
        },
        {
          id: 2,
          src: "/images/2223exec/crystal.jpg",
          alt: "Image 2",
          name: "Crystal Ng",
          role: "Vice President & Welfare",
          instagram: "@_luluchenn",
          objectPosition: "left"
        },
        {
          id: 3,
          src: "/images/2223exec/khiem.jpg",
          alt: "Image 3",
          name: "Khiem Hoang",
          role: "Publicity Officer",
          instagram: "@macy_wuuuuuu",
        },
        {
          id: 4,
          src: "/images/2223exec/yinyin.jpg",
          alt: "Image 3",
          name: "Yinyin Ling",
          role: "Publicity Officer",
          instagram: "@chloeeh.xo",
        },
      ],
    };
  },
  methods: {
    setActiveContent(contentNumber) {
      this.activeContent = contentNumber;

      // Autoplay YouTube video for Content 1
      if (contentNumber === 1) {
        this.youtubeUrl = "https://www.youtube.com/embed/r-jA1YD5VyA?si=XqWpCyfvlk71q_qc&amp;controls=0&amp;autoplay=1&amp;mute=1";
      }

      // Initialize carousels for Content 2
      if (contentNumber === 2) {
        this.$nextTick(() => {
          new Flickity(this.$refs.carousel1, { autoPlay: true, wrapAround: true, groupCells: true });
          new Flickity(this.$refs.carousel2, { autoPlay: true, wrapAround: true, groupCells: true });
          new Flickity(this.$refs.carousel3, { autoPlay: true, wrapAround: true, groupCells: true });
        });
      }
    },
    openInstagram(handle) {
      const instagramUrl = `https://www.instagram.com/${handle.replace("@", "")}`;
      window.open(instagramUrl, "_blank");
    },
  },
  mounted() {
    const expandDiv = this.$refs.expandDiv;
    expandDiv.style.height = "0px";

    this.isAnimating = true;
    requestAnimationFrame(() => {
      expandDiv.style.height = "100vh";
      setTimeout(() => {
        this.isAnimating = false;
      }, 1000);
    });
  },
};
</script>

<style scoped>
.about-page {
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
  transform: translate(-50%, 0%);
  height: 100vh;
  background-color: #23221e;
  padding-top: 70px;
  overflow: hidden;
  transition: height 1s ease;
  display: flex;
  flex-direction: column;
  
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  flex-wrap: wrap; /* Allow wrapping to the next line */
}

.button-container button {
  background-color: #444;
  color: white;
  border: none;
  padding: 16px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
}

.scrollable-content {
  flex-grow: 1;
  margin-left: 40px;
  margin-right: 40px;
  overflow-y: auto;
  padding: 20px 20px 100px;
  color: white;
  height: calc(100vh - 90px); /* Subtract the height of the button container or header */
  box-sizing: border-box;
}

.scrollable-content p {
  font-weight: 450;
}

.video-container iframe {
  display: block;
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 15px;
}

.carousel-cell {
  width: 200px; /* Fixed width for each cell */
  height: 200px; /* Fixed height for each cell */
  display: flex; /* Use flex to align content */
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Ensure images don’t overflow */
}

.carousel-cell img {
  width: 100%; /* Make the image fill the container width */
  height: 100%; /* Make the image fill the container height */
  object-fit: cover; /* Crop the image to cover the container */
  object-position: center; /* Center the image focus */
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
    padding-top: 90px;
    overflow: hidden;
    transition: height 1s ease;
    display: flex;
    flex-direction: column;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    flex-wrap: wrap; /* Allow wrapping to the next line */
  }

  .button-container button {
    background-color: #444;
    color: white;
    border: none;
    padding: 16px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
  }

  .scrollable-content {
    flex-grow: 1;
    overflow-y: auto;
    margin-left: 10px;
    margin-right: 10px;
    padding: 20px 20px 100px;
    color: white;
    height: calc(100vh - 90px); /* Subtract the height of the button container or header */
    box-sizing: border-box;
  }
}
</style>
