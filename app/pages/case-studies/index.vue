<script setup>
const { data: items } = await useAsyncData(
  "case-studies-list",
  () => queryCollection("caseStudies")
    .select(["_path", "title", "description", "date", "cover"])
    .order("date", "DESC")
    .all(),
);

function formatDate(raw) {
  const d = new Date(raw);
  if (Number.isNaN(d.getTime()))
    return "";
  return new Intl.DateTimeFormat(undefined, { year: "numeric", month: "long", day: "2-digit" }).format(d);
}

useSeoMeta({
  title: "Case studies",
  description: "In-depth design and development case studies.",
  ogTitle: "Case studies",
  ogDescription: "In-depth design and development case studies.",
});
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <div class="fixed inset-0 pointer-events-none">
      <BlobBackground />
    </div>

    <div class="relative z-10">
      <NavBar />
      <main class="relative">
        <section class="w-full mx-auto px-6 sm:px-8 py-16">
          <SectionHeader
            title="Case"
            highlight="Studies"
            subtitle="In-depth breakdowns of selected projects: goals, process, and outcomes."
          />

          <div v-if="items?.length" class="grid gap-6 sm:gap-8 md:grid-cols-2">
            <NuxtLink
              v-for="post in items"
              :key="post._path"
              :to="post._path"
              class="group rounded-xl border border-white/10 hover:border-white/20 transition-colors p-6 bg-white/5 hover:bg-white/10"
            >
              <div v-if="post.cover" class="mb-4 overflow-hidden rounded-lg">
                <img :src="post.cover" alt="" class="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform">
              </div>
              <h3 class="text-2xl font-semibold mb-2">
                {{ post.title }}
              </h3>
              <p class="text-white/70 line-clamp-2">
                {{ post.description }}
              </p>
              <div v-if="post.date" class="mt-3 text-white/50 text-sm">
                {{ formatDate(post.date) }}
              </div>
            </NuxtLink>
          </div>

          <div v-else class="text-center text-white/70 py-20">
            No case studies yet.
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
</style>
