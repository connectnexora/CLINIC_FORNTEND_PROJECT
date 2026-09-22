/* Data-driven content. Treatments marked placeholder where not confirmed. */
window.clinicData = {
  treatments: [
    { id:"rct", icon:"◈", name:"Root Canal Treatment", tag:"Core focus", short:"Advanced care for infected or damaged tooth pulp, aimed at preserving the natural tooth.", what:"Treatment addressing infection or damage inside the tooth.", when:["Persistent tooth pain","Sensitivity to hot/cold","Swelling near a tooth"], expect:"Examination, imaging, cleaning of canals, sealing and restoration. Plan varies by case.", tech:"Digital diagnostics and precision imaging assist planning.", faq:["How long does it take? It varies; your dentist will explain your plan."], placeholder:false },
    { id:"crowns", icon:"⬢", name:"Dental Crowns", tag:"Restorative", short:"Tooth-shaped caps used to restore shape, strength and appearance where indicated.", what:"A cover placed over a tooth to restore form and function.", when:["After root canal treatment","Cracked or weakened tooth"], expect:"Assessment, shaping, impression, placement of crown.", tech:"Imaging and precise measurements guide fit.", faq:[], placeholder:true },
    { id:"implants", icon:"⬣", name:"Dental Implants", tag:"Restorative", short:"Options for replacing missing teeth, evaluated case-by-case.", what:"A replacement approach for missing teeth anchored in the jaw.", when:["Missing tooth","Difficulty chewing"], expect:"Consultation, imaging, staged plan if suitable.", tech:"Precision imaging for evaluation.", faq:[], placeholder:true },
    { id:"general", icon:"✚", name:"General Dentistry", tag:"Everyday care", short:"Check-ups, fillings and everyday oral health care.", what:"Routine diagnosis, fillings and oral health maintenance.", when:["Cavities","Routine check-up"], expect:"Exam, explanation, gentle treatment.", tech:"Digital diagnostics.", faq:[], placeholder:true },
    { id:"cosmetic", icon:"✦", name:"Cosmetic Dentistry", tag:"Smile", short:"Improvements to tooth appearance. Options depend on clinical evaluation.", what:"Treatments focused on smile aesthetics.", when:["Stained or chipped teeth"], expect:"Consultation and personalised options.", tech:"Shade matching and imaging.", faq:[], placeholder:true },
    { id:"preventive", icon:"◉", name:"Preventive Dentistry", tag:"Prevention", short:"Cleanings, guidance and early detection to protect oral health.", what:"Cleanings, fluoride guidance and education.", when:["Routine visits","Gum bleeding"], expect:"Cleaning, review and home-care advice.", tech:"Standard preventive equipment.", faq:[], placeholder:true },
    { id:"restorative", icon:"▣", name:"Restorative Dentistry", tag:"Repair", short:"Fillings, repairs and rebuilding damaged teeth.", what:"Repair of decayed or damaged teeth.", when:["Cavities","Broken tooth"], expect:"Removal of decay, filling or repair.", tech:"Modern restorative materials.", faq:[], placeholder:true },
    { id:"multi", icon:"❖", name:"Multispeciality Dental Care", tag:"Comprehensive", short:"Coordinated care across dental needs under one roof.", what:"Multiple dental disciplines coordinated for the patient.", when:["Complex needs","Family dental care"], expect:"Consultation and referral within clinic as needed.", tech:"Collaborative planning.", faq:[], placeholder:false }
  ],
  technology: [
    { icon:"◎", title:"Digital Diagnostics", desc:"Image-assisted examination to support careful diagnosis. Specific equipment confirmed on request." },
    { icon:"◍", title:"Precision Imaging", desc:"Detailed views that help plan root canal and restorative care." },
    { icon:"⬡", title:"Advanced Root Canal Tools", desc:"Modern rotary and measurement-assisted approaches where clinically appropriate." },
    { icon:"✚", title:"Sterilization & Hygiene", desc:"Strict hygiene protocols designed with patient safety in mind." },
    { icon:"▤", title:"Modern Dental Equipment", desc:"Comfort-oriented operatory setup. Full equipment list on clinic confirmation." }
  ],
  doctors: [
    { name:"Dr. [Name]", role:"Dental Specialist", spec:"[Add verified specialization]", qual:"[Add verified qualifications]", note:"Placeholder — replace with clinic-confirmed profile." }
  ],
  faqs: [
    { q:"What is a root canal treatment?", a:"It is a procedure that addresses infection or damage inside the tooth, with the aim of preserving the natural tooth where clinically appropriate. Your dentist will explain if it suits your case." },
    { q:"Why might a root canal be recommended?", a:"Common reasons include deep decay, persistent pain, or infection affecting the pulp. Only a clinical examination and imaging can confirm." },
    { q:"Is root canal treatment painful?", a:"Treatment is performed with anaesthesia and comfort-focused techniques. Experiences vary; discuss concerns with the clinic. No outcome can be guaranteed pain-free." },
    { q:"How long does treatment take?", a:"It depends on the tooth and complexity — often one or more visits. The clinic will outline your plan after diagnosis." },
    { q:"What happens after treatment?", a:"A filling or crown is often advised to protect the tooth, plus follow-up review. Home-care instructions will be provided." },
    { q:"When should I visit for tooth pain?", a:"Do not ignore persistent, severe, or swelling-associated pain. Contact the clinic to discuss symptoms and next steps." },
    { q:"How can I book an appointment?", a:"Use the booking form, call, or WhatsApp. The form prepares a request — final confirmation comes from the clinic." }
  ],
  testimonials: [
    { text:"Verified patient testimonial goes here.", name:"Patient Name", tag:"Placeholder" },
    { text:"Verified patient testimonial goes here.", name:"Patient Name", tag:"Placeholder" },
    { text:"Verified patient testimonial goes here.", name:"Patient Name", tag:"Placeholder" }
  ],
  gallery: [
    { cat:"Clinic", label:"Reception — DEMO" }, { cat:"Clinic", label:"Operatory — DEMO" },
    { cat:"Technology", label:"Imaging — DEMO" }, { cat:"Technology", label:"Instruments — DEMO" },
    { cat:"Environment", label:"Waiting Lounge — DEMO" }, { cat:"Treatment", label:"Care Suite — DEMO" }
  ],
  steps: [
    { n:"01", t:"Consultation", d:"Discuss symptoms, history and concerns." },
    { n:"02", t:"Diagnosis", d:"Examination and imaging to assess the tooth." },
    { n:"03", t:"Cleaning", d:"Removal of infected tissue and shaping of canals." },
    { n:"04", t:"Root Canal Treatment", d:"Disinfection, sealing and careful restoration planning." },
    { n:"05", t:"Restoration", d:"Filling or crown to protect the tooth." },
    { n:"06", t:"Follow-up", d:"Review healing and long-term care advice." }
  ]
};
