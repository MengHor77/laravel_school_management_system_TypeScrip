<template>
  <div class="flex flex-col min-h-screen">
    <!-- Hero Section -->
    <section class="bg-indigo-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-2">About Us</h1>
        <p class="text-lg md:text-xl">Learn more about our school and what drives us</p>
      </div>
    </section>

    <!-- About Mission & Vision -->
    <section class="py-12 bg-gray-100">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Mission -->
        <div class="bg-white shadow rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4 text-indigo-600">Our Mission</h2>
          <p class="text-gray-700">
            Our mission is to empower students through quality education, fostering
            creativity, critical thinking, and lifelong learning.
          </p>
        </div>

        <!-- Vision -->
        <div class="bg-white shadow rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4 text-indigo-600">Our Vision</h2>
          <p class="text-gray-700">
            Our vision is to become a leading educational institution recognized for
            innovation, excellence, and holistic development.
          </p>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-12">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8">Our Core Values</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-white shadow rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-2">Integrity</h3>
            <p class="text-gray-600">We act with honesty, transparency, and accountability.</p>
          </div>
          <div class="bg-white shadow rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-2">Excellence</h3>
            <p class="text-gray-600">We strive for quality in education and personal growth.</p>
          </div>
          <div class="bg-white shadow rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-2">Innovation</h3>
            <p class="text-gray-600">We embrace creativity and new ideas in teaching and learning.</p>
          </div>
          <div class="bg-white shadow rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-2">Collaboration</h3>
            <p class="text-gray-600">We work together with students, teachers, and the community.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-12 bg-gray-100">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8">Meet Our Team</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-white shadow rounded-lg p-6">
            <img
              src="/images/team1.jpg"
              alt="Team Member"
              class="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 class="text-xl font-semibold">John Doe</h3>
            <p class="text-gray-600">Principal</p>
          </div>
          <div class="bg-white shadow rounded-lg p-6">
            <img
              src="/images/team2.jpg"
              alt="Team Member"
              class="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 class="text-xl font-semibold">Jane Smith</h3>
            <p class="text-gray-600">Vice Principal</p>
          </div>
          <div class="bg-white shadow rounded-lg p-6">
            <img
              src="/images/team3.jpg"
              alt="Team Member"
              class="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 class="text-xl font-semibold">Michael Lee</h3>
            <p class="text-gray-600">Lead Teacher</p>
          </div>
          <div class="bg-white shadow rounded-lg p-6">
            <img
              src="/images/team4.jpg"
              alt="Team Member"
              class="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 class="text-xl font-semibold">Sara Khan</h3>
            <p class="text-gray-600">Administrator</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Optional Call to Action -->
    <section class="py-12 bg-indigo-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Join Our School Today!</h2>
        <p class="mb-6">Enroll now and be part of our innovative learning community.</p>
        <router-link
          to="/register"
          class="px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition"
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
  name: "AboutPage",
});
</script>

<style scoped>
/* Optional smooth hover / shadow transitions */
</style>
