<script setup>
import { computed, onMounted, ref } from "vue";

// Sample project data - replace with your actual projects
const allProjects = ref([
  {
    id: 1,
    title: "Increasing integration adoption in Dialpad ecosystem",
    description: "A first principles redesign of how integrations surface inside Dialpad by aligning them to user workflows across discovery, in-flow action, and post-call review.",
    imageSrc: "/illustrations/integrations.svg",
    gradient: "bg-radial-[at_75%_50%] from-fuchsia-400/50 to-emerald-900/20",
    shadowClass: "hover:shadow-fuchsia-950/50",
    link: "/showcase/dialpad-ucaas",
    caseStudyLink: "/case-studies/dialpad-ucaas",
    metrics: {
      engagement: {
        label: "Adoption",
        value: "+ 38%",
      },
      satisfaction: {
        label: "NPS",
        value: "+18",
      },
    },
  },
  {
    id: 2,
    title: "Dialpad CTI overhaul",
    description: "Complete overhaul of Dialpad's CTI solution, focusing on user experience improvements for enterprise clients.",
    imageSrc: "/illustrations/cti.svg",
    gradient: "bg-radial-[at_70%_40%] from-sky-400/30 to-indigo-950/20",
    shadowClass: "hover:shadow-indigo-950/35",
    link: "/showcase/dialpad-cti",
    caseStudyLink: "/case-studies/dialpad-cti",
    metrics: {
      engagement: {
        label: "Adoption",
        value: "+76%",
      },
      satisfaction: {
        label: "Task Completion",
        value: "+31%",
      },
    },
  },
  {
    id: 3,
    title: "Call bar visual updates",
    description: "Redesigning Dialpad’s outdated calling experience to improve user experience.",
    imageSrc: "/illustrations/integ-install.svg",
    gradient: "bg-radial-[at_80%_60%] from-amber-400/30 to-pink-900/20",
    shadowClass: "hover:shadow-amber-950/35",
    link: "/showcase/dialpad-call-bar",
    caseStudyLink: "/case-studies/dialpad-call-bar",
    metrics: {
      engagement: {
        label: "Discoverability",
        value: "+15%",
      },
      satisfaction: {
        label: "Time to action",
        value: "+21%",
      },
    },
  },
]);

const projects = computed(() => allProjects.value);

// Initialize project animations
onMounted(() => {
  if (import.meta.client) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-stack-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    // Observe all project cards
    setTimeout(() => {
      document.querySelectorAll(".project-stack-item").forEach((item) => {
        observer.observe(item);
      });
    }, 100);
  }
});
</script>

<template>
  <section id="showcase" class="py-20 px-6 sm:px-8 min-h-screen relative scroll-mt-24">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <SectionHeader
        container-classes="mb-16"
        title="Project"
        highlight="Showcase"
        subtitle="Projects that showcase my skills in creative problem-solving, design and execution."
      />

      <!-- Projects Grid with Scroll Stack Effect -->
      <div class="projects-container">
        <div
          class="projects-grid flex flex-col gap-8 md:gap-12"
          :class="{
            'flex-cols-1': projects.length === 1,
            'grid-cols-1 md:grid-cols-2': projects.length === 2,
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': projects.length >= 3,
          }"
        >
          <div
            v-for="(project, index) in projects"
            :key="project.id || index"
            :data-project-index="index"
            class="project-stack-item"
            :style="{
              '--delay': `${index * 0.1}s`,
              '--stack-offset': `${index * 4}px`,
            }"
          >
            <ProjectCard
              :project="project"
              :index="index"
              :gradient-classes="project.gradient"
              :image-src="project.imageSrc"
              :shadow-class="project.shadowClass"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
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
