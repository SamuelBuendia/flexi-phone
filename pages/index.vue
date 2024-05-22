<template>
    <div v-if="!isAuthenticated"
        class="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 h-5/6 w-4/6 mx-auto">
        <h1
            class="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-800 text-center md:text-5xl lg:text-5xl">
            Do you want to discover all the products we have for you?
            <br><br>
            Log in to find out more...
        </h1>
    </div>
    <div v-if="isAuthenticated"
        class="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 h-5/6 w-4/6 mx-auto">
        <h1
            class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800 text-center md:text-5xl lg:text-5xl">
            Welcome {{ user?.name }}
            <br><br>
            <nuxt-link
                class="lg:mr-2 transition duration-500 min-w-40 hover:scale-110 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                to="/products">
                Browse Products
            </nuxt-link>
            <nuxt-link
                class="lg:ml-2 transition duration-500 min-w-40 hover:scale-110 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                to="profile">
                My Profile
            </nuxt-link>
        </h1>
    </div>
</template>

<script setup lang="ts">
import auth0Info from '~/composables/auth0';

const { user, isAuthenticated } = auth0Info();

</script>

<style scoped></style>
