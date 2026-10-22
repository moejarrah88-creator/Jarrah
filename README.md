# True Blood — Adrenalina catalog

A responsive five-page website whose brand data, product entries, logo, and editorial imagery come from the supplied `ADRENALINA.pdf`.

## Run and edit

Use Node.js 24 or newer. No dependency installation is needed.

- `npm start` starts the server on `0.0.0.0:3000`; set `PORT` to override.
- Edit `site.template.html`, `app.js`, or `styles.css`, then run `npm run build`.
- The build outputs `index.html`, `products.html`, `ingredients.html`, `about.html`, and `contact.html`, embedding CSS, fonts, logos, and product images into each page.
- Download all five HTML files into the same folder to open the site locally. Include `assets/ADRENALINA.pdf` to retain source/download links.

The source files remain human-editable; generated HTML is committed so GitHub Pages needs no build service. In repository **Settings → Pages**, deploy **main → / (root)**. The expected published address is `https://moejarrah88-creator.github.io/Jarrah/`; publication is managed by GitHub.

## Data and imagery

See [SOURCES.md](SOURCES.md) for the source-page map, image extraction details, and known source discrepancies. The original supplied brochure is retained at `assets/ADRENALINA.pdf`. `catalog.json` records the 16 entries and page references; `app.js` contains the matching runtime data. All displayed image assets are extracted from this PDF. Decorative drips are CSS, not generated product imagery. Creepster remains a bundled interface font, with its license in `assets/`; it is not claimed to be the source logo typeface.

The invented formulation, third-party health claims, generated can images, HBO references, and unsupported merchandise from earlier versions have been removed. Product information explicitly states what the PDF does not supply. The Sugar Free / Low Sugar discrepancy on page 11 is flagged.

## Behavior

The homepage carousel has three source-based slides, 5.5-second autoplay, previous/next, dots, swipe, keyboard controls, and pause/play. Automatic advancement pauses when keyboard focus is within the carousel. Reduced-motion preferences disable autoplay.

The 10-second CSS product animation uses Classic can artwork from PDF page 10, plays once when visible, and supports pause/resume/replay. It does not autoplay with reduced-motion preferences.

The contact page uses the business details printed on PDF page 37. Its form prepares a `mailto:` draft for the visitor to open in an email application; it never sends automatically or stores personal data. No backend, checkout, analytics, or tracking scripts are present. Brochure locations are presented as listed company locations, not verified retail stockists. Footer privacy and website-information dialogs describe actual site behavior.
