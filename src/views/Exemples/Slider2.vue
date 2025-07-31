<template>
  <div class="slider-container">
    <div class="slider-wrapper" :style="{ transform: `translateX(${translateX}%)` }">
      <div
          v-for="(image, index) in images"
          :key="index"
          class="slide"
          @click="showFullScreen(image)"
      >
        <img :src="image" :alt="`Слайд ${index + 1}`" class="slide-image" />
      </div>
    </div>

    <!-- Стрелки -->
    <div class="slider-controls">
      <button @click="prevSlide" :disabled="currentSlide === 0">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
          <path d="M11 2L5 8l6 6" stroke="white" stroke-width="2" fill="none" />
        </svg>
      </button>
      <button @click="nextSlide" :disabled="currentSlide === images.length - 1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
          <path d="M5 2l6 6-6 6" stroke="white" stroke-width="2" fill="none" />
        </svg>
      </button>
    </div>

    <!-- Полноэкранный просмотр -->
    <div
        v-if="fullScreenImage"
        class="fullscreen-overlay"
        @click="closeFullScreen"
    >
      <button
          class="fullscreen-control fullscreen-prev"
          @click.stop="prevFullScreen"
          :disabled="fullScreenIndex === 0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
          <path d="M11 2L5 8l6 6" stroke="white" stroke-width="2" fill="none" />
        </svg>
      </button>

      <img
          :src="fullScreenImage"
          class="fullscreen-image"
          @click.stop
      />

      <button
          class="fullscreen-control fullscreen-next"
          @click.stop="nextFullScreen"
          :disabled="fullScreenIndex === images.length - 1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
          <path d="M5 2l6 6-6 6" stroke="white" stroke-width="2" fill="none" />
        </svg>
      </button>

      <button
          class="fullscreen-close"
          @click.stop="closeFullScreen"
      >
        <img src="../../assets/zzzx.png" style="width: 30px; height: 30px" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    images: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      currentSlide: 0,
      translateX: 0,
      fullScreenImage: null,
      fullScreenIndex: null
    };
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyDown);
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.images.length - 1) {
        this.currentSlide++;
        this.updateTranslateX();
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
        this.updateTranslateX();
      }
    },
    updateTranslateX() {
      this.translateX = -this.currentSlide * 100;
    },
    showFullScreen(image) {
      this.fullScreenImage = image;
      this.fullScreenIndex = this.images.indexOf(image);
    },
    closeFullScreen() {
      this.fullScreenImage = null;
      this.fullScreenIndex = null;
    },
    nextFullScreen() {
      if (this.fullScreenIndex < this.images.length - 1) {
        this.fullScreenIndex++;
        this.fullScreenImage = this.images[this.fullScreenIndex];
      }
    },
    prevFullScreen() {
      if (this.fullScreenIndex > 0) {
        this.fullScreenIndex--;
        this.fullScreenImage = this.images[this.fullScreenIndex];
      }
    },
    handleKeyDown(event) {
      if (this.fullScreenImage) {
        if (event.key === 'ArrowLeft') {
          this.prevFullScreen();
        } else if (event.key === 'ArrowRight') {
          this.nextFullScreen();
        } else if (event.key === 'Escape') {
          this.closeFullScreen();
        }
      }
    }
  }
};
</script>

<style scoped>
.slider-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 400px;
}

.slider-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  height: 100%;
}

.slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.slide-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
}

/* Стрелки слайдера */
.slider-controls {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  z-index: 2;
  pointer-events: none;
}

.slider-controls button {
  pointer-events: all;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  font-size: 24px;
}

.slider-controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Полноэкранный режим */
.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.fullscreen-image {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.fullscreen-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  border-radius: 50%;
  z-index: 10000;
}

.fullscreen-prev {
  left: 20px;
}

.fullscreen-next {
  right: 20px;
}

.fullscreen-control:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.fullscreen-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  padding: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10000;
}
</style>
