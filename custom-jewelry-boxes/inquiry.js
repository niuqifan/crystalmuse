'use strict';
const form = document.getElementById('packaging-inquiry');
const statusMessage = document.getElementById('form-status');
const mobileNavigation = document.querySelector('.mobile-nav');
mobileNavigation?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => { mobileNavigation.open = false; });
});
document.querySelectorAll('[data-style]').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('box-style').value = link.dataset.style;
    document.querySelectorAll('[data-style]').forEach(item => item.classList.remove('is-selected'));
    link.classList.add('is-selected');
    statusMessage.textContent = `${link.dataset.style} selected for your inquiry.`;
  });
});
document.querySelectorAll('.process details').forEach(panel => {
  panel.addEventListener('toggle', () => {
    if (!panel.open) return;
    document.querySelectorAll('.process details').forEach(other => {
      if (other !== panel) other.open = false;
    });
  });
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const lines = [
    'Custom jewelry box inquiry — AURANOVAGEMS',
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Box style: ${data.get('style')}`,
    `Estimated quantity: ${data.get('quantity')}`,
    `Jewelry / dimensions: ${data.get('product')}`,
    `Destination: ${data.get('destination')}`,
    `Design details / preferred date: ${data.get('details') || 'To be discussed'}`,
    'Please confirm feasibility, MOQ, sample charges, unit price, production timing and shipping costs.'
  ];
  const message = lines.join('\n');
  if (event.submitter?.value === 'whatsapp') {
    window.open(`https://wa.me/8617629173592?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    statusMessage.textContent = 'WhatsApp requested. Review and send your message there. If no window opens, use the direct WhatsApp link beside this form. Nothing has been sent by this website.';
  } else {
    window.location.href = `mailto:niuqifan764@gmail.com?subject=${encodeURIComponent('Custom jewelry box inquiry')}&body=${encodeURIComponent(message)}`;
    statusMessage.textContent = 'Email draft requested. Review and send it in your email app. If no app opens, email your brief to niuqifan764@gmail.com. Nothing has been sent by this website.';
  }
});
