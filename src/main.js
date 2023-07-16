// Запросы к серверу
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3005';


// Всё для vue
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

// Рендер в HTML
createApp(App).use(router).mount('#app');
