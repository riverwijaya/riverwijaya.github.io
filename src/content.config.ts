import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    title:       z.string(),
    summary:     z.string(),
    date:        z.string(),          // e.g. "2025-03-19"
    tags:        z.array(z.string()), // e.g. ["Tech", "Learning"]
    draft:       z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
