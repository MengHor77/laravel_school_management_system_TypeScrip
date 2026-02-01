<template>
    <FrontendLayout>
        <div
            class="min-h-screen flex flex-col sm:justify-center items-center bg-gray-100"
        >
            <div
                class="w-full sm:max-w-md px-6 py-4 bg-white shadow-md rounded-lg"
            >
                <h1 class="text-3xl font-bold mb-4">Admin Login</h1>

                <form @submit.prevent="submit">
                    <div>
                        <label class="block text-sm text-gray-700">Email</label>
                        <input
                            type="email"
                            v-model="form.email"
                            class="mt-1 block w-full rounded-md border-gray-300"
                            required
                        />
                        <div
                            v-if="form.errors.email"
                            class="text-red-500 text-xs mt-1"
                        >
                            {{ form.errors.email }}
                        </div>
                    </div>

                    <div class="mt-4 relative">
                        <label class="block text-sm text-gray-700"
                            >Password</label
                        >
                        <input
                            :type="showPassword ? 'text' : 'password'"
                            v-model="form.password"
                            class="mt-1 block w-full rounded-md border-gray-300"
                            required
                        />
                        <button
                            type="button"
                            @click="showPassword = !showPassword"
                            class="absolute right-3 top-9"
                        >
                            <font-awesome-icon
                                :icon="
                                    showPassword
                                        ? 'fa-solid fa-eye-slash'
                                        : 'fa-solid fa-eye'
                                "
                            />
                        </button>
                        <div
                            v-if="form.errors.password"
                            class="text-red-500 text-xs mt-1"
                        >
                            {{ form.errors.password }}
                        </div>
                    </div>

                    <div class="flex items-center justify-end mt-4">
                        <button
                            type="submit"
                            :disabled="form.processing"
                            class="px-4 py-2 bg-blue-600 text-white rounded-md"
                        >
                            {{ form.processing ? "Logging in..." : "Login" }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </FrontendLayout>
</template>

<script setup lang="ts">
import FrontendLayout from "@/Layouts/Frontend/FrontendLayout.vue";
import { useForm } from "@inertiajs/vue3";
import { ref } from "vue";

declare var route: any;
const showPassword = ref(false);
const form = useForm({ email: "", password: "", remember: false });

const submit = () => {
    form.post(route("admin.login.store"), {
        onFinish: () => form.reset("password"),
    });
};
</script>
