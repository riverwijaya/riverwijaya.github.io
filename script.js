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
<p>I thought that taking on this project might have been a bad idea. My boss, the founder, put me on a project to help finalize marketing assets more easily within mGanik. As a largely e-commerce-driven company, these digital marketing assets are what drive the business. They influence customer purchases through a strong focus on impressions while optimizing return on ad spend (ROAS).</p>

<p>As part of this project to revamp how marketing assets were made, I was tasked with dealing with a key problem.</p>

<p>The company had over 42TB of raw digital assets consolidated within an internal server. To create certain videos, or re-use old assets, the marketing team had to spend hours finding the exact file. The file-naming conventions were not only inconsistent, but also prone to human error. In practice, those conventions were often only understood by the people who originally shot the video assets, which made it a huge hassle when that exact person was unavailable or had already left the company years earlier.</p>

<p>So what was the solution? Simple: a Digital Asset Management (DAM) system.</p>

<p>Easy enough, right?</p>

<p>All I had to do was gather the team, follow the project management process already in place within the company, and execute.</p>

<p>I wish it had been that easy.</p>

<p>Following up on approvals just to move forward with the idea took ages. Technology team members were also scattered across different projects. I figured that if nothing could move forward at the beginning, I had better take matters into my own hands.</p>

<p>So I learned everything I could through AI, Google searches, documentation, and how-to guides.</p>

<p>I learned how to host a server, obtain secure HTTPS and wildcard certificates, coordinate with the ISP to port-forward access so the system could be reached online, use SSH to manage a container, manage permissions through Linux, set up the SQL back end and logins, understand how volumes within a container connect, and connect a volume to an external server through NFS4.</p>

<p>It was honestly the most intellectually demanding and abstract piece of work I had taken on, but that is also why I am probably proudest of it.</p>

<p>Especially when I showed the completed, working project to my peers and my boss—the gratitude and amazement on their faces is something I will never forget.</p>
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
    id:      "UBC-FINAL",
    title:   "How I led a team to a national final with zero leadership experience.",
    date:    "22/03/2025",
    tags:    ["Business", "Leadership"],
    summary: "A reflection of my journey to the University Business Competition (UBC) national final",
    content: `

<p>I never intended to be a leader. In fact, I had zero experience and even less of an idea of what the role actually required. My motivation was simple: I knew companies valued leadership, and I wanted to see if I could survive outside my comfort zone. I figured since I had no "leadership identity" to protect, I had nothing to lose by failing.</p>

<p>What followed was a journey from a dull first meeting to competing against the top university graduate business teams in the UK. This is the full recount of that journey.</p>

<h3>The Starting Line: Turning Strangers into a Team</h3>

<p>Our university entered six different teams into the Universities Business Challenge (UBC). To advance, we first had to compete in a simulation round against six other teams; only the top two would move on to the next stage.</p>

<p>Our first meeting was the opposite of a movie montage. It was awkward, uninspiring, and quiet. We were six strangers from completely different backgrounds—the UK, Europe, China, and Indonesia. While other teams seemed to be connecting instantly and building chemistry, we were still finding our footing. Ironically, out of the six teams from our university, only ours and one other made it to the next stage.</p>

<p>We had one crucial thing in common: we were there to win. I quickly realized that as a leader, I didn't need to have all the answers; I just needed to facilitate the environment where the answers could be found. I took on the heavy lifting—reading the dense documentation and setting the agenda—so the team could focus on flushing out the details. This allowed me to synthesize their insights into a cohesive strategy.</p>

<h3>The Mechanics of the Challenge</h3>

<p>The UBC wasn't a standard case study; it was a complex business simulation. We were essentially running a company in a digital ecosystem. Every week, we had to manage financial optimization (calculating variable and fixed costs), macro analysis (adjusting pricing based on global news), capital structure (debt vs. equity), and marketing ROI.</p>

<p>We ran intensive Excel calculations, tested our strategy in the early rounds, and held weekly "post-mortems" to analyze what went wrong. By delegating specific areas to team members based on their individual strengths, our strategy slowly became crystal clear.</p>

<h3>The Semi-Finals: Pressure at Nottingham Trent</h3>

<p>After surviving the preliminary rounds, we headed to Nottingham Trent University alongside the other qualifying team from our school. For me, there were two key takeaways from the semi-finals.</p>

<p>First, the environment changed. We were no longer working in the comfort of our own rooms with plenty of time; we were acting under intense, real-life competitive pressure. We had to act quickly, but also with energy and passion. Secondly, I noticed that the other team from our university was academically brilliant and conventionally "perfect"—they got along famously and seemed like the ideal candidates. To be honest, it made me feel a bit insecure. I questioned if we had the right to be there or if we were just lucky.</p>

<p>However, the tasks diversified and pushed us further. We weren't just crunching numbers; we had to be creative. One moment we were running simulations, and the next, we were pitching a creative advertisement for a product we’d just invented. This stage tested our ability to collaborate on the fly and challenged our fundamental perspectives on how a business should communicate.</p>

<h3>The Grand Finale in Southampton</h3>

<p>Against the odds, we made it to the national finals in Southampton. By the time we arrived, my team and I were exhausted. We had outlasted over 100 teams across the UK to get there. We pushed on with everything we had left, but the fatigue was real. Unfortunately, we didn’t secure a top-three placement.</p>

<p>While we didn't take home a trophy, I wouldn’t trade the experience for anything. Reaching the finals felt like a monumental accomplishment. I learned that leadership isn't about being the smartest person in the room—it's about having the courage to set the stage for others to succeed, even when you're learning the rules as you go.</p>
  
    `},

  {
    id:      "graduate-jobs-uk",
    title:   "Getting a Graduate Job in the UK as an International student from a non-target University",
    date:    "21/07/2025",
    tags:    ["Consulting", "Jobs", "Career"],
    summary: "A practical guide to navigating the UK graduate job market, from applications to interviews.",
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


/* =====================================================
   9. TYPEWRITER EFFECT
   Cycles through words in the hero section.
   To change the words, edit the WORDS array below.
===================================================== */

const WORDS = [
  'a Consultant.',
  'a Builder.',
  'a Tech Enthusiast.',
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
