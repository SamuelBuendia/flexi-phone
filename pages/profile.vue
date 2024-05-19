<template>
    <div class="md:mx-auto mx-5 m-10 md:w-2/6 bg-white overflow-hidden shadow rounded-lg border">
        <div class="px-4 py-5 sm:px-6 text-center">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                Your Profile Information
            </h3>
            <img class="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                :src="user?.picture" alt="">
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
                This is some information about you.
            </p>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl class="sm:divide-y sm:divide-gray-200">
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Full name
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-right">
                        {{ user?.name }}
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Email address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-right">
                        {{ user?.email }}
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Phone number
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-right">
                        {{ user?.phone_number ?? 'Not provided yet' }}
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-right">
                        {{ user?.address ?? 'Not provided yet' }}
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</template>

<script setup lang="ts">

import auth0Info from "~/composables/auth0";
const { user } = auth0Info();

</script>
<style scoped></style>
