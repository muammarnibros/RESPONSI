<script setup>
import { RouterView } from 'vue-router';
</script>
<template>
<div class="mx-auto font-sans relative bg-wallpaper bg-cover h-screen bg-center  text-white">
    <Navbar />
    <main class="min-h-screen">
        <RouterView />
    </main>
</div>
</template>