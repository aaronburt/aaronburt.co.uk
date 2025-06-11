import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import sri from 'vite-plugin-sri';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sri(),
  ],
})