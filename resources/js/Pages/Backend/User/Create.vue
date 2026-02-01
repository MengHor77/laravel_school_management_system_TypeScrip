<template>
    <div
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm"
    >
        <div class="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
            <h2 class="text-xl font-bold mb-4">Create New User</h2>
            <form @submit.prevent="submit" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium mb-1"
                        >Full Name</label
                    >
                    <input
                        v-model="form.name"
                        type="text"
                        class="w-full border p-2 rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <p
                        v-if="form.errors.name"
                        class="text-red-500 text-xs mt-1"
                    >
                        {{ form.errors.name }}
                    </p>
                </div>

                <div>
                    <label class="block text-sm font-medium mb-1">Email</label>
                    <input
                        v-model="form.email"
                        type="email"
                        class="w-full border p-2 rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <p
                        v-if="form.errors.email"
                        class="text-red-500 text-xs mt-1"
                    >
                        {{ form.errors.email }}
                    </p>
                </div>

                <div class="relative">
                    <label class="block text-sm font-medium mb-1"
                        >Password</label
                    >
                    <input
                        v-model="form.password"
                        :type="showPassword ? 'text' : 'password'"
                        class="w-full border p-2 rounded-lg outline-none focus:ring-2 focus:ring-primary/20 pr-10"
                    />
                    <button
                        type="button"
                        @click="showPassword = !showPassword"
                        class="absolute right-3 top-9 text-gray-500"
                    >
                        <i
                            :class="
                                showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'
                            "
                        ></i>
                    </button>
                    <p
                        v-if="form.errors.password"
                        class="text-red-500 text-xs mt-1"
                    >
                        {{ form.errors.password }}
                    </p>
                </div>

                <div class="flex justify-end gap-2 mt-6">
                    <button
                        type="button"
                        @click="$emit('close')"
                        class="px-4 py-2 bg-gray-200 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        :disabled="form.processing"
                        class="bg-primary text-white px-4 py-2 rounded-lg font-bold"
                    >
                        Save User
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useForm } from "@inertiajs/vue3";
import { ref } from "vue";

declare const route: any;
const emit = defineEmits(["close"]);
const showPassword = ref(false);

const form = useForm({
    name: "",
    email: "",
    password: "",
});

const submit = () => {
    form.post(route("admin.user.store"), {
        onSuccess: () => emit("close"),
    });
};
</script>
