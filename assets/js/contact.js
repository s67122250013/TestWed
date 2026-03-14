// contact.js — Form submission and FAQ accordion

// ── Contact Form ──
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'กำลังส่ง...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    // Simulate sending (replace with real API call)
    setTimeout(() => {
      form.reset();
      btn.textContent = 'ส่งข้อความ →';
      btn.style.opacity = '1';
      btn.disabled = false;
      successMsg.classList.add('show');
      setTimeout(() => successMsg.classList.remove('show'), 5000);
    }, 1200);
  });
}

// ── FAQ Accordion ──
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

    // Toggle clicked
    if (!isOpen) item.classList.add('open');
  });
});
