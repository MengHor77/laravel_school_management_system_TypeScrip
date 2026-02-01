<template>
    <BackendLayout>
        <div class="p-6">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-2xl font-bold">User Management</h1>
            </div>

            <div class="pb-6">
                <button
                    class="bg-primary text-white rounded-xl px-4 py-2 hover:bg-neutral-400 transition shadow-sm"
                    @click="handleCreateNewUser"
                >
                    + Add New User
                </button>
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
            v-if="isCreateModalOpen"
            class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm"
        >
            <div class="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
                <h2 class="text-xl font-bold mb-4">Create New User</h2>
                <form @submit.prevent="submitCreate">
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700"
                            >Name</label
                        >
                        <input
                            v-model="createForm.name"
                            type="text"
                            class="w-full border p-2 rounded mt-1 outline-none focus:ring-2 focus:ring-primary/20"
                            :class="{
                                'border-red-500': createForm.errors.name,
                            }"
                        />
                        <div
                            v-if="createForm.errors.name"
                            class="text-red-500 text-xs mt-1"
                        >
                            {{ createForm.errors.name }}
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700"
                            >Email</label
                        >
                        <input
                            v-model="createForm.email"
                            type="email"
                            class="w-full border p-2 rounded mt-1 outline-none focus:ring-2 focus:ring-primary/20"
                            :class="{
                                'border-red-500': createForm.errors.email,
                            }"
                        />
                        <div
                            v-if="createForm.errors.email"
                            class="text-red-500 text-xs mt-1"
                        >
                            {{ createForm.errors.email }}
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700"
                            >Password</label
                        >
                        <input
                            v-model="createForm.password"
                            type="password"
                            class="w-full border p-2 rounded mt-1 outline-none focus:ring-2 focus:ring-primary/20"
                            :class="{
                                'border-red-500': createForm.errors.password,
                            }"
                        />
                        <div
                            v-if="createForm.errors.password"
                            class="text-red-500 text-xs mt-1"
                        >
                            {{ createForm.errors.password }}
                        </div>
                    </div>
                    <div class="flex justify-end gap-2 mt-6">
                        <button
                            type="button"
                            @click="isCreateModalOpen = false"
                            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            class="px-4 py-2 bg-primary text-white rounded hover:opacity-90"
                            :disabled="createForm.processing"
                        >
                            Create User
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div
            v-if="isEditModalOpen"
            class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm"
        >
            <div class="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
                <h2 class="text-xl font-bold mb-4">Edit User</h2>
                <form @submit.prevent="submitUpdate">
                    <div class="mb-4">
                        <label class="block text-sm font-medium">Name</label>
                        <input
                            v-model="editForm.name"
                            type="text"
                            class="w-full border p-2 rounded"
                        />
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium">Email</label>
                        <input
                            v-model="editForm.email"
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
                            :disabled="editForm.processing"
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

declare const route: any;

const props = defineProps<{
    users: Array<any>;
}>();

const tableColumns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "actions", label: "Actions" },
];

// --- CREATE LOGIC ---
const isCreateModalOpen = ref(false);
const createForm = useForm({
    name: "",
    email: "",
    password: "",
});

const handleCreateNewUser = () => {
    createForm.reset();
    createForm.clearErrors();
    isCreateModalOpen.value = true;
};

const submitCreate = () => {
    createForm.post(route("admin.user.store"), {
        onSuccess: () => {
            isCreateModalOpen.value = false;
            createForm.reset();
        },
    });
};

// --- EDIT LOGIC ---
const isEditModalOpen = ref(false);
const editForm = useForm({
    id: null as number | null,
    name: "",
    email: "",
});

const openEditModal = (user: any) => {
    editForm.clearErrors();
    editForm.id = user.id;
    editForm.name = user.name;
    editForm.email = user.email;
    isEditModalOpen.value = true;
};

const submitUpdate = () => {
    editForm.put(route("admin.user.update", editForm.id), {
        onSuccess: () => (isEditModalOpen.value = false),
    });
};

// --- DELETE LOGIC ---
const deleteUser = (id: number) => {
    if (confirm("Are you sure?")) {
        router.delete(route("admin.user.destroy", id));
    }
};
</script>
