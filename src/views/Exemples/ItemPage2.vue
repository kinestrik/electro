<script>
import axios from "axios";
import slider2 from "@/views/Exemples/Slider2.vue";
import {useUserStore} from "@/stores/user";

export default {
  name: "ItemPage2.vue",
  components: {
    slider2,
  },
  data() {
    return {
      rating: 5,
      maxStars: 5,
      name: "",
      content: "",
      contact: "",
      images: [

      ],
      item: null,
      userStore: useUserStore(),
      a_lot: false, // флаг(метка) наличия отзыва на эту работу
      toastMessage: "",
      showToast: false,
      review: {}
    };
  },
  mounted() {
    this.getWork();
    document.title = `Примеры работ`;
    this.getReview();
  },
  methods: {
    async sendReviews() {
      try {
        const id = this.$route.params.id;
        await axios.post("/reviews/add-review", {
          id_work: id,
          title: this.name,
          content: this.content,
          stars: this.rating,
          contact: this.contact,
        });

      } catch (err) {
        const message = err?.response?.data?.message;

        if (message === "You already have review for this work") {
          console.log("403: You already have review for this work");
          this.showToastMessage("Вы уже отправляли отзыв на эту работу!");
        } else {
          console.error("Ошибка при отправке отзыва:", message || err);
        }
      }
    }, // окно исчезнет через 3 секунды

    async getWork() {
      try {
        const id = this.$route.params.id;
        const response = await axios.get(`/works/show-work?id_w=${id}`);
        this.item = response.data.res;
        console.log(this.item);
      } catch (error) {
        console.error("Error fetching work:", error);
      }
    },
    setRating(star) {
      this.rating = star;
    },
    async deleteWork() {
      try {
        const response = await axios.delete('/works/delete-work', {
          params: {
            id_w: this.$route.params.id,
          },
        });

        console.log('Работа успешно удалена:', response.data);
        // Дополнительная обработка успешного ответа
        this.$router.push("/examples");

      } catch (error) {
        console.error("Error deleting work:", error);
        // Дополнительная обработка ошибок
      }
    },
    gotoEdit(){
      const id = this.$route.params.id;
      this.$router.push(`/edit-ex/` + id);
    },

    showToastMessage(message) {
      this.toastMessage = message;
      this.showToast = true;

      setTimeout(() => {
        this.showToast = false;
      }, 3000); // окно исчезнет через 3 секунды
    },
    async getReview() {
      const id = this.$route.params.id;
     let res = await axios.get(`/reviews/get-review?id_work=` + id);
     this.review = res.data.res;
    },
    async deleteReviews() {
      try {
        const id = this.review.id;
        const response = await axios.delete('/reviews/delete-review', {
          params: {
            id: id,
          },
        });
        window.location.reload();
      } catch (error) {
        console.error("Error deleting review:", error);
        this.showToastMessage("Ошибка удаления отзыва!");
      }
    }
  },
  computed: {
    formattedContent() {
      return this.item?.content ? this.item.content.replace(/\n/g, "<br>") : "";
    },
  },
};
</script>

<template>
  <img src="https://img.icons8.com/?size=100&id=sgywYSF7gZmd&format=png&color=000000" class="w-1 edit"
       v-if="userStore.isAdmin" @click="gotoEdit()">
  <img src="https://img.icons8.com/?size=100&id=11705&format=png&color=000000" class="w-1 edit2"
       v-if="userStore.isAdmin" @click="deleteWork()">

  <div class="container">
    <!-- Проверяем, что item существует и содержит изображения -->
    <div class="imgg" v-if="item && item.images && item.images.length > 0">
      <slider2 :images="item.images" />
    </div>

    <div style="width: 80%">
      <h1 class="h1 mt-3" style="overflow-wrap: break-word; white-space: normal;">
        {{ item?.title }}
      </h1>
    </div>

    <h4 class="h4">{{ item?.address }}</h4>
    <p class="p mt-5" v-html="formattedContent"></p>
    <p class="p mt-5"><b style="color: #0502a7">Cтоимость:</b> {{ item?.price }} руб</p>

    <form @submit.prevent="sendReviews()">
      <div class="feedback-form">
        <h2>Оставьте заявку на отзыв!</h2>
        <div class="input-row">
          <input type="text" placeholder="Имя" class="input-field" v-model="name" />
          <input type="text" placeholder="Контакт" class="input-field" v-model="contact" />
        </div>
        <textarea placeholder="Ваш отзыв" class="textarea-field" v-model="content"></textarea>
        <div class="star-rating mt-1 mb-3">
          <span
              v-for="star in maxStars"
              :key="star"
              class="star"
              :class="{ filled: star <= rating }"
              @click="setRating(star)"
          >
            ★
          </span>
        </div>
        <button class="submit-button" type="submit">Отправить</button>

        <div :class="['toast', { show: showToast }]">
          {{ toastMessage }}
        </div>
      </div>
    </form>
  </div>


<!--ОТЗЫВЫ-->
  {{console.log(review.stars)}}
  <h1 class="mt-5 h3">Отзыв:</h1>

  <div class="reviews-section">
    <div class="review-slider">
      <div class="review-wrapper">
          <div class="review-card">
            <p class="mt-2">{{ review.content }}</p>
            <div class="author mt-5">{{ review.username }}</div>
            <div class="rating">
              <span v-for="i in review.stars" :key="i">★</span>
            </div>
            <img src="https://img.icons8.com/?size=100&id=sgywYSF7gZmd&format=png&color=000000" class="w-1 edit"
                 v-if="review.is_creator" @click="gotoEdit()">
            <img src="https://img.icons8.com/?size=100&id=11705&format=png&color=000000" class="w-1 edit2"
                 v-if="review.is_creator" @click="deleteReviews()">
          </div>
             </div>

    </div>
  </div>

</template>


<style scoped>
.edit {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 12%;
  right: 10px;
  z-index: 333333333;
  cursor: pointer;
}

.edit2 {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 12%;
  right: 50px;
  z-index: 333333333;
  cursor: pointer;
}

.imgg {
  width: 100%;
  text-align: center;
}

.container {
  width: 50%;
  max-width: 777px;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
}

.h1 {
  font-size: 30px;
  color: #0502a7;
}

.h4 {
  font-size: 20px;
  text-align: start;
}

.p {
  text-align: start;
  font-size: 17px;
}

.img {
  display: block;
  object-fit: contain;
  width: 100%;
  max-width: 100%;
  margin: 0 auto 20px;
  border-radius: 10px;

}

h1 {
  font-size: 3em;
  margin-bottom: 20px;
  text-align: start;
}

p {
  font-size: 1.2em;
  line-height: 1.5;
  color: #333;
}


.feedback-form {
  width: 100%;
  max-width: 775px; /* Максимальная ширина */
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #0502a7;
  border-radius: 15px;
  text-align: center;
  background-color: #f9f9f9;
}

.input-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 10px; /* Отступ между полями в строке */
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #0502a7;
  border-radius: 10px;
  box-sizing: border-box; /* Учитываем отступы и рамки в общей ширине */
  font-size: 16px;
}

.textarea-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #0502a7;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 16px;
  resize: vertical;
  height: 150px;
}

.rating {
  margin: 10px 0;
}

.star {
  font-size: 24px;
  color: black;
  cursor: pointer;
}

.submit-button {
  background-color: #0502a7;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-button:hover {
  background-color: #0502a7;
}

h2 {
  color: #0502a7;
  margin-bottom: 20px;
}


.star {
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.star-rating {
  margin-top: 0px;
}

.star.filled {
  color: gold;
}


@media (max-width: 768px) {
  .container {
    width: 80%;
    padding: 10px;
    margin: 10px auto;
  }

  h1 {
    font-size: 2.5em;
  }

  p {
    font-size: 1em;
  }
}

.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ff4d4f;
  color: white;
  padding: 15px 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  font-size: 16px;
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.5s ease-in-out;
  pointer-events: none;
}

/* Когда showToast=true — активируем видимость */
.toast.show {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

























.author {
  font-weight: 600;
  color: #2c3e50;
}

.h3 {
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
  margin-top: -50px;
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


