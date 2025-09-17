<script setup>
import { onMounted, ref } from "vue";

const experiences = ref([
  {
    id: "Dialpad",
    company: "Dialpad",
    role: "Senior Product Designer",
    startDate: "2023-10-01",
    location: "Remote, USA",
    description: "Led design for UCaaS, CTI, and CCaaS products, design system, and developer experience.",
    highlights: [
      "Increased integration adoption with better onboarding and docs",
      "Introduced design system tokens for product consistency",
      "Redesigned CTI improving 2-way sync and enterprise usability",
      "Shipped new integration install experience increasing adoption",
    ],
    companyUrl: "https://www.dialpad.com/",
    gradient: "bg-radial-[at_75%_50%] from-purple-500/25 to-yellow-900/10",
  },
  {
    id: "Airtel",
    company: "Airtel",
    role: "Lead Product Designer",
    startDate: "2021-08-30",
    endDate: "2023-10-30",
    location: "Remote, India",
    description: "Owned WFM, B2B payments, and CPaaS platform.",
    highlights: [
      "Led design for Airtel Thanks for Business (B2B payments) and Airtel Work (workforce mgmt).",
      "Co-created Airtel IQ, the world’s first telco-integrated CPaaS platform.",
      "Scaled design operations, improving efficiency and consistency across teams.",
    ],
    companyUrl: "https://www.airtel.com/",
    gradient: "bg-radial-[at_25%_50%] from-red-400/25 to-amber-900/10",
  },
  {
    id: "Verizon",
    company: "Verizon",
    role: "Senior Product Designer",
    startDate: "2020-03-01",
    endDate: "2021-08-30",
    location: "Remote, USA",
    description: "Designed Universal Cart, OPTG, and Adaptive Authentication.",
    highlights: [
      "Designed Universal Cart and OPTG (support hub) to improve multi-channel UX.",
      "Owned Adaptive Authentication, enhancing user security and frictionless access.",
      "Conducted research and testing to align product with real user needs.",
    ],
    companyUrl: "https://www.verizon.com/",
    gradient: "bg-radial-[at_25%_50%] from-rose-400/25 to-indigo-900/10",
  },
  {
    id: "Grant Thornton",
    company: "Grant Thornton",
    role: "Design Consultant",
    startDate: "2017-07-01",
    endDate: "2020-03-01",
    location: "Gurgaon, India",
    description: "Led design strategy and UX research for digital transformation projects.",
    highlights: [
      "Led design strategy and UX research for digital transformation projects.",
      "Supported the National Digital CoE with scalable design practices.",
      "Embedded design thinking into client engagements across sectors.",
    ],
    companyUrl: "https://www.grantthornton.com/",
    gradient: "bg-radial-[at_25%_50%] from-violet-400/25 to-emerald-900/10",
  },
  {
    id: "GlobalLogic",
    company: "GlobalLogic",
    role: "Product Designer",
    startDate: "2014-06-01",
    endDate: "2017-06-30",
    location: "Delhi, India",
    description: "Learned how design can be used to solve real-world enterprise problems.",
    highlights: [
      "Designed enterprise software from concept to prototype.",
      "Presented design solutions to stakeholders across global teams.",
      "Conducted user testing and integrated findings into design iterations.",
    ],
    companyUrl: "https://www.globallogic.com/",
    gradient: "bg-radial-[at_25%_50%] from-orange-400/25 to-green-900/10",
  },
]);

const isVisible = ref(false);
const containerRef = ref(null);

if (import.meta.client) {
  onMounted(() => {
    const el = containerRef.value;
    if (!el)
      return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        isVisible.value = true;
        observer.unobserve(el);
      }
    }, {
      threshold: 0.1,
    });

    observer.observe(el);
  });
}
</script>

<template>
  <section id="experience" class="py-20 px-6 sm:px-12 relative scroll-mt-24">
    <div class="max-w-6xl mx-auto">
      <SectionHeader
        title="Professional"
        highlight="Experience"
        subtitle="A snapshot of roles where I led product, design, and front-end execution."
        container-classes="mb-16"
      />

      <div
        ref="containerRef"
        class="flex group flex-col sm:px-12 px-6 py-0 sm:py-4 bg-gradient-to-br from-cyan-800/25 via-lime-500/10 to-fuchsia-800/25 rounded-4xl border border-white/10 backdrop-blur-3xl"
        :class="[{ 'animate-fade-in-up': isVisible }]"
      >
        <ExperienceCard
          v-for="(exp, index) in experiences"
          :key="exp.id || index"
          :experience="exp"
          :index="index"
          :gradient-classes="exp.gradient"
        />
      </div>
    </div>

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-24 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
      <div class="absolute bottom-16 right-8 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
</style>
