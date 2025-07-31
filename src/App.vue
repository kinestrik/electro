<template>
   <preloader-comp v-if="load"></preloader-comp>
     <div v-if="onload">
  <app-header />
  <div class="main-content">
    <router-view />
  </div>
   </div>
</template>
<style>
.main-content {
  padding-top: 90px;
}
</style>
<script>
import { useUserStore } from "./stores/user";
import AppHeader from "./components/layouts/AppHeader.vue";
import PreloaderComp from './components/layouts/PreloaderComp.vue'
export default {
  name: "App",
  components: {
    AppHeader,
    PreloaderComp
  },
  data() {
    return {
      userStore: useUserStore(),
      show: true,
      load: true,
      onload: false,
    };
  },
  methods: {
    async fetchData() {
      try {
        // Получаем данные пользователя и статус авторизации. Если пользователь
        // не авторизован или произошла ошибка, то данные будут сброшены в store.
        await this.userStore.fetchUser();

        // Загружаем данные админа, только если пользователь авторизован и данные
        // еще не были получены ранее.
        if (this.userStore.isAuth && this.userStore.isAdmin === null) {
          await this.userStore.fetchAdmin();
        }
      } catch (error) {
        console.error("Error during fetching user or admin data:", error);
        // Не обязательно очищать данные здесь, fetchUser уже позаботился об этом.
      }
    },
    clearData() {
      this.userStore.clearUser();
    },
    setShow() {
      setTimeout(() => {
        this.show = false;
      }, 1000);
    },
  },
  created() {
    // Инициализируем данные пользователя из localStorage
    this.userStore.initUser();
    // Пытаемся получить данные с сервера.
    this.fetchData();
  },
  unmounted() {
    // Очищаем данные при размонтировании
    this.clearData();
  },
  mounted() {
    this.setShow();
    window.onload = () => {
      setTimeout(() => {
        console.log("Страница полностью загружена!");
        this.load = false;
        this.onload = true;
        console.log(this.load);
      }, 1000);
    };
  },
};
</script>
