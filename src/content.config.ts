import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const lessons = defineCollection({
  loader: glob({
    pattern: "*/lesson.md",
    base: "./src/content/classes",
    generateId: ({ entry }) => {
      console.log(entry.split("/"));
      return entry.split("/")[0];
    },
  }),
  schema: z.object({ title: z.string() }),
});
const slides = defineCollection({
  loader: glob({
    pattern: "*/slides.md",
    base: "./src/content/classes",
    generateId: ({ entry }) => {
      console.log(entry);
      return entry.split("/")[0];
    },
  }),
});

export const collections = { lessons, slides };
