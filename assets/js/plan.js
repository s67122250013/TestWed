// plan.js — Tab switching and interactions

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    // Update buttons
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update content
    tabContents.forEach(tc => {
      tc.classList.remove('active');
      if (tc.id === 'tab-' + target) tc.classList.add('active');
    });

    // Re-trigger fade-up on newly shown tab
    const newTab = document.getElementById('tab-' + target);
    newTab.querySelectorAll('.fade-up').forEach((el, i) => {
      el.classList.remove('visible');
      setTimeout(() => el.classList.add('visible'), i * 100 + 50);
    });
  });
});

// Trigger fade-up on the default visible tab
document.querySelectorAll('.tab-content.active .fade-up').forEach((el, i) => {
  setTimeout(() => el.classList.add('visible'), i * 100 + 200);
});

// Handle anchor links from other pages (e.g., plan.html#visa)
if (location.hash) {
  const target = location.hash.replace('#', '');
  const btn = document.querySelector(`.tab-btn[data-tab="${target}"]`);
  if (btn) btn.click();
}
