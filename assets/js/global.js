// global.js — Shared interactions across all pages

// ── Custom Cursor ──
const cursor = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');

if (cursor && cursorRing) {
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .exp-card, .dest-card, .food-card, .highlight-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      cursorRing.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursorRing.classList.remove('hover');
    });
  });
}

// ── Progress Bar ──
const progressBar = document.getElementById('progress-bar');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (scrollTop / docHeight) * 100;
    progressBar.style.width = pct + '%';
  }, { passive: true });
}

// ── Navigation scroll effect ──
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ── Set active nav link ──
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('mobile-open');
    if (isOpen) {
      navLinks.classList.remove('mobile-open');
      navLinks.style.cssText = '';
    } else {
      navLinks.classList.add('mobile-open');
      Object.assign(navLinks.style, {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: '72px',
        left: '0',
        right: '0',
        background: 'rgba(8,8,16,0.98)',
        padding: '2rem',
        borderBottom: '1px solid rgba(201,168,76,0.2)',
        gap: '1.2rem',
        backdropFilter: 'blur(20px)',
        animation: 'slideDown 0.3s ease'
      });
    }
  });
}

// ── Scroll-triggered fade animations ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, parseInt(delay));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px 60px 0px' });  // trigger ก่อนเข้าจอ 60px

function initAnimations() {
  document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in').forEach((el) => {
    el.dataset.delay = 10;  // ไม่ delay ตาม index อีกต่อไป
    observer.observe(el);
  });
}

initAnimations();

// ── Parallax on scroll ──
function initParallax() {
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length === 0) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.15;
      const rect = el.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const offset = (centerY - window.innerHeight / 2) * speed;
      el.style.transform = `translateY(${offset}px)`;
    });
  }, { passive: true });
}

initParallax();

// ── Smooth reveal for images ──
document.querySelectorAll('.img-placeholder img').forEach(img => {
  if (img.complete) {
    img.classList.add('loaded');
  } else {
    img.addEventListener('load', () => img.classList.add('loaded'));
  }
});
