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
    if(q.includes('root canal')&&q.includes('re'))return 'Re-RCT (retreatment) revisits a tooth with a previous root canal that still shows infection or symptoms. The clinic evaluates with examination and imaging. Want to book a consultation?';
    if(q.includes('root canal'))return 'A root canal addresses infection inside the tooth to try to preserve your natural tooth. The clinic focuses on comfort-focused, pain-free treatments. Want to book a consultation?';
    if(q.includes('re-rct')||q.includes('retreatment'))return 'Re-RCT revisits a previously treated tooth with remaining infection. The clinic will explain after examination and imaging whether it suits your case.';
    if(q.includes('book')||q.includes('appointment'))return 'You can use the booking form below, call +91 90289 90705, WhatsApp the clinic, or email bestrctinwakad@gmail.com. The form prepares a request — final confirmation comes from the clinic. Shall I scroll you there? Type "yes".';
    if(q.includes('where')||q.includes('location')||q.includes('wakad')||q.includes('address')||q.includes('reach')||q.includes('direction'))return 'We are at Shop No. 206, 2nd Floor, Sentosa Elite, Kaspate Wasti Rd, Wakad, Pune 411057. See the Location section for directions.';
    if(q.includes('time')||q.includes('hour')||q.includes('open')||q.includes('close'))return 'Please contact the clinic on +91 90289 90705 to confirm visiting hours.';
    if(q.includes('cost')||q.includes('price')||q.includes('fee')||q.includes('charge'))return 'Treatment cost depends on individual clinical evaluation. Please contact the clinic on +91 90289 90705 for guidance.';
    if(q.includes('pain'))return 'Persistent or severe pain or swelling should not be ignored — the clinic specializes in tooth pain and infections. Call +91 90289 90705 to discuss symptoms. This is general information only, not a diagnosis.';
    if(q.includes('yes')){document.querySelector('#book')?.scrollIntoView({behavior:'smooth'});return 'Taking you to the booking section…';}
    if(q.includes('treatment')||q.includes('service'))return 'Our focus: root canal treatment, Re-RCT retreatment, tooth pain & infection care, and multispeciality dental care. Open the Treatments section for details.';
    if(q.includes('contact')||q.includes('phone')||q.includes('email')||q.includes('whatsapp'))return 'Call/WhatsApp: +91 90289 90705. Email: bestrctinwakad@gmail.com. Address: Sentosa Elite, Kaspate Wasti Rd, Wakad, Pune 411057.';
    return 'Thanks — this is general information only, not a diagnosis. Ask about root canals, booking, location, or tooth pain. For advice, please call +91 90289 90705.';
  }
  function send(text){
    const v=(text??input.value).trim(); if(!v)return;
    add(v,true); input.value='';
    setTimeout(()=>add(reply(v),false),500);
  }
  document.getElementById('chatSend')?.addEventListener('click',()=>send());
  input?.addEventListener('keydown',(e)=>{if(e.key==='Enter')send();});
  document.querySelectorAll('.sug').forEach(b=>b.addEventListener('click',()=>send(b.textContent)));
  add('Hello! I am the clinic assistant for Dr. Jamodkar\'s clinic, Wakad. I share general information only — not a diagnosis. How can I help?',false);
})();
