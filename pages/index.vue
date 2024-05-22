<template>
    <div v-if="!isAuthenticated" class="min-h-[90vh] bg-white dark:bg-black">
        <div class="pb-12 lg:py-10">
            <div class="relative overflow-hidden ">
                <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                    <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div class="sm:max-w-lg">
                            <h1
                                class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-black dark:text-white">
                                Summer styles are
                                finally here</h1>
                            <p class="mt-4 text-xl text-gray-500 dark:text-gray-300">This year, our new summer
                                collection will shelter you from
                                the harsh elements of a world that doesn't care if you live or die.</p>
                        </div>
                        <div>
                            <div class="mt-10">
                                <!-- Decorative image grid -->
                                <div aria-hidden="true"
                                    class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                    <div
                                        class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div class="flex items-center space-x-6 lg:space-x-8">
                                            <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div
                                                    class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                                        alt="" class="h-full w-full object-cover object-center" />
                                                </div>
                                                <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                                        alt="" class="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                            <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                                        alt="" class="h-full w-full object-cover object-center" />
                                                </div>
                                                <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                                        alt="" class="h-full w-full object-cover object-center" />
                                                </div>
                                                <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                                        alt="" class="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                            <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                                        alt="" class="h-full w-full object-cover object-center" />
                                                </div>
                                                <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                                        alt="" class="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <loginButton
                                    :class="'inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700'"
                                    :text="'Log In to Discover'" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="isAuthenticated" class="bg-white dark:bg-black ">
        <div class="min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 h-5/6 w-4/6 mx-auto ">
            <h1
                class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800 dark:text-gray-300 text-center md:text-5xl lg:text-5xl">
                Welcome {{ user?.name }}
            </h1>
            <div class="mt-5 mt-5 text-center">
                <nuxt-link
                    class="lg:mr-2 transition duration-500 min-w-40 hover:scale-110 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 mb-3"
                    to="/products">
                    Browse Products
                </nuxt-link>
                <nuxt-link
                    class="lg:ml-2 transition duration-500 min-w-40 hover:scale-110 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 mb-3"
                    to="profile">
                    My Profile
                </nuxt-link>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import auth0Info from '~/composables/auth0';

const { user, isAuthenticated } = auth0Info();

</script>

<style scoped></style>
