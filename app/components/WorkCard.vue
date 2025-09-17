<template>
  <div 
    :class="['group relative border border-white/10 rounded-4xl p-8 w-full backdrop-blur-3xl', gradientClasses, { 'animate-fade-in-up': isVisible }]"
    :data-work-index="index"
  >
    <div class="flex flex-col gap-8 items-start">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-3 mb-3">
          <span class="text-xs uppercase tracking-wide text-white/60 tracking-widest">{{ project.category }}</span>
          <span class="text-white/30">•</span>
          <span class="text-xs text-white/60 uppercase">{{ formattedDate }}</span>
        </div>

        <h3 class="text-2xl md:text-3xl font-semibold text-white mb-3 leading-relaxed">
          {{ project.title }}
        </h3>

        <p class="text-white/75 text-sm leading-loose mb-6 line-clamp-3">
          {{ project.description }}
        </p>

        <div class="flex gap-3">
          <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-black/75 hover:bg-black/25 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10 hover:border-white/20 transition-all">
            View project
            <Icon name="mdi:arrow-top-right" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
  index: { type: Number, default: 0 },
  gradientClasses: { type: String, default: 'bg-radial-[at_75%_50%] from-emerald-400/30 to-sky-900/20' }
})

const isVisible = ref(false)

const formattedDate = computed(() => {
  if (!props.project?.date) return ''
  const date = new Date(props.project.date)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
})

if (process.client) {
  onMounted(() => {
    const cardElement = document.querySelector(`[data-work-index="${props.index}"]`)
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


