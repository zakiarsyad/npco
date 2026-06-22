import { chromium } from 'playwright';
import { preview } from 'astro';
import { mkdirSync } from 'fs';

mkdirSync('docs/shots', { recursive: true });
const server = await preview({ server: { port: 4399 } });
const base = 'http://localhost:4399/';
const browser = await chromium.launch();

for (const vp of [
  { tag: 'desktop', width: 1440, height: 900 },
  { tag: 'mobile', width: 390, height: 844 },
]) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1200);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);
  await page.screenshot({ path: `docs/shots/build-${vp.tag}-fold.png` });
  await page.screenshot({ path: `docs/shots/build-${vp.tag}-full.png`, fullPage: true });
  console.log('shot', vp.tag);
  await ctx.close();
}
await browser.close();
await server.stop();
console.log('DONE');
