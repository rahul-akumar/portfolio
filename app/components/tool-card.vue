<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  tool: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
  gradientClasses: {
    type: String,
    default: "bg-radial-[at_75%_50%] from-fuchsia-400/40 to-emerald-900/20",
  },
});

const isVisible = ref(false);

if (import.meta.client) {
  onMounted(() => {
    // Staggered reveal similar to ProjectCard
    setTimeout(() => {
      isVisible.value = true;
    }, props.index * 120);
  });
}
</script>

<template>
  <div
    v-tilt="{ max: 14, scale: 1.01, shine: true, parallaxSelector: '.tilt-parallax', parallaxStrength: 0, parallaxZ: 28, perspective: 900 }" class="group tool-card relative border border-white/10 backdrop-blur-3xl rounded-4xl p-6 sm:p-8 h-full transform-gpu"
    :class="[
      gradientClasses,
    ]"
  >
    <div class="flex h-full flex-col justify-between gap-6" :class="[{ 'animate-fade-in-up': isVisible }]">
      <div class="flex items-start gap-4">
        <div class="tilt-parallax relative flex size-12 sm:size-14 items-center justify-center rounded-2xl bg-black/40 border border-white/10 overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]">
          <img v-if="tool.iconUrl" :src="tool.iconUrl" :alt="`${tool.name} logo`" class="w-8 h-8 sm:w-9 sm:h-9 object-contain">
          <Icon
            v-else-if="tool.icon && tool.icon.includes(':')"
            :name="tool.icon"
            class="w-8 h-8 sm:w-9 sm:h-9 text-white/90"
          />
          <span v-else class="text-2xl sm:text-3xl">{{ tool.iconEmoji || '🛠️' }}</span>
        </div>

        <div class="flex min-w-0 flex-col">
          <h3 class="text-xl sm:text-2xl font-semibold text-white leading-relaxed truncate">
            <a :href="tool.link" target="_blank" class="hover:underline underline-offset-4">
              {{ tool.name }}
            </a>
          </h3>
          <p v-if="tool.category" class="text-white/60 text-sm">
            {{ tool.category }}
          </p>
        </div>
      </div>

      <p class="text-white/75 text-sm leading-relaxed">
        {{ tool.description }}
      </p>

      <div class="mt-2 flex flex-wrap gap-2">
        <span
          v-for="(tag, idx) in (tool.tags || [])"
          :key="idx"
          class="px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 text-white/80 backdrop-blur-sm"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.7s ease-out forwards;
}

.tool-card {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
</style>
