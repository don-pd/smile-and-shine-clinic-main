# Smile & Shine Dental Clinic — HTML/CSS/JS Version

A static website built with plain **HTML, CSS, and JavaScript** — no frameworks, no build tools, no dependencies.

## How to run

### Option 1: Just open it
1. Unzip this folder
2. Double-click `index.html` — it opens in your browser

### Option 2: Run a local server (recommended)
This is better because the map embed and some features work more reliably with a server.

**Using VS Code:**
1. Open the folder in VS Code
2. Install the "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

**Using Python:**
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000

**Using Node.js:**
```bash
npx serve
```

## Files

```
smile-shine-html/
├── index.html       # All page content & structure (HTML)
├── styles.css       # All styling (CSS — brand colors, layout, responsive)
├── script.js        # Interactivity (JS — mobile menu, floating buttons, scroll)
├── images/          # All photos
│   ├── dr-rafi.jpg
│   ├── team-anas.jpg
│   ├── team-rizwin.jpg
│   ├── team-vikas.jpg
│   ├── patient-1.jpg
│   ├── patient-2.jpg
│   ├── patient-3.jpg
│   ├── clinic-exterior.jpg
│   └── clinic-interior-wide.jpg
├── logo.png         # Clinic logo
└── favicon.png      # Browser tab icon
```

## Tech

- **HTML** — single `index.html` file with all sections
- **CSS** — single `styles.css` file with brand design system (teal #00a8c6, ink #102b2c, aqua #bfe9e7, marigold #f2ae2e)
- **JavaScript** — single `script.js` file (mobile menu toggle, floating WhatsApp/Call buttons, header scroll effect)
- **Fonts** — Manrope (body) + Newsreader (headings) via Google Fonts CDN
- **No build tools needed** — no npm install, no compilation, no Node.js required

## Editing content

All text is directly in `index.html`. Search for the text you want to change and edit it.

To change colors, edit the CSS variables at the top of `styles.css`.

To swap images, replace files in the `images/` folder (keep the same filenames).
