// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      // Display: headlines only. Set large, tight, and heavy.
      provider: fontProviders.google(),
      name: 'Bricolage Grotesque',
      cssVariable: '--astro-font-display',
      weights: [600, 800],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    {
      // Body: everything a person actually reads.
      provider: fontProviders.google(),
      name: 'Instrument Sans',
      cssVariable: '--astro-font-body',
      weights: [400, 500, 600],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    {
      // Bitmap: labels, dates, years. Never larger than 12px.
      provider: fontProviders.google(),
      name: 'Silkscreen',
      cssVariable: '--astro-font-bitmap',
      weights: [400, 700],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
