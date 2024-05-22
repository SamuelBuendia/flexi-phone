<template>
    <div>
        <button :class="props.class" v-if="!isAuthenticated" @click="loginWithRedirect()">
            {{ props.text }}
        </button>
    </div>
</template>

<script setup lang="ts">
import auth0Info from "~/composables/auth0";
const { isAuthenticated, loginWithRedirect } = auth0Info();

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    }
});

</script>

<style scoped></style>