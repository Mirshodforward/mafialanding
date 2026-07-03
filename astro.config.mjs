import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Pure static marketing site — fast, fully crawlable, deploys to Vercel as-is.
// The game itself lives at https://game.mafiaonline.uz (linked, not bundled).
export default defineConfig({
  site: 'https://mafiaonline.uz',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'uz',
        locales: {
          uz: 'uz-UZ',
          ru: 'ru-RU',
          en: 'en-US',
        },
      },
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      serialize: (item) => {
        const strip = (u) =>
          u && u.length > 'https://mafiaonline.uz/'.length
            ? u.replace(/\/$/, '')
            : u === 'https://mafiaonline.uz/'
              ? 'https://mafiaonline.uz'
              : u;
        const out = { ...item, url: strip(item.url) };
        if (Array.isArray(item.links)) {
          out.links = item.links.map((l) => ({ ...l, url: strip(l.url) }));
        }
        return out;
      },
    }),
  ],
});
