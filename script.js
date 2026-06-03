const intentions = [
  {name:'Love', icon:'♡', desc:'Open your heart and attract love', grad:'linear-gradient(135deg,#ffd8e5,#d897b3,#fff6f8)', img:'https://sc01.alicdn.com/kf/A2877551b33a947499c998f3bd81767555.png'},
  {name:'Abundance', icon:'◎', desc:'Attract wealth and prosperity', grad:'linear-gradient(135deg,#fff0bf,#d79732,#fff8d9)'},
  {name:'Protection', icon:'♜', desc:'Shield your energy and stay safe', grad:'linear-gradient(135deg,#1d1328,#111,#8c7b8f)'},
  {name:'Calm', icon:'♨', desc:'Find peace and balance', grad:'linear-gradient(135deg,#e6ddd5,#b7a69c,#fff)'},
  {name:'Sleep', icon:'☾', desc:'Improve sleep and relaxation', grad:'linear-gradient(135deg,#20133d,#6d5597,#d7ccff)'},
  {name:'Spirituality', icon:'◉', desc:'Connect to higher consciousness', grad:'linear-gradient(135deg,#2c174a,#a477cc,#fff0ff)'},
  {name:'Confidence', icon:'★', desc:'Boost self-esteem and courage', grad:'linear-gradient(135deg,#f8d27c,#c47d28,#fff3d2)'},
  {name:'New Beginnings', icon:'☼', desc:'Embrace change and new start', grad:'linear-gradient(135deg,#f1d7b2,#b9d6d4,#fff)'},
];
const chakras = ['Crown','Third Eye','Throat','Heart','Solar Plexus','Sacral','Root'];
const zodiacs = [
  ['Aries','♈'],['Taurus','♉'],['Gemini','♊'],['Cancer','♋'],['Leo','♌'],['Virgo','♍'],['Libra','♎'],['Scorpio','♏'],['Sagittarius','♐'],['Capricorn','♑'],['Aquarius','♒'],['Pisces','♓']
];
const products = [
  {id:1,name:'Rose Quartz Bracelet',intention:'Love',chakra:'Heart',zodiac:'Taurus',crystal:'Rose Quartz',shape:'Bracelet',moq:50,icon:'♡',grad:'linear-gradient(135deg,#fff1f5,#eaa2ba)',desc:'A gentle heart-opening bracelet for love, compassion and emotional healing.'},
  {id:2,name:'Amethyst Bracelet',intention:'Calm',chakra:'Crown',zodiac:'Pisces',crystal:'Amethyst',shape:'Bracelet',moq:50,icon:'●',grad:'linear-gradient(135deg,#ead9ff,#74369b)',desc:'A calming amethyst bracelet for meditation, sleep and spiritual clarity.'},
  {id:3,name:'Citrine Bracelet',intention:'Abundance',chakra:'Solar Plexus',zodiac:'Leo',crystal:'Citrine',shape:'Bracelet',moq:50,icon:'◎',grad:'linear-gradient(135deg,#fff3b9,#d48a21)',desc:'A bright prosperity bracelet for confidence, success and wealth energy.'},
  {id:4,name:'Black Obsidian Bracelet',intention:'Protection',chakra:'Root',zodiac:'Scorpio',crystal:'Obsidian',shape:'Bracelet',moq:50,icon:'●',grad:'linear-gradient(135deg,#3a3040,#050505)',desc:'A grounding protection bracelet for shielding negative energy.'},
  {id:5,name:'Amethyst Tower',intention:'Spirituality',chakra:'Crown',zodiac:'Aquarius',crystal:'Amethyst',shape:'Tower',moq:30,icon:'◭',grad:'linear-gradient(135deg,#f4dcff,#682c8c,#26113b)',desc:'A polished amethyst tower for altar decor, meditation and spiritual work.'},
  {id:6,name:'Rose Quartz Sphere',intention:'Love',chakra:'Heart',zodiac:'Libra',crystal:'Rose Quartz',shape:'Sphere',moq:20,icon:'●',grad:'linear-gradient(135deg,#fff5f7,#e49ab2,#fff)',desc:'A soft rose quartz sphere for love rituals, display and emotional balance.'},
  {id:7,name:'Clear Quartz Point',intention:'New Beginnings',chakra:'Crown',zodiac:'Gemini',crystal:'Clear Quartz',shape:'Tower',moq:50,icon:'◭',grad:'linear-gradient(135deg,#fff,#d9f1ff,#b9b6d7)',desc:'A high-clarity quartz point for cleansing, amplification and intention setting.'},
  {id:8,name:'Tiger Eye Palm Stone',intention:'Confidence',chakra:'Solar Plexus',zodiac:'Capricorn',crystal:'Tiger Eye',shape:'Palm Stone',moq:100,icon:'◒',grad:'linear-gradient(135deg,#3d2814,#d79b3a,#6b3e18)',desc:'A polished palm stone for courage, focus and personal power.'},
  {id:9,name:'Moonstone Necklace',intention:'Calm',chakra:'Third Eye',zodiac:'Cancer',crystal:'Moonstone',shape:'Necklace',moq:80,icon:'☾',grad:'linear-gradient(135deg,#fff,#cfd9ea,#f6e2ff)',desc:'A luminous moonstone necklace for intuition, calm and feminine energy.'},
  {id:10,name:'Chakra Crystal Set',intention:'Spirituality',chakra:'Crown',zodiac:'Virgo',crystal:'Mixed Stones',shape:'Set',moq:100,icon:'◉',grad:'linear-gradient(135deg,#e94747,#f39c34,#f7dc53,#55c776,#3ab3d9,#6d5bd7,#9c55c7)',desc:'A complete seven chakra set for meditation, gifting and wellness retail.'},
];
let basket = JSON.parse(localStorage.getItem('crystalBasket') || '[]');
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
function init(){renderIntentions();renderChakras();renderZodiacs();fillFilters();renderProducts(products);updateBasket();bindEvents();}
function renderIntentions(){ $('#intentGrid').innerHTML=intentions.map(i=>`<article class="intent-card" data-filter="intention" data-value="${i.name}"><div class="intent-img" ${i.img ? '' : 'data-icon="'+i.icon+'"'} style="${i.img ? 'background-image:url('+i.img+');background-size:cover;background-position:center;' : '--grad:'+i.grad}"></div><h3>${i.name}</h3><p>${i.desc}</p></article>`).join(''); }
function renderChakras(){ $('#chakraList').innerHTML=chakras.map(c=>`<li><button data-filter="chakra" data-value="${c}">${c}</button></li>`).join(''); }
function renderZodiacs(){ $('#zodiacGrid').innerHTML=zodiacs.map(([n,s])=>`<button data-filter="zodiac" data-value="${n}"><b>${s}</b><span>${n}</span></button>`).join(''); }
function fillFilters(){
  fill('#filterIntention', [...new Set(products.map(p=>p.intention))]); fill('#filterChakra',chakras); fill('#filterZodiac',zodiacs.map(z=>z[0])); fill('#filterCrystal',[...new Set(products.map(p=>p.crystal))]); fill('#filterShape',[...new Set(products.map(p=>p.shape))]);
}
function fill(sel,items){ const el=$(sel); items.forEach(v=>el.insertAdjacentHTML('beforeend',`<option value="${v}">${v}</option>`)); }
function renderProducts(list){ $('#productGrid').innerHTML=list.map(p=>`<article class="product-card"><div class="product-img" style="--grad:${p.grad}">${p.icon}</div><h3>${p.name}</h3><p>${p.intention} • ${p.chakra} Chakra<br>${p.crystal} • MOQ ${p.moq} pcs</p><div class="card-actions"><button data-view="${p.id}">View Details</button><button data-add="${p.id}">Add to Inquiry</button></div></article>`).join('') || '<p>No matching products found.</p>'; }
function currentFiltered(){ const q=$('#searchInput').value.toLowerCase(); const fi=$('#filterIntention').value, fc=$('#filterChakra').value, fz=$('#filterZodiac').value, fcr=$('#filterCrystal').value, fs=$('#filterShape').value, fm=$('#filterMOQ').value; return products.filter(p=>(!q||p.name.toLowerCase().includes(q)||p.crystal.toLowerCase().includes(q))&&(fi==='all'||p.intention===fi)&&(fc==='all'||p.chakra===fc)&&(fz==='all'||p.zodiac===fz)&&(fcr==='all'||p.crystal===fcr)&&(fs==='all'||p.shape===fs)&&(fm==='all'||p.moq<=Number(fm))); }
function applyFilters(){renderProducts(currentFiltered()); document.querySelector('#catalog').scrollIntoView({behavior:'smooth'});}
function openProduct(id){ const p=products.find(x=>x.id==id); $('#modalContent').innerHTML=`<div class="modal-product"><div class="product-img" style="--grad:${p.grad}">${p.icon}</div><div><p class="eyebrow">${p.intention} Energy</p><h2>${p.name}</h2><p>${p.desc}</p><p><b>Crystal:</b> ${p.crystal}</p><p><b>Chakra:</b> ${p.chakra}</p><p><b>Zodiac:</b> ${p.zodiac}</p><p><b>Shape:</b> ${p.shape}</p><p><b>MOQ:</b> ${p.moq} pcs</p><p><b>OEM Options:</b> custom logo, card, packaging, gift box and mixed sets.</p><button class="btn primary" data-add="${p.id}">Add to Inquiry</button></div></div>`; showModal('productModal'); }
function addBasket(id){ const p=products.find(x=>x.id==id); const item=basket.find(x=>x.id==p.id); if(item){item.qty+=p.moq}else{basket.push({id:p.id,name:p.name,qty:p.moq});} localStorage.setItem('crystalBasket',JSON.stringify(basket)); updateBasket(); }
function updateBasket(){ $('#inquiryCount').textContent=basket.length; $('#floatingCount').textContent=basket.length; $('#basketItems').innerHTML=basket.length?basket.map(i=>`<div class="basket-row"><span>${i.name}</span><b>${i.qty} pcs</b><button data-remove="${i.id}">Remove</button></div>`).join(''):'<p>Your inquiry basket is empty.</p>'; }
function showModal(id){ $('#'+id).classList.add('active'); $('#'+id).setAttribute('aria-hidden','false'); }
function closeModal(id){ $('#'+id).classList.remove('active'); $('#'+id).setAttribute('aria-hidden','true'); }
function bindEvents(){
  $$('#searchInput,#filterIntention,#filterChakra,#filterZodiac,#filterCrystal,#filterShape,#filterMOQ').forEach(el=>el.addEventListener('input',applyFilters));
  $('#resetFilters').onclick=()=>{$$('select').forEach(s=>s.value='all');$('#searchInput').value='';renderProducts(products);};
  document.body.addEventListener('click',e=>{ const f=e.target.closest('[data-filter]'); if(f){ const target={'intention':'#filterIntention','chakra':'#filterChakra','zodiac':'#filterZodiac'}[f.dataset.filter]; if(target){$(target).value=f.dataset.value; applyFilters();}} const v=e.target.closest('[data-view]'); if(v) openProduct(v.dataset.view); const a=e.target.closest('[data-add]'); if(a){ addBasket(a.dataset.add); showModal('inquiryModal'); } const r=e.target.closest('[data-remove]'); if(r){ basket=basket.filter(x=>x.id!=r.dataset.remove); localStorage.setItem('crystalBasket',JSON.stringify(basket)); updateBasket(); } const c=e.target.closest('[data-close]'); if(c) closeModal(c.dataset.close); });
  ['openInquiry','floatingInquiry'].forEach(id=>$('#'+id).onclick=()=>showModal('inquiryModal'));
  $$('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m) closeModal(m.id)}));
  $('#contactForm').onsubmit=e=>{e.preventDefault(); alert('Thank you! This demo form can be connected to Formspree, EmailJS or your backend.');};
  $('#inquiryForm').onsubmit=e=>{e.preventDefault(); alert('Inquiry submitted in demo mode. Connect this form before going live.');};
}
init();
