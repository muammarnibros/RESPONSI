<script setup>
import { RouterView } from 'vue-router';
</script>
<template>
<div class="font-sans bg-wallpaper bg-cover py-12 h-screen bg-center  text-white">
    <Navbar />
    <main>
        <RouterView />
    </main>
</div>
</template>