<script setup>
import { ref } from "vue";

const projects = ref([
  {
    id: "webintosh",
    title: "Webintosh",
    description: "An OS shell where I add new games, apps, and experiments.",
    category: "Operating System",
    date: "2025-06-10",
    liveUrl: "https://webintosh.vercel.app/",
    githubUrl: "https://github.com/rahul-akumar/webintosh",
    gradient: "bg-radial-[at_25%_50%] from-cyan-800/40 to-gray-900/20",
    imageSrc: "/cover-1.png",
    metrics: {
      engagement: { label: "Apps", value: "10+" },
      satisfaction: { label: "Stars", value: "120" },
    },
  },
  {
    id: "rego",
    title: "Rego",
    description: "Customizable design system where I add beautiful and accessible components.",
    category: "Design System",
    date: "2025-05-05",
    liveUrl: "https://regoui.vercel.app/",
    githubUrl: "https://github.com/rahul-akumar/rego",
    gradient: "bg-radial-[at_-75%_50%] from-emerald-700/40 to-fuchsia-900/20",
    imageSrc: "/cover-1.png",
    metrics: {
      engagement: { label: "Components", value: "30+" },
      satisfaction: { label: "Coverage", value: "95%" },
    },
  },
  {
    id: "abyss",
    title: "Abyss Veil",
    description: "WebGPU based rendering engine with custom shaders.",
    category: "Rendering Engine",
    date: "2025-09-01",
    liveUrl: "https://abyss-veil.vercel.app/",
    githubUrl: "https://github.com/rahul-akumar/abyss",
    gradient: "bg-radial-[at_50%_50%] from-fuchsia-800/40 to-violet-950/20",
    imageSrc: "/cover-1.png",
    metrics: {
      engagement: { label: "Notes", value: "100+" },
      satisfaction: { label: "Usage", value: "100%" },
    },
  },
]);
</script>

<template>
  <section id="community-work" class="min-h-fit flex items-center py-20 px-6 sm:px-8 relative scroll-mt-24">
    <div class="max-w-6xl mx-auto">
      <SectionHeader
        title="Community"
        highlight="Work"
        subtitle="Selected side projects I design, build and maintain — shipping fast, learning faster."
        container-classes="mb-16"
      />

      <div class="projects-container">
        <div class="projects-grid flex flex-col md:flex-row gap-8">
          <WorkCard
            v-for="(project, index) in projects"
            :key="project.id || index"
            :project="project"
            :index="index"
            :gradient-classes="project.gradient"
          />
        </div>
      </div>
    </div>

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-24 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
      <div class="absolute bottom-16 right-8 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
    </div>
  </section>
</template>

<style scoped>
.projects-container {
  position: relative;
}

.project-stack-item {
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-stack-item.animate-stack-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
