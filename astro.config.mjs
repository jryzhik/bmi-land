
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: true,
  },
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
});
