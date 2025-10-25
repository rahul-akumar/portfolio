<script setup>
import { ref } from "vue";

const tools = ref([
    {
        name: "Excalidraw",
        icon: "vscode-icons:file-type-excalidraw",
        iconEmoji: "🧩",
        category: "Design Tool",
        description:
            "Excalidraw is a free, open-source drawing tool for sketches and diagrams.",
        tags: ["Whiteboard", "Diagrams"],
        gradient: "bg-radial-[at_75%_50%] from-purple-400/40 to-sky-900/20",
        span: "md:col-span-4",
        link: "https://excalidraw.com/",
    },
    {
        name: "Miro",
        icon: "logos:miro-icon",
        iconEmoji: "🎧",
        category: "Collaborative Tool",
        description:
            "Miro is a collaborative whiteboard tool for creating diagrams and mind maps.",
        tags: ["Collaborative", "Whiteboard"],
        gradient: "bg-radial-[at_80%_50%] from-amber-400/35 to-amber-900/20",
        span: "md:col-span-4",
        link: "https://www.miro.com/",
    },
    {
        name: "Figma",
        icon: "logos:figma",
        iconEmoji: "✨",
        category: "Design Tool",
        description:
            "Figma is a cloud-based design tool for collaboration and prototyping.",
        tags: ["Design", "Prototype", "Collaboration"],
        gradient:
            "bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-red-500/40",
        span: "md:col-span-4",
        link: "https://www.figma.com/",
    },
    {
        name: "Warp",
        icon: "simple-icons:warp",
        iconEmoji: "🖥️",
        category: "ADE",
        description:
            "Warp is a modern, GPU-accelerated terminal with AI features.",
        tags: ["Generating code", "AI"],
        gradient: "bg-radial-[at_50%_50%] from-slate-600/40 to-fuchsia-950/20",
        span: "md:col-span-6",
        link: "https://www.warp.dev/",
    },
    {
        name: "Zed",
        icon: "simple-icons:zedindustries",
        iconEmoji: "⚡",
        category: "IDE",
        description:
            "Zed is a modern, fast, and secure code editor for the modern web.",
        tags: ["Coding"],
        gradient: "bg-radial-[at_75%_60%] from-zinc-400/40 to-zinc-900/20",
        span: "md:col-span-6",
        link: "https://www.cursor.com/",
    },
    {
        name: "Zen",
        icon: "simple-icons:zenbrowser",
        iconEmoji: "💬",
        category: "Browser",
        description:
            "Zen is a modern, fast, and secure browser for the modern web.",
        tags: ["Browser", "Developer Tools"],
        gradient: "bg-gradient-to-tr from-indigo-500/35 to-rose-500/25",
        span: "md:col-span-3",
        link: "https://arc.net/",
    },
    {
        name: "Hotjar",
        icon: "logos:hotjar-icon",
        iconEmoji: "🔍",
        category: "Analytics",
        description:
            "Hotjar is a heatmap and session replay tool for analyzing user behavior.",
        tags: ["Analytics", "Heatmap", "Session Replay"],
        gradient: "bg-radial-[at_80%_50%] from-orange-400/25 to-orange-900/50",
        span: "md:col-span-3",
        link: "https://www.hotjar.com/",
    },
    {
        name: "Loom",
        icon: "logos:loom-icon",
        iconEmoji: "🎥",
        category: "Video",
        description:
            "Loom is a video recording tool for creating tutorials and demos.",
        tags: ["Video", "Collaboration"],
        gradient: "bg-radial-[at_80%_50%] from-purple-400/35 to-purple-950/50",
        span: "md:col-span-3",
        link: "https://www.loom.com/",
    },
    {
        name: "Obsidian",
        icon: "logos:obsidian-icon",
        iconEmoji: "🧠",
        category: "Note-taking",
        description:
            "Obsidian is a modern, fast, and secure note-taking tool for the modern web.",
        tags: ["Note-taking", "Documentation"],
        gradient: "bg-radial-[at_80%_60%] from-violet-400/40 to-indigo-900/20",
        span: "md:col-span-3",
        link: "https://obsidian.md/",
    },
]);
</script>

<template>
    <section id="tools" class="py-20 px-6 sm:px-8 relative scroll-mt-24">
        <div class="max-w-6xl mx-auto">
            <!-- Header -->
            <SectionHeader
                title="Favorite"
                highlight="Tools"
                subtitle="Tools, frameworks, libraries, and services I reach for daily."
            />

            <!-- Bento Grid -->
            <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[1fr]"
            >
                <div
                    v-for="(tool, index) in tools"
                    :key="tool.name + index"
                    class="col-span-1 md:col-span-3"
                    :class="[tool.span]"
                >
                    <ToolCard
                        :tool="tool"
                        :index="index"
                        :gradient-classes="tool.gradient"
                    />
                </div>
            </div>
        </div>

        <!-- Background decoration -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div
                class="absolute -top-10 -left-10 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl"
            />
            <div
                class="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"
            />
        </div>
    </section>
</template>
