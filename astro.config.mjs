// @ts-check
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://docs.astro.build/zh-cn/reference/configuration-reference/
export default defineConfig({
  site: 'https://yue.zone',
  base: '/',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});