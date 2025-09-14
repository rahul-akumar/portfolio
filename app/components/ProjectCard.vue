<template>
  <div 
    :class="['group project-card relative border border-white/10 backdrop-blur-3xl rounded-4xl p-12', gradientClasses, { 'animate-fade-in-up': isVisible }]"
  >
    <div class="flex flex-col md:flex-row justify-between">
      <!-- Left Content -->
      <div class="flex flex-col gap-4 md:w-lg">
        <!-- Project Title -->
        <h3 class="text-2xl lg:text-3xl font-medium text-white mb-4 leading-relaxed">
          {{ project.title }}
        </h3>
        
        <!-- Project Description -->
        <p class="text-white/80 text-base lg:text-base leading-loose mb-8 max-w-lg">
          {{ project.description }}
        </p>
        
        <!-- View Case Study Button -->
        <NuxtLink v-if="project.link" :to="project.link" class="w-fit inline-flex items-center gap-2 bg-black/75 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 border border-white/20 hover:border-white/30 hover:bg-black/50">
          {{ buttonLabel }}
          <Icon name="mdi:arrow-right" class="w-6 h-6" />
        </NuxtLink>
        <button v-else class="w-fit bg-black/75 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 border border-white/20 hover:border-white/30 hover:bg-black/50">
          {{ buttonLabel }}
        </button>
      </div>

      <!-- Right Visual Element -->
      <div class="flex flex-col gap-4 md:w-md mt-8 lg:mt-0 ">
        <div class="relative size-fit rounded-4xl overflow-hidden">
          <img 
            :src="imageSrc || '/illustrations/integrations.svg'" 
            :alt="project.title + ' project cover image'"
            class="object-cover"
          />
        </div>
        
        <!-- Key Metrics below visual -->
        <div class="flex flex-wrap gap-12 mt-6">
          <div v-if="project.metrics?.engagement">
            <p class="text-white/75 text-sm mb-1">{{ project.metrics.engagement.label || 'Engagement' }}</p>
            <h3 class="text-white text-2xl lg:text-3xl font-bold">{{ project.metrics.engagement.value }}</h3>
          </div>
          <div v-if="project.metrics?.satisfaction">
            <p class="text-white/75 text-sm mb-1">{{ project.metrics.satisfaction.label || 'User Satisfaction' }}</p>
            <h3 class="text-white text-2xl lg:text-3xl font-bold">{{ project.metrics.satisfaction.value }}</h3>
          </div>
          <div v-if="project.metrics?.other">
            <p class="text-white/75 text-sm mb-1">{{ project.metrics.other.label }}</p>
            <h3 class="text-white text-2xl lg:text-3xl font-bold">{{ project.metrics.other.value }}</h3>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
    validator: (project) => {
      return project && typeof project.title === 'string'
    }
  },
  index: {
    type: Number,
    default: 0
  },
  gradientClasses: {
    type: String,
    default: 'bg-radial-[at_75%_50%] from-fuchsia-400/50 to-lime-950/25'
  },
  buttonLabel: {
    type: String,
    default: 'Read case study'
  },
  imageSrc: {
    type: String,
    default: ''
  }
})

const isVisible = ref(false)

const buttonText = computed(() => {
  if (props.buttonLabel && props.buttonLabel.length > 0) return props.buttonLabel
  // default label based on available links
  if (props.project?.liveUrl) return 'View project'
  return 'View case study'
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  })
}

// Intersection Observer for animation
if (process.client) {
  onMounted(() => {
    const cardElement = document.querySelector(`[data-project-index="${props.index}"]`)
    if (!cardElement) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              isVisible.value = true
            }, props.index * 150) // Stagger animations
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(cardElement)
  })
}
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.project-card {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

/* Line clamp utility for description */
.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Custom scrollbar if needed */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
