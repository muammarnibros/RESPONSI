<template>
  <header class="bg-wallpaper text-start py-12 tes">
    <section
      id="profil"
      class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center"
    >
      <div class="md:w-2/3 mb-10 md:mb-0">
        <h1
          class="text-5xl font-bold text-white mb-4 animate-slide-in-left"
          style="animation-delay: 200ms"
        >
          Halo, Saya <span class="text-orange-400">Mu'ammar Nibros</span>
        </h1>
        <p class="text-xl text-white mb-8 animate-slide-in-left" style="animation-delay: 400ms">
          Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.
        </p>

        <a
          href="#kontak"
          class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue- 700 transition-colors duration-300 inline-block animate-slide-in-left"
          style="animation-delay: 600ms"
        >
          Hubungi Saya
        </a>
      </div>
      <div class="md:w-1/2 flex justify-center animate-slide-in-right">
      
      </div>
      <div class="col-6 text-center">
        <div id="lottie" class="ps-5" style="max-width: 800px; margin: auto"></div>
      </div>
    </section>
  </header>
</template>

<script setup>
import { onMounted } from 'vue'
import lottie from 'lottie-web'
import animationData from '../assets/Artboard 1.json'

onMounted(() => {
  lottie.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animationData,
  })
})
</script>
