const crystals = [
  {name:'Amethyst',letter:'A',meaning:'Calm, intuition, spiritual awareness, and restful energy.',best:'Calm, sleep, intuition',chakra:'third eye,crown',zodiac:'Pisces, Aquarius',intention:'calm focus',color:'linear-gradient(120deg,#8d5bb5,#ede0f6,#5b2d78)'},
  {name:'Aquamarine',letter:'A',meaning:'Soothing communication, courage, and flowing emotional balance.',best:'Communication, calm',chakra:'throat',zodiac:'Pisces, Aquarius',intention:'calm focus',color:'linear-gradient(120deg,#78c7d6,#ecfbff,#4e9db6)'},
  {name:'Black Tourmaline',letter:'B',meaning:'Grounding protection, energetic boundaries, and stability.',best:'Protection, grounding',chakra:'root',zodiac:'Capricorn, Libra',intention:'protection calm',color:'linear-gradient(120deg,#16121c,#59505d,#050406)'},
  {name:'Carnelian',letter:'C',meaning:'Creative fire, motivation, confidence, and bold action.',best:'Energy, creativity',chakra:'sacral',zodiac:'Leo, Virgo',intention:'energy focus',color:'linear-gradient(120deg,#c74a2f,#ffc18a,#8f2f1e)'},
  {name:'Citrine',letter:'C',meaning:'Joy, abundance, optimism, and confident manifestation.',best:'Abundance, confidence',chakra:'solar plexus',zodiac:'Leo, Gemini',intention:'abundance energy',color:'linear-gradient(120deg,#e0a12a,#ffe8a8,#b26b16)'},
  {name:'Clear Quartz',letter:'C',meaning:'Clarity, amplification, cleansing, and setting focused intentions.',best:'Clarity, amplification',chakra:'crown',zodiac:'All signs',intention:'focus calm',color:'linear-gradient(120deg,#dfefff,#ffffff,#c7c0df)'},
  {name:'Fluorite',letter:'F',meaning:'Mental clarity, organization, focus, and energetic cleansing.',best:'Focus, study',chakra:'third eye,heart',zodiac:'Capricorn, Pisces',intention:'focus calm',color:'linear-gradient(120deg,#6fc49d,#d9ccff,#764da4)'},
  {name:'Garnet',letter:'G',meaning:'Passion, devotion, strength, and revitalizing life force.',best:'Love, passion, energy',chakra:'root,heart',zodiac:'Capricorn, Aquarius',intention:'love energy',color:'linear-gradient(120deg,#6c0e23,#cf4565,#3f0716)'},
  {name:'Green Aventurine',letter:'G',meaning:'Luck, growth, heart healing, and gentle opportunity.',best:'Abundance, heart healing',chakra:'heart',zodiac:'Taurus, Virgo',intention:'abundance love',color:'linear-gradient(120deg,#3f9d6d,#dbf4df,#246443)'},
  {name:'Hematite',letter:'H',meaning:'Grounding, strength, energetic protection, and practical focus.',best:'Grounding, protection',chakra:'root',zodiac:'Aries, Aquarius',intention:'protection focus',color:'linear-gradient(120deg,#36343a,#929096,#17151a)'},
  {name:'Howlite',letter:'H',meaning:'Patience, stress relief, quiet thoughts, and peaceful sleep.',best:'Calm, patience',chakra:'crown',zodiac:'Gemini, Virgo',intention:'calm',color:'linear-gradient(120deg,#efefea,#ffffff,#c8c2bc)'},
  {name:'Jade',letter:'J',meaning:'Harmony, prosperity, wisdom, and steady good fortune.',best:'Luck, balance',chakra:'heart',zodiac:'Taurus, Libra',intention:'abundance calm',color:'linear-gradient(120deg,#5fa875,#eff9e9,#30764d)'},
  {name:'Labradorite',letter:'L',meaning:'Transformation, intuition, aura protection, and mystical insight.',best:'Transformation, intuition',chakra:'third eye,throat',zodiac:'Leo, Scorpio',intention:'protection focus',color:'linear-gradient(120deg,#355d75,#75bbb0,#2b2948)'},
  {name:'Lapis Lazuli',letter:'L',meaning:'Truth, wisdom, self-expression, and inner vision.',best:'Wisdom, communication',chakra:'throat,third eye',zodiac:'Sagittarius, Libra',intention:'focus calm',color:'linear-gradient(120deg,#143a93,#456ed5,#0a1749)'},
  {name:'Malachite',letter:'M',meaning:'Transformation, heart healing, courage, and emotional release.',best:'Change, heart healing',chakra:'heart',zodiac:'Scorpio, Capricorn',intention:'love protection',color:'linear-gradient(120deg,#0b6d4c,#69c18b,#02482e)'},
  {name:'Moonstone',letter:'M',meaning:'New beginnings, intuition, feminine energy, and emotional flow.',best:'Intuition, balance',chakra:'crown,third eye',zodiac:'Cancer, Libra',intention:'calm love',color:'linear-gradient(120deg,#d8d8ff,#ffffff,#b6a8d7)'},
  {name:'Obsidian',letter:'O',meaning:'Deep protection, truth, shadow work, and energetic clearing.',best:'Protection, release',chakra:'root',zodiac:'Scorpio, Sagittarius',intention:'protection',color:'linear-gradient(120deg,#09080d,#454050,#000000)'},
  {name:'Pyrite',letter:'P',meaning:'Confidence, wealth energy, motivation, and protective success.',best:'Abundance, confidence',chakra:'solar plexus',zodiac:'Leo, Aries',intention:'abundance protection',color:'linear-gradient(120deg,#916827,#e9ca73,#5b3d13)'},
  {name:'Red Jasper',letter:'R',meaning:'Steady strength, stamina, grounding, and courageous action.',best:'Strength, grounding',chakra:'root',zodiac:'Aries, Scorpio',intention:'protection energy',color:'linear-gradient(120deg,#9c2f27,#df785a,#5e1713)'},
  {name:'Rhodonite',letter:'R',meaning:'Compassion, forgiveness, emotional repair, and heart confidence.',best:'Love, emotional healing',chakra:'heart',zodiac:'Taurus, Leo',intention:'love calm',color:'linear-gradient(120deg,#bc5d82,#f1c4d1,#4a2b35)'},
  {name:'Rose Quartz',letter:'R',meaning:'Unconditional love, compassion, self-love, and emotional softness.',best:'Love, self-care',chakra:'heart',zodiac:'Taurus, Libra',intention:'love calm',color:'linear-gradient(120deg,#e79ab0,#ffe6ed,#c76986)'},
  {name:'Selenite',letter:'S',meaning:'Purification, spiritual light, energetic cleansing, and clarity.',best:'Cleansing, clarity',chakra:'crown',zodiac:'Taurus, Cancer',intention:'calm focus',color:'linear-gradient(120deg,#eee8dc,#ffffff,#cfc4b8)'},
  {name:'Smoky Quartz',letter:'S',meaning:'Grounding, stress release, protection, and steady resilience.',best:'Grounding, stress relief',chakra:'root',zodiac:'Capricorn, Sagittarius',intention:'protection calm',color:'linear-gradient(120deg,#5d5048,#c9b7a6,#2e2928)'},
  {name:'Sodalite',letter:'S',meaning:'Logic, calm communication, truth, and emotional balance.',best:'Focus, communication',chakra:'throat,third eye',zodiac:'Sagittarius, Virgo',intention:'focus calm',color:'linear-gradient(120deg,#254f9f,#87a3d3,#152552)'},
  {name:'Sunstone',letter:'S',meaning:'Joy, vitality, confidence, and radiant personal power.',best:'Energy, optimism',chakra:'solar plexus,sacral',zodiac:'Leo, Libra',intention:'energy abundance',color:'linear-gradient(120deg,#e68638,#ffd0a1,#9f441a)'},
  {name:'Tiger’s Eye',letter:'T',meaning:'Courage, protection, confidence, and grounded decision-making.',best:'Confidence, protection',chakra:'solar plexus,root',zodiac:'Leo, Gemini',intention:'protection focus abundance',color:'linear-gradient(120deg,#8a5418,#e6ad54,#3e260d)'},
  {name:'Turquoise',letter:'T',meaning:'Communication, protection, travel luck, and peaceful expression.',best:'Protection, communication',chakra:'throat',zodiac:'Sagittarius, Pisces',intention:'protection calm',color:'linear-gradient(120deg,#22aeb6,#bff2ed,#0d6b75)'},
  {name:'Amazonite',letter:'A',meaning:'Hope, soothing truth, emotional balance, and open communication.',best:'Calm, communication',chakra:'heart,throat',zodiac:'Virgo, Aquarius',intention:'calm love',color:'linear-gradient(120deg,#57b7a1,#d9fbef,#2a7d70)'},
  {name:'Apatite',letter:'A',meaning:'Motivation, manifestation, learning, and inspired self-expression.',best:'Focus, motivation',chakra:'throat,third eye',zodiac:'Gemini, Libra',intention:'focus abundance',color:'linear-gradient(120deg,#2294be,#a8e5f7,#14617e)'},
  {name:'Moss Agate',letter:'M',meaning:'Growth, nature connection, patience, and steady abundance.',best:'Growth, abundance',chakra:'heart',zodiac:'Virgo, Taurus',intention:'abundance calm',color:'linear-gradient(120deg,#335f3e,#d8ead5,#687f5c)'}
];


const cardImageByName = {
  
  
  
  'Moss Agate': 'assets/images/card-moss-agate.webp','Apatite': 'assets/images/card-apatite.webp','Amazonite': 'assets/images/card-amazonite.webp','Moonstone': 'assets/images/card-moonstone.webp',
  'Obsidian': 'assets/images/card-obsidian.webp',
  'Pyrite': 'assets/images/card-pyrite.webp',
  'Red Jasper': 'assets/images/card-red-jasper.webp',
  'Rhodonite': 'assets/images/card-rhodonite.webp',
  'Rose Quartz': 'assets/images/card-rose-quartz.webp',
  'Selenite': 'assets/images/card-selenite.webp',
  'Smoky Quartz': 'assets/images/card-smoky-quartz.webp',
  'Sodalite': 'assets/images/card-sodalite.webp',
  'Sunstone': 'assets/images/card-sunstone.webp',
  'Tiger’s Eye': 'assets/images/card-tigers-eye.webp',
  'Turquoise': 'assets/images/card-turquoise.webp',
  'Amethyst': 'assets/images/card-amethyst.webp',
  'Aquamarine': 'assets/images/card-aquamarine.webp',
  'Black Tourmaline': 'assets/images/card-black-tourmaline.webp',
  'Garnet': 'assets/images/card-garnet.webp',
  'Carnelian': 'assets/images/card-carnelian.webp',
  'Clear Quartz': 'assets/images/card-clear-quartz.webp',
  'Citrine': 'assets/images/card-citrine.webp',
  'Green Aventurine': 'assets/images/card-green-aventurine.webp',
  'Hematite': 'assets/images/card-hematite.webp',
  'Howlite': 'assets/images/card-howlite.webp',
  'Jade': 'assets/images/card-jade.webp',
  'Labradorite': 'assets/images/card-labradorite.webp',
  'Lapis Lazuli': 'assets/images/card-lapis-lazuli.webp',
  'Malachite': 'assets/images/card-malachite.webp',
  'Fluorite': 'assets/images/card-fluorite.webp',
  'Black Obsidian': 'assets/images/card-obsidian.webp'
};
const braceletNames = new Set(['Garnet','Obsidian','Rhodonite','Moonstone','Sodalite']);
function getCardImage(crystal){
  return cardImageByName[crystal.name] || (braceletNames.has(crystal.name) ? 'assets/images/shop-by-meaning-bracelets.webp' : 'assets/images/library-crystal-showcase.webp');
}

const grid = document.getElementById('crystalGrid');
const resultCount = document.getElementById('resultCount');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('crystalSearch');
const chakraSelect = document.getElementById('chakraSelect');
const intentionButtons = document.querySelectorAll('[data-filter-type="intention"]');
const letterButtons = document.querySelectorAll('[data-letter]');
let activeIntention = 'all';
let activeLetter = 'all';

function cardTemplate(crystal){
  const chakraLabel = crystal.chakra.split(',').map(x => x.trim()).map(x => x.replace(/\b\w/g, c => c.toUpperCase())).join(', ');
  return `<article class="ag-card" data-search="${[crystal.name,crystal.meaning,crystal.best,crystal.chakra,crystal.zodiac,crystal.intention].join(' ').toLowerCase()}" data-letter="${crystal.letter}" data-chakra="${crystal.chakra}" data-intention="${crystal.intention}">
    <div class="ag-card-media" style="--gem-bg:${crystal.color}"><img src="${getCardImage(crystal)}" alt="${crystal.name} crystal meaning guide image" loading="lazy"></div>
    <div class="ag-card-body">
      <div class="ag-card-top"><h3>${crystal.name}</h3><span class="ag-letter">${crystal.letter}</span></div>
      <p class="ag-meaning">${crystal.meaning}</p>
      <div class="ag-meta">
        <div class="ag-meta-row"><span>Best for</span><span>${crystal.best}</span></div>
        <div class="ag-meta-row"><span>Chakra</span><span>${chakraLabel}</span></div>
        <div class="ag-meta-row"><span>Zodiac</span><span>${crystal.zodiac}</span></div>
      </div>
      <div class="ag-card-foot"><span class="ag-pill">${crystal.best.split(',')[0]}</span><a href="/search?q=${encodeURIComponent(crystal.name)}">Shop ${crystal.name}</a></div>
    </div>
  </article>`;
}

function renderCards(){
  grid.innerHTML = crystals.map(cardTemplate).join('');
  filterCards();
}

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
renderCards();
