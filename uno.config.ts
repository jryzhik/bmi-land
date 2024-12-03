import { defineConfig, presetUno } from 'unocss';
import { presetAnimations } from 'unocss-preset-animations';
export default defineConfig({
  presets: [presetUno(), presetAnimations()],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    breakpoints: {
      xs: '375px',
      sm: '434px',
    },
    fontFamily: {
      sans: 'okomito',
    },
  },
});
