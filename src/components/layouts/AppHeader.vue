<template>
  <div class="wind">
    <div class="navbar" :class="{ 'no-radius': !burg }">
      <div class="items">
        <div class="icon-img">
          <router-link to="/">
            <img src="../../assets/solbigico.png" alt="ДонЭнергоМонтаж" width="100px" height="40px">
          </router-link>
        </div>

        <div class="lin">
          <router-link to="/services">Услуги</router-link>
          <router-link to="/forum-que">Форум</router-link>
          <router-link to="/nds">Калькулятор</router-link>
          <router-link to="/examples">Примеры работ</router-link>
        </div>

        <!-- Бургер-меню -->
        <div
          class="burger-menu"
          ref="menu"
          v-show="!burg"
          :class="{ 'burger-open': !burg, 'burger-close': animClose }"
        >
          <div class="burger-backdrop" @click="closeWithAnimation"></div>
          <div class="burger-panel">
            <div class="mainlin">
              <router-link to="/services" @click="handleBurgerNav">Услуги</router-link>
              <router-link to="/forum-que" @click="handleBurgerNav">Форум</router-link>
              <router-link to="/nds" @click="handleBurgerNav">Калькулятор</router-link>
              <router-link to="/examples" @click="handleBurgerNav">Примеры работ</router-link>
            </div>
          </div>
        </div>

      </div>

      <div class="enter">
        <img
            class="burgmenu"
            src="../../assets/burgmenu.svg"
            alt=""
            ref="burger"
            @click="burgmenu"
        />
        <button v-if="!userStore.getUser" @click="LoginPage">
          <span>Войти</span>
        </button>
        <router-link v-if="userStore.getUser" to="/profile">
          <img :src="userStore.getUserAvatar || avatar" alt="Аватар" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/user";

export default {
  data() {
    return {
      burg: true,
      animClose: false,
      avatar: "src/assets/Header/AvatarDef.svg",
      userStore: useUserStore(),
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    burgmenu() {
      if (!this.burg) {
        this.closeWithAnimation();
      } else {
        this.burg = false;
      }
    },
    closeWithAnimation() {
      this.animClose = true;
      setTimeout(() => {
        this.burg = true;
        this.animClose = false;
      }, 300); // должна совпадать с animation-duration
    },
    LoginPage() {
      this.$router.push("/Login");
    },
    handleBurgerNav() {
      this.closeWithAnimation();
    },
    handleClickOutside(event) {
      const menu = this.$refs.menu;
      const burger = this.$refs.burger;

      if (
        !this.burg &&
        menu &&
        burger &&
        !menu.contains(event.target) &&
        !burger.contains(event.target)
      ) {
        this.closeWithAnimation();
      }
    },
  },
};
</script>
<style>
.enter {
  display: flex;
  align-items: flex-end;
}
.enter .burgmenu {
  position: absolute;
  right: 100px;
  top: 17px;
}
.wind {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  padding: 10px;
}
.navbar {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px 0 30px;

  border-radius: 25px;
  width: 97%;
  min-height: 70px !important;

  background-color: var(--color);
}

.items {
  display: flex;
  align-items: center;
  gap: 50px;
}

/* .items img {
  width: 50px;
  margin-bottom: 8px;
} */

.lin {
  display: flex;
  gap: 40px;
}

.lin-phone {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100vw;
  max-height: 50vh;
  overflow-y: auto;

  display: flex;
  justify-content: center;
  padding: 30px 0;
  z-index: 300;

  background: linear-gradient(135deg, #3d72d3cc, #619bf7dd);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);

  border-radius: 0 0 20px 20px;

  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.lin-phone:not(.linPhoneHide) {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.burger-menu {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    z-index: 500;
}

.burger-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: 1;
}

.burger-panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 50vh;
  background: linear-gradient(135deg, var(--color), #3d72d3ee);
  padding: 30px 0;
  border-radius: 0px 0px 20px 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  animation: slideDown 0.35s ease forwards;
  z-index: 2;
}
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.lin-phone a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 300px;
  height: 44px;

  background-color: #2e59b9;
  color: #fff;
  font-size: 18px !important;
  font-weight: 600;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(45, 89, 185, 0.5);
  transition: all 0.25s ease;
}

.lin-phone a:hover {
  background-color: #4c7ae0;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(86, 127, 211, 0.7);
}


.mainlin {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.mainlin a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    height: 44px;
    background-color: #2e59b9;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(45, 89, 185, 0.5);
    transition: all 0.25s ease;
    padding: 20px;
}

.mainlin a:hover {
  background-color: #4c7ae0;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(86, 127, 211, 0.7);
}

.items a {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  transition: 200ms;
}

.items a:hover {
  opacity: 0.7;
}

.title-logo {
  margin: 0;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
}

.icon-img {
  display: flex;
  align-items: center;
  gap: 15px;

  border-right: 2px solid #fff;

  padding-right: 50px;

  position: relative;
}

.icon-img p {
  position: absolute;
  top: 0;
  right: 13px;

  color: #fff;
  font-size: 18px;
  font-weight: 600;
}

.icon-img a:hover {
  opacity: 0.8 !important;
}

.enter button {
  width: 120px;
  border-radius: 5px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
  line-height: 42px;
  padding: 0;
  border: 2px solid #fff;
  position: relative;
  font-weight: 500;
  transition: all 200ms;
}

.enter button:hover {
  background-color: #fff !important;
  color: #619bf7;
}

.enter button span {
  font-weight: 500;
}

/*
.enter button span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.enter button:before,
.enter button:after {
  position: absolute;
  content: "";
  background-color: #fff;
  transition: all 300ms ease;
}

.enter button:before {
  right: 0;
  bottom: 0;
  height: 0%;
  width: 3px;
}

.enter button:after {
  right: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
}

.enter button:hover {
  color: #fff;
  background-color: #3d72d3;
}

.enter button:hover:before {
  height: 100%;
}

.enter button:hover:after {
  width: 100%;
}

.enter button span:before,
.enter button span:after {
  position: absolute;
  content: "";
  background-color: #fff;
  transition: all 300ms ease;
}

.enter button span:before {
  left: 0;
  top: 0;
  height: 0%;
  width: 2px;
}

.enter button span:after {
  left: 0;
  top: 0;
  width: 0%;
  height: 2px;
}

.enter button:hover span:before {
  height: 100%;
}

.enter button:hover span:after {
  width: 100%;
}



*/

.enter img {
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 15px;
  transition: 200ms;
}

.enter img:hover {
  filter: brightness(85%);
}

img.burgmenu {
  width: 25px !important; 
  height: 25px !important;
  border-radius: 0px !important;
}


@media (max-width: 970px) {
  .wind {
    padding: 0px;
  }
  .items {
    gap: 30px;
  }
}

@media (max-width: 900px) {
  .navbar {
    padding: 0 20px;
  }

  .items img {
    width: 40px;
  }

  .icon-img {
    padding-right: 40px;
  }

  .icon-img p {
    right: 7px;
    top: -7px;
  }

  h2 {
    font-size: 20px;
  }

  .enter button {
    width: 100px;
    height: 42px;
  }

  .enter button span {
    font-size: 17px;
  }
}

@media (max-width: 760px) {
  .lin {
    gap: 20px;
  }
}

@media (min-width: 720px) {
  .lin-phone {
    display: none;
  }

  .burgmenu {
    display: none;
  }
}

@media (max-width: 720px) {
  .lin {
    display: none;
  }

  .linPhoneHide {
    display: none;
  }

  .icon-img p {
    font-size: 15px;
    top: -4px;
    right: 10px;
  }

  .header {
    top: 0 !important;
  }

  .navbar {
    min-height: 60px !important;
    width: 100%;
    border-radius: 0 0 15px 15px !important;
  }

  .enter button {
    width: 90px !important;
    height: 40px;
    line-height: 30px;
  }

  .enter img {
    width: 48px;
    height: 48px;
  }

  .items img {
    width: 35px;
  }

  h2 {
    font-size: 16px !important;
  }
}

@media (max-width: 480px) {
  .lin-phone {
    width: 350px;
  }

  .enter button {
    width: 70px !important;
    height: 36px;
  }

  .enter span {
    font-size: 12px !important;
  }
}

@media (max-width: 900px) {
  .lin-phone {
    width: 310px;
  }

  .lin-phone {
    gap: 5px;
  }

  .lin-phone a {
    font-size: 16px !important;
    width: 130px;
  }
}

.navbar {
  transition: border-radius 0.3s ease;
}

.burger-open ~ .navbar {
  border-radius: 25px 25px 0 0 !important;
}

.burger-close .burger-panel {
  animation: slideUp 0.3s ease forwards;
}

.navbar {
  transition: border-radius 0.3s ease;
  border-radius: 25px;
}

.navbar.no-radius {
  border-radius: 0px 0px 0px 0px !important;
}


@keyframes slideUp {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-15px);
  }
}

</style>
