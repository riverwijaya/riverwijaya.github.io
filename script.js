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
    title:   "Building an internal DAM system with no coding experience",
    date:    "01/03/2026",
    tags:    ["Tech", "Learning", "Infrastructure"],
    summary: "How vibe-coding, a lot of Googling, and genuine stubbornness got me from zero to a working self-hosted Digital Asset Management system.",
    content: `
      <p> I thought that taking on this project might have been a bad idea. My boss (the founder) put me on a project to help finalized marketing assets much easier within mGanik. As a largely e-commerce-driven company these marketing assets that are digital are what drives the business, what drives customers to purchase their products with a huge focus on driving impressions while optimizing Return on Ad Spend (ROAS).

As part of this project to revamp how marketing assets were made I was tasked with dealing with a key problem.

The company had over 42TB of raw digital assets consolidated within an internal server. To create certain videos, or re-use old assets the marketing team had to spend hours finding the exact file. Mind you, these file-naming conventions aren’t only inconsistent but prone to human error. The file-naming conventions would only really be known by the people who shot these video assets which made it a huge hassle when that exact person wasn’t there or had already left the company for more than a few years. 

So what was the solution? Simple! a Digital Asset Management (DAM) system.

Easy enough right? 

All I had to do was gather the team, follow the project management system process that had already existed within the company and just execute right? 

I wish it was as easy as that. 

Following up on signatures to move forward on just the idea for the project took ages. Technology team members were also scattered and utilized for different projects. I figured that if nothing could move forward in the beginning I’d just better take matters into my own hands. 

So I learnt EVERYTHING I could through AI, Google searches, documentation and how-to-guides.

I learnt how to host a server, obtain secure HTTPS and wildcard certificates, co-ordinate with the ISP to port-forward so that it can be accessible online, how to use SSH to manage a container, manage permissions through linux, how to setup SQL back-end and logins, how volumes within a container can be connected and how to connect a volume with an external server through NFS4.

It was honestly the most intellectually demanding and abstract piece of work that I had to work on but it probably was my most proudest because of that, and for that I am very grateful.

Especially, when I showed the completed, working project to my peers and the boss, the gratefulness and the look of amazement, I will never forget.

      </p>
    `
  },

  {
    id:      "working-in-startups-is-difficult",
    title:   "Why Startups are so hard to work in (and how to survive them)",
    date:    "01/03/2026",
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
  // Use article.image if provided, otherwise show placeholder
  const thumb = article.image
    ? `<div class="article-thumb"><img src="${article.image}" alt="${article.title}" /></div>`
    : `<div class="article-thumb-placeholder">✦</div>`;

  return `
    <div class="article-row" onclick="openArticle('${article.id}')">
      <div class="article-date">${article.date.replace(' ', '<br>')}</div>
      ${thumb}
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


/* =====================================================
   9. TYPEWRITER EFFECT
   Cycles through words in the hero section.
   To change the words, edit the WORDS array below.
===================================================== */

const WORDS = [
  'a Consultant.',
  'a Builder.',
  'a Tech Enthusiast.',
  'always learning.',
];

(function typewriter() {
  const el     = document.getElementById('typewriter-word');
  if (!el) return;

  let wordIdx  = 0;
  let charIdx  = 0;
  let deleting = false;
  const TYPE_SPEED   = 80;
  const DELETE_SPEED = 45;
  const PAUSE_END    = 1800; // ms to wait at end of word
  const PAUSE_START  = 300;  // ms to wait before typing next word

  function tick() {
    const word    = WORDS[wordIdx];
    const current = word.slice(0, charIdx);
    el.textContent = current;

    if (!deleting) {
      if (charIdx < word.length) {
        charIdx++;
        setTimeout(tick, TYPE_SPEED);
      } else {
        // finished typing — pause then start deleting
        setTimeout(() => { deleting = true; tick(); }, PAUSE_END);
      }
    } else {
      if (charIdx > 0) {
        charIdx--;
        setTimeout(tick, DELETE_SPEED);
      } else {
        // finished deleting — move to next word
        deleting = false;
        wordIdx  = (wordIdx + 1) % WORDS.length;
        setTimeout(tick, PAUSE_START);
      }
    }
  }

  tick();
})();
