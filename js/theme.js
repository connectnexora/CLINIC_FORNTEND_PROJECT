/* Theme: default light, premium dark */
(function(){
  const KEY='jamodkar-theme';
  function apply(t){
    document.documentElement.setAttribute('data-theme',t);
    try{localStorage.setItem(KEY,t);}catch(e){}
    document.querySelectorAll('.theme-label').forEach(el=>el.textContent = t==='dark'?'Light':'Dark');
  }
  window.toggleTheme = function(){
    const cur = document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';
    apply(cur); toast('Theme changed to '+cur,'success');
  };
  let init='light';
  try{init=localStorage.getItem(KEY)||'light';}catch(e){}
  apply(init);
})();
