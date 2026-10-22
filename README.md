# True Blood — After Dark

A responsive, independent fan website with a three-slide homepage hero, filterable collection, and contact form. Built with HTML, CSS, and JavaScript; no package installation is required.

## Run

Use Node.js 24 or newer. From `/workspace/Jarrah`, run `npm start` (or `npm run dev`). The server listens on port 3000 on all interfaces; set `PORT` to override it. Stop it with Ctrl+C.

## Open or publish

`index.html`, `products.html`, and `contact.html` are standalone pages containing their CSS, JavaScript, fonts, and artwork. Download these three files into the same folder and open `index.html` in a browser, or upload them to any static website host. GitHub's file viewer shows source code; it does not run the website.

To publish with GitHub Pages, go to the repository's **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/ (root)**, then save. After GitHub completes deployment, the website address is `https://moejarrah88-creator.github.io/Jarrah/`.

## Edit

Edit `site.template.html`, `styles.css`, or `app.js`, then run `npm run build` to refresh all three standalone pages. The build uses only Node.js built-ins and preserves the source assets in `assets/`.

The contact form validates locally and explicitly reports that no message is sent. Connect a backend or form delivery service before enabling actual submissions. No personal information is stored. The catalog is a showcase, with illustrative product concepts and no checkout.

Fonts and the original atmospheric bayou illustration are bundled locally; no external asset requests are needed. Font licenses are included in `assets/`.

The current design follows the supplied energy drink can reference: metallic silver, berry pink, crimson drips, and illustrated Classic and Cranberry & Raspberry cans. Creepster is bundled and used throughout as a close horror-lettering approximation; the reference image does not identify its original typeface. Can illustrations and flavor listings are design concepts, not a claim of product availability.

This concept is not affiliated with HBO. True Blood and associated properties belong to their respective owners.
