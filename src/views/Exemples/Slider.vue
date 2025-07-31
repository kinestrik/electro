<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
      modalOpen: false,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    openModal() {
      this.modalOpen = true;
      document.addEventListener("keydown", this.handleKeyDown);
    },
    closeModal() {
      this.modalOpen = false;
      document.removeEventListener("keydown", this.handleKeyDown);
    },
    handleKeyDown(event) {
      if (this.modalOpen) {
        if (event.key === "Escape") {
          this.closeModal();
        } else if (event.key === "ArrowLeft") {
          this.prevSlideModal();
        } else if (event.key === "ArrowRight") {
          this.nextSlideModal();
        }
      }
    },
    nextSlideModal() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      }
    },
    prevSlideModal() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  },
};
</script>

<template>
  <div class="slider-container">
    <!-- <button
                class="slider-arrow prev"
                @click="prevSlide"
                :disabled="currentIndex === 0"
        >
            <span class="material-icons">
              chevron_left
            </span>
        </button> -->
    <div class="slider-image" @click="openModal">
      <img :src="currentImage" alt="Slide Image" class="img"/>
    </div>
    <!-- <button
                class="slider-arrow next"
                @click="nextSlide"
                :disabled="currentIndex === images.length - 1"
        >
             <span class="material-icons">
              chevron_right
            </span>
        </button> -->
    <div class="slider-controls">
      <button @click="prevSlide" :disabled="currentIndex === 0">Назад</button>
      <button @click="nextSlide" :disabled="currentIndex === images.length - 1">
        Вперед
      </button>
    </div>
    <div v-if="modalOpen" class="modal" @click.self="closeModal">
      <button class="close-btn" @click="closeModal">x</button>
      <button
        class="modal-arrow prev"
        @click="prevSlideModal"
        :disabled="currentIndex === 0"
      >
        <span class="material-icons"> chevron_left </span>
      </button>
      <div class="modal-content">
        <img :src="currentImage" alt="Full screen image" class="img" />
      </div>
      <button
        class="modal-arrow next"
        @click="nextSlideModal"
        :disabled="currentIndex === images.length - 1"
      >
        <span class="material-icons"> chevron_right </span>
      </button>
    </div>
  </div>
</template>
<style scoped>
.img{
  min-width: 600px;
  min-height: 450px;
}
.slider-container {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}
.slider-image {
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.slider-image img {
  max-width: 100%;
  max-height: 600px;
  object-fit: contain;
  transition: transform 0.3s ease;
}
.slider-image img:hover {
  transform: scale(1.05);
}
.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  color: #4a4aa6;
  opacity: 0.8;
  display: flex;
  align-items: center;
}
.slider-arrow:hover {
  opacity: 1;
}

.slider-arrow.prev {
  left: 10px;
}

.slider-arrow.next {
  right: 10px;
}
.slider-controls {
  text-align: center;
  vertical-align: center;
}
.slider-controls button {
  padding: 10px 20px;
  border: none;
  background: #4a4aa6;
  color: white;
  border-radius: 4px;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  margin: 0 10px;
}
.slider-controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: grey;
}
/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  /* background: #fff; */
  border-radius: 8px;
  padding: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.modal-content img {
  max-width: 80%;
  max-height: 80vh;
  object-fit: contain;
  display: block;
}

.modal-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-arrow:hover {
  opacity: 1;
}
.modal-arrow.prev {
  left: 20px;
}
.modal-arrow.next {
  right: 20px;
}
.modal-arrow span {
  font-size: 3rem;
  color: white;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  /* background-color: rgba(0, 0, 0, 0.2); */
  border-radius: 50%;
  font-size: 30px;
  color: #fff;
  padding: 2px 7px;
  cursor: pointer;
  z-index: 1001;
}
</style>
