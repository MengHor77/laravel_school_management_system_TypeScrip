import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // Import path

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.ts',
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
            // This MUST match your tsconfig.json
            '@': path.resolve(__dirname, './resources/js'),
        },
    },
});