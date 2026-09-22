/* Main: loader, cursor, magnetic buttons, footer year, config links */
(function(){
  // Loader
  const loader=document.getElementById('loader'), bar=document.getElementById('loadBar'), pct=document.getElementById('loadPct');
  let p=0;
  const t=setInterval(()=>{
    p=Math.min(p+Math.random()*18,100);
    if(bar)bar.style.width=p+'%'; if(pct)pct.textContent=Math.floor(p)+'%';
    if(p>=100){clearInterval(t);setTimeout(()=>{loader?.classList.add('done');window.observeReveals();setTimeout(()=>loader?.remove(),700);},350);}
  },160);
  // Config-driven links
  function bindLinks(){
    const c=window.clinicConfig;
    document.querySelectorAll('[data-tel]').forEach(a=>{
      if(c.phone){a.href='tel:'+c.phone;} else {a.href='#book';a.addEventListener('click',(e)=>{e.preventDefault();document.querySelector('#book')?.scrollIntoView({behavior:'smooth'});toast('Phone not configured — please use booking form.','info');});}
    });
    document.querySelectorAll('[data-wa]').forEach(a=>a.addEventListener('click',(e)=>{e.preventDefault();window.whatsappClinic();}));
    document.querySelectorAll('[data-maps]').forEach(a=>a.href=c.mapsUrl);
    document.getElementById('year').textContent=new Date().getFullYear();
  }
  bindLinks();
  // Custom cursor (desktop, fine pointer only)
  if(matchMedia('(pointer:fine)').matches && !matchMedia('(max-width:768px)').matches){
    const dot=document.getElementById('cursorDot'), ring=document.getElementById('cursorRing');
    let mx=0,my=0,rx=0,ry=0;
    addEventListener('pointermove',(e)=>{
      mx=e.clientX;my=e.clientY;
      dot.style.transform=`translate(${mx}px,${my}px)`;
      const t=e.target.closest?.('[data-cursor],a,button');
      const label=e.target.closest?.('[data-cursor]')?.dataset.cursor || (t?'CLICK':'');
      ring.querySelector('span').textContent=label;
      ring.classList.toggle('hov',!!t);
    });
    (function f(){rx+=(mx-rx)*.16;ry+=(my-ry)*.16;ring.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(f);})();
    document.body.classList.add('has-cursor');
  }
  // Magnetic buttons
  if(matchMedia('(pointer:fine)').matches){
    document.querySelectorAll('.btn.primary').forEach(b=>{
      b.addEventListener('pointermove',(e)=>{
        const r=b.getBoundingClientRect();
        b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.18}px)`;
      });
      b.addEventListener('pointerleave',()=>b.style.transform='');
    });
  }
  window.observeReveals();
})();
