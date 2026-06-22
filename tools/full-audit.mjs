import { preview } from 'astro';
import { chromium } from 'playwright';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { mkdirSync } from 'fs';

mkdirSync('docs/shots', { recursive: true });
const PORT = 4410;
const URL = `http://localhost:${PORT}/`;
const server = await preview({ server: { port: PORT } });

// ---------- 2. CONTRAST (WCAG) ----------
const hex = (h) => { h = h.replace('#', ''); return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)); };
const comp = (fg, bg, a) => fg.map((c, i) => Math.round(c * a + bg[i] * (1 - a)));
const lin = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const L = (rgb) => 0.2126 * lin(rgb[0]) + 0.7152 * lin(rgb[1]) + 0.0722 * lin(rgb[2]);
const ratio = (a, b) => { const l1 = L(a), l2 = L(b); return ((Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)); };
const C = { navy900: hex('#0e1c30'), navy800: hex('#12243c'), navy950: hex('#0a1422'), amber500: hex('#f2820d'), amber400: hex('#ff9e2c'), amber700: hex('#a8530a'), oat100: hex('#f7f1e6'), cloud: hex('#fbfaf7'), ink: hex('#15191f'), slate: hex('#4b5563'), muted: hex('#62707e'), white: hex('#ffffff') };
const pairs = [
  ['white on navy-900 (headings/dark)', C.white, C.navy900, 1],
  ['white/75 on navy-900 (hero sub)', C.white, C.navy900, 0.75],
  ['white/70 on navy-900 (persona body)', C.white, C.navy900, 0.7],
  ['white/55 on navy-900 (hero trust line)', C.white, C.navy900, 0.55],
  ['amber-400 on navy-900 (eyebrow/links)', C.amber400, C.navy900, 1],
  ['navy-950 on amber-500 (primary button)', C.navy950, C.amber500, 1],
  ['navy-800 on oat-100 (headings)', C.navy800, C.oat100, 1],
  ['ink on cloud (body)', C.ink, C.cloud, 1],
  ['slate on cloud (secondary body)', C.slate, C.cloud, 1],
  ['slate on white (card body)', C.slate, C.white, 1],
  ['muted on cloud (captions)', C.muted, C.cloud, 1],
  ['amber-700 on cloud (eyebrow)', C.amber700, C.cloud, 1],
  ['amber-700 on oat-100 (eyebrow)', C.amber700, C.oat100, 1],
  ['white/60 on navy-950 (footer labels)', C.white, C.navy950, 0.6],
];
console.log('\n===== 2. COLOR / CONTRAST (AA: 4.5 normal, 3.0 large/UI) =====');
const contrast = pairs.map(([label, fg, bg, a]) => {
  const eff = a < 1 ? comp(fg, bg, a) : fg;
  const r = ratio(eff, bg);
  const pass = r >= 4.5 ? 'PASS' : r >= 3 ? 'LARGE-ONLY' : 'FAIL';
  console.log(`  ${r.toFixed(2)}  ${pass.padEnd(11)} ${label}`);
  return { label, ratio: +r.toFixed(2), pass };
});

// ---------- Playwright checks ----------
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: 'networkidle' });
await page.addStyleTag({ content: 'html{scroll-behavior:auto!important}' });

// ---------- 4. LINKS / BUTTONS ----------
const links = await page.evaluate(() => {
  const out = [];
  document.querySelectorAll('a[href]').forEach((a) => {
    const href = a.getAttribute('href');
    let status = 'ok';
    if (href === '#' || href === '') status = 'EMPTY';
    else if (href.startsWith('#')) status = document.getElementById(href.slice(1)) ? 'ok-anchor' : 'BROKEN-ANCHOR';
    else if (href.startsWith('tel:') || href.startsWith('mailto:')) status = 'ok-contact';
    else if (/^https?:/.test(href)) status = 'ok-external';
    out.push({ href, text: a.textContent.trim().slice(0, 30), status });
  });
  return out;
});
const buttons = await page.evaluate(() => ({ count: document.querySelectorAll('button').length, form: !!document.querySelector('form[name=quote]'), submit: !!document.querySelector('form[name=quote] button[type=submit]') }));
const brokenLinks = links.filter((l) => l.status.startsWith('BROKEN') || l.status === 'EMPTY');
console.log('\n===== 4. LINKS / BUTTONS =====');
console.log(`  links: ${links.length} | anchors broken/empty: ${brokenLinks.length}`);
brokenLinks.forEach((l) => console.log(`   ⚠ ${l.href} (${l.text})`));
console.log(`  buttons: ${buttons.count} | quote form: ${buttons.form} | submit btn: ${buttons.submit}`);
// test an anchor click scrolls
await page.click('a[href="#services"]');
await page.waitForTimeout(300);
const scrolledToServices = await page.evaluate(() => { const r = document.getElementById('services').getBoundingClientRect(); return Math.abs(r.top) < 120; });
console.log(`  anchor nav (#services) scrolls into view: ${scrolledToServices}`);

// ---------- 3. ANIMATION ----------
await page.evaluate(() => window.scrollTo(0, 0));
const anim = await page.evaluate(() => {
  const r = document.querySelector('.reveal');
  const cs = r ? getComputedStyle(r) : null;
  return {
    revealCount: document.querySelectorAll('.reveal').length,
    usesOpacityTransform: cs ? cs.transitionProperty.includes('opacity') && cs.transitionProperty.includes('transform') : false,
    transitionDuration: cs ? cs.transitionDuration : null,
    countUpEls: document.querySelectorAll('[data-count]').length,
  };
});
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(1600);
const revealedIn = await page.evaluate(() => document.querySelectorAll('.reveal.in').length);
// reduced motion
const ctxRM = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
const pageRM = await ctxRM.newPage();
await pageRM.goto(URL, { waitUntil: 'networkidle' });
await pageRM.waitForTimeout(300);
const rmVisible = await pageRM.evaluate(() => { const r = document.querySelector('.reveal'); return r ? getComputedStyle(r).opacity : null; });
await ctxRM.close();
console.log('\n===== 3. ANIMATION =====');
console.log(`  reveal els: ${anim.revealCount} | revealed after scroll: ${revealedIn}`);
console.log(`  GPU-friendly (opacity+transform only): ${anim.usesOpacityTransform} | duration: ${anim.transitionDuration}`);
console.log(`  count-up els: ${anim.countUpEls} | reduced-motion shows content (opacity=${rmVisible}): ${rmVisible === '1'}`);

// ---------- 5. RESPONSIVENESS ----------
console.log('\n===== 5. RESPONSIVENESS (horizontal overflow check) =====');
const responsive = [];
for (const w of [320, 375, 390, 768, 1024, 1280, 1440]) {
  const c = await browser.newContext({ viewport: { width: w, height: 900 } });
  const p = await c.newPage();
  await p.goto(URL, { waitUntil: 'networkidle' });
  const overflow = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  responsive.push({ w, overflowPx: overflow });
  console.log(`  ${w}px: overflow ${overflow}px ${overflow > 1 ? '⚠ OVERFLOW' : 'OK'}`);
  if (w === 320 || w === 768) await p.screenshot({ path: `docs/shots/resp-${w}.png` });
  await c.close();
}
await ctx.close();
await browser.close();

// ---------- 6. LIGHTHOUSE (mobile) ----------
console.log('\n===== 6. LIGHTHOUSE (mobile emulation) =====');
const chrome = await chromeLauncher.launch({ chromePath: chromium.executablePath(), chromeFlags: ['--headless=new', '--no-sandbox'] });
const lhr = (await lighthouse(URL, { port: chrome.port, output: 'json', logLevel: 'error', onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'] })).lhr;
await chrome.kill();
const cat = lhr.categories;
const scores = { performance: Math.round(cat.performance.score * 100), accessibility: Math.round(cat.accessibility.score * 100), bestPractices: Math.round(cat['best-practices'].score * 100), seo: Math.round(cat.seo.score * 100) };
console.log(`  Performance: ${scores.performance} | A11y: ${scores.accessibility} | Best-Practices: ${scores.bestPractices} | SEO: ${scores.seo}`);
const m = lhr.audits;
console.log(`  LCP: ${m['largest-contentful-paint'].displayValue} | CLS: ${m['cumulative-layout-shift'].displayValue} | TBT: ${m['total-blocking-time'].displayValue} | FCP: ${m['first-contentful-paint'].displayValue} | SI: ${m['speed-index'].displayValue}`);
const a11yFails = Object.values(m).filter((a) => a.score === 0 && a.scoreDisplayMode === 'binary' && cat.accessibility.auditRefs.some((r) => r.id === a.id)).map((a) => a.title);
if (a11yFails.length) console.log('  a11y failed audits:', a11yFails);

await server.stop();
console.log('\nDONE');
