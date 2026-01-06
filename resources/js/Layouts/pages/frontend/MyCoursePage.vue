<template>
    <div class="flex flex-col min-h-screen">
        <!-- Page Title / Hero -->
        <section class="bg-indigo-600 text-white py-12">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-2">My Courses</h1>
                <p class="text-lg md:text-xl">
                    Browse all courses you are enrolled in
                </p>
            </div>
        </section>

        <!-- Courses Grid -->
        <section class="py-12 bg-gray-100 flex-1">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold mb-8 text-center">
                    Enrolled Courses
                </h2>

                <div v-if="courses.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div v-for="course in courses" :key="course.id"
                        class="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                        <img :src="course.image || '/images/course-placeholder.png'
                            " alt="Course Image" class="w-full h-48 object-cover" />
                        <div class="p-4">
                            <h3 class="text-xl font-semibold mb-2">
                                {{ course.name }}
                            </h3>
                            <p class="text-gray-600 mb-4">
                                {{ course.description }}
                            </p>
                            <div class="flex justify-between items-center">
                                <span class="text-indigo-600 font-bold">{{ course.progress }}% Complete</span>
                                <router-link :to="`/courses/${course.id}`"
                                    class="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
                                    View
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center text-gray-500">
                    <p>You are not enrolled in any courses yet.</p>
                    <router-link to="/"
                        class="mt-4 inline-block px-6 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
                        Browse Courses
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

interface Course {
    id: number;
    name: string;
    description: string;
    progress: number;
    image?: string;
}

export default defineComponent({
    name: "MyCoursePage",
    setup() {
        const courses = ref<Course[]>([]);

        // Example: simulate fetching courses from API
        onMounted(() => {
            // Replace this with your API call
            courses.value = [
                {
                    id: 1,
                    name: "Mathematics 101",
                    description: "Learn basic algebra, geometry, and more.",
                    progress: 75,
                    image: "/storage/profile/image.png",
                },
                {
                    id: 2,
                    name: "English Literature",
                    description: "Study classic and modern English literature.",
                    progress: 50,
                    image: "/storage/profile/image.png",
                },
                {
                    id: 3,
                    name: "Computer Science",
                    description:
                        "Learn programming, algorithms, and web development.",
                    progress: 20,
                    image: "/storage/profile/image.png",
                },
            ];
        });

        return {
            courses,
        };
    },
});
</script>

<style scoped>
/* Optional: smooth card hover transition */
</style>
