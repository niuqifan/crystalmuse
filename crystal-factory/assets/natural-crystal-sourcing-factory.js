(function(){
  const form = document.querySelector('[data-ansf-inquiry]');
  if(!form) return;
  form.addEventListener('submit', function(event){
    event.preventDefault();
    const data = new FormData(form);
    const lines = [];
    for(const [key, value] of data.entries()){
      if(String(value).trim()) lines.push(`${key}: ${value}`);
    }
    const subject = encodeURIComponent('Natural Crystal Sourcing Factory Verification Request');
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:info@auranovagems.com?subject=${subject}&body=${body}`;
  });
})();
