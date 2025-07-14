<template>
  <header class="bg-wallpaper bg-cover bg-center min-h-screen pb-16 flex items-center">
    <section
      id="profil"
      class="container mx-auto px-6 py-6 pt-40 pb-0 flex flex-col md:flex-row items-center gap-6"
    >
      <div class="md:w-2/3 text-center md:text-left">
        <h1
          class="text-3xl font-bold text-white mb-1 animate-slide-in-left"
          style="animation-delay: 200ms"
        >
          Halo, Saya
        </h1>
        <h1 class="text-5xl text-orange-400 font-bold mb-4">Mu'ammar Nibros</h1>
        <p class="text-xl text-white mb-8 animate-slide-in-left text-justify" style="animation-delay: 400ms">
          Saya adalah Mahasiswa Teknik Informatika yang memiliki semangat tinggi dalam bidang
          pengembangan web dan desain antarmuka. Saya selalu berfokus pada detail desain yang menarik sekaligus
          fungsionalitas yang optimal. Saya tertarik untuk terus belajar teknologi baru serta
          berkontribusi dalam menciptakan solusi digital yang inovatif dan user-friendly.”
        </p>

        <a
          href="#kontak"
          class="bg-blue-600 text-white font-bold py-3 px-6 mb-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block animate-slide-in-left"
          style="animation-delay: 600ms"
        >
          Hubungi Saya
        </a>

        <div class="flex justify-center md:justify-start gap-8 mb-8 w-full">
          <a href="https://www.instagram.com/m.nibros27" target="_blank">
            <img
              src="/img/ig.png"
              alt="Instagram"
              class="w-8 h-8 hover:scale-110 transition duration-300"
            />
          </a>
          <a href="https://www.tiktok.com/@m.nibros27" target="_blank">
            <img
              src="/img/tik-tok.png"
              alt="TikTok"
              class="w-8 h-8 hover:scale-110 transition duration-300"
            />
          </a>
          <a href="https://x.com/slitteryc20197" target="_blank">
            <img
              src="/img/twitter.png"
              alt="Twitter"
              class="w-8 h-8 hover:scale-110 transition duration-300"
            />
          </a>
        </div>
      </div>

      <div class="md:w-1/2 flex justify-center animate-slide-in-right mb-16">
        <img
          src="/img/pofil.jpeg"
          alt="Foto Profil"
          class="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-orange-400 transition-all duration-500 hover:grayscale hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
        />
      </div>
    </section>
  </header>
</template>

<style>
html,
body {
  height: 100%;
  background-color: #121212;
}

.social-icons {
  display: flex;
  margin: 0 120px;
}
</style>
