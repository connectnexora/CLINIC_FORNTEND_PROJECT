/* AI dental assistant demo — local responses only, with medical disclaimer */
(function(){
  const fab=document.getElementById('chatFab'), win=document.getElementById('chatWin');
  const log=document.getElementById('chatLog'), input=document.getElementById('chatInput');
  window.openChat=function(){win?.classList.add('open');};
  window.closeChat=function(){win?.classList.remove('open');};
  fab?.addEventListener('click',()=>win.classList.contains('open')?closeChat():openChat());
  document.getElementById('chatClose')?.addEventListener('click',closeChat);
  function add(text,me){
    const d=document.createElement('div');d.className='msg '+(me?'me':'bot');d.textContent=text;log.appendChild(d);log.scrollTop=log.scrollHeight;
  }
  function reply(q){
    q=q.toLowerCase();
    if(q.includes('root canal'))return 'A root canal addresses infection inside the tooth to try to preserve it. Suitability needs an exam and imaging. Would you like to book a consultation?';
    if(q.includes('book')||q.includes('appointment'))return 'You can use the booking form in the Appointment section, or call/WhatsApp once numbers are configured. Shall I scroll you there? Type "yes".';
    if(q.includes('where')||q.includes('location')||q.includes('wakad'))return 'The clinic is in Wakad, Pune, Maharashtra, India. See the Location section for directions.';
    if(q.includes('pain'))return 'Persistent or severe pain or swelling should not be ignored. Contact the clinic to discuss symptoms. This is general information only, not a diagnosis.';
    if(q.includes('yes')){document.querySelector('#book')?.scrollIntoView({behavior:'smooth'});return 'Taking you to the booking section…';}
    if(q.includes('treatment'))return 'Focus areas include root canal treatment and multispeciality dental care. Open the Treatments section for details marked as confirmed vs placeholder.';
    return 'Thanks — this demo provides general information only. Ask about root canals, booking, location, or tooth pain. For diagnosis, please consult the clinic.';
  }
  function send(text){
    const v=(text??input.value).trim(); if(!v)return;
    add(v,true); input.value='';
    setTimeout(()=>add(reply(v),false),500);
  }
  document.getElementById('chatSend')?.addEventListener('click',()=>send());
  input?.addEventListener('keydown',(e)=>{if(e.key==='Enter')send();});
  document.querySelectorAll('.sug').forEach(b=>b.addEventListener('click',()=>send(b.textContent)));
  add('Hello! I am the clinic demo assistant. This is an informational demo and does not provide medical diagnosis. How can I help?',false);
})();
