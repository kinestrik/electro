<script>
import axios from "axios";
import AppFooter from "@/components/layouts/AppFooter.vue";

export default {
  data() {
    return {
      name: "ContactForm",
      phone: "+7 949 3331492",
      email: "example@dnr.ru",
      form: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },
      toasts: [], // массив для всех сообщений (ошибок и успеха)
      maxToasts: 5,
      toastIdCounter: 0, // для уникальных id
    };
  },
  components: {
    AppFooter,
  },
  methods: {
    async feedBack() {
      try {
        await axios.post("/feedback/send", {
          name: this.form.name,
          phone: this.form.phone,
          email: this.form.email,
          content: this.form.message,
        });

        this.addToast({
          message:
            "Спасибо за ваше обращение! Мы успешно получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее время, чтобы уточнить детали и предоставить необходимую информацию.",
          type: "success",
        });

        // Очистить форму
        this.form.name = "";
        this.form.phone = "";
        this.form.email = "";
        this.form.message = "";
      } catch (err) {
        let message = "Произошла ошибка.";
        if (axios.isAxiosError(err)) {
          if (err.response) {
            switch (err.response.status) {
              case 400:
                message = "Заполните все поля!";
                break;
              default:
                message = "Ошибка сервера.";
            }
          } else if (err.request) {
            message = "Произошла ошибка. Попробуйте позже.";
          }
        }
        this.addToast({ message, type: "error" });
      }
    },
    addToast(toast) {
      // Если сообщений больше лимита — удаляем самое старое
      if (this.toasts.length >= this.maxToasts) {
        this.toasts.shift();
      }

      const id = this.toastIdCounter++;
      this.toasts.push({
        id,
        message: toast.message,
        type: toast.type || "success",
      });

      // Автоматическое удаление через 4 секунды
      setTimeout(() => {
        this.removeToast(id);
      }, 4000);
    },
    removeToast(id) {
      this.toasts = this.toasts.filter((t) => t.id !== id);
    },
  },
};
</script>

<template>
  <div class="contact-container">
    <h1 class="title">Контакты</h1>

    <div class="contact-info">
      <div class="block1">
        <h4>Телефон: </h4>
        <h4>Почта: </h4>
        <h4 class="mt-5">Telegram, WhatsApp: </h4>
      </div>
      <div class="block2">
        <h4>{{ phone }}</h4>
        <h4>{{ email }}</h4>
        <div class="block3">
          <a href="#!"><img class="tg icon" src="@/assets/telegram.png" alt="Telegram" /></a>
          <a href="#!"><img class="wh icon" src="@/assets/whatsapp.png" alt="WhatsApp" /></a>
        </div>
      </div>
    </div>

    <p class="p-can"><b>Можете связаться с нами напрямую</b></p>
    <p class="p-or"><strong>ИЛИ</strong></p>

    <form @submit.prevent="feedBack()" class="feedback-form">
      <h3>Оставьте заявку на обратную связь</h3>
      <div class="block-form-1">
        <label class="input-label">
          <input type="text" v-model="form.name" placeholder="Имя" required />
          <span class="floating-label">Имя</span>
        </label>
        <label class="input-label">
          <input type="tel" v-model="form.phone" placeholder="Телефон" required />
          <span class="floating-label">Телефон</span>
        </label>
        <label class="input-label">
          <input type="email" v-model="form.email" placeholder="Почта" required />
          <span class="floating-label">Почта</span>
        </label>
      </div>
      <label class="input-label">
        <textarea v-model="form.message" placeholder="Текст" resize="none" required></textarea>
        <span class="floating-label">Текст</span>
      </label>
      <div class="block-btn">
        <button type="submit">Отправить</button>
      </div>
    </form>
  </div>

  <!-- Toast контейнер -->
  <div class="toasts-container">
    <transition-group name="toast" tag="div">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="['toast', toast.type]"
      >
        {{ toast.message }}
      </div>
    </transition-group>
  </div>

  <app-footer />
</template>

<style scoped>
:root {
  --font-family: "Rubik", sans-serif;
  --second-family: "Inter", sans-serif;
  --primary-color: #4a4aa6;
  --light-gray: #f0f0f0;
  --input-bg: #f7f7f7;
  --input-focus: #d1d1ff;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: var(--font-family);
}

.contact-container {
  max-width: 700px;
  margin: 0 auto;
  background: #fff;
  padding: 30px 40px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.5s ease-in;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  color: #0502a7;
  font-size: 48px;
  font-weight: bold;
}

.p-or,
.p-can {
  text-align: center;
  font-size: 18px;
  margin: 20px 0;
}

/* --- Контактная информация --- */
.contact-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.block2 {
  text-align: end;
}

.block3 {
  display: flex;
  gap: 2px;
}

h4 {
  margin-bottom: 10px;
  font-size: 18px;
}

/* Иконки */
.icon {
  display: inline-block;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.icon:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.tg,
.wh {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.tg {
  margin-right: 10px;
}

/* --- Форма обратной связи --- */
.feedback-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border: 1px solid var(--primary-color);
  border-radius: 14px;
  background: var(--light-gray);
  animation: slideIn 0.6s ease-in;
}

.block-form-1 {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.feedback-form label {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.feedback-form input,
.feedback-form textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: var(--input-bg);
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 0 8px #223c5033;
}

.feedback-form input:focus,
.feedback-form textarea:focus {
  background-color: #fff;
  border-color: var(--input-focus);
  outline: none;
  box-shadow: 0 0 6px rgba(74, 74, 166, 0.4);
  transform: scale(1.02);
}

.feedback-form input::placeholder,
.feedback-form textarea::placeholder {
  color: #888;
  font-weight: 500;
  font-size: 15px;
}

.feedback-form textarea {
  resize: none;
  height: 200px;
}

.block-btn {
  text-align: center;
}

.feedback-form button {
  padding: 12px;
  background-color: var(--primary-color);
  color: #373791;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  width: 220px;
  transition: background 0.3s ease, transform 0.2s ease;
}

.feedback-form button:hover {
  color: #fff;
  background-color: #373791;
  transform: translateY(-2px);
}

.input-label {
  position: relative;
  display: flex;
  flex-direction: column;
}

.floating-label {
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #888;
  pointer-events: none;
  user-select: none;
  opacity: 0;
  transform-origin: left top;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    font-size 0.3s cubic-bezier(0.4, 0, 0.2, 1), top 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s ease;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 0 4px;
  border-radius: 3px;
  box-sizing: border-box;
  z-index: 2;
}

.input-label input:not(:placeholder-shown) + .floating-label,
.input-label textarea:not(:placeholder-shown) + .floating-label {
  opacity: 1;
  top: -10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--primary-color);
  transform: translateY(0);
  text-shadow: none;
  box-shadow: 0 0 5px rgba(74, 74, 166, 0.3);
}

.input-label input::placeholder,
.input-label textarea::placeholder {
  transition: opacity 0.2s ease;
}

.input-label input:not(:placeholder-shown)::placeholder,
.input-label textarea:not(:placeholder-shown)::placeholder {
  opacity: 0;
}

/* --- Toast контейнер и тосты --- */
.toasts-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  max-width: 320px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.toast {
  padding: 15px 25px;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  word-wrap: break-word;
  background-color: #52c41a;
  cursor: default;
  user-select: none;
  opacity: 1;
  transform: translateX(0);
  transition: all 0.5s ease;
  margin-bottom: 5px;
}

.toast.error {
  background-color: #ff4d4f;
}

.toast.success {
  background-color: #52c41a;
}

/* Transition-group анимации */
.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-enter-active {
  transition: all 0.5s ease;
}

.toast-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.toast-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.toast-leave-active {
  transition: all 0.5s ease;
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

/* Анимация для контейнера и формы */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
