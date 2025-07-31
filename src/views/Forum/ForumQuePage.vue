<script>
import axios from "axios";
import ItemVid from "./ItemQueVid.vue";
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
    };
  },
  mounted() {
    this.getQuest();

    document.title = "Форум | Вопросы";
  },
  components: {
    ItemVid,
    appFooter
  },
  methods: {
    async getQuest() {
      try {
        const res = await axios.get("/forum/show-qs?start=0&end=0");
        this.items = res.data.res.questions;
        console.log(this.items);
      } catch (e) {
        console.error(e);
        this.error = "Ошибка получения вопросов.";
      }
    },
  },
};
</script>

<template>
  <div class="coooont">

    <h1 class="head ">Форум</h1>

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
    <i class="pi pi-plus" style="font-size: 1.5rem" @click="this.$router.push(`/add-forum-q`)"></i>
  </div>
  <div class="items-container">
    <ItemVid v-for="item in items" :key="item?.id_s" :item="item" />
  </div>
  </div>

  <!-- <p v-if="error" class="error">{{ error }}</p> -->
  <app-footer/>
</template>

<style scoped>
:root {
  --font-family: "Rubik", sans-serif;
  --second-family: "Inter", sans-serif;
}
.coooont{
  min-height: 70vh;
}
.container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .head {
      font-size: 50px;
      font-family: var(--font-family);
      font-weight: 800;
      text-align: center;
      color: var(--color);
      margin: 0;
      padding: 0;
    }
.pi{
  margin-top: 12px;
  cursor: pointer;
}
.def{
  font-size: 20px;
  font-family: var(--font-family);
  font-weight: 800;
  text-align: center;
  background: var(--color);
  color: white;
  padding: 10px;
  border-radius: 10px;

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
