(() => {
  const cards = Array.from(document.querySelectorAll('.ang-zodiac-card'));
  const buttons = Array.from(document.querySelectorAll('.ang-filter-buttons button'));
  const search = document.querySelector('#angZodiacSearch');
  const clear = document.querySelector('#angZodiacClear');
  const searchAliases = {
    '白羊': 'aries', '金牛': 'taurus', '双子': 'gemini', '巨蟹': 'cancer',
    '狮子': 'leo', '处女': 'virgo', '天秤': 'libra', '天蝎': 'scorpio',
    '射手': 'sagittarius', '摩羯': 'capricorn', '水瓶': 'aquarius', '双鱼': 'pisces',
    '火象': 'fire', '土象': 'earth', '风象': 'air', '水象': 'water'
  };
  let activeFilter = 'all';

  function applyFilters() {
    const rawQuery = (search?.value || '').trim().toLowerCase();
    const query = searchAliases[rawQuery] || rawQuery;
    cards.forEach(card => {
      const matchesFilter = activeFilter === 'all' || card.dataset.element === activeFilter;
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
  search?.addEventListener('search', applyFilters);
  clear?.addEventListener('click', () => {
    if (!search) return;
    search.value = '';
    applyFilters();
    search.focus();
  });
})();
