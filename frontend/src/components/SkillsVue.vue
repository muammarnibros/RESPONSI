<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const skills = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('/api/skills')
    skills.value = response.data // ✅ PERBAIKAN DI SINI
  } catch (error) {
    console.error(error)
  }
})
</script>


<template>
<section id="skill" class="py-20 bg-gray-50" style="background-color: #171717">
<div class="container mx-auto px-6">
<SectionTitle title="Keahlian & Teknologi" />
<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
<div v-for="skill in skills" :key="skill.name" class="card p-6 rounded-lg text-center
transform hover:-translate-y-2 transition-transform duration-300">
<h3 class="text-xl font-bold text-white">{{ skill.name }}</h3>
<p class="text-white mt-2">{{ skill.level }}</p>

</div>
</div>
</div>
</section>
</template>

<style>
.card {
    background-color: #1a1a1a;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}
</style>