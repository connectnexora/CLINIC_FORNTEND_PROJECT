/* Canvas particles: subtle medical network, mouse-reactive, DPR aware, pauses offscreen */
(function(){
  const cv = document.getElementById('particles');
  if(!cv) return;
  const ctx = cv.getContext('2d');
  let W,H,pts=[],mouse={x:-9e3,y:-9e3},running=true;
  const isMobile = matchMedia('(max-width:768px)').matches;
  const N = isMobile?36:70;
  function resize(){
    const r = cv.parentElement.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio||1,2);
    W=r.width;H=r.height;
    cv.width=W*dpr;cv.height=H*dpr;cv.style.width=W+'px';cv.style.height=H+'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  function init(){
    pts=Array.from({length:N},()=>({
      x:Math.random()*W,y:Math.random()*H,
      vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,
      r:Math.random()*1.8+.6,o:Math.random()*.5+.25
    }));
  }
  function step(){
    if(!running){requestAnimationFrame(step);return;}
    ctx.clearRect(0,0,W,H);
    const col = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()||'#087f8c';
    for(const p of pts){
      p.x+=p.vx;p.y+=p.vy;
      const dx=p.x-mouse.x,dy=p.y-mouse.y,d=Math.hypot(dx,dy);
      if(d<120){p.x+=dx/d*.6;p.y+=dy/d*.6;}
      if(p.x<0||p.x>W)p.vx*=-1; if(p.y<0||p.y>H)p.vy*=-1;
      ctx.globalAlpha=p.o;ctx.fillStyle=col;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);ctx.fill();
    }
    ctx.globalAlpha=.12;ctx.strokeStyle=col;ctx.lineWidth=1;
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
      const a=pts[i],b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<110){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}
    }
    ctx.globalAlpha=1;
    requestAnimationFrame(step);
  }
  addEventListener('resize',()=>{resize();});
  cv.parentElement.addEventListener('pointermove',(e)=>{
    const r=cv.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top;
  });
  cv.parentElement.addEventListener('pointerleave',()=>{mouse.x=-9e3;mouse.y=-9e3;});
  new IntersectionObserver((es)=>{running=es[0].isIntersecting;}).observe(cv);
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return; // static fallback
  resize();init();step();
  // Re-tint on theme change (redraw uses computed style each frame already)
  addEventListener('resize',resize);
})();
