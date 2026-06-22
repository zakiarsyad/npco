// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static output for a fast, single-page concept site on Netlify.
export default defineConfig({
  site: 'https://npco-redesign.netlify.app',
  build: { inlineStylesheets: 'auto' },
  vite: { plugins: [tailwindcss()] },
});
