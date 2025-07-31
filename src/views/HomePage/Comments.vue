<template>
  <h1 class="mt-5">Отзывы:</h1>

  <div class="reviews-section">
    <div class="reviews-header"></div>
    <div class="review-slider">
      <button class="arrow-button prev-button" @click="prevReview">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div class="review-wrapper">
        <transition :name="transitionName" mode="out-in">
          <div class="review-card" :key="currentIndex">
            <p class="mt-2">{{ currentReview.content }}</p>
            <div class="author mt-5">{{ currentReview.username }}</div>
            <div class="rating">
              <span v-for="i in currentReview.stars" :key="i">★</span>
            </div>
          </div>
        </transition>
      </div>

      <button class="arrow-button next-button" @click="nextReview">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  </div>

  <hr class="hr mt-5" style="margin-top: 70px" />
  <div style="display: flex; justify-content: center; margin-bottom: 30px;">
    <button class="cost-button" @click="gotoWorks()">Примеры работ</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      reviews: [],
      currentIndex: 0,
      transitionName: 'slide-left'
    };
  },
  computed: {
    currentReview() {
      return this.reviews[this.currentIndex] || {
        content: "",
        author: "",
        stars: 0
      };
    },
  },
  methods: {
    nextReview() {
      if (this.reviews.length === 0) return;
      this.transitionName = 'slide-left';
      this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    },
    prevReview() {
      if (this.reviews.length === 0) return;
      this.transitionName = 'slide-right';
      this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
    },
    gotoWorks() {
      this.$router.push('/examples');
    },
    async getReviews() {
      try {
        const res = await axios.get('/reviews/get-reviews');
        const reviews = res.data.res;

        // for (let review of reviews) {
        //   const userId = review.id_user;
        //   try {
        //     const userRes = await axios.get(`/user/get-profile?id_u=${userId}`);
        //     review.author = userRes.data.res.username;
        //   } catch (userErr) {
        //     console.error(`Ошибка при получении имени пользователя ${userId}:`, userErr);
        //     review.author = 'Неизвестный';
        //   }
        // }

        this.reviews = reviews;
      } catch (err) {
        console.error('Ошибка при загрузке отзывов:', err);
      }
    },
  },
  mounted() {
    this.getReviews();
  }
};
</script>

<style scoped>
.author {
  font-weight: 600;
  color: #2c3e50;
}

h1 {
  font-size: 30px;
  font-weight: 800;
  color: #2F23A0;
  text-align: center;
}

.hr {
  padding: 0;
  height: 0;
  border: none;
  border-top: 2px solid #ddd;
  border-bottom: 2px solid #2F23A0;
}

.cost-button {
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  background-color: #2F23A0;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-top: -26px;
}

.cost-button:hover {
  background-color: #271aa2;
}

.reviews-section {
  display: flex;
  flex-direction: column;
}

.reviews-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.review-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
}

.review-wrapper {
  position: relative;
  width: 70%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.review-card {
  border: 2px solid #3337a9;
  border-radius: 10px;
  padding: 20px;
  text-align: left;
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  position: relative;
}

.rating {
  position: absolute;
  bottom: 15px;
  right: 20px;
}

.rating span {
  font-size: 24px;
  color: #FFD700;
}

.arrow-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #2F23A0;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.arrow-button:hover {
  background-color: #271aa2;
  transform: scale(1.05);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.arrow-button svg {
  width: 24px;
  height: 24px;
}

/* Slide animations */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s ease;
}

.slide-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .cost-button {
    font-size: 16px;
    padding: 12px 24px;
  }

  .review-slider {
    gap: 10px;
  }

  .review-wrapper {
    width: 80%;
  }

  .arrow-button {
    width: 50px;
    height: 50px;
  }

  .arrow-button svg {
    width: 20px;
    height: 20px;
  }

  .rating span {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .arrow-button {
    width: 40px;
    height: 40px;
  }

  .arrow-button svg {
    width: 16px;
    height: 16px;
  }

  .review-wrapper {
    width: 90%;
  }

  .rating span {
    font-size: 18px;
  }
}
</style>
