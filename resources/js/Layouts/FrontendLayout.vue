<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header / Navbar -->
    <header class="bg-indigo-600 text-white shadow-md">
      <div class="container mx-auto flex justify-between items-center p-4">
        <!-- Logo / Brand -->
        <div>
          <h1 class="text-2xl font-bold">School Management System</h1>
        </div>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-2">
          <router-link
            to="/"
            :class="linkClass('/')"
            class="px-3 py-1 rounded-md"
          >
            Home
          </router-link>
          <router-link
            to="/about"
            :class="linkClass('/about')"
            class="px-3 py-1 rounded-md"
          >
            About
          </router-link>
          <router-link
            to="/contact"
            :class="linkClass('/contact')"
            class="px-3 py-1 rounded-md"
          >
            Contact
          </router-link>
          <router-link
            to="/my-course"
            :class="linkClass('/my-course')"
            class="px-3 py-1 rounded-md"
          >
            My Courses
          </router-link>
        </nav>

        <!-- Auth / Profile Buttons (Desktop) -->
        <div class="hidden md:flex items-center gap-3">
          <template v-if="isLoggedIn">
            <router-link
              to="/profile"
              :class="linkClass('/profile') + ' px-3 py-1 rounded-md'"
            >
              Profile
            </router-link>
            <button @click="logout" class="px-3 py-1 bg-red-500 rounded hover:bg-red-600">
              Logout
            </button>
          </template>
          <template v-else>
            <router-link to="/login" class="px-3 py-1 bg-green-500 rounded hover:bg-green-600">
              Login
            </router-link>
            <router-link to="/register" class="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600">
              Register
            </router-link>
          </template>
        </div>

        <!-- Mobile Hamburger Menu -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMobileMenu">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-indigo-500">
        <nav class="flex flex-col p-4 gap-2">
          <router-link
            @click="closeMobileMenu"
            to="/"
            :class="linkClass('/') + ' px-3 py-1 rounded-md'"
          >
            Home
          </router-link>
          <router-link
            @click="closeMobileMenu"
            to="/about"
            :class="linkClass('/about') + ' px-3 py-1 rounded-md'"
          >
            About
          </router-link>
          <router-link
            @click="closeMobileMenu"
            to="/contact"
            :class="linkClass('/contact') + ' px-3 py-1 rounded-md'"
          >
            Contact
          </router-link>
          <router-link
            @click="closeMobileMenu"
            to="/my-course"
            :class="linkClass('/my-course') + ' px-3 py-1 rounded-md'"
          >
            My Courses
          </router-link>

          <template v-if="isLoggedIn">
            <router-link
              @click="closeMobileMenu"
              to="/profile"
              :class="linkClass('/profile') + ' px-3 py-1 rounded-md'"
            >
              Profile
            </router-link>
            <button @click="logout" class="px-3 py-1 bg-red-500 rounded hover:bg-red-600">
              Logout
            </button>
          </template>
          <template v-else>
            <router-link
              @click="closeMobileMenu"
              to="/login"
              class="px-3 py-1 bg-green-500 rounded hover:bg-green-600"
            >
              Login
            </router-link>
            <router-link
              @click="closeMobileMenu"
              to="/register"
              class="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600"
            >
              Register
            </router-link>
          </template>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 container mx-auto p-4">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 py-6 mt-auto">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="text-center md:text-left">
          <p>&copy; 2026 School Management System. All rights reserved.</p>
        </div>
        <div class="flex flex-col md:flex-row gap-2 md:gap-4">
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <a href="#" class="hover:text-white">Terms of Service</a>
          <a href="#" class="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "FrontendLayout",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const isLoggedIn = ref(false); // Replace with real auth state
    const mobileMenuOpen = ref(false);

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
    };
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false;
    };
    const logout = () => {
      isLoggedIn.value = false;
      closeMobileMenu();
      router.push("/login");
    };

    // Function to set active class with bg-indigo-300 and rounded-md
    const linkClass = (path: string) => {
      return route.path === path
        ? "bg-indigo-300 text-indigo-900 font-bold"
        : "text-white hover:bg-indigo-500 hover:text-white";
    };

    return {
      isLoggedIn,
      logout,
      mobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu,
      linkClass,
    };
  },
});
</script>

<style scoped>
/* Optional transition for smooth hover effect */
</style>
