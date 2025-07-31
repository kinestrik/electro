<script>
import Home from './Home.vue';
import Adv from './Adv.vue';
import AppFooter from '@/components/layouts/AppFooter.vue';
import Home1 from './Home1.vue';
import Comments from './Comments.vue';
import serv from "@/views/HomePage/serv.vue";
export default {
    data() {
        return {

        };
    },
    components:{
        Home,
        Adv,
        AppFooter,
        Home1,
      Comments,
      serv,
    },
  mounted() {
    document.title = "Главная | Электромонтаж в Донецке";
  }
};
</script>
<template>
<Home1/>
<serv/>
  <Adv/>
  <Comments/>
<AppFooter/>
</template>
<style>

</style>