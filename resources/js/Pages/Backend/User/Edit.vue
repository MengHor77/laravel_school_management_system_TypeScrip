<template>
    <div
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm"
    >
        <div class="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
            <h2 class="text-xl font-bold mb-4">Edit User</h2>
            <form @submit.prevent="update" class="space-y-4">
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

                <div class="flex justify-end gap-2 mt-6">
                    <button
                        type="button"
                        @click="$emit('close')"
                        class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        :disabled="form.processing"
                        class="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-opacity-90"
                    >
                        Update User
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useForm } from "@inertiajs/vue3";

declare const route: any;
const emit = defineEmits(["close"]);

const props = defineProps<{
    user: { id: number; name: string; email: string };
}>();

const form = useForm({
    name: props.user.name,
    email: props.user.email,
});

const update = () => {
    form.put(route("admin.user.update", props.user.id), {
        onSuccess: () => emit("close"),
    });
};
</script>
