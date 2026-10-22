import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {extname, resolve, sep} from 'node:path';
const root = resolve(import.meta.dirname);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.woff2':'font/woff2'};
const publicFiles=new Set(['index.html','products.html','contact.html','styles.css','app.js']);
http.createServer(async(req,res)=>{try{let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(pathname.endsWith('/'))pathname+='index.html';const relative=pathname.slice(1);const file=resolve(root,relative);if(!file.startsWith(root+sep)||(!publicFiles.has(relative)&&!relative.startsWith('assets/')))throw Error();const data=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});res.end(data)}catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Not found')}}).listen(Number(process.env.PORT)||3000,'0.0.0.0');
