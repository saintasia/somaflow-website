// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  // Feeds canonical URLs and Open Graph tags site-wide.
  site: 'https://soma-flow.app',
  // Icons (Lucide via astro-icon) are inlined as SVG at build time — no
  // client JS, no font/CDN requests, so /privacy stays accurate.
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
