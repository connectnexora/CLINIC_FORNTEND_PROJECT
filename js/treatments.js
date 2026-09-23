/* Treatments grid + filter + modal, Why-choose tilt, tech render */
(function(){
  const grid=document.getElementById('treatGrid');
  const modal=document.getElementById('treatModal');
  function card(t){
    const el=document.createElement('article');
    el.className='tcard rv'+(t.id==='rct'?' featured':'');el.tabIndex=0;el.setAttribute('data-cursor','VIEW');
    el.innerHTML=`<div class="t-ic">${t.icon}</div><div class="t-tag">${t.tag}${t.placeholder?' · Placeholder':''}</div><h3></h3><p></p><button class="link">Learn More →</button>`;
    el.querySelector('h3').textContent=t.name; el.querySelector('p').textContent=t.short;
    if(t.img){
      const im=document.createElement('img');
      im.src=t.img; im.alt=t.name+' at Dr. Jamodkar\'s clinic, Wakad';
      im.loading='lazy'; im.decoding='async'; im.className='t-img';
      el.prepend(im);
    }
    el.addEventListener('click',()=>open(t)); el.addEventListener('keydown',(e)=>{if(e.key==='Enter')open(t);});
    // tilt
    el.addEventListener('pointermove',(e)=>{
      const r=el.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      el.style.transform=`translateY(-6px) rotateX(${-y*8}deg) rotateY(${x*8}deg)`;
    });
    el.addEventListener('pointerleave',()=>el.style.transform='');
    return el;
  }
  function render(f){
    if(!grid)return; grid.innerHTML='';
    window.clinicData.treatments.filter(t=>!f||f==='All'||t.tag===f).forEach(t=>grid.appendChild(card(t)));
    window.observeReveals(grid);
  }
  document.querySelectorAll('.chip[data-filter]').forEach(c=>c.addEventListener('click',()=>{
    document.querySelectorAll('.chip[data-filter]').forEach(x=>x.classList.remove('on'));
    c.classList.add('on'); render(c.dataset.filter);
  }));
  function open(t){
    if(!modal)return;
    modal.classList.add('open'); document.body.classList.add('lock');
    modal.querySelector('#tmName').textContent=t.name;
    modal.querySelector('#tmShort').textContent=t.short;
    const tmImg=modal.querySelector('#tmImg');
    if(tmImg){ if(t.img){tmImg.src=t.img;tmImg.alt=t.name+' at Dr. Jamodkar\'s clinic';tmImg.hidden=false;} else {tmImg.hidden=true;tmImg.removeAttribute('src');} }
    modal.querySelector('#tmWhat').textContent=t.what;
    modal.querySelector('#tmWhen').textContent='May be discussed for: '+t.when.join(', ')+'. Final advice needs clinical evaluation.';
    modal.querySelector('#tmExpect').textContent=t.expect;
    modal.querySelector('#tmTech').textContent=t.tech;
    modal.querySelector('#tmNote').textContent=t.placeholder?'Placeholder — replace with clinic-confirmed service list. Treatment options depend on individual clinical evaluation.':'Treatment options depend on individual clinical evaluation.';
  }
  window.closeModal=function(){modal?.classList.remove('open');document.body.classList.remove('lock');};
  modal?.addEventListener('click',(e)=>{if(e.target===modal||e.target.closest('[data-close]'))closeModal();});
  render('All');
  // Tech
  const tg=document.getElementById('techGrid');
  if(tg) window.clinicData.technology.forEach(t=>{
    const d=document.createElement('div');d.className='wcard rv';
    d.innerHTML=`<div class="t-ic"></div><h3></h3><p></p>`;
    d.querySelector('.t-ic').textContent=t.icon;d.querySelector('h3').textContent=t.title;d.querySelector('p').textContent=t.desc;
    tg.appendChild(d);
  });
  // Root canal steps
  const rs=document.getElementById('rcSteps');
  if(rs) window.clinicData.steps.forEach((s,i)=>{
    const d=document.createElement('button');d.className='rc-step rv'+(i===0?' on':'');
    d.innerHTML=`<span class="rc-n">${s.n}</span><span class="rc-t"></span><span class="rc-d"></span>`;
    d.querySelector('.rc-t').textContent=s.t;d.querySelector('.rc-d').textContent=s.d;
    d.addEventListener('click',()=>{
      rs.querySelectorAll('.rc-step').forEach(x=>x.classList.remove('on'));d.classList.add('on');
      document.getElementById('rcDetail').innerHTML=`<strong>${s.n} — ${s.t}</strong><br>${s.d}<br><small>Treatment options depend on individual clinical evaluation.</small>`;
      const bar=document.getElementById('rcBar');if(bar)bar.style.width=((i+1)/window.clinicData.steps.length*100)+'%';
    });
    rs.appendChild(d);
  });
})();
