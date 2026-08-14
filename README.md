# Sunny Day Adventures – Netlify Ready Site (Updated)

Clean static rebuild of https://www.sunnydayadventure.com  
Now with **separate service pages**, **native Netlify form**, and styling closer to the original site.

## What’s Included

### All previous fixes
- Fixed black hero video box → strong tropical hero + dark banner style
- WhatsApp-first (floating button + header + every tour)
- Consistent contact details (+1 284-441-1733)
- Expanded 7-question FAQ
- Strong CTAs (“Book on WhatsApp” / “View Details”)
- 5.0 Google & TripAdvisor badges

### New in this version
1. **Separate service pages**
   - `/tours/snorkel.html` – Private Full Day Snorkel Adventure
   - `/tours/essentials.html` – The Essentials' Private Boat Tour
   - `/tours/4x4.html` – 4x4 Tortola Island Tour
   - `/tours/sailing.html` – Sailing & Snorkeling Vacation

2. **BVI Cruising Guide** (`/bvi-cruising-guide.html`)
   - Full local-style guide: why sail the BVI, must-visit stops, classic 7-day loop, best snorkeling, practical tips
   - Strong CTAs into private day trips & multi-day sailing
   - Linked from main nav

3. **Native Netlify Form**
   - No Formspree needed
   - Uses `data-netlify="true"` + honeypot
   - Submissions appear in Netlify dashboard → Forms

4. **Closer visual match to original**
   - Dark grey banners with yellow text (like original)
   - Pill-style navigation
   - Orange accent borders
   - Same tropical color language

## Deploy to Netlify (≈ 2 minutes)

### Drag & Drop
1. Download / unzip `sunnyday-netlify.zip`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drop the **folder** (not the zip)
4. Live instantly

### Git method
1. Push the folder to GitHub/GitLab
2. Netlify → Add new site → Import project
3. No build command needed (pure static)

## After Deploy
- Forms will automatically appear under **Netlify → Forms**
- You can set notification emails in Form settings
- Optional: add a custom domain in Domain settings

## File Structure
```
sunnyday-netlify/
├── index.html
├── bvi-cruising-guide.html   ← NEW
├── css/styles.css
├── js/main.js
├── tours/
│   ├── snorkel.html
│   ├── essentials.html
│   ├── 4x4.html
│   └── sailing.html
└── README.md
```

No build step. Pure HTML/CSS/JS.
