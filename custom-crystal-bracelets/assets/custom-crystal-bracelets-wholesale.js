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
  const emailButton = form.querySelector('[data-avb-email-inquiry]');

  function trackContactIntent(method){
    if(typeof window.gtag === 'function'){
      window.gtag('event', 'contact_' + method + '_open', {
        page_type: 'custom_crystal_bracelets'
      });
    }
  }

  function inquiryMessage(){
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
    return lines.join('\n');
  }

  form.addEventListener('submit', function(event){
    event.preventDefault();
    trackContactIntent('whatsapp');
    window.location.href = 'https://wa.me/8617629173592?text=' + encodeURIComponent(inquiryMessage());
  });

  if(emailButton){
    emailButton.addEventListener('click', function(){
      if(!form.reportValidity()) return;
      trackContactIntent('email');
      window.location.href = 'mailto:niuqifan764@gmail.com?subject=' +
        encodeURIComponent('Custom crystal bracelet inquiry') +
        '&body=' + encodeURIComponent(inquiryMessage());
    });
  }
})();
