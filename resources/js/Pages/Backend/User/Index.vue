<template>
    <BackendLayout>
        <div class="p-6">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-2xl font-bold">User Management</h1>
            </div>

            <div class="pb-6">
                <button
                    class="bg-primary text-white rounded-xl px-4 py-2 hover:bg-neutral-400 transition shadow-sm"
                    @click="isCreateModalOpen = true"
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

        <Create v-if="isCreateModalOpen" @close="isCreateModalOpen = false" />

        <Edit
            v-if="isEditModalOpen && selectedUser"
            :user="selectedUser"
            @close="isEditModalOpen = false"
        />
    </BackendLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { router } from "@inertiajs/vue3";
import BackendLayout from "@/Layouts/Backend/BackendLayout.vue";
import Table from "@/Components/Backend/Table.vue";
import Create from "./Create.vue";
import Edit from "./Edit.vue";

// Define a Type for our User to keep TS happy
interface User {
    id: number;
    name: string;
    email: string;
}

declare const route: any;

defineProps<{
    users: Array<User>;
}>();

const tableColumns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "actions", label: "Actions" },
];

const isCreateModalOpen = ref(false);
const isEditModalOpen = ref(false);

// Fix: Explicitly tell TS this can be User or null
const selectedUser = ref<User | null>(null);

const openEditModal = (user: User) => {
    selectedUser.value = user;
    isEditModalOpen.value = true;
};

const deleteUser = (id: number) => {
    if (confirm("Are you sure?")) {
        router.delete(route("admin.user.destroy", id));
    }
};
</script>
