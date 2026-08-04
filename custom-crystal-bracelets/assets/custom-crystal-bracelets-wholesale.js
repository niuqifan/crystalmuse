(function(){
  document.querySelectorAll('.avb-faq-item').forEach(function(item, index){
    const heading = item.querySelector('h3');
    const answer = item.querySelector('p');
    if(!heading || !answer) return;

    const button = document.createElement('button');
    const answerId = 'avb-faq-answer-' + (index + 1);
    button.className = 'avb-faq-toggle';
    button.type = 'button';
    button.textContent = heading.textContent;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', answerId);
    answer.id = answerId;
    answer.hidden = true;
    heading.replaceWith(button);

    button.addEventListener('click', function(){
      const isOpen = item.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
      answer.hidden = !isOpen;
    });
  });

  const form = document.querySelector('[data-avb-bracelet-form]');
  if(!form) return;
  form.addEventListener('submit', function(event){
    event.preventDefault();
    const data = new FormData(form);
    const lines = [
      'Custom Crystal Bracelets & Jewelry Wholesale Inquiry',
      '----------------------------------------------------',
      'Name / Company: ' + (data.get('name') || ''),
      'Email: ' + (data.get('email') || ''),
      'Gemstone Type: ' + (data.get('stone') || ''),
      'Bead Diameter: ' + (data.get('diameter') || ''),
      'Estimated Quantity: ' + (data.get('quantity') || ''),
      'Logo Card / Charm: ' + (data.get('branding') || ''),
      'Packaging Style: ' + (data.get('packaging') || ''),
      'Fulfillment Need: ' + (data.get('fulfillment') || ''),
      '',
      'Custom Requirements:',
      data.get('message') || ''
    ];
    window.location.href = 'https://wa.me/8617629173592?text=' + encodeURIComponent(lines.join('\n'));
  });
})();
