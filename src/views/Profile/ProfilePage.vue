<script>
import axios from "axios";
import {useUserStore} from "@/stores/user";
import AppFooter from "@/components/layouts/AppFooter.vue";

export default {
  data() {
    return {
      userStore: useUserStore,
      isAuth: false,
      profile: null,
      name: "",
      form: {
        name: "",
        email: "",
        surname: "",
        phonenumber: "",
        avatar: "",
      },
    };
  },
  methods: {
    async getProfile() {
      try {
        const response = await axios.get(`/user/get-profile`);
        this.form = response.data.res;
      } catch (err) {
        console.error(err);
      }
    },
    async changeProfile() {
      try {
        const response = await axios.put(`/user/change-profile`, {
          name: this.form.name,
          surname: this.form.surname,
          email: this.form.email,
          phonenumber: this.form.phonenumber,
          avatar: this.form.avatar,
        });
        window.location.reload();
      } catch (err) {
        console.error(err);
      }
    },
    async logout() {
      try {
        await axios.get("/user/sign-out");
        window.location.href = "/login";
        window.reload()
        this.userStore.clearUser();
      } catch (err) {
        console.error(err);
      }
    },
    convertFileAvatar(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      const filename = event.target.files[0].name;
      this.form.filename = filename;
      reader.onload = () => {
        this.form.avatar = reader.result;
      };
      reader.readAsDataURL(file);
    },
  },
  components: {
    AppFooter,
  },
  mounted() {
    this.getProfile();
    document.title = `Мой профиль`;

  },
};
</script>
<template>
  <form @submit.prevent="changeProfile()" class="mt-7 form">
    <div class="header-container">
      <h1 class="mt-7">
        Добро пожаловать в профиль, {{ form.name }}!
        <i
            class="pi-sign-out pi ll"
            @click="logout"
        ></i>
      </h1>
    </div>
    <div class="window mt-1">
      <img :src="form.avatar" alt=""/>
      <div class="inputs mt-7">
        <div class="input-div">
          <p>Имя</p>
          <input type="text" placeholder="" v-model="form.name"/>
        </div>
        <div class="input-div">
          <p>Адрес эл. почты</p>
          <input type="text" v-model="form.email"/>
        </div>
      </div>
      <div class="inputs block">
        <div class="input-div">
          <p>Фамилия</p>
          <input type="text" placeholder="" v-model="form.surname"/>
        </div>
        <div class="input-div">
          <p>Номер телефона</p>
          <input type="text" v-model="form.phonenumber"/>
        </div>
      </div>
    </div>
    <div class="buttons mt-7">
      <button
          class="btn change"
          style="background: black"
          @click="this.$router.push(`/enter-email`)"
      >
        Смена пароля
      </button>
      <button class="btn accept" type="submit">Подтвердить</button>
      <label class="input-file btn sign-out">
        <input type="file" multiple="multiple" @change="convertFileAvatar($event, 'name')"/>
        <span>Изменить аватар</span>
      </label>
    </div>
  </form>

  <app-footer/>
</template>
<style scoped>
:root {
  --font-family: "Rubik", sans-serif;
  --second-family: "Inter", sans-serif;
}

.header-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
}

.ll {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 30px;
  color: red;
  cursor: pointer;
  z-index: 1;
  padding: 5px;
  border-radius: 50%;
  margin-left: 10px
}

.block {
  margin-top: 0px;
}

.buttons {
  display: flex;
  gap: 20px;
  margin-top: -30px;
  justify-content: center;
}

.btn {
  width: 200px;
  height: 45px;
  border-radius: 10px;
  color: white;
}

.sign-out {
  background: red;
  font-size: 16px;
  font-family: var(--font-family);
  font-weight: 800;
  color: white;
  cursor: pointer;
}

.sign-out::placeholder {
  font-size: 16px;
  font-family: var(--font-family);
  font-weight: 800;
  color: white;
  text-align: center;
}

.accept {
  background: var(--color);
  font-size: 16px;
  font-family: var(--font-family);
  font-weight: 800;
}

.change {
  background: #000000;
  font-size: 16px;
  font-family: var(--font-family);
  font-weight: 800;
}

.input-div p {
  font-size: 20px;
  font-family: var(--font-family);
  font-weight: 800;
  text-align: start;
  margin-left: 10px;
}

.window {
  display: flex;
  padding: 50px;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
}

.window img {
  border-radius: 50%;
  width: 300px;
  height: 300px;
}

.window .inputs {
  margin-top: 60px;
}

.window .inputs input {
  margin-bottom: 20px;
  border-radius: 15px;
  width: 250px;
  height: 48px;
  background: #d9d9d9;
  border: none;
  padding: 20px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  color: #000000;
}

h1 {
  font-size: 35px;
  font-family: var(--font-family);
  font-weight: 800;
  text-align: center;
  color: var(--color);
  margin: 0;
  padding: 0 40px;
}

.input-file {
  position: relative;
  display: inline-block;
}

.input-file span {
  font-size: 15px;
  font-family: var(--font-family);
  font-weight: 800;
  color: white;
  cursor: pointer;
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  vertical-align: middle;
  color: rgb(255 255 255);
  text-align: center;
  border-radius: 4px;
  background-color: #ff0000;
  line-height: 22px;
  height: 45px;
  padding: 10px 20px;
  box-sizing: border-box;
  border: none;
  margin: 0;
  transition: background-color 0.2s;
  border-radius: 10px;
  width: 200px;
}

.input-file input[type="file"] {
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
}

.input-file input[type="file"]:focus + span {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.input-file:hover span {
  background-color: #ff0000;
}

.input-file:active span {
  background-color: #ff0000;
}

.input-file input[type="file"]:disabled + span {
  background-color: #eee;
}

.form {
  min-height: 70vh;
}

@media (max-width: 1038px) {
  .buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 0px;
    margin-right: 0px;
  }

  .window .inputs input {
    width: 300px;
  }

  .btn {
    width: 300px;
  }

  .input-file span {
    width: 300px;
  }
  
  .ll {
    margin-top: 25px;
  }
}


@media (max-width: 700px) {
  h1 {
    font-size: 24px;
    padding: 0 50px;
  }

  .header-container {
    padding: 0 20px;
  }

  .ll {
    margin-top: 17px;
    font-size: 20px;
  }

  .window {
    display: flex;
    padding: 30px;
    gap: 0px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .window .inputs {
    margin-top: 10px;
  }

  .input-file span {
    width: 300px;
  }
}

@media (max-width: 500px) {
  h1 {
    font-size: 20px;
    padding-right: 30px;
  }

  .ll {
    font-size: 20px;
  }
}
</style>