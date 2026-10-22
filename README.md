# True Blood — After Dark

A responsive, independent fan website with a three-slide homepage hero, filterable collection, contact form, and ingredients page. Built with HTML, CSS, and JavaScript; no package installation is required.

## Run

Use Node.js 24 or newer. From `/workspace/Jarrah`, run `npm start` (or `npm run dev`). The server listens on port 3000 on all interfaces; set `PORT` to override it. Stop it with Ctrl+C.

## Open or publish

`index.html`, `products.html`, `ingredients.html`, and `contact.html` are standalone pages containing their CSS, JavaScript, fonts, and artwork. Download these four files into the same folder and open `index.html` in a browser, or upload them to any static website host. GitHub's file viewer shows source code; it does not run the website.

To publish with GitHub Pages, go to the repository's **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/ (root)**, then save. After GitHub completes deployment, the website address is `https://moejarrah88-creator.github.io/Jarrah/`.

## Edit

Edit `site.template.html`, `styles.css`, or `app.js`, then run `npm run build` to refresh all four standalone pages. The build uses only Node.js built-ins and preserves the source assets in `assets/`.

The contact form validates locally and explicitly reports that no message is sent. Connect a backend or form delivery service before enabling actual submissions. No personal information is stored. The catalog is a showcase, with illustrative product concepts and no checkout.

Fonts, the vector logo, the blood-edge artwork, and a six-scene product image sheet are bundled locally; no external asset requests are needed. Font licenses are included in `assets/`.

The current design follows the supplied energy drink can reference: metallic silver, berry pink, crimson drips, and realistic Classic and Cranberry & Raspberry can visualizations. Creepster is bundled and used throughout as a close horror-lettering approximation; the reference image does not identify its original typeface. Can illustrations and flavor listings are design concepts, not a claim of product availability.

This concept is not affiliated with HBO. True Blood and associated properties belong to their respective owners.

## Interactions and product information

The homepage carousel has three distinct slides, advances every 5.5 seconds, and supports previous/next, slide dots, swipe, arrow keys when focused, and pause/play. Keyboard focus within the carousel pauses automatic advancement. Reduced-motion preferences disable carousel autoplay.

The product reveal is an actual 10-second CSS animation, not a video file. It plays once when scrolled into view and offers pause/resume and replay. It does not autoplay with reduced-motion preferences; replay is an explicit opt-in.

The product visuals are AI-generated from the supplied can design reference, not verified photographs of manufactured goods. The logo is a vector interpretation of the reference, not a supplied official logo file.

The ingredients page describes evidence and limitations, links to FDA/NIH/NCCIH information, and explicitly labels invented formulation figures as fictional examples. These figures must never be used as a real nutrition label or medical/product claim.

Footer links include the collection, ingredients, contact, FAQ, privacy and terms dialogs, and back to top. Privacy and terms describe the actual demonstration behavior.
