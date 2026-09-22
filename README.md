# Dr. Jamodkar's Advanced Root Canal & Multispeciality Dental Clinic

Pure HTML + CSS + Vanilla JS. No frameworks. Open `index.html` directly.

## Run
- Double-click `index.html`, or: `python -m http.server` then open `http://localhost:8000`

## Configure (required before publishing)
Edit `js/config.js`:
- `phone`, `whatsapp`, `email`, `address`, `mapsUrl`, `bookingUrl`, social links

## Replace placeholders
- Treatments flagged `placeholder:true` in `js/data.js`
- Doctor profile in `js/data.js` → `doctors`
- Testimonials are placeholders until verified reviews supplied
- Gallery tiles are CSS gradients → swap with real `<img>` in `js/clinic.js` `renderGal`
- Before/After slider is DEMO only; needs clinic-approved images

## Structure
- `index.html` — semantic sections, SEO + JSON-LD (no fake ratings)
- `css/style.css` — design system variables, layout
- `css/animations.css` — keyframes, reduced-motion
- `css/responsive.css` — 320→1920 breakpoints, mobile CTA
- `js/config.js`, `data.js`, `utilities.js`, `theme.js`, `navigation.js`, `particles.js`, `hero3d.js`, `treatments.js`, `clinic.js`, `appointments.js`, `chatbot.js`, `main.js`

## Notes
- No medical guarantees; copy uses "designed with comfort in mind" language.
- Appointment form is local-only demo (IDLE → BOOKING → received), optionally opens WhatsApp if configured.
- Chatbot is local demo with disclaimer, no diagnosis.
