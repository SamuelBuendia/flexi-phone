<script setup lang="ts">
import Footer from "~/components/layout/footer.vue";
import Navbar from "~/components/layout/navbar.vue";
</script>

<template>
    <div class="bg-white">
        <Navbar />
        <slot />
        <Footer />
    </div>
</template>
