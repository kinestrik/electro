<script>
import axios from "axios";
import AppFooter from "@/components/layouts/AppFooter.vue";
export default {
  data() {
    return {
      disabled: false,
      email: "",
      password: "",
      error: "",
      phonenumber: "",
      password: "",
    };
  },
  components: {
    AppFooter,
  },
  methods: {
    async login() {
      this.error = null;
      try {
        const response = await axios.post("/email/code/send", {
          //rout
          email: this.email,
          reg: false,
        });

        this.$router.push("/enter-code");
      } catch (err) {
        console.log(err);
        if (axios.isAxiosError(err)) {
          if (err.response) {
            const status = err.response.status;
            switch (status) {
              case 400:
                this.error = "Заполните поле верно!";
                break;
              case 500:
                this.error = "Ошибка сервера!";
                break;
              case 422:
                this.error = "Почта невалидна.";
                break;
              default:
                this.error = `Ошибка сервера.`;
            }
          } else if (err.request) {
            this.error = "Произошла ошибка. Попробуйте позже.";
          } else {
            this.error = `Произошла ошибка.`;
          }
        } else {
          this.error = "Произошла ошибка.";
        }
      }
    },
  },
};
</script>
<template>
  <div class="window">
    <div class="container mt-7">
      <div class="f">
        <div class="div-nickname">
          <h1 class="text-3xl text-bold registr mt-7 mb-7">Ваш Email</h1>
          <form @submit.prevent="login">
            <input
              type="text"
              class="input"
              autofocus
              required
              v-model="email"
              placeholder="Почта"
            />
            <button class="btn" type="submit">Отправить</button>
          </form>
          <p class="error mt-5">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
  <app-footer />
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
  margin-top: 43px;
  border: 0.4px solid;
  border-color: #0502a7;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 21px;
}
.div-nickname {
  position: relative;
  width: 420px;
  height: 270px;
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
  margin-bottom: -20px;
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
