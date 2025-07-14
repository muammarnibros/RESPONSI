<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header class="bg-navbar shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-white">m.nibros27</div>

      <!-- Hamburger -->
      <button
        @click="toggleMenu"
        class="text-white text-3xl md:hidden"
      >
        {{ isOpen ? '✕' : '☰' }}
      </button>

      <!-- Menu -->
      <ul
        :class="[
          'md:flex md:space-x-6 md:static absolute top-full left-0 w-full md:w-auto bg-black md:bg-transparent bg-opacity-80 md:bg-opacity-0 z-40',
          isOpen ? 'flex flex-col items-center space-y-4 py-4' : 'hidden'
        ]"
      >
        <li><a href="#profil" class="text-white hover:text-blue-500">Profil</a></li>
        <li><a href="#pendidikan" class="text-white hover:text-blue-500">Pendidikan</a></li>
        <li><a href="#skill" class="text-white hover:text-blue-500">Skill</a></li>
        <li><a href="#proyek" class="text-white hover:text-blue-500">Proyek</a></li>
        <li><a href="#kontak" class="text-white hover:text-blue-500">Kontak</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.bg-navbar {
  background-color: transparent;
  backdrop-filter: blur(3px);
}
</style>
