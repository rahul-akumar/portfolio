<script setup>
import { computed, onMounted, ref } from "vue";

const props = defineProps({
  experience: { type: Object, required: true },
  index: { type: Number, default: 0 },
  gradientClasses: { type: String, default: "bg-radial-[at_75%_50%] from-amber-400/25 to-pink-900/10" },
});

const isVisible = ref(false);

const formattedDateRange = computed(() => {
  const start = props.experience?.startDate ? new Date(props.experience.startDate) : null;
  const end = props.experience?.endDate ? new Date(props.experience.endDate) : null;
  const fmt = d => d?.toLocaleDateString("en-US", { year: "numeric", month: "short" }) || "";
  if (start && end)
    return `${fmt(start)} — ${fmt(end)}`;
  if (start && !end)
    return `${fmt(start)} — Present`;
  return props.experience?.period || "";
});

if (import.meta.client) {
  onMounted(() => {
    const cardElement = document.querySelector(`[data-experience-index="${props.index}"]`);
    if (!cardElement)
      return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            isVisible.value = true;
          }, props.index * 120);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    observer.observe(cardElement);
  });
}
</script>

<template>
  <div
    class="group relative border-b border-white/15 last:border-b-0 sm:py-8 py-8 w-full" :class="[{ 'animate-fade-in-up': isVisible }]"
    :data-experience-index="index"
  >
    <div class="flex">
      <div class="flex flex-col sm:flex-row min-w-0 w-full gap-3 sm:justify-between">
        <div class="flex flex-col sm:flex-row justify-between w-full">
          <h3 class="text-2xl lg:text-3xl font-medium text-white leading-relaxed">
            {{ experience.role }}
          </h3>
        </div>
        <div class="flex flex-col sm:flex-row sm:items-center gap-3 text-white/60 text-xs uppercase tracking-widest">
          <NuxtLink :to="experience.companyUrl" target="_blank" class="truncate">
            <span class="hover:underline underline-offset-3 hover:text-white">{{ experience.company }}</span>
          </NuxtLink>
          <span class="text-white/25 sm:block hidden">•</span>
          <span class="truncate">{{ formattedDateRange }}</span>
          <template v-if="experience.location">
            <span class="text-white/25 sm:block hidden">•</span>
            <span class="truncate normal-case">{{ experience.location }}</span>
          </template>
        </div>
      </div>
      <!-- <ul v-if="Array.isArray(experience.highlights) && experience.highlights.length" class="list-disc list-outside text-white/75 space-y-2 mb-2 pl-4">
          <li v-for="(point, i) in experience.highlights" :key="i">{{ point }}</li>
        </ul> -->
    </div>
  </div>
</template>

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

.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
