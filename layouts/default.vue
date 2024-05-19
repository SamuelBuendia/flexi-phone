<script setup lang="ts">
import Navbar from "~/components/layout/navbar.vue";
</script>

<template>
    <div class="bg-white">
        <Navbar />
        <slot />
    </div>
</template>
