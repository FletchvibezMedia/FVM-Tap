import { readFile } from 'node:fs/promises';
const required=['package.json','wrangler.jsonc','src/worker.ts','src/clients.ts','public/index.html','public/styles.css','public/app.js'];
for(const file of required){const content=await readFile(new URL(`../${file}`,import.meta.url),'utf8');if(!content.trim())throw new Error(`${file} is empty`)}
console.log(`Validated ${required.length} required files.`);
