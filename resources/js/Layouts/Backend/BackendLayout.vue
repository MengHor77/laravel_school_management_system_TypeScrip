<template>
    <div class="flex h-screen overflow-hidden bg-gray-100">
        
        <Sidebar class="flex-none" />

        <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
            
            <Header class="flex-none" />

            <main class="flex-1 overflow-y-auto p-6">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import Header from "@/Components/Backend/Header.vue";
import Sidebar from "@/Components/Backend/Sidebar.vue";
</script>