/* Doctors, gallery+lightbox, testimonials carousel, FAQ, triage, journey */
(function(){
  // Doctors
  const dg=document.getElementById('docGrid');
  if(dg) window.clinicData.doctors.forEach(d=>{
    const el=document.createElement('article');el.className='doc rv';
    el.innerHTML=`<div class="doc-av">🦷</div><h3></h3><p class="muted"></p><p><b>Specialization:</b> <span class="sp"></span></p><p><b>Qualifications:</b> <span class="q"></span></p><p class="muted small"></p><div class="row"><a class="btn ghost" href="#book">Book Consultation</a><button class="btn soft">View Profile</button></div>`;
    el.querySelector('h3').textContent=d.name;el.querySelector('.muted').textContent=d.role;
    el.querySelector('.sp').textContent=d.spec;el.querySelector('.q').textContent=d.qual;el.querySelector('.small').textContent=d.note;
    el.querySelector('.soft').onclick=()=>toast('Full profile coming soon — contact clinic for verified details.','info');
    dg.appendChild(el);
  });
  // Gallery
  const gg=document.getElementById('galGrid'), lb=document.getElementById('lightbox');
  let gIdx=0; const items=window.clinicData.gallery;
  function renderGal(f){
    if(!gg)return; gg.innerHTML='';
    items.filter(g=>!f||f==='All'||g.cat===f).forEach((g)=>{
      const d=document.createElement('button');d.className='g rv';d.setAttribute('data-cursor','ZOOM');
      d.innerHTML=`<span class="g-cat"></span><span class="g-label"></span>`;
      d.querySelector('.g-cat').textContent=g.cat;d.querySelector('.g-label').textContent=g.label;
      d.onclick=()=>openLb(items.indexOf(g)); gg.appendChild(d);
    });
    window.observeReveals(gg);
  }
  document.querySelectorAll('.chip[data-gal]').forEach(c=>c.onclick=()=>{
    document.querySelectorAll('.chip[data-gal]').forEach(x=>x.classList.remove('on'));c.classList.add('on');renderGal(c.dataset.gal);
  });
  function openLb(i){ gIdx=i; if(!lb)return; lb.classList.add('open');document.body.classList.add('lock');drawLb(); }
  function drawLb(){ if(!lb)return; lb.querySelector('#lbLabel').textContent=items[gIdx].label+' ('+(gIdx+1)+'/'+items.length+')'; }
  window.closeLightbox=function(){lb?.classList.remove('open');document.body.classList.remove('lock');};
  document.getElementById('lbNext')?.addEventListener('click',(e)=>{e.stopPropagation();gIdx=(gIdx+1)%items.length;drawLb();});
  document.getElementById('lbPrev')?.addEventListener('click',(e)=>{e.stopPropagation();gIdx=(gIdx-1+items.length)%items.length;drawLb();});
  lb?.addEventListener('click',(e)=>{if(e.target===lb)closeLightbox();});
  addEventListener('keydown',(e)=>{if(!lb?.classList.contains('open'))return;if(e.key==='ArrowRight')gIdx=(gIdx+1)%items.length,drawLb();if(e.key==='ArrowLeft')gIdx=(gIdx-1+items.length)%items.length,drawLb();});
  renderGal('All');
  // Testimonials
  const tw=document.getElementById('testiTrack');let ti=0,timer=null;
  if(tw){
    window.clinicData.testimonials.forEach(t=>{
      const d=document.createElement('div');d.className='testi';
      d.innerHTML=`<p class="tq"></p><p class="muted"></p><span class="pill">Placeholder — verified review pending</span>`;
      d.querySelector('.tq').textContent='“'+t.text+'”';d.querySelector('.muted').textContent='— '+t.name;
      tw.appendChild(d);
    });
    const dots=document.getElementById('testiDots');
    window.clinicData.testimonials.forEach((_,i)=>{
      const b=document.createElement('button');b.setAttribute('aria-label','Go to testimonial '+(i+1));
      b.onclick=()=>go(i);dots.appendChild(b);
    });
    function go(i){ti=(i+window.clinicData.testimonials.length)%window.clinicData.testimonials.length;tw.style.transform=`translateX(-${ti*100}%)`;[...dots.children].forEach((d,k)=>d.classList.toggle('on',k===ti));}
    window.testiGo=go;
    document.getElementById('testiPrev').onclick=()=>go(ti-1);
    document.getElementById('testiNext').onclick=()=>go(ti+1);
    function auto(){clearInterval(timer);timer=setInterval(()=>go(ti+1),5000);}
    auto(); document.getElementById('testiWrap').addEventListener('pointerenter',()=>clearInterval(timer));
    document.getElementById('testiWrap').addEventListener('pointerleave',auto);
    go(0);
  }
  // FAQ
  const fq=document.getElementById('faqList');
  if(fq) window.clinicData.faqs.forEach((f,i)=>{
    const d=document.createElement('div');d.className='faq rv'+(i===0?' open':'');
    d.innerHTML=`<button class="faq-q" aria-expanded="${i===0}"><span></span><span class="fq-x">+</span></button><div class="faq-a"><p></p></div>`;
    d.querySelector('.faq-q span').textContent=f.q;d.querySelector('.faq-a p').textContent=f.a;
    d.querySelector('.faq-q').onclick=()=>{
      const o=d.classList.contains('open');
      fq.querySelectorAll('.faq').forEach(x=>{x.classList.remove('open');x.querySelector('.faq-q').setAttribute('aria-expanded','false');});
      if(!o){d.classList.add('open');d.querySelector('.faq-q').setAttribute('aria-expanded','true');}
    };
    fq.appendChild(d);
  });
  // Triage
  document.querySelectorAll('input[name="symptom"]').forEach(r=>r.addEventListener('change',()=>{
    const box=document.getElementById('triageOut');if(!box)return;
    box.hidden=false;
    box.querySelector('p').textContent=`You selected: ${r.value}. This is educational only and does not replace a professional dental examination. Contact the clinic to discuss your symptoms.`;
  }));
  // Journey click
  document.querySelectorAll('.j-node').forEach(n=>n.addEventListener('click',()=>{
    document.querySelectorAll('.j-node').forEach(x=>x.classList.remove('on'));n.classList.add('on');
    document.getElementById('jDetail').textContent=n.dataset.desc||'';
  }));
})();
