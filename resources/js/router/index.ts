import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../Layouts/pages/frontend/HomePage.vue';
import AboutPage from '../Layouts/pages/frontend/AboutPage.vue';
import ContactPage from '../Layouts/pages/frontend/ContactPage.vue';
import MyCoursePage from '../Layouts/pages/frontend/MyCoursePage.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/about', name: 'About', component: AboutPage },
    { path: '/contact', name: 'Contact', component: ContactPage },
    { path: '/my-course', name: 'MyCourse', component: MyCoursePage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
