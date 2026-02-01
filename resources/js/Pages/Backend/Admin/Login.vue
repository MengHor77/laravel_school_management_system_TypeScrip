<template>
    <FronendLayout>
        <div
            class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"
        >
            <div
                class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
            >
                <div>
                    <h1 class="text-3xl font-bold mb-4">Admin Login</h1>
                </div>
                <form @submit.prevent="handleLogin">
                    <div>
                        <label
                            for="email"
                            class="block font-medium text-sm text-gray-700"
                            >Email</label
                        >
                        <input
                            id="email"
                            type="email"
                            class="mt-1 block w-full"
                            required
                            autofocus
                        />
                    </div>

                    <div class="mt-4 relative">
                        <label
                            for="password"
                            class="block font-medium text-sm text-gray-700"
                            >Password</label
                        >
                        <input
                            id="password"
                            type="password"
                            class="mt-1 block w-full"
                            required
                            autocomplete="current-password"
                        />
                        <button  class=" absolute">
                            
                          <i class="fas fa-eye"></i>
                        </button>
                    </div>

                    <div class="flex items-center justify-end mt-4">
                        <button
                            type="submit"
                            class="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Login
                        </button>
                    </div>
                    <div>
                        <span class="text-sm text-gray-600 hover:text-gray-900 cursor-pointer hover:underline">
                            forgot password
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </FronendLayout>
</template>

<script setup lang="ts">
const handleLogin = () => {
    console.log("Login attempted");
};
</script>

<style scoped>
/* Your styles here */
</style>
