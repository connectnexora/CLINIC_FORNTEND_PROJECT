/* Shared helpers: toast, reveal, modal focus, smooth scroll */
(function(){
  const toastWrap = () => document.getElementById('toasts');
  window.toast = function(msg, type){
    const w = toastWrap(); if(!w) return;
    const el = document.createElement('div');
    el.className = 'toast ' + (type||'info');
    el.setAttribute('role','status');
    const icons = {success:'✓', info:'ℹ', warn:'⚠', error:'✕'};
    el.innerHTML = '<span class="t-ic">'+(icons[type]||'ℹ')+'</span><span></span>';
    el.lastChild.textContent = msg;
    w.appendChild(el);
    requestAnimationFrame(()=>el.classList.add('show'));
    setTimeout(()=>{ el.classList.remove('show'); setTimeout(()=>el.remove(),400); }, 3400);
  };
  window.callClinic = function(){
    const p = window.clinicConfig.phone;
    if(!p){ toast('Phone number not configured yet — use booking form.','warn'); return false; }
    window.location.href = 'tel:' + p; return true;
  };
  window.whatsappClinic = function(text){
    const w = window.clinicConfig.whatsapp;
    if(!w){ toast('WhatsApp number not configured yet.','warn'); return false; }
    window.open('https://wa.me/'+w+'?text='+encodeURIComponent(text||'Hello, I would like to book a dental appointment.'),'_blank');
    return true;
  };
  // Reveal on scroll
  const io = new IntersectionObserver((es)=>{
    es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  },{threshold:.12});
  window.observeReveals = function(root){
    (root||document).querySelectorAll('.rv:not(.in)').forEach(el=>io.observe(el));
  };
  // Smooth anchor
  document.addEventListener('click',(e)=>{
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    const id = a.getAttribute('href');
    if(id.length<2) return;
    const t = document.querySelector(id);
    if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth',block:'start'});
      document.getElementById('mobileMenu')?.classList.remove('open');
      document.body.classList.remove('lock');
    }
  });
  // Offline
  window.addEventListener('offline',()=>toast("You're currently offline.",'warn'));
  window.addEventListener('online',()=>toast('Connection restored.','success'));
})();
