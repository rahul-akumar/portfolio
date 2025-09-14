<template>
  <section id="case-studies" class="py-20 px-6 sm:px-8 min-h-screen relative scroll-mt-24">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <SectionHeader 
        container-classes="mb-16"
        title="Featured" 
        highlight="Case studies"
        subtitle="A collection of projects that showcase my skills in frontend development, UI/UX design, and creative problem-solving."
      />

      <!-- Projects Grid with Scroll Stack Effect -->
      <div class="projects-container">
        <div 
          class="projects-grid flex flex-col gap-8 md:gap-12"
          :class="{
            'flex-cols-1': projects.length === 1,
            'grid-cols-1 md:grid-cols-2': projects.length === 2,
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': projects.length >= 3
          }"
        >
          <div
            v-for="(project, index) in projects"
            :key="project.id || index"
            :data-project-index="index"
            class="project-stack-item"
            :style="{
              '--delay': `${index * 0.1}s`,
              '--stack-offset': `${index * 4}px`
            }"
          >
            <ProjectCard 
              :project="project" 
              :index="index"
              :gradient-classes="project.gradient"
              :image-src="project.imageSrc"
            />
          </div>
        </div>

        
      </div>
    </div>

    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Sample project data - replace with your actual projects
const allProjects = ref([
  {
    id: 1,
    title: "Improving Integration Adoption in Dialpad ecosystem",
    description: "edesigning Dialpad’s sidebar, call pill, and conversation history to surface integrations contextually and increase daily adoption.",
    imageSrc: "/illustrations/integrations.svg",
    technologies: ["Vue.js", "Nuxt", "TypeScript", "Tailwind CSS"],
    category: "Web App",
    date: "2024-01-15",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/subscription-platform",
    gradient: "bg-radial-[at_75%_50%] from-fuchsia-400/50 to-emerald-900/20",
    link: "/case-studies/dialpad-ucaas",
    metrics: {
      engagement: {
        label: "Adoption",
        value: "+ 42%"
      },
      satisfaction: {
        label: "NPS",
        value: "+18"
      }
    }
  },
  {
    id: 2,
    title: "Dialpad CTI",
    description: "Complete overhaul of a complex CTI solution, focusing on 2-way sync and user experience improvements for enterprise clients.",
    imageSrc: "/illustrations/cti.svg",
    technologies: ["React", "D3.js", "TypeScript", "Figma"],
    category: "Web App",
    date: "2023-11-20",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/enterprise-dashboard",
    gradient: "bg-radial-[at_70%_40%] from-sky-400/30 to-indigo-950/20",
    link: "/case-studies/dialpad-cti",
    metrics: {
      engagement: {
        label: "2-way sync",
        value: "100%"
      },
      satisfaction: {
        label: "User Experience",
        value: "+20%"
      }
    }
  },
  {
    id: 3,
    title: "Integration installation experience",
    description: "Redesigning Dialpad’s outdated integration installation experience to improve user discoverability and adoption.",
    imageSrc: "/illustrations/integ-install.svg",
    technologies: ["Next.js", "OpenAI", "PostgreSQL", "Vercel"],
    category: "Web App",
    date: "2024-02-10",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/ai-content-platform",
    gradient: "bg-radial-[at_80%_60%] from-amber-400/30 to-pink-900/20",
    metrics: {
      engagement: {
        label: "Discoverability",
        value: "+20%"
      },
      satisfaction: {
        label: "Adoption",
        value: "+42%"
      }
    }
  }
])

const projects = computed(() => allProjects.value)

// Initialize project animations
onMounted(() => {
  if (process.client) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-stack-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    // Observe all project cards
    setTimeout(() => {
      document.querySelectorAll('.project-stack-item').forEach((item) => {
        observer.observe(item)
      })
    }, 100)
  }
})
</script>

<style scoped>
.projects-container {
  position: relative;
}

.project-stack-item {
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
}

.project-stack-item.animate-stack-in {
  opacity: 1;
  transform: translateY(0);
}

/* Stacking effect on scroll */
.projects-grid {
  perspective: 1000px;
}

.project-stack-item:nth-child(even) {
  transform-origin: bottom left;
}

.project-stack-item:nth-child(odd) {
  transform-origin: bottom right;
}

/* Hover effects removed */

/* Responsive adjustments */
@media (max-width: 768px) {
  .project-stack-item {
    transform: translateY(40px);
  }
  
  .project-stack-item.animate-stack-in {
    transform: translateY(0);
  }
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

</style>
