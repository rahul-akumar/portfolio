<script setup>
const route = useRoute();

// Normalize any accidental duplicate segment in the URL
if (import.meta.client) {
  watchEffect(() => {
    const cur = route.params.slug;
    const asString = Array.isArray(cur) ? cur.join("/") : (cur || "");
    if (asString.startsWith("case-studies/")) {
      const normalized = asString.replace(/^case-studies\//, "");
      navigateTo(`/case-studies/${normalized}`, { replace: true });
    }
  });
}

const { data: doc } = await useAsyncData(
  () => route.path,
  () => queryCollection("caseStudies").path(route.path).first(),
);

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: "Case study not found" });
}

useSeoMeta({
  title: doc.value?.title ? `${doc.value.title} — Case study` : "Case study",
  description: doc.value?.description,
  ogTitle: doc.value?.title,
  ogDescription: doc.value?.description,
  ogType: "article",
});

const formattedDate = computed(() => {
  const raw = doc.value?.date;
  if (!raw)
    return "";
  const d = new Date(raw);
  if (Number.isNaN(d.getTime()))
    return "";
  return new Intl.DateTimeFormat(undefined, { year: "numeric", month: "long", day: "2-digit" }).format(d);
});
</script>

<template>
  <div class="h-full bg-black text-white">
    <div class="fixed inset-0 pointer-events-none">
      <GlassBg />
    </div>
    <div class="relative z-10">
      <NavBar />
      <main class="relative">
        <article class="w-full p-8 sm:w-xl md:w-2xl lg:w-3xl items-center flex flex-col gap-20 mt-20 mx-auto sm:px-8">
          <header v-if="doc" class="flex flex-col gap-2">
            <h1 class="text-4xl sm:text-5xl lg:text-5xl font-semibold leading-tight mb-4">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-fuchsia-300 to-amber-400">{{ doc.title }}</span>
            </h1>
            <p v-if="doc.description" class="text-white/70 text-base leading-loose max-w-3xl">
              {{ doc.description }}
            </p>
            <div v-if="formattedDate" class="mt-4 text-white/50 text-sm">
              {{ formattedDate }}
            </div>
          </header>

          <div v-if="doc?.cover" class="">
            <ProseImg :src="doc.cover" alt="" class="w-full lg:h-80 rounded-4xl shadow-lg object-contain" />
          </div>

          <div v-if="doc?.stack?.length" class="flex flex-col gap-0 w-full">
            <StackBar :stack="doc.stack" />
          </div>

          <section v-if="doc?.problem || doc?.solution || doc?.metrics" class="hidden">
            <div class="flex flex-col gap-8">
              <div v-if="doc?.problem" class="p-8 bg-black/25 backdrop-blur-3xl rounded-4xl">
                <h3 class="text-white font-semibold text-3xl mb-2">
                  Problem
                </h3>
                <p class="text-white/70 whitespace-pre-line">
                  {{ doc.problem }}
                </p>
              </div>
            </div>
          </section>

          <div v-if="doc" class="content-body">
            <ContentRenderer :value="doc" :components="{ img: 'ProseImg' }" />
          </div>

          <div v-else class="text-center text-white/70 py-20">
            Loading…
          </div>
        </article>
      </main>
    </div>
  </div>
</template>

<style scoped>
span {
  font-family: "Lora", serif;
}

.content-body {
  width: 100%;
  text-align: left;
}

.content-body :deep(h1) {
  font-family: "Lora", serif;
  font-size: 2.5rem;
  font-weight: 600;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  width: fit-content;
  background: linear-gradient(to right, #38bdf8, #f0abfc, #fbbf24);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
/* h2 - Major sections (numbered items like "1. Users did not know...") */
.content-body :deep(h2:not([class])) {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin-top: 3rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  text-align: left;
}

/* h3 - Subsections (like "Sidebar Redesign") */
.content-body :deep(h3) {
  font-size: 1.125rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

/* Paragraphs - better breathing room */
.content-body :deep(p) {
  color: rgba(255, 255, 255, 0.75);
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  line-height: 1.7;
}

.content-body :deep(a) {
  color: rgba(255, 255, 255, 0.8);
}

.content-body :deep(ul),
.content-body :deep(ol) {
  margin: 0rem 0 1rem 0rem;
  list-style: disc inside;
}
/* Lists - tighter item spacing */
.content-body :deep(li) {
  margin-bottom: 0.5rem;
}

.content-body :deep(code) {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.15rem 0.35rem;
  border-radius: 0.25rem;
}

.content-body :deep(pre) {
  background: rgba(255, 255, 255, 0.06);
  padding: 1rem;
  border-radius: 0.5rem;
  overflow: auto;
}

.content-body :deep(img) {
  margin-bottom: 2rem;
}
</style>
