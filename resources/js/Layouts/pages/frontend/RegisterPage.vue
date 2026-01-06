<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">Register</h2>

      <form @submit.prevent="submitRegister">
        <div class="mb-4">
          <label class="block mb-1 font-medium">Name</label>
          <input
            type="text"
            v-model="form.name"
            required
            placeholder="Enter your name"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

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
          class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>

      <p class="mt-4 text-center text-gray-600">
        Already have an account?
        <router-link to="/login" class="text-indigo-500 hover:underline">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "RegisterPage",
  setup() {
    const router = useRouter();
    const form = reactive({
      name: "",
      email: "",
      password: "",
    });
    const errorMessage = ref("");

    const submitRegister = async () => {
      errorMessage.value = "";
      try {
        await axios.post("/register", form);
        router.push("/login"); // redirect to login after registration
      } catch (error: any) {
        errorMessage.value =
          error.response?.data?.message || "Registration failed. Check your inputs.";
      }
    };

    return { form, submitRegister, errorMessage };
  },
});
</script>

<style scoped>
/* Optional smooth focus and shadow transitions */
</style>
