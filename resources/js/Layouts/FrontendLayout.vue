<template>
  <div>
    <header class="bg-indigo-500 text-white p-4">
      <h1 class="text-xl font-bold">School Management System</h1>
      <nav class="mt-2 flex gap-4">
        <router-link to="/" class="hover:underline">Home</router-link>
        <router-link to="/about" class="hover:underline">About</router-link>
        <router-link to="/contact" class="hover:underline">Contact</router-link>
        <router-link to="/my-course" class="hover:underline">My Courses</router-link>
      </nav>
    </header>

    <main class="p-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  name: "FrontendLayout",
};
</script>

<style scoped>
/* Add custom styles here */
</style>
