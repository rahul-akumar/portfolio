<script setup>
const props = defineProps({
  stack: {
    type: Array,
    default: () => [],
  },
});

const iconMap = {
  // Frameworks
  vue: { icon: "logos:vue", label: "Vue" },
  nuxt: { icon: "logos:nuxt-icon", label: "Nuxt" },
  react: { icon: "logos:react", label: "React" },
  next: { icon: "logos:nextjs-icon", label: "Next.js" },
  svelte: { icon: "logos:svelte-icon", label: "Svelte" },
  excalidraw: { icon: "vscode-icons:file-type-excalidraw", label: "Excalidraw" },
  hotjar: { icon: "logos:hotjar-icon", label: "Hotjar" },
  figma: { icon: "logos:figma", label: "Figma" },
  loom: { icon: "logos:loom-icon", label: "Loom" },
  obsidian: { icon: "logos:obsidian-icon", label: "Obsidian" },
  jira: { icon: "logos:jira", label: "Jira" },
  // Languages
  ts: { icon: "logos:typescript-icon", label: "TypeScript" },
  typescript: { icon: "logos:typescript-icon", label: "TypeScript" },
  js: { icon: "logos:javascript", label: "JavaScript" },
  javascript: { icon: "logos:javascript", label: "JavaScript" },

  // Styling
  tailwind: { icon: "logos:tailwindcss-icon", label: "Tailwind CSS" },
  scss: { icon: "logos:sass", label: "SCSS" },
  css: { icon: "logos:css-3", label: "CSS" },

  // Backend / DB
  node: { icon: "logos:nodejs-icon", label: "Node.js" },
  express: { icon: "logos:express", label: "Express" },
  prisma: { icon: "logos:prisma", label: "Prisma" },
  postgres: { icon: "logos:postgresql", label: "PostgreSQL" },
  mongodb: { icon: "logos:mongodb-icon", label: "MongoDB" },

  // Build / Tools
  vite: { icon: "logos:vitejs", label: "Vite" },
  webpack: { icon: "logos:webpack", label: "Webpack" },
  eslint: { icon: "logos:eslint", label: "ESLint" },
  prettier: { icon: "logos:prettier", label: "Prettier" },

  // Hosting / Platforms
  vercel: { icon: "logos:vercel-icon", label: "Vercel" },
  netlify: { icon: "logos:netlify", label: "Netlify" },
};

function normalizeKey(raw) {
  return String(raw || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

const resolvedItems = computed(() => {
  return (props.stack || [])
    .map((raw) => {
      const key = normalizeKey(raw);
      const known = iconMap[key];
      if (known) {
        return { key, ...known };
      }
      // Fallback: attempt a smart match for common names
      if (key.includes("nuxt"))
        return { key, ...iconMap.nuxt };
      if (key.includes("vue"))
        return { key, ...iconMap.vue };
      if (key.includes("react"))
        return { key, ...iconMap.react };
      if (key.includes("next"))
        return { key, ...iconMap.next };
      if (key.includes("tailwind"))
        return { key, ...iconMap.tailwind };
      if (key.includes("typescript") || key === "ts")
        return { key, ...iconMap.typescript };
      if (key.includes("javascript") || key === "js")
        return { key, ...iconMap.javascript };
      if (key.includes("node"))
        return { key, ...iconMap.node };
      if (key.includes("postgres"))
        return { key, ...iconMap.postgres };
      if (key.includes("mongo"))
        return { key, ...iconMap.mongodb };
      if (key.includes("vercel"))
        return { key, ...iconMap.vercel };
      return { key, icon: "mdi:tools", label: raw };
    });
});
</script>

<template>
  <div v-if="resolvedItems.length" class="w-full overflow-x-auto py-4 bg-black/25 backdrop-blur-xl rounded-2xl">
    <ul class="inline-flex w-full justify-between items-center px-8 py-4">
      <li
        v-for="item in resolvedItems"
        :key="item.key"
        class="shrink-0 flex items-center gap-2"
      >
        <div class="flex justify-between">
          <img v-if="item.iconUrl" :src="item.iconUrl" :alt="`${item.label} logo`" class="w-8 h-8 sm:size-16 object-contain">
          <Icon v-else :name="item.icon" class="w-10 h-10" />
        </div>
      </li>
    </ul>
  </div>
  <div v-else class="text-white/50 text-sm">
    No tech stack listed.
  </div>
</template>

<style scoped>
</style>
