<script>
import { services } from "./services.js";
export default {
  data(){
    return {
      services: services,
      serviceData: null,
    }
  },
  methods:{
    getData(){
      const name = this.$route.params.name;
      console.log(name);
      this.serviceData = this.getServiceByTag(name);
      console.log(this.serviceData);
    },
    getServiceByTag(tag){
      return services.find(service => service.tag === tag);
    }
  },
  mounted() {
    this.getData();
  },
}
</script>

<template>
  <div v-if="serviceData" class="max-w-4xl mx-auto px-4 py-8">
    <!-- Заголовок -->
    <h1 class="text-4xl font-bold text-center mb-8 text-[#0502a7] hover:text-[#030189]">
      {{ serviceData.title || 'Электромонтажные работы' }}
      </h1>

    <!-- Главная картинка -->
    <div v-if="serviceData.img_1" class="flex justify-center mb-8">
      <img
          :src="serviceData.img_1"
          :alt="serviceData.alt_1"
          class="rounded-lg shadow-lg w-full max-h-96 object-cover"
      >
    </div>

    <!-- Текст 1 -->
    <div v-if="serviceData.text_1" class="prose prose-lg max-w-none mb-12" v-html="serviceData.text_1">
    </div>

    <!-- Инфографика -->
    <div v-if="serviceData.img_2" class="flex justify-center mb-12">
      <img
          :src="serviceData.img_2"
          :alt="serviceData.alt_2"
          class="rounded-lg shadow-lg w-full max-h-96 object-cover"
      >
    </div>

    <div v-if="serviceData.text_2" v-html="serviceData.text_2"></div>
  </div>

  <div v-else class="text-center py-12">
    <p class="text-xl text-gray-600">Загрузка данных...</p>
  </div>
</template>