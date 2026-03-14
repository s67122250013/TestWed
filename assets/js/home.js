// home.js — Home page specific interactions

// ── Hero entrance animation ──
window.addEventListener('DOMContentLoaded', () => {
  const heroBg = document.querySelector('.hero-bg-image');
  if (heroBg) {
    setTimeout(() => heroBg.classList.add('loaded'), 100);
  }
});

// ── Parallax on hero grid lines ──
const heroGeo = document.querySelector('.hero-geo');
if (heroGeo) {
  window.addEventListener('scroll', () => {
    heroGeo.style.transform = `translateY(${window.scrollY * 0.12}px)`;
  }, { passive: true });
}

// ── Count-up animation on stats ──
function countUp(el, target, duration = 1800, suffix = '') {
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNums = document.querySelectorAll('.stat-num[data-count]');
      statNums.forEach(el => {
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        countUp(el, target, 1800, suffix);
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.hero-stats');
if (statsEl) statsObserver.observe(statsEl);

// ── Showcase image hover tilt ──
const showcaseMain = document.querySelector('.showcase-img-main');
if (showcaseMain) {
  showcaseMain.addEventListener('mousemove', e => {
    const rect = showcaseMain.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    showcaseMain.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg)`;
  });
  showcaseMain.addEventListener('mouseleave', () => {
    showcaseMain.style.transform = '';
  });
}
