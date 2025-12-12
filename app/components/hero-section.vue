<script setup>
const { scrollToElement } = useSmoothScroll();

function scrollToSection(sectionId) {
  scrollToElement(sectionId, { duration: 700, updateHash: true });
}

// Add some subtle animations on scroll
if (import.meta.client) {
  const observeHero = () => {
    const heroSection = document.getElementById("hero");
    if (!heroSection)
      return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(heroSection);
  };

  onMounted(() => {
    observeHero();
  });
}
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center justify-center px-6 sm:px-8">
    <div class="max-w-6xl mx-auto text-center">
      <!-- Main heading with shiny text effect -->
      <div class="mb-8">
        <ShinyText
          text="Designing B2B SaaS products for 11+ years that stand the test of time, scale, and complexity."
          :speed="3"
          :disabled="false"
          class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
        />
      </div>

      <!-- Subtitle -->
      <div class="mb-12 max-w-2xl mx-auto flex justify-between" />

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
        <button
          class="group inline-flex items-center bg-black/75 hover:bg-black/50 backdrop-blur-sm text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 border border-white/10 hover:border-white/20 hover:bg-black/50 hover:cursor-pointer"
          @click="scrollToSection('case-studies')"
        >
          <span class="mr-2">View case studies</span>
          <Icon name="mdi:arrow-down" class="w-6 h-6" />
        </button>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div class="animate-bounce">
          <svg
            class="w-6 h-6 text-white/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  </section>
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

/* Custom bounce animation for scroll indicator */
@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -10px, 0);
  }
  70% {
    transform: translate3d(0, -5px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>
