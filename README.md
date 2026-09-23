# Dr. Jamodkar's Advanced Root Canal & Multispeciality Dental Clinic

Pure HTML + CSS + Vanilla JS. No frameworks. Open `index.html` directly.

## Run
- Double-click `index.html`, or: `python -m http.server` then open `http://localhost:8000`

## Real content integrated
- `js/config.js` — verified phone (+91 90289 90705), WhatsApp, email
  (bestrctinwakad@gmail.com), full street address, Google Maps links,
  Facebook + Instagram links.
- `js/data.js` — 4 source-supported treatments (RCT, Re-RCT, tooth pain &
  infection care, multispeciality care), endodontist-led team profile (no
  invented credentials), 2 real patient testimonials (Vipul Khatke, Prsahant
  Saindane), 9 real gallery photos with alt text, FAQ incl. Re-RCT + location.
- Gallery lightbox renders real `<img>` assets with keyboard navigation.
- Before/After DEMO slider replaced with the real clinic film (`<video>`).
- Location section shows the real address + embedded map + directions link.
- Contact section: call / WhatsApp / email / Facebook / Instagram buttons.
- Chatbot answers with real phone, address, email and booking guidance.

## Assets in use (from `assets/`)
- `imgi_7_*` (real consultation photo) → hero banner + gallery
- `imgi_3_*` (real treatment photo) → about + gallery + video poster
- `imgi_21_*`, `imgi_1_*` (root canal technique) → root canal section + treatments + gallery
- `imgi_5_*`, `imgi_30_*`, `imgi_13_*`, `imgi_17_*`, `imgi_19_*` → gallery / doctors / treatments
- `Dr. Jamodkars ... .mp4` → clinic film section (controls, preload=none)
- `download (3).svg` / `download (4).svg` → Instagram / Facebook icons

## Structure
- `index.html` — semantic sections, SEO + JSON-LD (telephone, email, address)
- `css/style.css` — design system variables, layout
- `css/animations.css` — keyframes, reduced-motion
- `css/responsive.css` — 320→1920 breakpoints, mobile CTA
- `js/config.js`, `data.js`, `utilities.js`, `theme.js`, `navigation.js`, `particles.js`, `hero3d.js`, `treatments.js`, `clinic.js`, `appointments.js`, `chatbot.js`, `main.js`

## Notes
- No medical guarantees; copy follows the original clinic wording.
- Appointment form is local-only (IDLE → BOOKING → received) and opens
  WhatsApp with the request since a number is configured; final confirmation
  always comes from the clinic.
- Chatbot is local with disclaimer, no diagnosis.
- Remaining manual step: replace the honest generic technology descriptions
  with exact equipment names only if the clinic confirms them.
