// experiences.js — Filter and interactions

const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.exp-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    let visibleIndex = 0;
    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.cat === filter;
      if (match) {
        card.classList.remove('hidden');
        const delay = visibleIndex * 60;
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, delay);
        visibleIndex++;
      } else {
        card.classList.add('hidden');
        card.style.opacity = '';
        card.style.transform = '';
        card.style.transition = '';
      }
    });
  });
});
