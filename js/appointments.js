/* Appointment form: validation, states, configurable submission */
(function(){
  const form=document.getElementById('bookForm');
  if(!form) return;
  const btn=form.querySelector('[type="submit"]');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=form.name.value.trim(), phone=form.phone.value.trim(), email=form.email.value.trim(), date=form.date.value;
    if(!name){toast('Please enter your name.','warn');form.name.focus();return;}
    if(!/^[+\d][\d\s-]{6,}$/.test(phone)){toast('Please enter a valid phone number.','warn');form.phone.focus();return;}
    if(email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){toast('Please enter a valid email.','warn');form.email.focus();return;}
    if(!date){toast('Please choose a preferred date.','warn');form.date.focus();return;}
    btn.disabled=true;btn.textContent='BOOKING…';
    setTimeout(()=>{
      btn.disabled=false;btn.textContent='REQUEST APPOINTMENT';
      document.getElementById('bookSuccess').hidden=false;
      toast('Appointment request prepared — clinic will confirm.','success');
      // If whatsapp configured, offer to send
      const msg=`Hello ${clinicConfig.shortName}, I am ${name}. Preferred: ${date} ${form.time.value} for ${form.reason.value}. Phone: ${phone}`;
      if(clinicConfig.whatsapp){
        window.open('https://wa.me/'+clinicConfig.whatsapp+'?text='+encodeURIComponent(msg),'_blank');
      }
      form.reset();
    },1200);
  });
  // min date = today
  const d=document.getElementById('fDate'); if(d) d.min=new Date().toISOString().slice(0,10);
})();
