<template>
  <section
    id="pendidikan"
    class="py-20 bg-gradient-to-r min-h-screen font-sans overflow-x-hidden"
    style="background-color: #121212;"
  >
    <div class="container mx-auto px-4 sm:px-6">
      <!-- Section Title -->
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <SectionTitle title="Education History" class="text-white" />
      </div>

      <!-- Deskripsi -->
      <div
        class="max-w-3xl mx-auto text-white text-center mt-6 mb-12"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="800"
      >
        <p class="text-white/90 leading-relaxed">
          Pendidikan saya di bidang Teknik Informatika membekali saya dengan fondasi kuat dalam pengembangan perangkat lunak. Fokus utama saya adalah menjadi IT Developer yang mampu merancang solusi digital inovatif dan efisien.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Garis tengah hanya muncul di desktop -->
        <div
          class="hidden md:block absolute h-full border-r-2 border-gray-300 left-1/2 transform -translate-x-1/2"
          data-aos="fade-in"
          data-aos-duration="800"
          data-aos-delay="600"
        ></div>

        <!-- Loop riwayat pendidikan -->
        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-10 w-full px-4"
        >
          <!-- Desktop: layout kiri-kanan -->
          <div
            v-if="index % 2 === 0"
            class="hidden md:flex justify-between items-center"
          >
            <div class="w-1/2 pr-8 flex justify-end">
              <a
                :href="edu.link"
                target="_blank"
                rel="noopener noreferrer"
                class="card max-w-md"
                data-aos="fade-right"
              >
                <img :src="edu.logo" class="w-16 h-16 object-contain" />
                <div class="text-right">
                  <p class="text-sm font-semibold text-orange-500 mb-1">{{ edu.period }}</p>
                  <h3 class="text-2xl font-bold text-white mb-1">{{ edu.institution }}</h3>
                  <p class="text-white/80">{{ edu.major }}</p>
                </div>
              </a>
            </div>
            <div class="w-1/2 flex justify-start">
              <div class="w-4 h-4 bulet rounded-full z-10" data-aos="fade-in" data-aos-duration="800"></div>
            </div>
          </div>

          <div
            v-else
            class="hidden md:flex justify-between items-center"
          >
            <div class="w-1/2 flex justify-end">
              <div class="w-4 h-4 bulet rounded-full z-10" data-aos="fade-in" data-aos-duration="800"></div>
            </div>
            <div class="w-1/2 pl-8 flex justify-start">
              <a
                :href="edu.link"
                target="_blank"
                rel="noopener noreferrer"
                class="card max-w-md"
                data-aos="fade-left"
              >
                <img :src="edu.logo" class="w-16 h-16 object-contain" />
                <div class="text-right">
                  <p class="text-sm font-semibold text-orange-500 mb-1">{{ edu.period }}</p>
                  <h3 class="text-2xl font-bold text-white mb-1">{{ edu.institution }}</h3>
                  <p class="text-white/80">{{ edu.major }}</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Mobile: layout vertikal -->
          <div class="md:hidden flex flex-col items-center gap-4">
            <div class="w-4 h-4 bulet rounded-full z-10"></div>
            <a
              :href="edu.link"
              target="_blank"
              rel="noopener noreferrer"
              class="card w-full max-w-sm text-left"
              data-aos="fade-up"
            >
              <img :src="edu.logo" class="w-16 h-16 object-contain" />
              <div>
                <p class="text-sm font-semibold text-orange-500 mb-1">{{ edu.period }}</p>
                <h3 class="text-2xl font-bold text-white mb-1">{{ edu.institution }}</h3>
                <p class="text-white/80">{{ edu.major }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import SectionTitle from './SectionTitle.vue'

const educationHistory = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('/api/education')
    educationHistory.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<style scoped>
.bulet {
  background-color: orange;
}
.card {
  background-color: #1a1a1a(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}
</style>