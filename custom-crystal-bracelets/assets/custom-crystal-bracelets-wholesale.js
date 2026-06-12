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
    const subject = encodeURIComponent('Bracelet Wholesale Inquiry - ' + (data.get('stone') || 'Custom Crystal Bracelets'));
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = 'mailto:info@auranovagems.com?subject=' + subject + '&body=' + body;
  });
})();
