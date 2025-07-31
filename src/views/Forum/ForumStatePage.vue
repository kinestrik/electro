<script>
import axios from "axios";
import ItemVid from "./ItemStateVid.vue";
import { useUserStore } from "@/stores/user";
import appFooter from "@/components/layouts/AppFooter.vue";

export default {
  data() {
    return {
      items: [
        // {
        //   id: "234234",
        //   title: "Как правильно какать?",
        //   content: "123456",
        //   username: "kinestrik",
        //   date_create: "16.01.2025",
        //   a_cnt: "20",
        // },
        // {
        //   id: "234234",
        //   title: "Как правильно какать?",
        //   content: "123456",
        //   username: "kinestrik",
        //   date_create: "16.01.2025",
        //   a_cnt: "20",
        // },
        // {
        //   id: "234234",
        //   title: "Как правильно какать?",
        //   content: "123456",
        //   username: "kinestrik",
        //   date_create: "16.01.2025",
        //   a_cnt: "20",
        // },
      ],
      error: null,
      userStore: useUserStore(),
    };
  },
  mounted() {
    this.getQuest();
    document.title = "Форум | Статьи";
  },
  components: {
    ItemVid,
    appFooter

  },
  methods: {
    async getQuest() {
      try {
        const res = await axios.get("/forum/show-ses?start=0&end=0");
        this.items = res.data.res.questions;
      } catch (e) {
        console.error(e);
        this.error = "Ошибка получения статей.";
      }
    },
  },
};
</script>

<template>
  <div class="coooont">

    <h1 class="head">Форум</h1>
  <div class="links mt-5 ml-7">
    <a
      href="/forum-que"
      class="link-def"
      :class="{ 'link-active': $route.path === '/forum-que' }"
      >Вопросы</a
    >
    <a
      href="/forum-state"
      class="link-def"
      :class="{ 'link-active': $route.path === '/forum-state' }"
      >Статьи</a
    >
    <i
      class="pi pi-plus"
      style="font-size: 1.5rem"
      @click="this.$router.push(`/add-forum-q`)"
      v-if="this.userStore.isAdmin == true && $route.path === '/forum-que'"
    ></i>
    <i
        class="pi pi-plus"
        style="font-size: 1.5rem"
        @click="this.$router.push(`/add-forum-s`)"
        v-if="this.userStore.isAdmin == true && $route.path === '/forum-state'"
    ></i>
  </div>
  <div class="items-container">
    <ItemVid v-for="item in items" :key="item?.id_s" :item="item" />
  </div>
  </div>
    <app-footer></app-footer>
  <!-- <p v-if="error" class="error text-center">{{ error }}</p> -->
</template>

<style scoped>
:root {
  --font-family: "Rubik", sans-serif;
  --second-family: "Inter", sans-serif;
}
.coooont{
  min-height: 70vh;
}
.pi {
  margin-top: 12px;
  cursor: pointer;
}
.head {
  font-size: 50px;
  font-family: var(--font-family);
  font-weight: 800;
  text-align: center;
  color: var(--color);
  text-align: center;

}
.links {
  display: flex;
  gap: 30px;
}
.link-def {
  font-size: 27px;
  font-family: var(--font-family);
  font-weight: 800;
  text-align: center;
  color: #222222;
}
.link-active {
  color: var(--color);
}
.items-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 30px;
  gap: 30px;
}
</style>
