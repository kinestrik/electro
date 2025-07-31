<script>
import axios from "axios";
import AppFooter from "@/components/layouts/AppFooter.vue";
import { useUserStore } from "@/stores/user"; // импорт хранилища

export default {
  data() {
    return {
      disabled: false,
      email: "",
      password: "",
      error: "",
      phonenumber: "",
      name: "",
      showPassword: "password",
      userStore: useUserStore(), // инициализация
    };
  },
  components: {
    AppFooter
  },
  methods: {
    async login() {
      this.error = null;
      try {
        const response = await axios.post("/email/code/send", {
          email: this.email,
          password: this.password,
          name: this.name,
          reg: true
        });

        if (response.status === 200) {
          await this.userStore.fetchUser(); // 🟢 добавили это

          this.$router.push("/enter-code?reg=true");
        } else {
          this.error = "Неизвестная ошибка сервера";
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response) {
            const status = err.response.status;

            switch (status) {
              case 400:
                if (err.response.data?.res === "Request status bar") {
                  this.error = "Заполните все поля!";
                } else if (
                    err.response.data?.res === "Password length too small"
                ) {
                  this.error = "Пароль должен быть не меньше 8 символов.";
                } else {
                  this.error = "Невалидные данные.";
                }
                break;
              case 409:
                this.error = "Пользователь с такой почтой уже существует.";
                break;
              case 422:
                this.error = "Невалидный адрес электронной почты.";
                break;
              default:
                this.error = `Ошибка сервера: ${status}.`;
            }
          } else if (err.request) {
            this.error = "Произошла ошибка. Попробуйте позже.";
          } else {
            this.error = `Произошла ошибка: ${err.message}`;
          }
        } else {
          this.error = "Произошла ошибка: " + err.message;
        }
      }
    },

    changeGlass() {
      this.showPassword =
          this.showPassword === "password" ? "text" : "password";
    },
  },
};
</script>

<template>
  <div class="window">
    <div class="container mt-7">
      <div class="f">
        <div class="div-nickname">
          <h1 class="text-3xl text-bold registr mt-7 mb-7">Регистрация</h1>
          <form @submit.prevent="login">
            <input
              type="text"
              class="input"
              autofocus
              required
              v-model="name"
              placeholder="Ваше имя"
            />

            <input
              type="text"
              class="input"
              autofocus
              required
              v-model="email"
              placeholder="Почта"
            />
            <div class="pas">
              <input
                :type="showPassword"
                class="input"
                autofocus
                required
                v-model="password"
                placeholder="Пароль"
              />
              <i class="pi pi-eye-slash icon"
                style="font-size: 30px"
                @click="changeGlass"
                v-if="showPassword === 'password'"></i>
              <i
                class="pi pi-eye icon"
                style="font-size: 30px"
                @click="changeGlass"
                
              ></i>
            </div>
            <button class="btn" type="submit">Зарегистрироваться</button>
          </form>
          <a href="/Login" class="haveAcc">Уже есть аккаунт?</a>
          <p class="error">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
  <app-footer/>

</template>
<style scoped>
:root {
  --font-family: "Rubik", sans-serif;
  --second-family: "Inter", sans-serif;
}
.icon {
  position: absolute;
  right: 10px;
  margin-top: 15px;
}
.pas {
  display: flex;
}
.f {
  border: 0.4px solid;
  border-color: #0502a7;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 21px;
}
.div-nickname {
  position: relative;
  width: 420px;
  /* border: 1px solid;
  border-color: #0400ff; */
  height: 500px;
  width: 350px;
}
.registr {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 35px;
  text-align: center;
}
.error {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 17px;
  color: red;
  z-index: 10000;
}

.haveAcc {
  color: #0502a7;
  font-size: 18px;
  font-weight: 500;
  line-height: 50px;
}

.haveAcc:hover {
  color: #0502a7;
}

.btn {
  top: 77px;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  background: #0502a7;
  cursor: pointer;
  border-radius: 15px;
  width: 350px;
  height: 60px;
  border: none;
  z-index: 7000;
  transition: all 0.1s;
}

.btn:hover {
  background-color: #0805be;
}

.btn:disabled {
  top: 77px;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  background: #eae9e9;
  cursor: pointer;
  border-radius: 15px;
  width: 430px;
  height: 60px;
  border: none;
  cursor: pointer;
  z-index: 7000;
  color: #5b5a5a;
}
.btn:disabled:hover {
  background: #e1e1e1;
  transition: all 0.3s;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.window {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
}
.input {
  margin-bottom: 20px;
  border-radius: 15px;
  width: 430px;
  height: 60px;
  background: #0502a7;
  border: none;
  padding: 20px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  color: #000000;
}
.div-nickname span {
  position: absolute;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 25px;
  color: #5b5a5a;
  top: 14px;
  left: 18px;
  pointer-events: none;
  transition: 0.3s ease;
  border-radius: 15px;
  width: 115px;
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
.input:focus ~ span,
.input:valid ~ span {
  transform: translateY(-115%);
  font-size: 20px;
  left: 15px;
  border: solid #ff812c;
  background: #ff812c;
  color: #fff;
  width: 110px;
  text-align: center;
  border-radius: 15px;
}

@media (max-width: 505px) {
  .f {
    border: none;
    border-color: #0502a7;
    padding-right: 30px;
    padding-left: 30px;
    border-radius: 21px;
  }
}
</style>
