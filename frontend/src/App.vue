<script setup>
import { RouterView } from 'vue-router';
</script>
<template>
<div class="font-sans bg-wallpaper bg-cover min-h-screen bg-center  text-white">
    <Navbar />
    <main class="min-h-screen">
        <RouterView />
    </main>
</div>
</template>