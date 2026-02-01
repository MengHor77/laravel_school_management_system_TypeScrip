<template>
    <BackendLayout>
        <div class="p-6">
            <div class="mb-6 flex justify-between items-center">
                <h1 class="text-2xl font-bold">Edit User</h1>
                <Link :href="route('admin.user')" class="text-gray-500 hover:text-primary transition">
                    <i class="fas fa-arrow-left mr-2"></i> Back
                </Link>
            </div>

            <div class="max-w-xl bg-white p-8 rounded-xl shadow-sm border">
                <form @submit.prevent="update" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium mb-1">Full Name</label>
                        <input v-model="form.name" type="text" class="w-full border p-2 rounded-lg outline-none focus:ring-2 focus:ring-primary/20">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1">Email</label>
                        <input v-model="form.email" type="email" class="w-full border p-2 rounded-lg outline-none focus:ring-2 focus:ring-primary/20">
                    </div>
                    <button type="submit" :disabled="form.processing" class="w-full bg-secondary text-white py-2 rounded-lg font-bold hover:bg-opacity-90 transition">
                        Update User
                    </button>
                </form>
            </div>
        </div>
    </BackendLayout>
</template>

<script setup lang="ts">
import BackendLayout from '@/Layouts/Backend/BackendLayout.vue';
import { useForm, Link } from '@inertiajs/vue3';

// Local TypeScript Fix
declare const route: any;

const props = defineProps<{
    user: { id: number; name: string; email: string; }
}>();

const form = useForm({
    name: props.user.name,
    email: props.user.email,
});

const update = () => {
    form.put(route('admin.user.update', props.user.id));
};
</script>