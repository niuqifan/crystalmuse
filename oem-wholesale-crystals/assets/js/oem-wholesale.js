(function(){
  const WHATSAPP_NUMBER = '8617629173592';
  const EMAIL = 'info@auranovagems.com';
  const form = document.querySelector('#b2bInquiryForm');
  const toast = document.querySelector('#toast');
  const showToast = (msg) => { if(!toast) return; toast.textContent = msg; toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'), 2600); };
  function formDataText(data){
    const lines = [
      'AURANOVAGEMS OEM & Wholesale Inquiry',
      '----------------------------------',
      `Name: ${data.get('name') || ''}`,
      `Company / Store: ${data.get('company') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `WhatsApp: ${data.get('phone') || ''}`,
      `Crystal Type: ${data.get('crystalType') || ''}`,
      `Quantity: ${data.get('quantity') || ''}`,
      `Packaging: ${data.get('packaging') || ''}`,
      `Custom Needs: ${data.get('customNeeds') || ''}`,
      `Target Market: ${data.get('market') || ''}`,
      `Timeline: ${data.get('timeline') || ''}`
    ];
    return lines.join('\n');
  }
  function collectAndValidate(){
    if(!form) return null;
    const data = new FormData(form);
    const required = ['name','email','crystalType','quantity'];
    for (const key of required){
      const el = form.querySelector(`[name="${key}"]`);
      if(!String(data.get(key) || '').trim()){
        el && el.focus();
        showToast('Please complete required fields before sending.');
        return null;
      }
    }
    return data;
  }
  document.querySelectorAll('[data-whatsapp]').forEach(btn => {
    btn.addEventListener('click', function(e){
      const data = collectAndValidate();
      if(!data){ e.preventDefault(); return; }
      const text = encodeURIComponent(formDataText(data));
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener');
    });
  });
  document.querySelectorAll('[data-email]').forEach(btn => {
    btn.addEventListener('click', function(e){
      const data = collectAndValidate();
      if(!data){ e.preventDefault(); return; }
      const subject = encodeURIComponent('OEM & Wholesale Crystal Inquiry - AURANOVAGEMS');
      const body = encodeURIComponent(formDataText(data));
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      showToast('Opening your email app with inquiry details.');
    });
  });
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = collectAndValidate();
      if(!data) return;
      const text = encodeURIComponent(formDataText(data));
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener');
    });
  }
})();
