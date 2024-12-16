<template>
  <div class="about-page">
    <div class="expand-div" ref="expandDiv">
      <!-- Buttons at the top -->
      <div class="button-container">
        <button @click="setActiveContent(1)">Content 1</button>
        <button @click="setActiveContent(2)">Content 2</button>
        <button @click="setActiveContent(3)">Content 3</button>
        <button @click="setActiveContent(4)">Content 4</button>
      </div>

      <!-- Scrollable content area -->
      <div class="scrollable-content">
        <!-- Content 1: Slogan, Descriptive Text, and YouTube Video -->
        <div v-if="activeContent === 1">
          <h2>Warwick Association of British And Chinese University Students</h2>
          <p>
            Warwick ABACUS organises fun events every week, such as our Games Night socials, bar crawls, hotpot dinners, and much more.
            If you’re interested in sports, we have multiple sports teams that represent our society that are another great place to meet new people and stay in shape.
          </p>
          <div class="video-container">
            <iframe
              width="560"
              height="315"
              :src="youtubeUrl"
              title="YouTube video player"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- Content 2: Flickity Carousels -->
        <div v-if="activeContent === 2">
          <h2>Carousel 1</h2>
          <div class="carousel" ref="carousel1">
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 1" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 2" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 3" /></div>
          </div>

          <h2>Carousel 2</h2>
          <div class="carousel" ref="carousel2">
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 4" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 5" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
          </div>

          <h2>Carousel 3</h2>
          <div class="carousel" ref="carousel3">
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 7" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 8" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 9" /></div>
          </div>
        </div>

        <!-- Content 3: Image Gallery -->
        <div v-if="activeContent === 3" class="image-gallery">
          <div
            class="image-item"
            v-for="image in galleryImages"
            :key="image.id"
            @click="openInstagram(image.instagram)"
          >
            <img :src="image.src" :alt="image.alt" />
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

        <!-- Content 4: Google Calendar Plugin -->
        <div v-if="activeContent === 4">
          <h2>Upcoming Events</h2>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Your_Timezone"
            style="border: 0"
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
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
      youtubeUrl: "https://www.youtube.com/embed/DMeKi_QmWJE?autoplay=1",
      galleryImages: [
        {
          id: 1,
          src: "https://via.placeholder.com/200",
          alt: "Image 1",
          name: "John Doe",
          role: "President",
          instagram: "@johndoe",
        },
        {
          id: 2,
          src: "https://via.placeholder.com/200",
          alt: "Image 2",
          name: "Jane Smith",
          role: "Vice President",
          instagram: "@janesmith",
        },
        {
          id: 3,
          src: "https://via.placeholder.com/200",
          alt: "Image 3",
          name: "Alex Brown",
          role: "Treasurer",
          instagram: "@alexbrown",
        },
      ],
    };
  },
  methods: {
    setActiveContent(contentNumber) {
      this.activeContent = contentNumber;

      // Autoplay YouTube video for Content 1
      if (contentNumber === 1) {
        this.youtubeUrl = "https://www.youtube.com/embed/DMeKi_QmWJE?autoplay=1";
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
  height: 0;
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
  gap: 20px;
  padding: 10px;
}

.scrollable-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
  color: white;
}

.video-container iframe {
  display: block;
  margin: 0 auto;
}

.carousel {
  margin: 20px 0;
}

.carousel-cell img {
  width: 150px;
  height: auto;
  display: block;
  margin: 0 auto;
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
}

.image-item img {
  width: 100%;
  height: auto;
}

.image-item .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
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
  padding: 10px;
}

.exec-name {
  font-weight: bold;
  font-size: 16px;
}

.exec-role {
  font-size: 14px;
}
</style>
