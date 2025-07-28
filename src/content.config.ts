import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const classes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/classes" }),
  schema: z.object({ title: z.string() }),
});

export const collections = { classes };
