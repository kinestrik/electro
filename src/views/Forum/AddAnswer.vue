<template>
  <div class="coooont">
  <div class="form-container">
    <h1>Ответить</h1>
    <form @submit.prevent="submitForm" class="feedback-form">
      <div class="block-form-1"></div>
      <label>
        Ваш ответ
        <textarea v-model="form.content" resize="none" required></textarea>
      </label>
      <div class="block-btn">
        <button type="submit">Ответить</button>
        <p class="text-center pp mt-5">{{ error }}</p>
      </div>
    </form>
  </div>
  </div>
  <app-footer></app-footer>

</template>

<script>
import axios from "axios";
import appFooter from "@/components/layouts/AppFooter.vue";

export default {
  name: "ExampleOfWork",
  data() {
    return {
      form: {
        content: "",
      },
      formdata: new FormData(),
      error: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const id = this.$route.params.id;
        const res = await axios.post("/forum/add-ans", {
          id_q: id,
          content: this.form.content,
        });
        console.log(res);
        this.$router.push(`/que/` + id)
      } catch (e) {
        console.error(e);
        if (e.response && e.response.data.message) {
          this.error = "Войдите или зарегиструйтесь";

        } else {
          this.error = "Ошибка создания ответа.";
        }
      }
    },
  },
  components: {
    appFooter,
  },
  mounted() {
    document.title = "Форум | Добавить ответ";
  }
};
</script>

<style scoped>
:root {
  --font-family: "Rubik", sans-serif;
  --second-family: "Inter", sans-serif;
}
.coooont{
  min-height: 60vh;
}
.pp {
  color: red;
  font-size: 15px;
  margin-top: 10px;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.photo {
  width: 160px;
  height: 200px;
  font-size: 70px;
  font-weight: 100;
  margin-top: 10px;
}

.photo,
.photomore {
  background-color: #d9d9d9;
  border-radius: 4px;

  display: grid;
  place-items: center;

  cursor: pointer;

  transition: all 100ms;
}

.photomore {
  font-size: 30px;
}

.photo:hover,
.photomore:hover {
  background-color: #b8b6b6;
}

.form-container {
  max-width: 700px;
  margin: 0 auto;
  background: #fff;
  padding: 20px 30px;
  font-size: 30px;
}

h1 {
  text-align: center;
  margin-bottom: 15px;
  color: #4a4aa6;
}

.feedback-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 20px;

  border: 1px solid #2f23a0;
  border-radius: 14px;
}

.block-form-1 {
  display: flex;
  gap: 15px;

  .block-form-1-1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
}

.feedback-form label {
  display: flex;
  flex-direction: column;
  font-size: 14px;

  color: #000;
  font-weight: 550;
  font-size: 16px;
}

.feedback-form input,
.feedback-form textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
  background-color: #d9d9d9;
  font-size: 16px;
  font-weight: 500;
}

.feedback-form input::placeholder,
.feedback-form textarea::placeholder {
  color: #000;
  font-weight: 550;
  font-size: 16px;
}

.feedback-form textarea {
  /* resize: vertical; */
  resize: none;
  height: 200px;
}

.block-btn {
  text-align: center;
}

.input-file input[type="file"] {
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
}

.feedback-form button {
  padding: 10px;
  background-color: #4a4aa6;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  width: 250px;

  transition: all 100ms;
}

.feedback-form button:hover {
  background-color: #373791;
}

@media (max-width: 500px) {
  .block-form-1 {
    flex-direction: column;
  }

  .photo {
    width: 100%;
  }
}
</style>
