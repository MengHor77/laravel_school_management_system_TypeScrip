<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">Login</h2>

      <form @submit.prevent="submitLogin">
        <div class="mb-4">
          <label class="block mb-1 font-medium">Email</label>
          <input
            type="email"
            v-model="form.email"
            required
            placeholder="Enter your email"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div class="mb-4">
          <label class="block mb-1 font-medium">Password</label>
          <input
            type="password"
            v-model="form.password"
            required
            placeholder="Enter your password"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div v-if="errorMessage" class="mb-4 text-red-500 text-sm">{{ errorMessage }}</div>

        <button
          type="submit"
          class="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition"
        >
          Login
        </button>
      </form>

      <p class="mt-4 text-center text-gray-600">
        Don't have an account?
        <router-link to="/register" class="text-indigo-500 hover:underline">Register</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const router = useRouter();
    const form = reactive({
      email: "",
      password: "",
    });
    const errorMessage = ref("");

    const submitLogin = async () => {
      errorMessage.value = "";
      try {
        await axios.post("/login", form);
        router.push("/my-course"); // redirect after login
      } catch (error: any) {
        errorMessage.value =
          error.response?.data?.message || "Login failed. Check your credentials.";
      }
    };

    return { form, submitLogin, errorMessage };
  },
});
</script>

<style scoped>
/* Optional smooth focus and shadow transitions */
</style>
