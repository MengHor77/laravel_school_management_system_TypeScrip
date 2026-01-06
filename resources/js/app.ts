// resources/js/app.ts
import { createApp } from 'vue';
import router from './router';
import FrontendLayout from './Layouts/FrontendLayout.vue';

const app = createApp(FrontendLayout);
app.use(router);
app.mount('#app');
