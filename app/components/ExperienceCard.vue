<template>
  <div 
    :class="['group relative border border-white/10 rounded-4xl p-8 w-full backdrop-blur-3xl', gradientClasses, { 'animate-fade-in-up': isVisible }]"
    :data-experience-index="index"
  >
    <div class="flex flex-col gap-6 items-start">
      <div class="flex-1 min-w-0 w-full">
        <div class="flex flex-wrap items-center gap-3 mb-2 text-white/60 text-xs uppercase tracking-widest">
          <span class="truncate">{{ experience.company }}</span>
          <span class="text-white/30">•</span>
          <span class="truncate">{{ formattedDateRange }}</span>
          <template v-if="experience.location">
            <span class="text-white/30">•</span>
            <span class="truncate normal-case">{{ experience.location }}</span>
          </template>
        </div>

        <h3 class="text-2xl md:text-3xl font-semibold text-white mb-3 leading-relaxed">
          {{ experience.role }}
        </h3>

        <p v-if="experience.description" class="text-white/80 text-base leading-loose mb-5 line-clamp-3">
          {{ experience.description }}
        </p>

        <ul v-if="Array.isArray(experience.highlights) && experience.highlights.length" class="list-disc list-outside text-white/75 space-y-2 mb-2 pl-4">
          <li v-for="(point, i) in experience.highlights" :key="i">{{ point }}</li>
        </ul>

        <div class="flex flex-wrap gap-2 mb-6">
          <span 
            v-for="(tech, i) in experience.techStack || []" 
            :key="tech + i"
            class="px-3 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-white/80"
          >
            {{ tech }}
          </span>
        </div>

        <div class="flex gap-3">
          <a v-if="experience.companyUrl" :href="experience.companyUrl" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-black/75 hover:bg-black/25 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10 hover:border-white/20 transition-all">
            Visit company
            <Icon name="mdi:arrow-top-right" class="w-6 h-6" />
          </a>
          <NuxtLink v-if="experience.link" :to="experience.link"
            class="inline-flex items-center gap-2 bg-black/75 hover:bg-black/25 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10 hover:border-white/20 transition-all">
            View details
            <Icon name="mdi:arrow-right" class="w-6 h-6" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  experience: { type: Object, required: true },
  index: { type: Number, default: 0 },
  gradientClasses: { type: String, default: 'bg-radial-[at_75%_50%] from-amber-400/25 to-pink-900/10' }
})

const isVisible = ref(false)

const formattedDateRange = computed(() => {
  const start = props.experience?.startDate ? new Date(props.experience.startDate) : null
  const end = props.experience?.endDate ? new Date(props.experience.endDate) : null
  const fmt = (d) => d?.toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) || ''
  if (start && end) return `${fmt(start)} — ${fmt(end)}`
  if (start && !end) return `${fmt(start)} — Present`
  return props.experience?.period || ''
})

if (process.client) {
  onMounted(() => {
    const cardElement = document.querySelector(`[data-experience-index="${props.index}"]`)
    if (!cardElement) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => { isVisible.value = true }, props.index * 120)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    observer.observe(cardElement)
  })
}
</script>

<style scoped>
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }

.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>


