import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/Layouts/pages/frontend/HomePage.vue";
import LoginPage from "@/Layouts/pages/frontend/LoginPage.vue";
import RegisterPage from "@/Layouts/pages/frontend/RegisterPage.vue";
import MyCoursePage from "@/Layouts/pages/frontend/MyCoursePage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/my-course", component: MyCoursePage },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
