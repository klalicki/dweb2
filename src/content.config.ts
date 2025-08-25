import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const resources = defineCollection({
  loader: glob({
    pattern: "*/article.md",
    base: "./src/content/resources",
    generateId: ({ entry }) => {
      console.log(entry.split("/"));
      return entry.split("/")[0];
    },
  }),
  schema: z.object({ title: z.string() }),
});

const lessons = defineCollection({
  loader: glob({
    pattern: "*/lesson.md",
    base: "./src/content/classes",
    generateId: ({ entry }) => {
      console.log(entry.split("/"));
      return entry.split("/")[0];
    },
  }),
  schema: z.object({ title: z.string(), date: z.date({ coerce: true }) }),
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

const assignments = defineCollection({
  loader: glob({
    pattern: "**/homework-*.md",
    base: "./src/content/classes",
    generateId: ({ entry }) => {
      console.log(entry);
      return entry.replaceAll("/", "_");
    },
  }),
  schema: z.object({
    title: z.string(),
    project: reference("projects").optional(),
    due: z.date({ coerce: true }),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  resources,
  lessons,
  slides,
  assignments,
  projects,
};
