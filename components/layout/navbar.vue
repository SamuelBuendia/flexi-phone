<template>
    <Alert :title="'Restricted Access'" :message="'You Need to Log In'" />
    <Disclosure as="nav" class="bg-gray-300 dark:bg-gray-800" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div v-if="isAuthenticated" class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="absolute -inset-0.5" />
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <nuxt-link class="font-bold dark:text-stone-50" to="/">
                            Home
                        </nuxt-link>
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <nuxt-link v-for="item in navigation" :key="item.name" :to="item.to"
                                :class="[item.current ? ' text-white dark:bg-gray-800' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                                :aria-current="item.current ? 'page' : undefined">
                                <span @click="handleShowNotificacion()"
                                    class="text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200">
                                    {{ item.name }}
                                </span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <loginButton
                        :class="'mr-3 transition duration-500 hover:scale-110 ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'"
                        :text="'Login'" />
                    <button class="md:block ml-2"
                        @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
                        <svg v-if="$colorMode.value == 'dark'" xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-gray-50" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                        <svg v-if="$colorMode.value == 'light'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>

                    <!-- Profile dropdown -->
                    <Menu v-if="isAuthenticated" as="div" class="relative ml-3">
                        <div>
                            <MenuButton
                                class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span class="absolute -inset-1.5" />
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full" :src="user?.picture" alt="" />
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                            <MenuItems
                                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <MenuItem v-slot="{ active }">
                                <nuxt-link
                                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                    to="/profile">My Profile</nuxt-link>
                                </MenuItem>
                                <MenuItem v-slot="{ active }" @click="logoutOut">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign
                                    out</a>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
            </div>
        </div>
        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <nuxt-link v-for="item in navigation" :key="item.name" as="a"
                    class="border-2 border-gray-400 dark:border-gray-600" :to="item.to"
                    :class="[item.current ? 'text-black dark:text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
                    :aria-current="item.current ? 'page' : undefined">
                    {{ item.name }}
                </nuxt-link>
            </div>
        </DisclosurePanel>
    </Disclosure>

</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useAlertState } from '@/composables/alert';
import { type LogoutOptions } from '@auth0/auth0-vue';
import auth0Info from "~/composables/auth0";

const { user, isAuthenticated, logout } = auth0Info();

const { alertState } = useAlertState();

const logoutOut = () => logout({ returnTo: window.location.origin } as LogoutOptions);

const setColorTheme = (newTheme: Theme) =>
    useColorMode().preference = newTheme

const navigation = [
    { name: 'Products', to: '/products', current: true }
]

function handleShowNotificacion() {
    !isAuthenticated.value ?
        alertState.value = true
        : null
}

</script>

<style scoped></style>