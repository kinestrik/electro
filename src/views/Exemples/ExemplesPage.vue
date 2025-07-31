<script>
import axios from "axios";
import CardItem from "./CardItem.vue";
import AppFooter from "@/components/layouts/AppFooter.vue";
import { useUserStore } from "@/stores/user";

export default {
  data() {
    return {
      items: [
      
      ],
      userStore: useUserStore(),

    };
  },
  methods: {

    async getWorks() {
     try {
     const response = await axios.get(`/works/show-all`);
     this.items = response.data.res;
      } catch (err) {
     console.error(err);
     }
    },
  },
  components: {
    CardItem,
    AppFooter,
  },
  mounted() {
  this.getWorks();
    document.title = `Примеры работ`;

  },
};

</script>
<template>
  <div class="coooont">

  <div class="window">
    <h1 class="text-center mt-7 head" style="cursor: pointer">Примеры работ <i class="pi pi-plus" style="font-size: 1.5rem;" @click="this.$router.push(`/add-ex`)"  v-if="this.userStore.isAdmin == true"></i></h1>



  </div>

  <div class="big-container p-7" >
    <CardItem
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :address="item.address"
      :id="item.id"
      :images="item.images"
    />
  </div>
  </div>

  <app-footer />
</template>
<style scoped>

:root {
  --font-family: "Rubik", sans-serif;
  --second-family: "Inter", sans-serif;
}
.coooont{
  min-height: 60vh;
}
.head {
  font-size: 45px;
  font-family: var(--font-family);
  font-weight: 800;
  text-align: center;
  color: var(--color);
}
.big-container {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Автоматическое заполнение */
  gap: 20px; /* Отступы между карточками */
}
@media (max-width: 700px) {
  .head {
    font-size: 37px;
  }
}

/* пагинация */
.pagination {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  gap: 50px;
}
.span-div {
  display: flex;
  gap: 5px;
}
.dots a {
  color: white;
}
.dots {
  display: grid;
  place-items: center;
  background-color: #629bf7;
  text-align: center;
  width: 41px;
  height: 41px;
  border: none;
  border-radius: 50% !important;
  color: white !important;
  font-weight: 500;
}
.span {
  display: grid;
  place-items: center;
  background-color: #629bf7;
  text-align: center;
  width: 41px;
  height: 41px;
  border: none;
  border-radius: 50% !important;
  color: white;
  font-weight: 500;
  cursor: poiner;
}
span {
  cursor: poiner;
}
.todo {
  display: grid;
  place-items: center;
  background-color: #629bf7;
  text-align: center;
  width: 41px;
  height: 41px;
  border: none;
  border-radius: 50% !important;
  color: white;
  font-weight: 500;
  cursor: poiner !important;
}

/* пагинация */
.pagination-controls {
  display: flex;
  margin-top: 10px;
}

.dots {
  margin: 0 5px;
  cursor: pointer;
  color: #333;
}

.dots:hover {
  text-decoration: underline;
}
.todo:disabled {
  font-weight: bold;
  background-color: #8a9096;
  color: white;
}
.active {
  font-weight: bold;
  background-color: #8a9096;
  color: white;
}
</style>
