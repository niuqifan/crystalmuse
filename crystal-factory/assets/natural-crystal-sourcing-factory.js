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
    lines.unshift('Natural Crystal Sourcing Factory Verification Request', '----------------------------------------------------');
    window.location.href = `https://wa.me/8617629173592?text=${encodeURIComponent(lines.join('\n'))}`;
  });
})();
