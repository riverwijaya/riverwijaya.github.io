# River Primavera Wijaya — Portfolio

Built with [Astro](https://astro.build). Content-first design. Auto-deploys to GitHub Pages on every push.

---

## Setup

```bash
npm install   # install dependencies
npm run dev   # local dev at http://localhost:4321
```

---

## Publishing content

### New article
Create `src/content/writing/your-slug.md`:

```markdown
---
title: "Your Article Title"
summary: "One sentence shown in the feed."
date: "2026-04-01"
tags: ["Tech", "Learning"]
readtime: "5 min"
draft: false
---

Your content here. Write in normal Markdown.

## Section heading

Paragraph text. **Bold** and *italic* work.

- Bullet point
- Another point

> A blockquote for pull quotes.
```

### New project
Create `src/content/projects/your-slug.md`:

```markdown
---
title: "Project Title"
summary: "One sentence shown in the feed."
date: "2026-04-01"
tags: ["Infrastructure"]
proud: true            # optional — shows "Most proud" badge
download: "/assets/file.pdf"  # optional — adds download button
draft: false
---

How you built it...
```

### Adding images
Put images in `public/assets/`. Reference them as `/assets/filename.jpg`.

To add a cover image to any post, add to frontmatter:
```
image: "/assets/your-image.jpg"
```

---

## Folder structure

```
src/
  content/
    writing/     ← .md files for articles
    projects/    ← .md files for projects
  pages/
    index.astro          ← home (profile + feed)
    writing/index.astro  ← writing list
    writing/[id].astro   ← article reader
    projects/index.astro ← projects list
    projects/[id].astro  ← project reader
    about.astro          ← about page
  layouts/
    BaseLayout.astro     ← nav, footer, cursor, scripts
  styles/
    global.css           ← all CSS (change colours here)
public/
  assets/                ← images, logos, downloadable files
.github/workflows/
  deploy.yml             ← auto-deploy to GitHub Pages
```

---

## Changing things

| What | Where |
|---|---|
| Colours / fonts | `src/styles/global.css` — top section |
| Bio / about text | `src/pages/about.astro` |
| Profile photo | `public/assets/photo.jpg.png` |
| Site URL | `astro.config.mjs` |
| Typewriter words | `src/layouts/BaseLayout.astro` — `WORDS` array |

---

## Deploy

1. Push to `Onchch.github.io` repo
2. GitHub → Settings → Pages → Source → **GitHub Actions**
3. Every push auto-deploys in ~60 seconds
