// resources/js/app.ts
import '../css/app.css';
import { createApp, h, DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    // Resolve tells Inertia to look for Vue files inside resources/js/Pages
    resolve: (name) => 
        resolvePageComponent(
            `./Pages/${name}.vue`, 
            import.meta.glob<DefineComponent>('./Pages/**/*.vue')
        ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            // Note: You usually remove 'router' because Laravel web.php handles routing now
            .mount(el);
    },
});