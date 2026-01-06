<template>
  <div class="flex flex-col min-h-screen">
    <!-- Page Banner / Hero -->
    <section class="bg-indigo-600 text-white py-16">
      <div class="container mx-auto text-center px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Welcome to School Management System</h1>
        <p class="text-lg md:text-xl">Manage your courses, teachers, and students efficiently.</p>
        <router-link
          to="/my-course"
          class="mt-6 inline-block px-6 py-3 bg-yellow-400 text-indigo-900 font-bold rounded-lg hover:bg-yellow-300 transition"
        >
          Go to My Courses
        </router-link>
      </div>
    </section>

    <!-- Features / Highlights -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-10">Our Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-2">Courses</h3>
            <p>Browse and manage all your courses easily.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-2">Teachers</h3>
            <p>Track teacher schedules and assignments efficiently.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-2">Students</h3>
            <p>Manage student enrollment, progress, and reports.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About / Info Section -->
    <section class="py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p class="text-gray-700 max-w-2xl mx-auto">
          Our School Management System simplifies the administrative tasks and improves learning outcomes for both students and teachers.
        </p>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-indigo-600 text-white py-12">
      <div class="container mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">Start Learning Today!</h2>
        <router-link
          to="/register"
          class="px-6 py-3 bg-yellow-400 text-indigo-900 font-bold rounded-lg hover:bg-yellow-300 transition"
        >
          Register Now
        </router-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
});
</script>

<style scoped>
/* Optional: Smooth hover transitions */
</style>
