import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ── Writing collection ──────────────────────────────
// Each .md file in src/content/writing/ becomes an article.
const writing = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/writing' }),
  schema: z.object({
    title:    z.string(),
    summary:  z.string(),
    date:     z.string(),           // e.g. "2026-03-01"
    tags:     z.array(z.string()),  // e.g. ["Tech", "Learning"]
    readtime: z.string().optional(),// e.g. "8 min"
    image:    z.string().optional(),// e.g. "assets/cover.jpg"
    draft:    z.boolean().optional().default(false),
  }),
});

// ── Projects collection ─────────────────────────────
// Each .md file in src/content/projects/ becomes a project.
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title:    z.string(),
    summary:  z.string(),
    date:     z.string(),           // e.g. "2026" or "2026-03-01"
    tags:     z.array(z.string()),
    image:    z.string().optional(),
    proud:    z.boolean().optional().default(false),
    download: z.string().optional(),// path to downloadable file
    draft:    z.boolean().optional().default(false),
  }),
});

export const collections = { writing, projects };
