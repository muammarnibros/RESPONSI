<script setup>
defineProps({ title: String });
</script>
<template>
<div class="mb-12 text-center">
<h2 class="text-4xl font-bold text-orange-400">{{ title }}</h2>

<div class="w-24 h-1 bg-white mx-auto mt-4 rounded"></div>
</div>
</template>