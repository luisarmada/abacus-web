<template>
  <div class="about-page">
    <div class="expand-div" ref="expandDiv">
      <!-- Buttons at the top -->
      <div class="button-container">
        <button @click="setActiveContent(1)">What is ABACUS?</button>
        <button @click="setActiveContent(2)">Past Events Gallery</button>
        <button @click="setActiveContent(3)">Meet the Exec</button>
        <button @click="setActiveContent(4)">Upcoming Events</button>
      </div>

      <!-- Scrollable content area -->
      <div class="scrollable-content">
        <!-- Content 1: Slogan, Descriptive Text, and YouTube Video -->
        <div v-if="activeContent === 1">
          <h1>What is ABACUS?</h1>
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
          <h2>
            Who is this society for?
          </h2>
          <p>
            ABACUS isn’t just for British or Chinese students, but for everyone! Inclusivity is a core value of ABACUS, and as part of this, we only speak english. 
            This society is for anyone interested in Asian culture or in coming to any of our events.
          </p>
          <h2>
            How do I get involved?
          </h2>
          <p>
            The best way to stay up-to-date with what’s happening is by joining ABACUS. You can follow us on our social media and check out our website to find out more about the society too.

            Like our Facebook page (@warwickabacus), follow our Instagram (@warwickabacus), and subscribe to our email newsletter to stay up to date with our society!

            If you have any questions or queries about our society, Warwick, or uni life in general, please DM us on any social media or ask any of the execs! We look forward to meeting you!
          </p>
        </div>

        <!-- Content 2: Flickity Carousels -->
        <div v-if="activeContent === 2">
          <h2>Society Memories</h2>
          <p>Relive our cherished moments from past events! From group pictures at socials to highlights from sober gatherings, these memories capture the spirit and togetherness of Warwick ABACUS.</p>
          <div class="carousel" ref="carousel1">
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 4" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 5" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
          </div>

          <h2>Club Nights & Outings</h2>
          <p>The more chaotic side of ABACUS with snapshots from the club nights, outings, and spicy evenings that bring our community closer together.</p>
          <div class="carousel" ref="carousel2">
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 4" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 5" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
          </div>

          <h2>Event Promotions</h2>
          <p>A showcase of the promotional visuals from our Instagram page that brought each exciting event to life.</p>
          <div class="carousel" ref="carousel3">
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 4" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 5" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
            <div class="carousel-cell"><img src="https://via.placeholder.com/200" alt="Placeholder 6" /></div>
          </div>
        </div>

        <!-- Content 3: Image Gallery -->
        <div v-if="activeContent === 3" >
          <h2>
            The ABACUS Team
          </h2>
          <p>
            The main way to reach out is through our Instagram DMs at @warwickabacus.<br>
            You can also find each exec member's Instagram page by clicking over them, if you want to message someone specific (or stalk). <br>
            Prioritise speaking to the Welfare Officer (Lulu Chen) if you have any personal inquiries!
          </p>
          <div  class="image-gallery">
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
      youtubeUrl: "https://www.youtube.com/embed/r-jA1YD5VyA?si=XqWpCyfvlk71q_qc&amp;controls=0&amp;autoplay=1",
      galleryImages: [
        {
          id: 1,
          src: "https://via.placeholder.com/200",
          alt: "Image 1",
          name: "Michael Lee",
          role: "President",
          instagram: "@michael__leee",
        },
        {
          id: 2,
          src: "https://via.placeholder.com/200",
          alt: "Image 2",
          name: "Lulu Chen",
          role: "Vice President & Welfare",
          instagram: "@_luluchenn",
        },
        {
          id: 3,
          src: "https://via.placeholder.com/200",
          alt: "Image 3",
          name: "Macy Wu",
          role: "Publicity Officer",
          instagram: "@macy_wuuuuuu",
        },
        {
          id: 3,
          src: "https://via.placeholder.com/200",
          alt: "Image 3",
          name: "Chloe Ho",
          role: "Publicity Officer",
          instagram: "@chloeeh.xo",
        },
        {
          id: 3,
          src: "https://via.placeholder.com/200",
          alt: "Image 3",
          name: "Chloe Bang",
          role: "Treasurer",
          instagram: "@chloebang_",
        },
        {
          id: 3,
          src: "https://via.placeholder.com/200",
          alt: "Image 3",
          name: "Sophie Cheung",
          role: "Secretary",
          instagram: "@chung.sophie",
        },
        {
          id: 3,
          src: "https://via.placeholder.com/200",
          alt: "Image 3",
          name: "Cecilia De La Cruz",
          role: "Events Officer",
          instagram: "@cecidzh",
        },
        {
          id: 3,
          src: "https://via.placeholder.com/200",
          alt: "Image 3",
          name: "Ashely Wei",
          role: "Social Secretary",
          instagram: "@ashely_wqy",
        },
        {
          id: 3,
          src: "https://via.placeholder.com/200",
          alt: "Image 3",
          name: "Judy Chen",
          role: "Social Secretary",
          instagram: "@judy_chen4321",
        },
        {
          id: 3,
          src: "https://via.placeholder.com/200",
          alt: "Image 3",
          name: "Vicky Zhou",
          role: "Social Secretary",
          instagram: "@vicki.zhou_",
        },
        {
          id: 3,
          src: "https://via.placeholder.com/200",
          alt: "Image 3",
          name: "Daniel Song",
          role: "Sports Officer",
          instagram: "@soohyun_152",
        },
        {
          id: 3,
          src: "https://via.placeholder.com/200",
          alt: "Image 3",
          name: "Sheree Zhang",
          role: "Sponsorships Officer",
          instagram: "@sheree_mmao",
        },
        {
          id: 3,
          src: "https://via.placeholder.com/200",
          alt: "Image 3",
          name: "Shahnaz Rahman",
          role: "Tour Secretary",
          instagram: "@shanazr.__",
        },
        {
          id: 3,
          src: "https://via.placeholder.com/200",
          alt: "Image 3",
          name: "Amber Yeung",
          role: "Ball Secretary",
          instagram: "@amberyeunng",
        },
        {
          id: 3,
          src: "https://via.placeholder.com/200",
          alt: "Image 3",
          name: "Jerry Tsui",
          role: "Marketing Frep",
          instagram: "@tsui.jerry",
        },
        {
          id: 3,
          src: "https://via.placeholder.com/200",
          alt: "Image 3",
          name: "Will Sumner",
          role: "Events Frep",
          instagram: "@willsumner",
        },
      ],
    };
  },
  methods: {
    setActiveContent(contentNumber) {
      this.activeContent = contentNumber;

      // Autoplay YouTube video for Content 1
      if (contentNumber === 1) {
        this.youtubeUrl = "https://www.youtube.com/embed/r-jA1YD5VyA?si=XqWpCyfvlk71q_qc&amp;controls=0&amp;autoplay=1";
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
