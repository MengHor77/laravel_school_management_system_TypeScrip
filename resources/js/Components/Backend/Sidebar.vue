<template>
    <aside
        class="bg-gray-900 text-white h-screen flex flex-col shadow-2xl z-20 transition-all duration-500 ease-in-out"
        :class="collapsed ? 'w-24' : 'w-64'"
    >
        <div
            class="h-20 bg-gray-800 relative flex items-center shadow-md transition-all duration-500"
            :class="collapsed ? 'justify-center' : 'justify-between px-4'"
        >
            <div v-if="!collapsed" class="overflow-hidden whitespace-nowrap">
                <h1 class="font-bold text-lg uppercase tracking-widest text-green-400">
                    Admin SM
                </h1>
            </div>

            <button
                @click="toggleSidebar"
                type="button"
                class="flex items-center justify-center p-2 rounded-lg transition-all duration-300 hover:bg-gray-700"
            >
                <i
                    :class="[
                        collapsed ? 'fas fa-angle-double-right' : 'fas fa-angle-double-left',
                        'text-2xl transition-colors duration-300 text-gray-400 hover:text-red-500'
                    ]"
                ></i>
            </button>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
import { ref } from "vue";

// Explicitly define the type for TypeScript
const collapsed = ref<boolean>(false);

const toggleSidebar = (): void => {
    collapsed.value = !collapsed.value;
};

</script>