<template>
    <FrontendLayout>
        <div>
            <h1>my home page index</h1>
        </div>
    </FrontendLayout>
</template>

<script setup lang="ts">
import FrontendLayout from "@/Layouts/Frontend/FrontendLayout.vue";

defineProps<{ test: string }>();
</script>
