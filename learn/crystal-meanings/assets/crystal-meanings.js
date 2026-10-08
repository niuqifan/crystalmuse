const resultCount = document.getElementById('resultCount');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('crystalSearch');
const chakraSelect = document.getElementById('chakraSelect');
const intentionButtons = document.querySelectorAll('[data-filter-type="intention"]');
const letterButtons = document.querySelectorAll('[data-letter]');
let activeIntention = 'all';
let activeLetter = 'all';

function filterCards(){
  const query = searchInput.value.trim().toLowerCase();
  const chakra = chakraSelect.value;
  let shown = 0;
  document.querySelectorAll('.ag-card').forEach(card => {
    const matchesSearch = !query || card.dataset.search.includes(query);
    const matchesChakra = chakra === 'all' || card.dataset.chakra.includes(chakra);
    const matchesIntention = activeIntention === 'all' || card.dataset.intention.includes(activeIntention);
    const matchesLetter = activeLetter === 'all' || card.dataset.letter === activeLetter;
    const visible = matchesSearch && matchesChakra && matchesIntention && matchesLetter;
    card.hidden = !visible;
    if (visible) shown++;
  });
  resultCount.textContent = shown;
  noResults.hidden = shown !== 0;
}

searchInput.addEventListener('input', filterCards);
chakraSelect.addEventListener('change', filterCards);
intentionButtons.forEach(btn => btn.addEventListener('click', () => {
  intentionButtons.forEach(b => b.classList.remove('is-active'));
  btn.classList.add('is-active');
  activeIntention = btn.dataset.filter;
  filterCards();
}));
letterButtons.forEach(btn => btn.addEventListener('click', () => {
  letterButtons.forEach(b => b.classList.remove('is-active'));
  btn.classList.add('is-active');
  activeLetter = btn.dataset.letter;
  filterCards();
}));
filterCards();
