<script setup lang="ts">

import auth0Info from './composables/auth0';

const { isLoading } = auth0Info();

</script>

<template>
  <div v-if="!isLoading">
    <NuxtLayout>
      <!-- <NuxtPage /> -->
    </NuxtLayout>
  </div>
  <div v-if="isLoading">
    <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8 h-screen">
      <img class="animate-spin h-1/6" src="/img/loading.png" alt="loading logo" />
    </div>
  </div>
</template>
