<script>
import axios from "axios";
import ItemVid from "./ItemQueVid.vue";
import {useUserStore} from "@/stores/user";
import appFooter from "@/components/layouts/AppFooter.vue";

export default {
  data() {
    return {
      question: {

      },
      error: null,
      answers: [
        // {
        //   content: "asdfasd",
        //   username: "sdfas",
        //   date_create: "sdfas",
        //   avatar: "https://ir.ozone.ru/s3/multimedia-j/c1000/6542858707.jpg",
        // },
      ],
      userStore: useUserStore(),

    };
  },
  mounted() {
    this.fetchData();

   setTimeout(()=>{
     document.title = `Вопрос | ` + this.question.title;
   }, 1000);
  },
  components: {
    ItemVid,
    appFooter
  },
  methods: {
    async fetchData() {

      try {
        await this.getQuestion();
        await this.getAnswers();
      } catch (e) {
        console.error("Ошибка при загрузке данных", e);
      } finally {

      }
    },
    async getQuestion() {
      const id = this.$route.params.id;
      try {
        const res = await axios.get(`/forum/show-q?id_q=${id}`);
        this.question = res.data.res;
      } catch (e) {
        console.error("Ошибка получения вопроса", e);
        this.error = "Ошибка при получении вопроса.";
      }
    },
    async getAnswers() {
      const id = this.$route.params.id;
      try {
        const res = await axios.get(`/forum/show-ans?id_q=${id}&start=0&end=0`);
        this.answers = res.data.res.answers;
        console.log(this.answers[0])
      } catch (e) {
        console.error("Ошибка получения ответа", e);
        this.error = "Ошибка при получении ответов.";
      }
    },
    push() {
      const id = this.$route.params.id;
      this.$router.push(`/add-ans/` + id)
    },
   async deleteQue(){
     try {
       const response = await axios.delete('/forum/delete-q', {
         params: {
           id_q: this.$route.params.id,
         },
       });
       this.$router.push("/forum-que");

     } catch (error) {
       console.error("Error deleting work:", error);
       // Дополнительная обработка ошибок
     }
    },
    gotoEdit(){
      this.$router.push(`/edit-forum-q/` + this.$route.params.id);
    }
  },
  computed: {
    formattedContent() {
      return this.question && this.question.content
        ? this.question.content.replace(/\n/g, "<br>")
        : "";
    },
    formattedAnswers() {
      return this.answers.map((answer) => ({
        ...answer,
        formattedContent: answer.content
          ? answer.content.replace(/\n/g, "<br>")
          : "",
      }));
    },
  },
};
</script>

<template>
  <div class="coooont">
  <div class="header" style="padding: 30px">
    <div class="btns">
      <img src="https://img.icons8.com/?size=100&id=sgywYSF7gZmd&format=png&color=000000" class="edit" v-if="this.userStore.isAdmin == true || this.question.isCreator == true" @click="gotoEdit()">
      <img src="https://img.icons8.com/?size=100&id=11705&format=png&color=000000" class="edit2" @click="deleteQue()" v-if="this.userStore.isAdmin == true || this.question.isCreator == true">
    </div>
    <h1 class="head" v-html="question.title"></h1>
    <hr />
  </div>
  <div class="content" style="padding-left: 30px; padding-right: 30px">
    <p class="p" v-html="question.content"></p>
    <div class="user-info-container">
      <div class="user-info">
        <img :src="question.avatar" alt="" class="immg" />
        <span class="username ml-3" v-html="question.name"></span>
      </div>
      <div class="date" v-html="question.date_create"></div>
    </div>
    <button class="answer mt-5 mb-3" @click="push">Ответить</button>
    <hr />
    <h1 class="he mt-5">Ответов: {{ answers.length }}</h1>
  </div>

  <div class="vv" v-for="item in answers">
    <div class="question-container mt-5">
      <div class="user-info-container mt-3">
        <div class="user-info">
          <img :src="item.user_avatar" alt="avatar" class="avatar" />
          <span class="username">{{ item.user_name }}</span>
        </div>
        <div class="date">{{ item.date_create }}</div>
      </div>
      <hr />
      <div class="question-text mt-5">
        <p v-html="item.content"></p>
      </div>
    </div>
  </div>
  </div>




<app-footer></app-footer>

</template>

<style scoped>
.coooont{
  min-height: 70vh;
}

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




:root {
  --font-family: "Rubik", sans-serif;
  --second-family: "Inter", sans-serif;
}

.vv {
  display: flex;
  justify-content: center;
  /* Горизонтальное выравнивание по центру */
  align-items: center;
  gap: 50px;
  /* Вертикальное выравнивание по центру */
  /* Можно добавить min-height, если нужно установить минимальную высоту контейнера */
  /* min-height: 100vh; /* Например, на всю высоту экрана */
}

.question-container {
  padding: 10px 20px;
  width: 100vw;
  max-width: 1500px;
  min-width: 300px;
}

.user-info-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  /* Отступ снизу для user-info */
}

.user-info {
  display: flex;
  align-items: center;
}

.avatar {
  width: 40px;
  /* Ширина аватара */
  height: 40px;
  /* Высота аватара */
  border-radius: 50%;
  /* Делаем аватар круглым */
  margin-right: 8px;
  /* Отступ справа от аватара */
  object-fit: cover;
  /* Обрезаем изображение при необходимости */
  object-position: center;
  /* Выравнивание по центру */
}

.username {
  font-size: 20px;
  font-weight: bold;
}

.date {
  width: 110px;
  font-size: 14px;
  color: #888;
  white-space: nowrap;
  /* Текст не переносится */
  overflow: hidden;
  /* Обрезаем всё за пределами блока */
  text-overflow: ellipsis;
}

.question-text {
  font-size: 16px;
  line-height: 1.4;
}

.he {
  font-size: 25px;
  font-family: var(--font-family);
  font-weight: 800;
  text-align: start;
  color: black;
}

.answer {
  width: 150px;
  height: 45px;
  background: var(--color);
  color: white;
  font-size: 16px;
  font-family: var(--font-family);
  font-weight: 800;
  border-radius: 10px;
}

.immg {
  width: 30px;
  height: 30px;
  border-radius: 100%;
}

/* блок имени */
.user-info-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  /* padding: 10px 20px; Добавим небольшой паддинг по краям */
}

.user-info {
  display: flex;
  align-items: center;
}

.dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: black;
  /* Цвет точки */
  margin-right: 8px;
}

.username {
  font-size: 20px;
  /* Размер шрифта имени */
  font-weight: bold;
  /* Жирный текст */
}

.date {
  font-size: 14px;
  /* Размер шрифта даты */
  color: #888;
  /* Серый цвет для даты */
}

.head {
  font-size: 40px;
  font-family: var(--font-family);
  font-weight: 800;
  text-align: start;
  color: black;
}

.p {
  font-size: 20px;
  font-family: var(--font-family);
  font-weight: 800;
  text-align: start;
  color: black;
  white-space: pre-line;
  word-wrap: break-word;
}

.links {
  display: flex;
  gap: 30px;
}

.link-def {
  font-size: 27px;
  font-family: var(--font-family);
  font-weight: 800;
  text-align: center;
  color: #222222;
}

.link-active {
  color: var(--color);
}

.items-container {
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  gap: 30px;
  justify-content: center;
}
</style>
