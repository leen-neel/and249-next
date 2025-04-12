import { defineCollection, z, defineContentConfig } from "@nuxt/content";

const projectCollection = z.object({
  title: z.string(),
  url: z.string(),
  tags: z.array(z.string()),
  isClient: z.boolean(),
  image: z.string(),
});

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      source: "projects/*.md",
      type: "data",
      schema: projectCollection,
    }),
  },
});
