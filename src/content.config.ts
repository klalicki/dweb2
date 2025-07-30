import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const lessons = defineCollection({
  loader: glob({ pattern: "*/lesson.md", base: "./src/content/classes" }),
  schema: z.object({ title: z.string() }),
});
const slides = defineCollection({
  loader: glob({ pattern: "*/slides.md", base: "./src/content/classes" }),
});

export const collections = { lessons, slides };
