// ─── NAVBAR SCROLL + ACTIVE SECTION ─────────────────────────────────────────
const navbar  = document.getElementById('navbar');
const navLinkEls = document.querySelectorAll('.nav-link');
const sections   = document.querySelectorAll('section[id]');

function updateNav() {
  navbar.classList.toggle('scrolled', window.scrollY > 60);

  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 110) current = sec.id;
  });

  navLinkEls.forEach(a =>
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`)
  );
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ─── MOBILE MENU ──────────────────────────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navLinks');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });

  navMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// ─── TYPEWRITER ───────────────────────────────────────────────────────────────
const typeEl = document.getElementById('typewriter');

if (typeEl) {
  const roles = [
    'Telecom Engineering Student',
    'IoT & Embedded Developer',
    'Edge-Cloud Architect',
    'Network Protocol Enthusiast'
  ];

  let roleIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const role = roles[roleIdx];

    if (!deleting) {
      typeEl.textContent = role.slice(0, ++charIdx);
      if (charIdx === role.length) {
        deleting = true;
        setTimeout(type, 2400);
        return;
      }
    } else {
      typeEl.textContent = role.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }

    setTimeout(type, deleting ? 48 : 88);
  }

  setTimeout(type, 900);
}

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ─── ANIMATED COUNTERS ────────────────────────────────────────────────────────
function animateCounter(el) {
  const target   = +el.dataset.count;
  const duration = 1300;
  const start    = performance.now();

  (function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 4); // ease-out quart
    el.textContent = Math.round(eased * target);
    if (p < 1) requestAnimationFrame(tick);
  })(start);
}

const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number[data-count]').forEach(el =>
  counterObs.observe(el)
);

// ─── PROJECT FILTER ───────────────────────────────────────────────────────────
const filterBtns  = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const cats    = card.dataset.categories || '';
      const visible = filter === 'all' || cats.split(' ').includes(filter);
      card.classList.toggle('hidden', !visible);
    });
  });
});
