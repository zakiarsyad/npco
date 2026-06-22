import { chromium, devices } from 'playwright';
import { mkdirSync } from 'fs';

const OUT = 'shots';
mkdirSync(OUT, { recursive: true });

const sites = [
  { name: 'npco', url: 'https://npcoinc.com/' },
  { name: 'cbs', url: 'https://www.casesbysource.com/' },
];

const viewports = [
  { tag: 'desktop', width: 1440, height: 900, isMobile: false },
  { tag: 'mobile', width: 390, height: 844, isMobile: true },
];

const browser = await chromium.launch();

for (const site of sites) {
  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      isMobile: vp.isMobile,
      deviceScaleFactor: 2,
      userAgent: vp.isMobile
        ? devices['iPhone 13'].userAgent
        : undefined,
    });
    const page = await context.newPage();
    try {
      await page.goto(site.url, { waitUntil: 'networkidle', timeout: 45000 });
    } catch (e) {
      console.log(`WARN ${site.name} ${vp.tag}: ${e.message}`);
      await page.waitForTimeout(3000);
    }
    // give lazy content / video poster a moment
    await page.waitForTimeout(2500);

    // above-the-fold shot
    await page.screenshot({ path: `${OUT}/${site.name}-${vp.tag}-fold.png` });
    // full page shot
    await page.screenshot({ path: `${OUT}/${site.name}-${vp.tag}-full.png`, fullPage: true });

    const title = await page.title();
    const h1 = await page.locator('h1').first().textContent().catch(() => '(none)');
    console.log(`OK ${site.name} ${vp.tag} | title="${title}" | h1="${(h1||'').trim().slice(0,80)}"`);
    await context.close();
  }
}

await browser.close();
console.log('DONE');
