import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'test-jppolitikenshus.github.io',
  base: '/tech-blog',
  integrations: [mdx(), sitemap()],
});
