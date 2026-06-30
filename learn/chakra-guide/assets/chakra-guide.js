(() => {
  const cards = Array.from(document.querySelectorAll('.ang-chakra-card'));
  const buttons = Array.from(document.querySelectorAll('.ang-filter-buttons button'));
  const search = document.querySelector('#angChakraSearch');
  let activeFilter = 'all';

  function applyFilters() {
    const query = (search?.value || '').trim().toLowerCase();
    cards.forEach(card => {
      const matchesFilter = activeFilter === 'all' || card.dataset.chakra === activeFilter;
      const matchesSearch = !query || (card.dataset.search || '').toLowerCase().includes(query);
      card.classList.toggle('ang-hidden', !(matchesFilter && matchesSearch));
    });
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('is-active'));
      button.classList.add('is-active');
      activeFilter = button.dataset.filter || 'all';
      applyFilters();
    });
  });

  search?.addEventListener('input', applyFilters);
})();
