// resources/js/app.ts
import '../css/app.css';
import { createApp, h, DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

/* --- Font Awesome Setup --- */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faSchool, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
library.add(faEye, faEyeSlash);
library.add(faUser, faSchool, faSignOutAlt);

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
            .component('font-awesome-icon', FontAwesomeIcon)
            .mount(el); // Ensure this is on its own line and NOT after a // comment
    },
});