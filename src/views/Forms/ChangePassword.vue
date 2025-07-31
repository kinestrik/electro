<script>
import axios from "axios";
import { useUserStore } from "@/stores/user";
import AppFooter from "@/components/layouts/AppFooter.vue";

export default {
  data() {
    return {
      disabled: false,
      password: "",
      error: "",
      phonenumber: "",
      password: "",
      showPassword: "password",
      userStore: useUserStore(),
    };
  },
  components: {
    AppFooter
  },
  methods: {
    async login() {
      this.error = null;
      try {
        const response = await axios.put("/user/change-password", {
        
            new_password: this.password
        });
          this.$router.push("/login");
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response) {
            const status = err.response.status;
            switch (status) {
              case 400:
                this.error = "Пароль слишком мал!";
                break;
              case 500:
                this.error = "Ошибка сервера!";
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
          <h1 class="text-3xl text-bold registr mt-7 mb-7">Новый пароль</h1>
          <form @submit.prevent="login">
            <div class="pas">
              <input
                :type="showPassword"
                class="input"
                autofocus
                required
                v-model="password"
                placeholder="Пароль"
              />
              <i
                class="pi pi-eye-slash icon"
                style="font-size: 30px"
                @click="changeGlass"
                v-if="showPassword === 'password'"
              ></i>
              <i
                class="pi pi-eye icon"
                style="font-size: 30px"
                @click="changeGlass"
              ></i>
            </div>
            <button class="btn" type="submit">Сохранить</button>
          </form>

          <p class="error mt-5">{{ error }}</p>
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
  /* border: 1px solid;
  border-color: #0400ff; */
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
