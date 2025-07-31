<script>
import axios from "axios";

export default {
  name: "ExampleOfWork",
  data() {
    return {
      form: {
        title: "",
        address: "",
        content: "",
        photos: [],
        price: 0,


      },
      count: 0,
      formdata: new FormData(),
    };
  },
  methods: {
    async addWork() {
      try {
        let res = await axios.post(`/works/add-work/text`, {
          title: this.form.title,
          address: this.form.address,
          content: this.form.description,
          price: this.form.price,
          names_files: this.form.photos,
        })
      } catch (e) {
        console.error(e)
      }
      try {
        let res = await axios.post(`/works/add-work/images`,  this.formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
            );
            this.percentCompleted = percentCompleted;
          },
        });
        this.$router.push("/examples");
      } catch (error) {
        console.error("Ошибка при отправке данных:", error);
        return;
      }
    },
    async convertFile(event, name) {
      if (event && name) {
        const files = event.target.files;
        if (files && files.length > 0) {
          if (!this.formdata) {
            this.formdata = new FormData();
          }

          this.form.photos = []; // Очищаем массив имен файлов перед добавлением новых
          for (let i = 0; i < files.length; i++) {
            const file = files[i];
            this.formdata.append(name, file); // Добавляем файлы в FormData
            this.form.photos.push(file.name); // Сохраняем имена файлов
            console.log("Файл(ы) успешно добавлены в formdata");
          }
          const reader = new FileReader();
          reader.onload = (e) => {
            if (reader.result) {
              console.log("Файлы успешно прочитаны");
            }
          };
          if (files.length > 0) {
            reader.readAsDataURL(files[0]);
          }
          this.count = files.length;
        } else {
          console.log("Нет файлов для загрузки");
        }
      } else {
        console.log("Неверные аргументы для convertFile");
      }
    },

  },
};
</script>

<template>

  <div class="form-container">
    <h1>Создание примера работы</h1>
    <form @submit.prevent="addWork()" class="feedback-form">
      <div class="block-form-1">
        <div class="block-form-1-1">
          <label>
            Заголовок
            <input type="text" v-model="form.title" required/>
          </label>
        </div>
        <label for="filee" class="input-file">
          <div class="photo">
            <input
                type="file"
                name="file[]"
                id="filee"
                multiple
                @change="convertFile($event, 'Images')"
                accept="image/*"
            />
            +
          </div>
        </label>
      </div>

      <!-- Новое поле контактов на всю ширину -->
      <label class="full-width-label">
        Адрес
        <input type="tel" v-model="form.address" required/>
      </label>
      <label class="full-width-label">
        Цена
        <input type="number" v-model="form.price" required/>
      </label>
      <label>
        Описание
        <textarea v-model="form.description" resize="none" required></textarea>
      </label>
        <p>Файлов добавлено: {{this.count}}</p>
      <div class="block-btn">
        <button type="submit">Добавить</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
:root {
  --font-family: "Rubik", sans-serif;
  --second-family: "Inter", sans-serif;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.photo {
  width: 130px;
  height: 40px;
  font-size: 40px;
  font-weight: 100;
  margin-top: 28px;
  padding-bottom: 5px;
}

.photo, .photomore {
  background-color: #D9D9D9;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 100ms;
}

.photomore {
  font-size: 30px;
}

.photo:hover, .photomore:hover {
  background-color: #b8b6b6;
}

.form-container {
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  padding: 20px 30px;
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
  border: 1px solid #2F23A0;
  border-radius: 14px;
}

.block-form-1 {
  display: flex;
  gap: 15px;
}

.block-form-1-1 {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

/* Стиль для поля контактов на всю ширину */
.full-width-label {
  margin-top: -5px;
  width: 100%;
}

.feedback-form label {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #000;
  font-weight: 550;
}

.feedback-form input,
.feedback-form textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
  background-color: #D9D9D9;
  font-size: 16px;
  font-weight: 500;
}

.feedback-form textarea {
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
    margin-top: 5px;
  }
}
</style>