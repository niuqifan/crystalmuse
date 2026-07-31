(function(){
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
