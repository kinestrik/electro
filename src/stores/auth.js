import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isAdmin: false,
    isAuth: false,
    
    
    loading: false,
    error: null,
  }),
  getters: {
    isLoggedIn: (state) => state.isAuth,
    getUser: (state) => state.user,
  },
  actions: {
    async fetchUser() {
      this.error = null;
      try {
        const response = await axios.get('/user/get-id-avatar');
        this.user = {
          id: response.data.res.id,
          avatar: response.data.res.avatar
         }
         if(this.user.id){
          this.isAuth = true
         }else{
          this.isAuth = false
         }
      } catch (error) {
        console.error(error)
      }
    },
    async fetchAdmin() {
      try {
        const response = await axios.get('/user/get-is-admin');
        this.isAdmin = response.data.res.isAdmin;
      } catch (error) {
        console.error(error)
      }
      
    },
    clearUser(){
      this.user = null;
      this.isAdmin = null
    }
  },
});

