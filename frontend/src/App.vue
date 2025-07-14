<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/NavbarVue.vue'
</script>
<template>
<div class="mx-auto font-sans relative bg-wallpaper bg-cover h-screen bg-center  text-white">
    <Navbar />
    <main class="min-h-screen">
        <RouterView />
    </main>
</div>
</template>