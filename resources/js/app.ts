// resources/js/app.ts
import { createApp } from 'vue';
import router from './router';
import FrontendLayout from './Layouts/FrontendLayout.vue';
import '../css/app.css';  // <-- this line must exist

const app = createApp(FrontendLayout);
app.use(router);
app.mount('#app');
