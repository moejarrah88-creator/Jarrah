import {readFile, writeFile} from 'node:fs/promises';
import {resolve, extname} from 'node:path';

const root = import.meta.dirname;
const read = path => readFile(resolve(root, path), 'utf8');
const mime = {'.woff2':'font/woff2', '.svg':'image/svg+xml', '.png':'image/png'};
async function dataUrl(path) {
  const content = await readFile(resolve(root, path));
  return `data:${mime[extname(path)]};base64,${content.toString('base64')}`;
}

// Bundle local visual assets so each page works independently, including file://.
let css = await read('styles.css');
for (const match of [...css.matchAll(/url\(['"]?(assets\/[^)'"\s]+)['"]?\)/g)]) {
  css = css.replaceAll(match[0], `url("${await dataUrl(match[1])}")`);
}
const js = await read('app.js');
let template = await read('site.template.html');
for (const path of new Set([...template.matchAll(/src="(assets\/[^"]+)"/g)].map(m=>m[1]))) {
  template = template.replaceAll(path, await dataUrl(path));
}
const html = template
  .replace('<link rel="stylesheet" href="styles.css">', () => `<style>${css}</style>`)
  .replace('<script src="app.js"></script>', () => `<script>${js}</script>`);
for (const name of ['index.html', 'products.html', 'contact.html', 'ingredients.html']) {
  await writeFile(resolve(root, name), html);
}
console.log('Built 4 standalone pages with embedded CSS, JavaScript, fonts, and artwork.');
