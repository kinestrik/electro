import './assets/main.css'
import axios from 'axios'
// import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import Aura from '@primevue/themes/aura';


axios.defaults.withCredentials = true
axios.defaults.baseURL = "https://api.ei-pro.ru/"


import PrimeVue from 'primevue/config';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/base.css'


// componets:


import MegaMenu from 'primevue/megamenu';






const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

// componets:

app.component('app-header', MegaMenu)


app.mount('#app')
