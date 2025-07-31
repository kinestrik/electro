import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    isAdmin: null,
    isAuth: false,
    loading: false,
    error: null,
  }),
  getters: {
    isLoggedIn: (state) => state.isAuth,
    getUser: (state) => state.user,
    getUserId: (state) => (state.user ? state.user.id : null),
    getUserAvatar: (state) => (state.user ? state.user.avatar : null),
    getIsAdmin: (state) => (state.isAdmin !== null ? state.isAdmin : false),
  },
  actions: {
    initUser() {
      try {
        const storedUser = localStorage.getItem("user");
        const storedIsAuth = localStorage.getItem("isAuth");

        if (storedUser) {
          this.user = JSON.parse(storedUser);
        }
        if (storedIsAuth) {
          this.isAuth = storedIsAuth === "true";
        }
      } catch (error) {
        console.error("Failed to load user from localStorage", error);
      }
    },
    async fetchUser() {
      try {
        const response = await axios.get("/user/get-id-avatar");
        if (response.data && response.data.id_user) {
          this.user = {
            id: response.data.id_user,
            avatar: response.data.avatar,
          };
          localStorage.setItem("user", JSON.stringify(this.user));
          this.isAuth = true;
          localStorage.setItem("isAuth", "true");
        } else {
          this.clearUser(); // Очищаем данные, если нет данных пользователя
        }
      } catch (error) {
        console.error(error);
        this.clearUser(); // Очищаем данные, если есть ошибка
      }
    },

    async fetchAdmin() {
      try {
        const response = await axios.get("/user/get-is-admin");
        this.isAdmin = response.data.isAdmin === true;
      } catch (error) {
        console.error(error);
      }
    },
    clearUser() {
      localStorage.removeItem("user");
      localStorage.removeItem("isAuth");
      this.user = null;
      this.isAdmin = null;
      this.isAuth = false;
    },
  },
});
