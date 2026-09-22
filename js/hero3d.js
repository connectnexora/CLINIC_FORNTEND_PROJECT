/* CSS-3D tooth: mouse tilt, click layers, drag rotate, zoom/reset controls */
(function(){
  const stage = document.getElementById('toothStage');
  const tooth = document.getElementById('tooth3d');
  if(!stage||!tooth) return;
  let rx=-12, ry=24, tz=0, targetRX=-12, targetRY=24;
  let dragging=false,sx=0,sy=0;
  const layers = document.querySelectorAll('.layer-chip');
  const info = document.getElementById('toothInfo');
  const layerText = {
    Enamel:"Enamel — hard outer surface protecting the tooth.",
    Dentin:"Dentin — supportive layer beneath enamel.",
    Pulp:"Pulp — nerves and vessels inside the tooth.",
    "Root Canal":"Root Canal — channel housing pulp extending into roots."
  };
  function render(){ tooth.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg) translateZ(${tz}px)`; }
  stage.addEventListener('pointermove',(e)=>{
    if(dragging){
      targetRY += (e.clientX-sx)*.4; targetRX -= (e.clientY-sy)*.4; sx=e.clientX; sy=e.clientY;
    } else {
      const r=stage.getBoundingClientRect();
      const px=(e.clientX-r.left)/r.width-.5, py=(e.clientY-r.top)/r.height-.5;
      targetRY = 24 + px*30; targetRX = -12 - py*30;
    }
  });
  stage.addEventListener('pointerdown',(e)=>{dragging=true;sx=e.clientX;sy=e.clientY;stage.setPointerCapture(e.pointerId);});
  addEventListener('pointerup',()=>dragging=false);
  (function loop(){ rx+=(targetRX-rx)*.08; ry+=(targetRY-ry)*.08; render(); requestAnimationFrame(loop); })();
  layers.forEach(ch=>ch.addEventListener('click',()=>{
    layers.forEach(c=>c.classList.remove('on')); ch.classList.add('on');
    const k=ch.dataset.layer; if(info) info.textContent=layerText[k]||'';
    tooth.setAttribute('data-layer',k);
  }));
  document.getElementById('toothZoomIn')?.addEventListener('click',()=>{tz=Math.min(tz+40,120);});
  document.getElementById('toothZoomOut')?.addEventListener('click',()=>{tz=Math.max(tz-40,-60);});
  document.getElementById('toothReset')?.addEventListener('click',()=>{targetRX=-12;targetRY=24;tz=0;});
  // Second model section reuses drag
  const stage2=document.getElementById('modelStage'), model=document.getElementById('model3d');
  if(stage2&&model){
    let a=-14,b=30,ta=-14,tb=30,z=0;
    stage2.addEventListener('pointermove',(e)=>{
      const r=stage2.getBoundingClientRect();
      ta=-14-((e.clientY-r.top)/r.height-.5)*30; tb=30+((e.clientX-r.left)/r.width-.5)*30;
    });
    (function l2(){a+=(ta-a)*.08;b+=(tb-b)*.08;model.style.transform=`rotateX(${a}deg) rotateY(${b}deg) translateZ(${z}px)`;requestAnimationFrame(l2);})();
    document.getElementById('modelReset')?.addEventListener('click',()=>{ta=-14;tb=30;z=0;});
  }
  // Anatomy SVG
  document.querySelectorAll('.anat-hot').forEach(h=>{
    const show=()=>{
      document.querySelectorAll('.anat-hot').forEach(x=>x.classList.remove('on'));
      h.classList.add('on');
      const card=document.getElementById('anatCard');
      if(card){card.querySelector('h4').textContent=h.dataset.title;card.querySelector('p').textContent=h.dataset.desc;}
    };
    h.addEventListener('mouseenter',show);h.addEventListener('click',show);h.addEventListener('focus',show);
  });
})();
