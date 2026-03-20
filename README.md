# River Primavera Wijaya — Portfolio & Blog

Built with [Astro](https://astro.build). Posts written in Markdown. Auto-deploys to GitHub Pages on every push.

---

## Setup (one-time)

You need [Node.js](https://nodejs.org) (v18+) installed.

```bash
# 1. Install dependencies
npm install

# 2. Start local dev server
npm run dev
# → Site live at http://localhost:4321
```

---

## Publishing a new article

1. Create a new file in `src/content/blog/`:

```
src/content/blog/your-article-slug.md
```

2. Add this to the top of the file (the "frontmatter"):

```markdown
---
title: "Your Article Title"
summary: "One sentence description shown in the article list."
date: "2025-04-01"
tags: ["Tech", "Learning"]
draft: false
---

Your article content starts here.

## A section heading

Write in normal Markdown. All the usual formatting works:

- Bullet points
- **Bold text**
- *Italic text*
- [Links](https://example.com)

## Another section

Keep writing...
```

3. Save the file. It instantly appears in local dev.

4. Push to GitHub → site auto-deploys in ~60 seconds via GitHub Actions.

---

## Folder structure

```
rpw-portfolio/
├── src/
│   ├── content/
│   │   └── blog/           ← YOUR POSTS GO HERE (.md files)
│   ├── layouts/
│   │   └── BaseLayout.astro   ← shared nav, footer, fonts
│   ├── pages/
│   │   ├── index.astro        ← home page
│   │   ├── blog/
│   │   │   └── index.astro    ← blog listing page
│   │   └── posts/
│   │       └── [id].astro     ← single post template
│   └── styles/
│       └── global.css         ← all CSS / colours
├── .github/
│   └── workflows/
│       └── deploy.yml         ← auto-deploy to GitHub Pages
├── astro.config.mjs
└── package.json
```

---

## Changing things

| What you want to change | Where to edit |
|---|---|
| Colours / fonts | `src/styles/global.css` — top section (CSS variables) |
| Bio / about text | `src/pages/index.astro` — About section |
| Projects | `src/pages/index.astro` — Projects section |
| Skills | `src/pages/index.astro` — Skills section |
| Contact links | `src/pages/index.astro` — Contact section |
| Nav links | `src/layouts/BaseLayout.astro` |
| Site URL | `astro.config.mjs` |

---

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo named `Onchch.github.io`
2. Go to repo **Settings → Pages → Source → GitHub Actions**
3. Push any commit — GitHub Actions builds and deploys automatically
4. Your site is live at `https://onchch.github.io`

To use a custom domain, add your domain to `astro.config.mjs`:
```js
site: 'https://yourdomainhere.com'
```
Then follow the GitHub Pages custom domain setup.
