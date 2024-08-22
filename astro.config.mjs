import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://test-jppolitikenshus.github.io/tech-blog',
  base: '/',
  integrations: [mdx(), sitemap()],
});
