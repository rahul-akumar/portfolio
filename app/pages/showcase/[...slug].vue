<script setup>
const route = useRoute();

// Normalize any accidental duplicate segment in the URL
if (import.meta.client) {
  watchEffect(() => {
    const cur = route.params.slug;
    const asString = Array.isArray(cur) ? cur.join("/") : (cur || "");
    if (asString.startsWith("showcase/")) {
      const normalized = asString.replace(/^showcase\//, "");
      navigateTo(`/showcase/${normalized}`, { replace: true });
    }
  });
}

// Map /showcase/slug to /case-studies/slug for content lookup
const contentPath = computed(() => {
  const slug = Array.isArray(route.params.slug) ? route.params.slug.join("/") : (route.params.slug || "");
  return `/case-studies/${slug}`;
});

const { data: doc } = await useAsyncData(
  () => route.path,
  () => queryCollection("caseStudies").path(contentPath.value).first(),
);

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: "Showcase item not found" });
}

useSeoMeta({
  title: doc.value?.title ? `${doc.value.title} — Showcase` : "Showcase",
  description: doc.value?.description,
  ogTitle: doc.value?.title,
  ogDescription: doc.value?.description,
  ogType: "article",
});

const showcase = computed(() => doc.value?.showcase);
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <div class="fixed inset-0 pointer-events-none">
      <GlassBg />
    </div>
    <div class="relative z-10">
      <NavBar />
      <main class="relative">
        <article class="w-full p-8 sm:w-xl md:w-2xl lg:w-3xl items-center flex flex-col gap-12 mt-20 mx-auto sm:px-8">
          <!-- Header -->
          <header v-if="doc" class="flex flex-col gap-4 w-full">
            <h1 class="text-4xl sm:text-4xl lg:text-4xl font-semibold leading-tight">
              <span class="gradient-text">{{ doc.title }}</span>
            </h1>
            <p v-if="doc.description" class="text-white/70 text-base leading-loose max-w-3xl">
              {{ doc.description }}
            </p>
          </header>

          <!-- Showcase Content -->
          <div v-if="showcase" class="w-full flex flex-col gap-10">
            <!-- Problem -->
            <div v-if="showcase.problem?.length" class="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 class="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
                Problem
              </h3>
              <ul class="flex flex-col gap-3">
                <li v-for="(point, index) in showcase.problem" :key="index" class="flex gap-3">
                  <span class="text-white/30 leading-relaxed shrink-0">•</span>
                  <span class="text-white/80 leading-relaxed">{{ point }}</span>
                </li>
              </ul>
            </div>

            <!-- Solution -->
            <div v-if="showcase.solution?.length" class="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 class="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
                Solution
              </h3>
              <ul class="flex flex-col gap-3">
                <li v-for="(point, index) in showcase.solution" :key="index" class="flex gap-3">
                  <span class="text-white/30 leading-relaxed shrink-0">•</span>
                  <span class="text-white/80 leading-relaxed">{{ point }}</span>
                </li>
              </ul>
            </div>

            <!-- Impact -->
            <div v-if="showcase.impact?.length" class="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 class="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
                Impact
              </h3>
              <ul class="flex flex-col gap-3">
                <li v-for="(point, index) in showcase.impact" :key="index" class="flex gap-3">
                  <span class="text-white/30 leading-relaxed shrink-0">•</span>
                  <span class="text-white/80 leading-relaxed">{{ point }}</span>
                </li>
              </ul>
            </div>

            <!-- Role -->
            <div v-if="showcase.role?.length" class="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 class="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
                Role
              </h3>
              <ul class="flex flex-col gap-3">
                <li v-for="(point, index) in showcase.role" :key="index" class="flex gap-3">
                  <span class="text-white/30 leading-relaxed shrink-0">•</span>
                  <span class="text-white/80 leading-relaxed">{{ point }}</span>
                </li>
              </ul>
            </div>

            <!-- Design Decisions -->
            <div v-if="showcase.designDecisions?.length" class="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 class="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
                Design Decisions
              </h3>
              <ul class="flex flex-col gap-3">
                <li v-for="(point, index) in showcase.designDecisions" :key="index" class="flex gap-3">
                  <span class="text-white/30 leading-relaxed shrink-0">•</span>
                  <span class="text-white/80 leading-relaxed">{{ point }}</span>
                </li>
              </ul>
            </div>

            <!-- Images Gallery -->
            <div v-if="showcase.images?.length" class="flex flex-col gap-6">
              <h3 class="text-lg font-medium text-white/70">
                Design Highlights
              </h3>
              <div class="flex flex-col gap-6">
                <div
                  v-for="(image, index) in showcase.images"
                  :key="index"
                  class="overflow-hidden rounded-2xl"
                >
                  <ProseImg
                    :src="image.src"
                    :alt="image.alt"
                    class="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Fallback if no showcase data -->
          <div v-else-if="doc" class="text-center text-white/50 py-12">
            <p>Showcase details coming soon.</p>
          </div>
        </article>
      </main>
    </div>
  </div>
</template>

<style scoped>
.gradient-text {
  font-family: "Lora", serif;
  background: linear-gradient(to right, #38bdf8, #f0abfc, #fbbf24);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
