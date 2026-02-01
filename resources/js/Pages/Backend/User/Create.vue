<template>
    <BackendLayout>
        <div class="p-6">
            <div class="mb-6 flex justify-between items-center">
                <h1 class="text-2xl font-bold">Create User</h1>
                <Link :href="route('admin.user')" class="text-gray-500 hover:text-primary transition">
                    <i class="fas fa-arrow-left mr-2"></i> Back
                </Link>
            </div>

            <div class="max-w-xl bg-white p-8 rounded-xl shadow-sm border">
                <form @submit.prevent="submit" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium mb-1">Full Name</label>
                        <input v-model="form.name" type="text" class="w-full border p-2 rounded-lg outline-none focus:ring-2 focus:ring-primary/20" />
                        <p v-if="form.errors.name" class="text-red-500 text-xs mt-1">{{ form.errors.name }}</p>
                    </div>

                    <div>
                        <label class="block text-sm font-medium mb-1">Email</label>
                        <input v-model="form.email" type="email" class="w-full border p-2 rounded-lg outline-none focus:ring-2 focus:ring-primary/20" />
                        <p v-if="form.errors.email" class="text-red-500 text-xs mt-1">{{ form.errors.email }}</p>
                    </div>

                    <div class="relative">
                        <label class="block text-sm font-medium mb-1">Password</label>
                        <input v-model="form.password" :type="showPassword ? 'text' : 'password'" class="w-full border p-2 rounded-lg outline-none focus:ring-2 focus:ring-primary/20 pr-10" />
                        <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-9 text-gray-500">
                            <font-awesome-icon :icon="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'" />
                        </button>
                        <p v-if="form.errors.password" class="text-red-500 text-xs mt-1">{{ form.errors.password }}</p>
                    </div>

                    <button type="submit" :disabled="form.processing" class="w-full bg-primary text-white py-2 rounded-lg font-bold hover:bg-opacity-90 transition">
                        Save User
                    </button>
                </form>
            </div>
        </div>
    </BackendLayout>
</template>

<script setup lang="ts">
import BackendLayout from "@/Layouts/Backend/BackendLayout.vue";
import { useForm, Link } from "@inertiajs/vue3";
import { ref } from "vue";

declare const route: any;
const showPassword = ref(false);
const form = useForm({ name: "", email: "", password: "" });

const submit = () => {
    form.post(route("admin.user.store"));
};
</script>