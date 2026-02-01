import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Sidebar & UI Foundation
                sidebar: '#111827',     // Deep dark for sidebar (gray-900)
                sidebarSoft: '#1F2937', // Slightly lighter for hover (gray-800)
                panel: '#F9FAFB',       // Light gray for dashboard background

                // Brand Colors
                primary: '#10B981',     // Emerald Green (Great for School/Success)
                primarySoft: '#D1FAE5', // Light Green background
                secondary: '#6366F1',   // Indigo
                accent: '#F59E0B',      // Amber for notifications

                // Status Colors (3 shades each)
                success: {
                    light: '#DCFCE7',
                    DEFAULT: '#22C55E',
                    dark: '#166534'
                },
                danger: {
                    light: '#FEE2E2',
                    DEFAULT: '#EF4444',
                    dark: '#991B1B'
                },
                warning: {
                    light: '#FEF3C7',
                    DEFAULT: '#F59E0B',
                    dark: '#92400E'
                },
                info: {
                    light: '#E0F2FE',
                    DEFAULT: '#0EA5E9',
                    dark: '#075985'
                },

                // Dashboard Neutral Palette
                neutral: {
                    50: '#F9FAFB',
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2937',
                    900: '#111827',
                }
            }
        },
    },
    plugins: [forms],
};