/* Data-driven content. Only services supported by the original clinic website are listed. */
window.clinicData = {
  treatments: [
    { id:"rct", icon:"◈", name:"Root Canal Treatment", tag:"Root Canal", short:"Expert root canal treatment by an endodontist — comfort-focused care aimed at saving your natural tooth.", what:"Treatment addressing infection or damage inside the tooth (pulp), cleaned, disinfected and sealed to preserve the natural tooth where clinically appropriate.", when:["Persistent tooth pain","Sensitivity to hot/cold","Swelling near a tooth","Deep decay or infection"], expect:"Consultation, examination and imaging, cleaning of canals, sealing and restoration. Plan varies by case.", tech:"Technology-assisted procedures supported by imaging and diagnostics.", faq:["How long does it take? It varies; your dentist will explain your plan."], placeholder:false, img:"assets/imgi_21_photo-1664530837840-07497f9fe437.jpg" },
    { id:"rerct", icon:"⬣", name:"Root Canal Retreatment (Re-RCT)", tag:"Root Canal", short:"Specialist re-treatment for teeth with persistent infection or symptoms after an earlier root canal.", what:"Re-treatment that revisits a previously treated tooth to address remaining infection and give the tooth another chance.", when:["Pain returning after a root canal","Persistent infection near a treated tooth","Referral for re-evaluation"], expect:"Review of history and imaging, careful re-cleaning of canals, sealing and restoration planning.", tech:"Imaging-assisted evaluation and modern root canal techniques.", faq:[], placeholder:false, img:"assets/imgi_1_photo-1664530837840-07497f9fe437.jpg" },
    { id:"pain", icon:"✚", name:"Tooth Pain & Infection Care", tag:"Everyday care", short:"Prompt evaluation for severe tooth pain, sensitivity and swelling — with clear next steps.", when:["Severe or persistent tooth pain","Swelling of gums or face","Sensitivity that lingers","Broken or damaged tooth"], expect:"Discussion of symptoms, examination, imaging where needed, and a clear treatment plan.", tech:"Digital diagnostics support careful evaluation.", faq:[], placeholder:false, img:"assets/imgi_3_20241112_203848-m6Ljy9yznQigZ5bG.jpg" },
    { id:"multi", icon:"❖", name:"Multispeciality Dental Care", tag:"Comprehensive", short:"Coordinated dental care for everyday and complex needs — all under one roof in Wakad.", what:"Multiple dental disciplines coordinated for the patient, from routine care to advanced treatment.", when:["Complex dental needs","Family dental care","Ongoing smile care"], expect:"Consultation and coordinated planning within the clinic as needed.", tech:"Collaborative planning supported by modern diagnostics.", faq:[], placeholder:false, img:"assets/imgi_5_photo-1629909613638-0e4a1fad8f81.jpg" }
  ],
  technology: [
    { icon:"◎", title:"Digital Diagnostics", desc:"Image-assisted examination to support careful diagnosis. Specific equipment confirmed on request." },
    { icon:"◍", title:"Precision Imaging", desc:"Detailed views that help plan root canal and restorative care." },
    { icon:"⬡", title:"Advanced Root Canal Tools", desc:"Modern rotary and measurement-assisted approaches where clinically appropriate." },
    { icon:"✚", title:"Sterilization & Hygiene", desc:"Strict hygiene protocols designed with patient safety in mind." },
    { icon:"▤", title:"Modern Dental Equipment", desc:"Comfort-oriented operatory setup. Full equipment list on clinic confirmation." }
  ],
  doctors: [
    { name:"Endodontist-led Clinical Team", role:"Root canal & multispeciality dental care", spec:"Endodontics (root canal treatment, re-RCT) & multispeciality dental care", qual:"Individual clinician credentials are confirmed at the clinic — please ask during your visit.", note:"Care at the clinic is led by an endodontist, with a focus on comfort and preserving natural teeth.", img:"assets/imgi_13_photo-1685022036259-04cf91a89af1.jpg" }
  ],
  faqs: [
    { q:"What is a root canal treatment?", a:"It is a procedure that addresses infection or damage inside the tooth, with the aim of preserving the natural tooth where clinically appropriate. Your dentist will explain if it suits your case." },
    { q:"Why might a root canal be recommended?", a:"Common reasons include deep decay, persistent pain, or infection affecting the pulp. Only a clinical examination and imaging can confirm." },
    { q:"Is root canal treatment painful?", a:"Treatment is performed with anaesthesia and comfort-focused techniques. Experiences vary; discuss concerns with the clinic. No outcome can be guaranteed pain-free." },
    { q:"How long does treatment take?", a:"It depends on the tooth and complexity — often one or more visits. The clinic will outline your plan after diagnosis." },
    { q:"What happens after treatment?", a:"A filling or crown is often advised to protect the tooth, plus follow-up review. Home-care instructions will be provided." },
    { q:"When should I visit for tooth pain?", a:"Do not ignore persistent, severe, or swelling-associated pain. Contact the clinic to discuss symptoms and next steps." },
    { q:"What is Re-RCT (root canal retreatment)?", a:"Re-RCT revisits a tooth that had an earlier root canal but still shows infection or symptoms. The clinic evaluates the tooth with examination and imaging and explains whether re-treatment is suitable." },
    { q:"Where is the clinic located?", a:"Shop No. 206, 2nd Floor, Sentosa Elite, Kaspate Wasti Rd, Kaspate Wasti, Wakad, Pune, Pimpri-Chinchwad, Maharashtra 411057. See the Location section for directions." },
    { q:"How can I book an appointment?", a:"Use the booking form, call, or WhatsApp. The form prepares a request — final confirmation comes from the clinic." }
  ],
  testimonials: [
    { text:"Dr. Jamodkar's clinic made my root canal experience pain-free and stress-free. Highly recommend their service!", name:"Vipul Khatke", tag:"Root canal patient", stars:5 },
    { text:"The expert team provided care and comfort, making my procedure efficient and surprisingly pleasant.", name:"Prsahant Saindane", tag:"Clinic patient", stars:5 }
  ],
  gallery: [
    { cat:"Clinic", label:"Consultation at our Wakad clinic", src:"assets/imgi_7_img_4312-AMqlkWpK25FnLWKE.jpg", alt:"Dentist consulting a patient inside Dr. Jamodkar's dental clinic in Wakad, Pune" },
    { cat:"Treatment", label:"Gentle dental care in progress", src:"assets/imgi_3_20241112_203848-m6Ljy9yznQigZ5bG.jpg", alt:"Dentist providing dental treatment to a patient in the dental chair" },
    { cat:"Treatment", label:"Best root canal treatment in Wakad", src:"assets/imgi_21_photo-1664530837840-07497f9fe437.jpg", alt:"Close-up view of root canal treatment technique on a tooth" },
    { cat:"Clinic", label:"Best dental clinic in Wakad", src:"assets/imgi_5_photo-1629909613638-0e4a1fad8f81.jpg", alt:"Clean modern dental operatory with dental chair in white and teal" },
    { cat:"Clinic", label:"Modern treatment suite", src:"assets/imgi_30_photo-1629909615957-be38d48fbbe6.jpg", alt:"Modern dental treatment suite with equipment" },
    { cat:"Treatment", label:"Best Re-RCT in Wakad", src:"assets/imgi_19_photo-1684607632687-50fd26c8a186.jpg", alt:"Dentist performing advanced dental treatment on a patient" },
    { cat:"Clinic", label:"Best dentist in Wakad", src:"assets/imgi_13_photo-1685022036259-04cf91a89af1.jpg", alt:"Dental care team member in the clinic" },
    { cat:"Environment", label:"Relief — clear explanations, calm visits", src:"assets/imgi_17_photo-1674775372047-27fb6492c9a2.jpg", alt:"Dentist explaining treatment to a patient using a laptop" },
    { cat:"Technology", label:"Smile — precision root canal techniques", src:"assets/imgi_1_photo-1664530837840-07497f9fe437.jpg", alt:"Detailed view of precision root canal instruments treating a tooth" }
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
