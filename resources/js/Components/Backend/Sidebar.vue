<template>
    <aside
        class="bg-sidebar text-white h-screen flex flex-col shadow-2xl z-20 transition-all duration-500 ease-in-out"
        :class="collapsed ? 'w-24' : 'w-64'"
    >
        <div
            class="h-20 bg-sidebarSoft relative flex items-center shadow-md transition-all duration-500"
            :class="collapsed ? 'justify-center' : 'justify-between px-4'"
        >
            <div v-if="!collapsed" class="overflow-hidden whitespace-nowrap">
                <h1
                    class="font-bold text-lg uppercase tracking-widest text-green-400"
                >
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
                        collapsed
                            ? 'fas fa-angle-double-right'
                            : 'fas fa-angle-double-left',
                        'text-2xl transition-colors duration-300 text-gray-400 hover:text-red-500',
                    ]"
                ></i>
            </button>
        </div>

        <nav class="flex-1 mt-4 space-y-1 px-2 overflow-y-auto">
            <Link
                v-for="item in menuItems"
                :key="item.label"
                :href="item.route"
                class="flex items-center h-12 rounded-lg transition-all duration-300 group overflow-hidden"
                :class="[
                    $page.url.startsWith(item.route)
                        ? 'bg-green-500/10 text-green-400 font-bold border-l-4 border-green-400'
                        : 'text-gray-400 hover:bg-gray-800',
                    collapsed ? 'justify-center' : 'px-4',
                ]"
            >
                <div class="w-8 flex justify-center items-center flex-shrink-0">
                    <i
                        :class="[
                            item.icon,
                            'text-xl transition-transform group-hover:scale-110',
                        ]"
                    ></i>
                </div>

                <transition name="fade">
                    <span
                        v-if="!collapsed"
                        class="ml-4 flex-1 whitespace-nowrap"
                    >
                        {{ item.label }}
                    </span>
                </transition>
            </Link>
        </nav>

        <div
            class="p-4 border-t border-gray-800 text-center text-gray-500 text-xs"
        >
            <span>{{ collapsed ? "©" : "© 2026 Admin SM" }}</span>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { Link } from "@inertiajs/vue3"; 

const collapsed = ref<boolean>(
    localStorage.getItem("sidebar-collapsed") === "true",
);
const toggleSidebar = (): void => {
    collapsed.value = !collapsed.value;
    localStorage.setItem("sidebar-collapsed", collapsed.value.toString());
};

const menuItems = reactive([
    { label: "Dashboard", icon: "fas fa-th-large", route: "/admin/dashboard" },
    { label: "User", icon: "fas fa-users", route: "/admin/user" },
    {
        label: "Teacher",
        icon: "fas fa-chalkboard-teacher",
        route: "/admin/teacher",
    },
    { label: "Course", icon: "fas fa-book", route: "/admin/course" },
    { label: "Setting", icon: "fas fa-cog", route: "/admin/setting" },
    { label: "Report", icon: "fas fa-chart-line", route: "/admin/report" },
]);
</script>
