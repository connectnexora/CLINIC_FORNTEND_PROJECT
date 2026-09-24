/* Navigation: hide on down, show on up, active link, progress, back-to-top, mobile menu, command palette */
(function(){
  const nav = document.getElementById('nav');
  const prog = document.getElementById('scrollProgress');
  const toTop = document.getElementById('toTop');
  let lastY = 0;
  function onScroll(){
    const y = window.scrollY;
    if(nav){
      nav.classList.toggle('scrolled', y>24);
      if(y>lastY && y>320) nav.classList.add('hide'); else nav.classList.remove('hide');
    }
    lastY = y;
    const h = document.documentElement.scrollHeight - innerHeight;
    if(prog) prog.style.transform = 'scaleX('+(h>0?y/h:0)+')';
    if(toTop) toTop.classList.toggle('show', y>600);
  }
  addEventListener('scroll', onScroll, {passive:true}); onScroll();
  toTop?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
  document.getElementById('burger')?.addEventListener('click',()=>{
    document.getElementById('mobileMenu').classList.add('open');
    document.body.classList.add('lock');
  });
  document.getElementById('menuClose')?.addEventListener('click', closeMenu);
  function closeMenu(){ document.getElementById('mobileMenu')?.classList.remove('open'); document.body.classList.remove('lock'); }
  window.closeMenu = closeMenu;
  // Active section
  const links = [...document.querySelectorAll('.nav-links a')];
  const secs = links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const so = new IntersectionObserver((es)=>{
    es.forEach(e=>{
      if(e.isIntersecting){
        links.forEach(a=>a.classList.toggle('active', a.getAttribute('href')==='#'+e.target.id));
      }
    });
  },{rootMargin:'-40% 0px -55% 0px'});
  secs.forEach(s=>so.observe(s));
  // Command palette
  const pal = document.getElementById('palette');
  const input = document.getElementById('paletteInput');
  const list = document.getElementById('paletteList');
  const cmds = [
    {t:'Go Home',a:'#home'},{t:'About Clinic',a:'#about'},{t:'Treatments',a:'#treatments'},
    {t:'Doctors',a:'#doctors'},{t:'Technology',a:'#technology'},{t:'FAQ',a:'#faq'},
    {t:'Book Appointment',a:'#book'},{t:'Contact',a:'#contact'},
    {t:'Open Dental Assistant',fn:()=>window.openChat?.()},{t:'Toggle Theme',fn:()=>window.toggleTheme?.()}
  ];
  function render(f){
    list.innerHTML='';
    cmds.filter(c=>c.t.toLowerCase().includes((f||'').toLowerCase())).forEach((c,i)=>{
      const b=document.createElement('button');
      b.className='pal-item'+(i===0?' sel':''); b.textContent=c.t;
      b.onclick=()=>{close(); if(c.a)document.querySelector(c.a)?.scrollIntoView({behavior:'smooth'}); c.fn?.();};
      list.appendChild(b);
    });
  }
  function open(){ pal.classList.add('open'); render(''); input.value=''; setTimeout(()=>input.focus(),30); }
  function close(){ pal.classList.remove('open'); }
  window.openPalette=open;
  addEventListener('keydown',(e)=>{
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault(); pal.classList.contains('open')?close():open();}
    if(e.key==='Escape'){close(); window.closeChat?.(); window.closeLightbox?.(); window.closeModal?.(); closeMenu();}
  });
  input?.addEventListener('input',()=>render(input.value));
  pal?.addEventListener('click',(e)=>{ if(e.target===pal) close(); });
  // Footer accordion (mobile only)
  const fHeads=[...document.querySelectorAll('.f-head')];
  const mq=matchMedia('(max-width:860px)');
  function syncFooter(){
    fHeads.forEach(h=>{
      const col=h.closest('.f-col');
      if(!mq.matches){ col?.classList.add('open'); h.setAttribute('aria-expanded','true'); }
      else if(!col?.classList.contains('open')){ h.setAttribute('aria-expanded','false'); }
    });
  }
  fHeads.forEach(h=>h.addEventListener('click',()=>{
    if(!mq.matches) return;
    const col=h.closest('.f-col');
    const wasOpen=col.classList.contains('open');
    document.querySelectorAll('.f-col.open').forEach(c=>{
      c.classList.remove('open');
      c.querySelector('.f-head')?.setAttribute('aria-expanded','false');
    });
    if(!wasOpen){ col.classList.add('open'); h.setAttribute('aria-expanded','true'); }
  }));
  mq.addEventListener?.('change',syncFooter); syncFooter();
})();
