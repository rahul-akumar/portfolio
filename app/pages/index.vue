<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Local background instead of layout -->
    <div class="fixed inset-0 pointer-events-none">
      <BlobBackground />
    </div>

    <div class="relative z-10">
      <NavBar />
      <main class="relative">
        <div class="flex flex-col">
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
          <ToolsSection />
          <WorkSection />
        </div>
      </main>

      <footer id="footer" class="relative z-10 w-full py-12 px-8">
        <div class="mx-auto flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between max-w-6xl">
          <p class="text-white/50 text-sm text-center">
            © Rahul Kumar 2025
          </p>
          <div class="flex gap-12 sm:px-8 md:px-0 mx-auto sm:mx-0">
            <a href="https://www.linkedin.com/in/rahul-akumar" target="_blank" rel="noopener noreferrer" class="text-white/75 hover:text-white transition-colors duration-200 text-sm">LinkedIn</a>
            <a href="https://behance.net/rahul_kumar" target="_blank" rel="noopener noreferrer" class="text-white/75 hover:text-white transition-colors duration-200 text-sm">Behance</a>
            <a href="mailto:rahul-akumar@protonmail.com" class="text-white/75 hover:text-white transition-colors duration-200 text-sm">Mail</a>
            <a href="/rahul-resume.pdf" download class="text-white/75 hover:text-white transition-colors duration-200 text-sm">Resume</a>
            
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Rahul — 🦄 Product designer',
  meta: [
    { name: 'description', content: 'Creative developer portfolio showcasing modern web development projects with beautiful animations and user experiences.' },
    { name: 'keywords', content: 'developer, portfolio, vue, nuxt, frontend, fullstack, web development' },
    { property: 'og:title', content: 'Portfolio - Creative Developer' },
    { property: 'og:description', content: 'Creative developer portfolio showcasing modern web development projects' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'canonical', href: 'https://yourportfolio.com' }
  ]
})

const route = useRoute()
const { scrollToHash } = useSmoothScroll()

onMounted(() => {
  if (process.client && route.hash) {
    // Delay to ensure sections are in DOM
    requestAnimationFrame(() => scrollToHash(route.hash, { duration: 700, updateHash: true }))
  }
})
</script>

<style>
:root {
  font-family: Space Grotesk;
}
</style>


