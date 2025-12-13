import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "content/*.md",
      schema: z.object({
        date: z.string(),
      }),
    }),
    caseStudies: defineCollection({
      type: "page",
      source: "case-studies/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        problem: z.string().optional(),
        results: z.string().optional(),
        process: z.string().optional(),
        metrics: z.string().optional(),
        conclusion: z.string().optional(),
        date: z.string().optional(),
        cover: z.string().optional(),
        tags: z.array(z.string()).optional(),
        stack: z.array(z.string()).optional(),
        showcase: z.object({
          problem: z.array(z.string()),
          solution: z.array(z.string()),
          impact: z.array(z.string()),
          role: z.array(z.string()),
          designDecisions: z.array(z.string()).optional(),
          images: z.array(z.object({
            src: z.string(),
            alt: z.string(),
          })).optional(),
        }).optional(),
      }),
    }),
  },
});
