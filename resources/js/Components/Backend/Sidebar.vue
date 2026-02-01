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
                    class="font-bold text-lg uppercase tracking-widest text-primary"
                >
                    Admin SM
                </h1>
            </div>

            <button
                @click="toggleSidebar"
                type="button"
                class="flex items-center justify-center  transition-all duration-300"
            >
                <i
                    :class="[
                        collapsed
                            ? 'fas fa-angle-double-right'
                            : 'fas fa-angle-double-left',
                        'text-2xl transition-colors duration-300 text-neutral-400 hover:text-danger',
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
                        ? 'bg-primary/10 text-primary font-bold border-l-4 border-primary'
                        : 'text-neutral-400 hover:bg-sidebarSoft hover:text-white',
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
            class="p-4 border-t border-neutral-800 text-center text-neutral-500 text-xs"
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
    { label: "Logout", icon: "fas fa-sign-out-alt", route: "/admin/logout" },]);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Custom scrollbar to match your Sidebar color */
::-webkit-scrollbar {
    width: 4px;
}
::-webkit-scrollbar-track {
    background: transparent;
}
::-webkit-scrollbar-thumb {
    background: #4b5563; /* neutral-600 */
    border-radius: 10px;
}
</style>
