// Unsplash image search → downloads candidates for the service cards + hero.
// Reads UNSPLASH_ACCESS_KEY from .env (git-ignored). Unsplash License = free
// commercial use; we capture photographer credit for an optional credits line.
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'fs';

let KEY = process.env.UNSPLASH_ACCESS_KEY;
if (!KEY && existsSync('.env')) {
  const m = readFileSync('.env', 'utf8').match(/UNSPLASH_ACCESS_KEY=(.+)/);
  if (m) KEY = m[1].trim();
}
if (!KEY) {
  console.error('NO KEY. Create .env with: UNSPLASH_ACCESS_KEY=your_access_key');
  process.exit(1);
}

mkdirSync('src/assets/candidates', { recursive: true });

const queries = {
  hero: 'food factory production line',
  mixing: 'industrial food powder mixing',
  packaging: 'food packaging production line',
  warehouse: 'distribution warehouse pallets',
  stickpacks: 'powder sachet stick pack',
};

const meta = {};
for (const [cat, q] of Object.entries(queries)) {
  const api = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(q)}&per_page=4&orientation=landscape&content_filter=high`;
  const res = await fetch(api, { headers: { Authorization: `Client-ID ${KEY}`, 'Accept-Version': 'v1' } });
  if (!res.ok) { console.error(`${cat}: HTTP ${res.status} — ${await res.text()}`); continue; }
  const json = await res.json();
  meta[cat] = [];
  console.log(`\n${cat} (${q}) — ${json.results.length} results`);
  for (let i = 0; i < Math.min(3, json.results.length); i++) {
    const r = json.results[i];
    const url = `${r.urls.raw}&w=1280&h=800&fit=crop&q=80&auto=format`;
    const file = `src/assets/candidates/${cat}-${i}.jpg`;
    const img = await fetch(url);
    writeFileSync(file, Buffer.from(await img.arrayBuffer()));
    const info = { file, by: r.user?.name, profile: r.user?.links?.html, alt: r.alt_description, link: r.links?.html };
    meta[cat].push(info);
    console.log(`  [${i}] ${(r.alt_description || '').slice(0, 54)} — © ${r.user?.name}`);
  }
}
writeFileSync('docs/image-candidates.json', JSON.stringify(meta, null, 2));
console.log('\nDONE → src/assets/candidates/ + docs/image-candidates.json');
