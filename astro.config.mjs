// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap'; // 1. Importa el sitemap

// https://astro.build/config
export default defineConfig({
  // 2. AÑADE TU URL AQUÍ
  // Esto es vital para que las meta-tags de redes sociales y el robots.txt funcionen
  site: 'https://nexo-digital-web.pages.dev',

  vite: {
    plugins: [tailwindcss()]
  },

  // 3. AÑADE SITEMAP A LAS INTEGRACIONES
  integrations: [
    preact(),
    sitemap()
  ]
});