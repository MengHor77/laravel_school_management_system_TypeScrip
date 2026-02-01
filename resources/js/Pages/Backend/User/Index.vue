<template>
    <BackendLayout>
        <div class="p-6">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-2xl font-bold">User Management</h1>
            </div>

            <Table :columns="tableColumns" :data="users" rowKey="id">
                <template #cell-actions="{ row }">
                    <div class="flex gap-2">
                        <button
                            @click="openEditModal(row)"
                            class="text-blue-500 hover:underline"
                        >
                            Edit
                        </button>
                        <button
                            @click="deleteUser(row.id)"
                            class="text-red-500 hover:underline"
                        >
                            Delete
                        </button>
                    </div>
                </template>
            </Table>
        </div>

        <div
            v-if="isEditModalOpen"
            class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
            <div class="bg-white p-6 rounded-lg w-full max-w-md">
                <h2 class="text-xl font-bold mb-4">Edit User</h2>
                <form @submit.prevent="submitUpdate">
                    <div class="mb-4">
                        <label class="block text-sm font-medium">Name</label>
                        <input
                            v-model="form.name"
                            type="text"
                            class="w-full border p-2 rounded"
                        />
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium">Email</label>
                        <input
                            v-model="form.email"
                            type="email"
                            class="w-full border p-2 rounded"
                        />
                    </div>
                    <div class="flex justify-end gap-2">
                        <button
                            type="button"
                            @click="isEditModalOpen = false"
                            class="px-4 py-2 bg-gray-200 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            class="px-4 py-2 bg-blue-600 text-white rounded"
                            :disabled="form.processing"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </BackendLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useForm, router } from "@inertiajs/vue3";
import BackendLayout from "@/Layouts/Backend/BackendLayout.vue";
import Table from "@/Components/Backend/Table.vue";

// Local TS fix for Ziggy routes
declare const route: any;

// CRITICAL: This MUST match the key in your Controller: ['users' => $users]
const props = defineProps<{
    users: Array<any>;
}>();

// Define the columns for your Table component
const tableColumns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "actions", label: "Actions" }, // This key maps to #cell-actions slot
];

// Modal & Form logic
const isEditModalOpen = ref(false);
const form = useForm({
    id: null as number | null,
    name: "",
    email: "",
});

const openEditModal = (user: any) => {
    form.id = user.id;
    form.name = user.name;
    form.email = user.email;
    isEditModalOpen.value = true;
};

const submitUpdate = () => {
    form.put(route("admin.user.update", form.id), {
        onSuccess: () => (isEditModalOpen.value = false),
    });
};

const deleteUser = (id: number) => {
    if (confirm("Are you sure?")) {
        router.delete(route("admin.user.destroy", id));
    }
};
</script>
