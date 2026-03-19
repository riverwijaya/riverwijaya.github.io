/* =====================================================
   RIVER PRIMAVERA WIJAYA — script.js
   =====================================================
   TABLE OF CONTENTS
   1.  Articles data        ← ADD YOUR ARTICLES HERE
   2.  Theme toggle
   3.  Custom cursor
   4.  Scroll progress + reveal
   5.  Magnetic buttons
   6.  Page navigation
   7.  Article rendering
   8.  Init
===================================================== */


/* =====================================================
   1. ARTICLES DATA
   =====================================================
   To add a new article, copy the template below and
   paste it into the ARTICLES array. The article will
   automatically appear in the home preview, blog index,
   and be readable as a full page.

   TEMPLATE:
   ─────────────────────────────────────────────────
   {
     id:      "your-unique-slug",          // used in URL-like navigation — no spaces
     title:   "Your Article Title",
     date:    "Mar 2025",
     tags:    ["Tag1", "Tag2"],            // used for filtering on blog page
     summary: "One sentence for the list.",
     content: `
       <p>Your opening paragraph.</p>

       <h2>A section heading</h2>
       <p>More content here.</p>

       <ul>
         <li>A bullet point</li>
         <li>Another point</li>
       </ul>

       <blockquote><p>A pull quote or key insight.</p></blockquote>

       <div class="callout"><p>A highlighted note or tip.</p></div>

       <h2>Another section</h2>
       <p>Keep writing...</p>
     `
   },
   ─────────────────────────────────────────────────
===================================================== */

const ARTICLES = [

  {
    id:      "dam-system-no-code",
    title:   "Building a DAM system with no coding experience",
    date:    "Coming soon",
    tags:    ["Tech", "Learning", "Infrastructure"],
    summary: "How vibe-coding, a lot of Googling, and genuine stubbornness got me from zero to a working self-hosted Digital Asset Management system.",
    content: `
      <p>This article is coming soon.
      <a href="mailto:rivwij@gmail.com" style="color:var(--accent);">Reach out</a>
      if you're curious about the project in the meantime.</p>
    `
  },

  {
    id:      "theory-vs-reality",
    title:   "Theory vs. reality: what business frameworks get wrong about startups",
    date:    "Coming soon",
    tags:    ["Strategy", "Startups", "Consulting"],
    summary: "Building a growth framework from scratch taught me that most models are designed for companies that already know what they are.",
    content: `
      <p>Coming soon. The short version: STP is a good start,
      but it assumes you already know your market. What happens when you don't?</p>
    `
  },

  {
    id:      "getting-into-ee",
    title:   "Getting into electrical engineering as a business person",
    date:    "Coming soon",
    tags:    ["Learning", "Tech"],
    summary: "Why I started, what surprised me, and what Raspberry Pi has to do with understanding the world better.",
    content: `<p>Coming soon. More from the lab (my bedroom) shortly.</p>`
  },

  {
    id:      "weekly-news",
    title:   "This week in business & tech — a running commentary",
    date:    "Coming soon",
    tags:    ["News", "Finance", "Tech"],
    summary: "A recurring series digesting what I've been reading across finance, technology, and global business news.",
    content: `
      <p>First edition coming soon — one article a week,
      3–5 things that caught my attention and why they matter.</p>
    `
  },

];


/* =====================================================
   2. THEME TOGGLE
===================================================== */

function toggleTheme() {
  const html = document.documentElement;
  const btn  = document.getElementById('theme-btn');
  const dark = html.dataset.theme === 'dark';

  html.dataset.theme  = dark ? 'light' : 'dark';
  btn.textContent     = dark ? '☀' : '☾';
  localStorage.setItem('rpw-theme', html.dataset.theme);
}

// restore saved theme on load
(function restoreTheme() {
  const saved = localStorage.getItem('rpw-theme');
  if (!saved) return;
  document.documentElement.dataset.theme = saved;
  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = saved === 'dark' ? '☾' : '☀';
})();


/* =====================================================
   3. CUSTOM CURSOR
===================================================== */

const cursorDot  = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

// dot follows mouse instantly
document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

// ring lags behind with lerp
(function animateRing() {
  ringX += (mouseX - ringX) * 0.11;
  ringY += (mouseY - ringY) * 0.11;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
})();

// expand ring on interactive elements
document.querySelectorAll('a, button, .project-card, .article-row, .interest-tag, .skill-pill, .contact-link').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

// shrink dot on click
document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-click'));


/* =====================================================
   4. SCROLL PROGRESS + REVEAL
===================================================== */

const progressBar = document.getElementById('progress');

function handleScroll() {
  // progress bar
  const doc = document.documentElement;
  const pct = doc.scrollTop / (doc.scrollHeight - doc.clientHeight) * 100;
  progressBar.style.width = pct + '%';

  // reveal elements as they enter the viewport
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll, { passive: true });
setTimeout(handleScroll, 80); // run once on load


/* =====================================================
   5. MAGNETIC BUTTONS
   Buttons physically pull toward the cursor on hover.
===================================================== */

document.querySelectorAll('.btn-primary, .btn-ghost').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width  / 2) * 0.18;
    const y = (e.clientY - r.top  - r.height / 2) * 0.22;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});


/* =====================================================
   6. PAGE NAVIGATION
   Shows/hides .page divs instead of loading new files.
===================================================== */

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + pageId).classList.add('active');
  window.scrollTo(0, 0);

  if (pageId === 'blog') renderBlogList(ARTICLES);
  setTimeout(handleScroll, 100); // re-run reveals after page switch
}

function smoothScroll(sectionId) {
  setTimeout(() => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 60);
}


/* =====================================================
   7. ARTICLE RENDERING
===================================================== */

// builds a single article row for list views
function buildArticleRow(article) {
  return `
    <div class="article-row" onclick="openArticle('${article.id}')">
      <div class="article-date">${article.date.replace(' ', '<br>')}</div>
      <div class="article-content">
        <h3>${article.title}</h3>
        <p>${article.summary}</p>
        <div class="article-tags">
          ${article.tags.map(t => `<span class="article-tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="article-arrow">↗</div>
    </div>
  `;
}

// home page: shows 3 most recent articles
function renderHomePreview() {
  const el = document.getElementById('home-article-list');
  if (el) el.innerHTML = ARTICLES.slice(0, 3).map(buildArticleRow).join('');
}

// blog page: shows all articles, filtered by tag
let activeFilter = 'all';

function renderBlogList(articles) {
  const el = document.getElementById('blog-article-list');
  if (!el) return;

  const filtered = activeFilter === 'all'
    ? articles
    : articles.filter(a => a.tags.includes(activeFilter));

  el.innerHTML = filtered.length
    ? filtered.map(buildArticleRow).join('')
    : `<p style="padding:3rem 0; color:var(--ink-soft); font-size:14px;">No articles in this category yet.</p>`;
}

function filterArticles(tag, btn) {
  activeFilter = tag;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderBlogList(ARTICLES);
}

// open a single article reader page
function openArticle(id) {
  const article = ARTICLES.find(a => a.id === id);
  if (!article) return;

  document.getElementById('art-title').textContent = article.title;
  document.getElementById('art-date').textContent  = article.date;
  document.getElementById('art-tags').innerHTML    = article.tags.map(t => `<span class="article-tag">${t}</span>`).join('');
  document.getElementById('art-prose').innerHTML   = article.content;

  showPage('article');
}


/* =====================================================
   8. INIT
===================================================== */

renderHomePreview();
