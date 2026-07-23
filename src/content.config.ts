import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const talks = defineCollection({
  loader: file("src/data/talks.json"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    url: z.string().url(),
    // Featured talks get the highlighted treatment; badge labels the occasion.
    featured: z.boolean().default(false),
    badge: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: file("src/data/projects.json"),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
    // Rendered as small chips under the description; keep them short.
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { talks, projects };
