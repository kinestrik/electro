<script>
import axios from "axios";
import Slider from "./Slider.vue";
import AppFooter from "@/components/layouts/AppFooter.vue";

export default {
  data() {
    return {
      maxStars: 5,

      name: "",
      content: "",
      rating: 0,
      contact: "",
      a_lot: false, // флаг(метка) наличия отзыва на эту работу
      item: {
        id: "423",
        price: 400,
        images: [
          "https://i.pinimg.com/originals/d7/36/e1/d736e12c65a77bd39c179626312916fa.png",
          "https://avatars.mds.yandex.net/i?id=2f67a4ebe4ea656f29497169c6c81aaef25a31db-4227442-images-thumbs&n=13",
        ],
        title: "ТЦ у ашатикаадлвы одаывзfas даофывзароф  ",
        content: "",
        address: "павпывапавпывапыва",
        date_create: "",
      },
    };
  },
  methods: {
    setRating(star) {
      this.rating = star;
    },
    async sendReviews() {
      try  {
        const id = this.$route.params.id;
        let response = await axios.post("/reviews/add-review", {
          id_work: id,
          title: this.name,
          content: this.content,
          stars: this.rating,
          contact: this.contact,
        });
      } catch (err) {
        if (response.message == "You already have review for this work") {
          this.a_lot = true
          return 
        }
        console.log(err)
      }
    },
    async getWork() {
      try {
        const id = this.$route.params.id;
        const response = await axios.get(`/works/show-work?id_w=${id}`);
        console.log(response.data.res)
        // if(response.data.res == "ERR"){
        //   this.$router.push("/err")
        // }
        this.item = response.data.res;
      } catch (err) {
        console.error(err);
      }
    },
  },
  components: {
    AppFooter,
    Slider,
  },
  mounted() {
    this.getWork()

  },
  computed: {
    formattedContent() {
      return this.item.content ? this.item.content.replace(/\n/g, "<br>") : "";
    },
  },
};
</script>
<template>
  <div class="window">
    <div class="container">
      <img :src="item.images[0]" alt="" class="img" />
      <div>
        <h1 class="text-center mt-7 head">{{ item.title }}</h1>
        <h2 class="text-center mt-1 head2">
          {{ item.address }}
        </h2>
        <div class="text">
          <p v-html="formattedContent"></p>
        </div>
      </div>
    </div>

    <!-- отзыв -->

    <div class="rev">
      <form @submit.prevent="sendReviews">
        <h1 class="text-center mt-1 head3">Оставьте заявку на отзыв!</h1>
        <div class="inputs mt-7 d-flex gap-40">
          <input
              type="text"
              class="input"
              required
              v-model="name"
              placeholder="Имя"
          />
          <input
              type="text"
              class="input"
              required
              v-model="contact"
              placeholder="Контакты"
          />
        </div>
        <textarea
            type="text"
            class="txt"
            required
            v-model="content"
            placeholder="Отзыв"
        />
        <div class="btns">
          <div class="star-rating mb-5">
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

          <button class="btn" type="submit">Отправить</button>

          <h3 style="color: red;" v-if="this.a_lot">Вы уже отправляли отзыв на эту работу!</h3>
        </div>
      </form>
    </div>
    <h1 class="head5 mt-5">Фото с объекта</h1>
  </div>
  <app-footer />
</template>

<style scoped>
:root {
  --font-family: "Rubik", sans-serif;
  --second-family: "Inter", sans-serif;
}

.btns {
}

.head5 {
  font-size: 35px;
  font-family: var(--font-family);
  font-weight: 800;
  text-align: start;
  color: #020072;
}

.btn {
  color: white;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  background: #0502a7;
  cursor: pointer;
  border-radius: 15px;
  width: 150px;
  height: 45px;
}

/* Отзывы */

.rev {
  margin-top: 50px;
  padding: 20px;
  border: #020072 solid 1px;
  border-radius: 20px;
}
.inputs {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}
.window {
  padding: 10px;
}
.text {
  margin-top: 20px;
  max-width: 900px;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 20px;
  height: auto;
  overflow-y: auto;
  max-height: 400px;
}

.input {
  margin-bottom: 20px;
  border-radius: 15px;
  width: 350px;
  height: 60px;
  background: #eae9e9;
  border: none;
  padding: 20px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  color: #000000;
}
.input:focus,
.input:valid {
  outline: none;
  border: none;
  border: 3px solid #0502a7;
  transition: all 0.1s;
}
.txt {
  margin-bottom: 20px;
  border-radius: 15px;
  width: 750px;
  height: 100px;
  background: #eae9e9;
  border: none;
  padding: 20px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  color: #000000;
}
.txt:focus,
.txt:valid {
  outline: none;
  border: none;
  border: 3px solid #0502a7;
  transition: all 0.1s;
}
.text p {
  /* overflow: hidden; */
  /* text-overflow: ellipsis;
  white-space: nowrap; */
}
.container {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 30px;
}

.img {
  max-width: 450px;
  height: auto;
  border-radius: 10px;
  object-fit: contain; /* Масштабирование с сохранением пропорций */
  display: block;
  margin: 0 auto;
}
.head {
  font-size: 40px;
  font-family: var(--font-family);
  font-weight: 800;
  text-align: start;
  color: var(--color);
}
.head2 {
  font-size: 27px;
  font-family: var(--font-family);
  font-weight: 800;
  text-align: start;
  color: #020072;
}
.head3 {
  font-size: 27px;
  font-family: var(--font-family);
  font-weight: 800;
  text-align: start;
  color: #020072;
}

/* звездочки(пзд) */
.star {
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;
}
.star-rating {
  margin-top: -20px;
}
.star.filled {
  color: gold;
}

@media (max-width: 827px) {
  .inputs {
    gap: 10px;
  }
  .txt {
    width: 350px;
  }
}
@media (max-width: 445px) {
  .input {
    width: 300px;
  }
  .txt {
    width: 300px;
  }
  .img {
    width: 350px;
    height: auto;
    border-radius: 10px;
    display: block;
    margin: 0;
  }
}
</style>
