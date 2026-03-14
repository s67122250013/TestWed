// destinations.js — All 7 emirates interactions

// ── Smooth scroll helper ──
function scrollTo(id) {
  const target = document.getElementById(id);
  if (target) {
    const offset = target.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
}

// ── Anchor links smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href').replace('#', '');
    scrollTo(id);
  });
});

// ── Active nav button on scroll ──
const sections = document.querySelectorAll('.dest-section[id]');
const navBtns = document.querySelectorAll('.emir-nav-btn');
const pills = document.querySelectorAll('.emir-pill[href]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 180) current = sec.id;
  });

  navBtns.forEach(btn => {
    const targets = ['dubai','abudhabi','sharjah','rak','ajman','fujairah','uaq'];
    const idx = Array.from(navBtns).indexOf(btn);
    btn.classList.toggle('active', targets[idx] === current);
  });

  pills.forEach(pill => {
    pill.classList.toggle('emir-pill--active', pill.getAttribute('href') === '#' + current);
  });
}, { passive: true });

// ── Hover parallax on visual boxes ──
document.querySelectorAll('.dest-visual-box').forEach(box => {
  box.addEventListener('mousemove', e => {
    const rect = box.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    box.style.transform = `perspective(1000px) rotateY(${x * 0.5}deg) rotateX(${-y * 0.5}deg)`;
  });
  box.addEventListener('mouseleave', () => {
    box.style.transform = '';
    box.style.transition = 'transform 0.5s ease';
  });
});
